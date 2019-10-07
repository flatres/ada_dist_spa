<?php

/**
 * Description

 * Usage:

 */
namespace Entities\People;

class Student
{

    private $sql;

    public $id, $firstName, $lastName, $email, $boardingHouse, $gender, $displayName;
    public $misFamilyId;
    public $boardingHouseSafe; //has spaces replaced with _ for use in array keys
    public $preName, $fullName, $fullPreName, $name;
    public $misId;

    public function __construct(\Dependency\Databases\Ada $ada = null, $id = null)
    {
       // $this->sql= $ada ?? new \Dependency\Databases\Ada();
       $this->sql= $ada ?? new \Dependency\Databases\Ada();
       if ($id) $this->byId($id);

    }

    public function displayName(int $id = null)
    {
      $id = $id ? $id : $this->id;
      $s = $this->sql->select(
        'stu_details',
        'id, firstname, lastname',
        'id=?',
        array($id));

      $name = $s[0]['lastname'] . ', ' . $s[0]['firstname'] ?? '';
      $this->displayName = $name;
      return $name;
    }
    
    public function byMISId($id)
    {
      $d = $this->sql->select('stu_details', 'id', 'mis_id=?', [$id]);
      if($d) $this->byId($d[0]['id']);
    }

    public function byId(int $id)
    {
      $student = $this->sql->select(
        'stu_details',
        'id, firstname, lastname, prename, email, boardingHouse, gender, mis_id, mis_family_id',
        'id=?',
        [$id]);

      if (isset($student[0])) {
        $student = $student[0];
        $this->id = $id;
        $this->preName = $student['prename'];
        $this->firstName = $student['firstname'];
        $this->lastName = $student['lastname'];
        $this->fullName = $student['firstname'] . ' ' . $student['lastname'];
        $this->name = $this->fullName;
        $this->fullPreName = $student['prename'] . ' ' . $student['lastname'];
        $this->misId = $student['mis_id'];
        $this->misFamilyId = $student['mis_family_id'];
        
        $this->email = $student['email'];
        $this->boardingHouse = $student['boardingHouse'];
        $this->boardingHouseSafe = str_replace(" ", '_', $student['boardingHouse']);
        $this->gender = $student['gender'];
      } else {

      }

      $this->displayName();
      return $this;
    }
    
    public function sanitizeNames(){
      
    }
}
