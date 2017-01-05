<?php

require_once(__DIR__ . '../Config/load.php');

/*
 * Classe permettant le traitement de requete concecernant les objets type drug
 */


    $request = "SELECT * FROM drugs";
    DBConnexion::getInstance()->prepareAndExecuterQuerySelect($request, null);
    $response = DBConnexion::getInstance()->getResult();
    $drugs = new Drugs();
    foreach ($response as $n)
    {
        $drugs->addDrug(new Drug($n['titre'], $n['url'], $n['date_publication'], $n['contenu'], $n['categorie'], $n['image']));
    }
    DBConnexion::getInstance()->destroyQueryResults();
    echo $drugs->getDrugsToJson();

