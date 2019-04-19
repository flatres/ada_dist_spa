<?php

/**
 * Description

 * Usage:

 */
namespace Admin\Sync;

class Students 
{
    protected $container;
    private $disabledCount = 0;
    private $updatedCount = 0;
    private $newCount = 0;

    public function __construct(\Slim\Container $container)
    {
       $this->isams= $container->isams;
       $this->sql = $container->mysql;

    }

    /**
     * Generate a password salt
     *
     * @param int $length
     *    The number of characters that the salt should be
     *
     * @return string
     *    Returns a salt that can be used to salt a password hash
     *
     * @access private
     */
    public function misStudents_GET($request, $response, $args)
    {
      $data = $this->getStudentComparison();
      return emit($response, $data);
    }

    public function studentSync_POST($request, $response, $args)
    {
      $data = array('id'=>2);
      $auth = $request->getAttribute('auth');
      $this->progress = new \Sockets\Progress($auth, 'Admin/Sync/Students');

      $misStudents = $this->isams->select(  'TblPupilManagementPupils',
                                            'txtSchoolID as id, txtForename, txtPreName, txtEmailAddress, txtSurname, txtFullName, txtInitials, txtGender, txtDOB, intEnrolmentNCYear, txtBoardingHouse, txtLeavingBoardingHouse, intEnrolmentSchoolYear',
                                            'intSystemStatus = 1', array());

      //get ada students to get comparison for syncing
      $adaStudents = $this->sql->select('stu_details', 'id, mis_id', 'usr_type=? ORDER BY lastname ASC', array(1));

      $allStudents = array();
      foreach($adaStudents as $student)
      {
        $misId = $student['mis_id'];
        $adaId = $student['id'];
        $allStudents["s_$misId"] = array(
          'adaId'   => $adaId,
          'misId'   => $misId,
          'isNew'   => false,
          'disable' => true
        );
      }
      //students not appearing in the MIS will keep their disable flag (i.e not longer active)
      foreach($misStudents as $student)
      {
        $misId = $student['id'];
        if (isset($allStudents["s_$misId"])) //already exists, just needs updating
        {
          $allStudents["s_$misId"]['disable'] = false;
          $allStudents["s_$misId"]['misData'] = $student;
        } else {
          $allStudents["s_$misId"] = array(
            'adaId'   => null,
            'misId'   => $misId,
            'isNew'   => true,
            'disable' => false,
            'misData' => $student
          );
        }
      }
      $count = count($allStudents);
      $i = 1;
      //update
      foreach($allStudents as &$student){
        $student['error'] = $student['isNew'] == true ? $this->newStudent($student) : $this->updateStudent($student);
        $this->progress->publish($i/$count);
        $i++;
      }
      $data = array(
        'count'   =>$count,
        'new'     =>$this->newCount,
        'updated' => $this->updatedCount,
        'disabled'=> $this->disabledCount
      );
      return emit($response, $data);
    }

    private function newStudent($student)
    {
      $d = $student['misData'];
      $id = $this->sql->insert(
        'stu_details',
        'lastname, firstname, prename, initials, boardingHouse, email, mis_id, gender, dob, enrolmentNCYear, EnrolmentSchoolYear',
        array(
          $d['txtSurname'],
          $d['txtForename'],
          $d['txtPreName'],
          $d['txtInitials'],
          $d['txtBoardingHouse'],
          $d['txtEmailAddress'],
          $d['id'],
          $d['txtGender'],
          $d['txtDOB'],
          $d['intEnrolmentNCYear'],
          $d['intEnrolmentSchoolYear']
        )
      );
      $tag = new \Entity\Tags\TagWriter($this->sql);
      $tag->newByNames('House', $d['txtBoardingHouse'], $id);
      $this->newCount++;
    }

    private function updateStudent($student)
    {
      if ($student['disable'] == true)
      {
        $this->sql->update('usr_details', 'disabled=1', 'id=?', array($student['adaId']));
        $this->deletedCount++;
      } else {
        $d = $student['misData'];
        $this->sql->update(
          'stu_details',
          'lastname=?, firstname=?, prename=?, initials=?, boardingHouse=?, email=?, mis_id=?, gender=?, dob=?, enrolmentNCYear=?, enrolmentSchoolYear=?',
          'id=?',
          array(
            $d['txtSurname'],
            $d['txtForename'],
            $d['txtPreName'],
            $d['txtInitials'],
            $d['txtBoardingHouse'],
            $d['txtEmailAddress'],
            $d['id'],
            $d['txtGender'],
            $d['txtDOB'],
            $d['intEnrolmentNCYear'],
            $d['intEnrolmentSchoolYear'],
            $student['adaId']
          )
        );
        $tag = new \Entity\Tags\TagWriter($this->sql);
        $tag->newByNames('House', $d['txtBoardingHouse'], $student['adaId']);
        $this->updatedCount++;
      }
    }

    private function getStudentComparison()
    {
      $data = array();
      $misStudents = $this->isams->select(  'TblPupilManagementPupils',
                                          'txtSchoolID as id, txtForename, txtPreName, txtEmailAddress, txtSurname, txtFullName, txtInitials, txtGender, txtDOB, intEnrolmentNCYear, txtBoardingHouse, txtLeavingBoardingHouse, intEnrolmentSchoolYear',
                                          'intSystemStatus = 1', array());

      //get ada students to get comparison for syncing
      $adaStudents = $this->sql->select('stu_details', 'id, firstname, lastname, *email, mis_id', 'usr_type=? ORDER BY lastname ASC', array(1));
      $data['misStudents'] = $misStudents;
      $stats = array();
      $stats['misStudentCount'] = count($misStudents);
      $stats['adaStudentCount']  = count($adaStudents);
      $data['stats'] = $stats;
      return $data;
    }


}