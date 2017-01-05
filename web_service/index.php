<?php

//chargement config
require_once(__DIR__ . '/Config/config.php');

require_once(__DIR__ . '/Config/config.php');
require_once(__DIR__ . '/Model/Entities/Drug.php');
require_once(__DIR__ . '/Model/Entities/Drugs.php');
require_once(__DIR__ . '/Model/Entities/User.php');
require_once(__DIR__ . '/Model/DBConnexion.php');
require_once(__DIR__ . '/Request/Get.php');

use Model\DBConnexion;
use Model\Entities\Drug;
use Model\Entities\Drugs;

$request = "SELECT * FROM DRUG";
DBConnexion::getInstance()->prepareAndExecuterQuerySelect($request, null);
$response = DBConnexion::getInstance()->getResult();
$drugs = new Drugs();
foreach ($response as $resp)
{
    $drug = new Drug($resp['id_drug'], $resp['name'], $resp['sub_name'], $resp['bar_code'], $resp['flash_code'], $resp['notice']);
    $drugs->addDrug($drug->toJson());
}

DBConnexion::getInstance()->destroyQueryResults();

echo $drugs->getDrugsToJson();
