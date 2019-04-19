<?php
// DIC configuration

$container = $app->getContainer();

// view renderer
// $container['renderer'] = function ($c) {
//     $settings = $c->get('settings')['renderer'];
//     return new Slim\Views\PhpRenderer($settings['template_path']);
// };

// monolog
$container['logger'] = function($c)
{
    $settings = $c->get('settings')['logger'];
    $logger = new Monolog\Logger($settings['name']);
    $logger->pushProcessor(new Monolog\Processor\UidProcessor());
    $logger->pushHandler(new Monolog\Handler\StreamHandler($settings['path'], $settings['level']));
    return $logger;
};

// monolog
$container['mysql'] = function($c)
{
    $mysql = new Dependency\Databases\Ada();
    return $mysql;
};

$container['ada'] = function($c)
{
    $ada = new Dependency\Databases\Ada();
    return $ada;
};

$container['adaModules'] = function($c)
{
    $ada = new Dependency\Databases\AdaModules();
    return $ada;
};


$container['isams'] = function($c)
{
    $mssql = new Dependency\Databases\ISams();
    return $mssql;
};

$container['isamsTest'] = function($c)
{
    $mssql = new Dependency\Databases\ISamsTest();
    return $mssql;
};

$container['mcCustom'] = function($c)
{
    $mssql = new Dependency\Databases\MCCustom();
    return $mssql;
};

$container['mcCustomTest'] = function($c)
{
    $mssql = new Dependency\Databases\MCCustomTest();
    return $mssql;
};

$container['ad'] = function($c)
{
    $ad = new Dependency\ActiveDirectory();
    return $ad;
};

$container['exgarde'] = function($c)
{
    $exgarde = new Dependency\Exgarde($c['ada']);
    return $exgarde;
};

//allows sql object to be passed to middleware via the constructor
$container['Authenticate'] = function($c) {
    return new Middleware\Authenticate($c['mysql']);
};