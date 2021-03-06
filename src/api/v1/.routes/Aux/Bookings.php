<?php

/**
 * Description

 * Usage:

 */
namespace Aux;

class Bookings
{
    protected $container;

    public function __construct(\Slim\Container $container)
    {
       $this->ada = $container->ada;
       $this->adaModules = $container->adaModules;
       $this->isams = $container->isams;
    }

    // returns the coach corresponding to the unique ID so that the supervisor can register
    public function coachGet($request, $response, $args)
    {
      $uniqueId = $args['uniqueId'];
      $coach = $this->adaModules->select(
        'tbs_coaches_coaches',
        'id, routeId, capacity, code, supervisorId',
        'uniqueId = ?',
        [$uniqueId]
      );
      if (!isset($coach[0])) emit($response, []);

      $coach = $coach[0];
      $register = $this->adaModules->select(
        'tbs_coaches_bookings',
        'id as bookingId, studentId, isRegistered, stopId',
        'coachId = ? AND (statusId = 2 OR statusId = 3 OR statusId = 6)',
        [$coach['id']]
      );

      $coach['spacesLeft'] = $coach['capacity'] - count($register);
      foreach($register as &$student){
        $s = new \Entities\People\Student($this->ada, $student['studentId']);
        $student['details'] = $s;
        $student['stop'] = $this->getStop($student['stopId']);
      }

      usort($register, function($a, $b) {
        $ad = $a['details']->lastName;
        $bd = $b['details']->lastName;
        return strcmp($ad, $bd);
      });

      $coach['register'] = $register;
      return emit($response, $coach);
    }

    private function getStop($id)
    {
        return $this->adaModules->select('tbs_coaches_stops', 'name', 'id=?', [$id])[0]['name'] ?? '';
    }

    public function registerPut($request, $response)
    {
      $data = $request->getParsedBody();

      $this->adaModules->update(
        'tbs_coaches_bookings',
        'isRegistered=?',
        'id=?',
        [$data['isRegistered'], $data['bookingId']]
      );

      $crud = new \Sockets\CRUD("aux.bookings.coach." . $data['coachUniqueId']);
      return emit($response, $data);
    }

}
