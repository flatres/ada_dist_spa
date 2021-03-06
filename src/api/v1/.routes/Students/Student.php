<?php

/**
 * Description

 * Usage:

 */
namespace Students;

class Student
{
    protected $container;

    public function __construct(\Slim\Container $container = null)
    {
       $this->sql= $container->ada ?? new \Dependency\Databases\Ada();
       $this->isams = $container->isams;

    }

    public function displayName($id)
    {
      $s = $this->sql->select(
        'stu_details',
        'id, firstname, lastname',
        'id=?',
        array($id));

      return $s[0]['lastname'] . ', ' . $s[0]['firstname'] ?? '';
    }

    public function details_GET($request, $response, $args)
    {
      $student = new \Entities\People\Student($this->sql);
      $student->byId($args['id']);
      $isamsStudent = new \Entities\People\iSamsStudent($this->isams);
      $isamsStudent->byAdaId($student->id);
      $isamsStudent->getContacts();
      $student->contacts = $isamsStudent->contacts;
      $student->mobile = $isamsStudent->mobile;
      return emit($response, $student);
    }
    
    
    
}
