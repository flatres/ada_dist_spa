<?php

namespace Entities\Academic;

class AdaClass
{
  public $id;
  public $misId;
  public $code, $plainCode; //without eg (FM) for futher maths
  public $year;
  public $isForm;
  public $misFormId;
  public $academicLevel;
  public $teachers=[];
  public $students=[];
  public $subjectId;
  public $exams = [];
  private $sql;

  public function __construct(\Dependency\Databases\Ada $ada = null, $id = null)
  {
     $this->sql= $ada ?? new \Dependency\Databases\Ada();
     $this->adaData= new \Dependency\Databases\AdaData();
     if ($id) $this->byId($id);
     return $this;
  }

  public function byId($id) {
    $this->id = (int)$id;
    $class = $this->sql->select('sch_classes', 'misId, subjectId, code, year, isForm, misFormId, academicLevel', 'id=?', [$id]);
    if (isset($class[0])){
      $class = $class[0];
      $this->misId = $class['misId'];
      $this->code = str_replace(' (FM)', ' ', $class['code']);
      // $this->code = $class['code'];
      $this->subjectId = $class['subjectId'];
      $this->year = $class['year'];
      $this->isForm = $class['isForm'] == 1 ? true : false;
      $this->misFormId = $class['misFormId'];
      $this->academicLevel = $class['academicLevel'];
      $this->getExams();
      $this->getStudents();
      $this->getTeachers();
    }
    return $this;
  }

  public function getExams () {
    $exams = $this->sql->select('sch_class_exams', 'examId', 'classId=?', [$this->id]);
    $this->exams = [];
    foreach ($exams as $e) {
      $key = 'e_' . $e['examId'];
      if (!isset($this->exams[$key])) $this->exams[$key] = new \Entities\Academic\SubjectExam($this->sql, $e['examId']);
    }
    $this->exams = array_values($this->exams);
    return $this->exams;
  }

  public function getTeachers () {
    $teachers = $this->sql->select('sch_class_teachers', 'userId',  'classId = ?', [$this->id]);
    foreach ($teachers as $teacher) {
      $this->teachers[] = new \Entities\People\User($this->sql, $teacher['userId']);
    }
    return $this->teachers;
  }

  public function getStudents () {
    $this->students = [];
    $students = $this->sql->select('sch_class_students', 'studentId',  'classId = ?', [$this->id]);
    foreach ($students as $student) {
      $s = new \Entities\People\Student($this->sql, $student['studentId']);
      $s->classId = $this->id;
      $s->classCode = $this->code;

      $this->students[] = $s;
    }
    $this->students = sortObjects($this->students, 'lastName', 'ASC');
    return $this->students;
  }

  public function getStudentMLO($studentId){}

  public function getStudentsMLO() {
    $students = count($this->students) > 0 ? $this->students : $this->getStudents();
    $maxMLOCount = 0;
    foreach($students as $s) {
      $s->examData['mlo'] = [];
      $mloBank = [];  //prevents double counting in some strange edge cases eg Further Maths
      $mloCount = 0;
      foreach ($this->exams as $e){
        $exam = new \Entities\Academic\SubjectExam($this->sql, $e->id);
        foreach($this->teachers as $t){
          $examCode = $e->aliasCode ? $e->aliasCode : $e->examCode;
          if (!isset($mloBank[$e->id . '_' . $t->id])) {
            $mlo = (new \Entities\Exams\MLO($this->adaData))->getSingleMLO($s->id, $e->id, $t->id);
            $s->examData['mlo'][] = [
              'teacher' => $t,
              'examId'  => $e->id,
              'mlo'     => $mlo
            ];
            $s->{'mlo' . $mloCount} = $mlo['mlo_current'];
            $mloCount++;
            $mloBank[$e->id . '_' . $t->id] = true;
          }
        }
      }
      if ($mloCount > $maxMLOCount) $maxMLOCount = $mloCount;
    }
    $this->maxMLOCount = $maxMLOCount;
    return $this;
  }




}
