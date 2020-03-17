<?php
namespace Admin;

use Slim\Http\Request;
use Slim\Http\Response;

$app->group('/admin', function(){

// TAGS
    $this->get('/tags', '\Admin\Tags\Tags:globalTags_Get');
    $this->get('/tags/tree/students/{id}', '\Admin\Tags\Tags:studentsTree_Get');
    $this->post('/tags/categories', '\Admin\Tags\Tags:category_Post');
    $this->post('/tags/tag', '\Admin\Tags\Tags:tag_Post');
    // $this->get('/tags', '\Admin\ActiveDirectory\Explorer:allUsers_GET');
//    $this->get('/tags/categories', '\Admin\Tags\Tags:globalCategories');

// ACTIVE DIRECTORY --------
    $this->get('/activeDirectory/allStaff', '\Admin\ActiveDirectory\Explorer:allUsers_GET');
    $this->get('/activeDirectory/me', '\Admin\ActiveDirectory\Explorer:me_GET');
    $this->get('/activeDirectory/isams/{initials}', '\Admin\ActiveDirectory\Explorer:iSamsInfo_GET');

// SYNC --------
    $this->get('/sync/misstudents', '\Admin\Sync\Students:misStudents_GET');
    $this->post('/sync/students', '\Admin\Sync\Students:StudentSync_POST');

    $this->get('/sync/misstaff', '\Admin\Sync\Staff:misStaff_GET');
    $this->post('/sync/staff', '\Admin\Sync\Staff:StaffSync_POST');

    $this->get('/sync/missubjects', '\Admin\Sync\Subjects:misSubjects_GET');
    $this->post('/sync/subjects', '\Admin\Sync\Subjects:subjectsSync_POST');

// ACCESS --------
    $this->get('/access/roles', '\Admin\Access\Roles:roles_GET');
    $this->delete('/access/roles/{id}', '\Admin\Access\Roles:role_DELETE');
    $this->delete('/access/roles/user/{roleId}/{userId}', '\Admin\Access\Roles:roleUser_DELETE');
    $this->post('/access/roles', '\Admin\Access\Roles:role_POST');
    $this->put('/access/roles', '\Admin\Access\Roles:role_PUT');
    $this->post('/access/roles/user', '\Admin\Access\Roles:roleUser_POST');
    $this->get('/access/roles/pages/{id}', '\Admin\Access\Roles:rolePages_GET');
    $this->put('/access/roles/pages', '\Admin\Access\Roles:rolePages_PUT');
    $this->get('/access/roles/users/{id}', '\Admin\Access\Roles:roleUsers_GET');

    $this->get('/access/roles/users/new/{roleID}', '\Admin\Access\Roles:roleNewUsers_GET');
    $this->post('/access/roles/users/{roleID}', '\Admin\Access\Roles:roleNewUsers_POST');
    $this->delete('/access/roles/users/{roleID}/{userID}', '\Admin\Access\Roles:roleUsers_DELETE');

    $this->get('/access/roles/allusers', '\Admin\Access\Roles:allUsers_GET');

    $this->get('/access/module/tree', '\Admin\Access\Roles:moduleTree_GET');
    $this->delete('/access/structure/module/{id}', '\Admin\Access\Structure:module_DELETE');
    $this->post('/access/structure/module/icon', '\Admin\Access\Structure:moduleIcon_POST');
    $this->post('/access/structure/module/name', '\Admin\Access\Structure:moduleName_POST');
    $this->post('/access/structure/module/page', '\Admin\Access\Structure:page_POST');
    $this->post('/access/structure/module', '\Admin\Access\Structure:module_POST');
    $this->put('/access/structure/module/page', '\Admin\Access\Structure:page_PUT');
    $this->delete('/access/structure/module/page/{id}', '\Admin\Access\Structure:page_DELETE');
    $this->post('/access/structure/module/color', '\Admin\Access\Structure:moduleColor_POST');

    $this->get('/school/terms/{year}', '\Admin\School\Calendar:termsGet');
    $this->put('/school/terms', '\Admin\School\Calendar:termsPut');
    $this->get('/school/period/{date}/{time}', '\Admin\School\Calendar:periodGet');

    $this->get('/logs/access/pages', '\Admin\Logs\Access:accessPages_GET');
    // $this->get('/logs/resources', '\Admin\Logs\Log:resources_GET');
    // $this->get('/logs/connections', '\Admin\Logs\Log:connections_GET');

})->add("Authenticate");

$app->group('/admin', function(){
  $this->get('/logs', '\Admin\Logs\Log:log_GET');
  $this->get('/logs/resources', '\Admin\Logs\Log:resources_GET');
  $this->get('/logs/connections', '\Admin\Logs\Log:connections_GET');
})
// $app->get('/test', '\Auth\TestClass:testGet')->add(new \Authenticate);
?>
