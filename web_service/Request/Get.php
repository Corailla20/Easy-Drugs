<?php

require_once(__DIR__ . '../Config/load.php');

    /*
     * Classe permettant le traitement de requete concecernant les objets type drug
     */

    $request = "SELECT * FROM drugs";
    DBConnexion::getInstance()->prepareAndExecuterQuerySelect($request, null);
    $response = DBConnexion::getInstance()->getResult();
    $drugs = new Drugs();
    foreach ($response as $resp)
    {
        $drugs->addDrug(new Drug($resp['id_drug'], $resp['name'], $resp['sub_name'], $resp['bar_code'], $resp['flash_code'], $resp['notice']));
    }

    DBConnexion::getInstance()->destroyQueryResults();
    echo $drugs->getDrugsToJson();

