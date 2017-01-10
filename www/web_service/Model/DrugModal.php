<?php

namespace Model;

use Model\Entities\Drug;
use Model\Entities\Drugs;

use PDO;

class DrugModal
{
    /*
    * Method to return complete drug list to JSON
    */
    function getDrugs()
    {
        $request = "SELECT * FROM DRUG";
        DBConnexion::getInstance()->prepareAndExecuterQuerySelect($request, null);
        $response = DBConnexion::getInstance()->getResult();
        $drugs = new Drugs();
        foreach ($response as $resp) {
            $drug = new Drug(
                $resp['id'],
                $resp['title'],
                $resp['sub_name'],
                $resp['bar_code'],
                $resp['flash_code'],
                $resp['notice']
            );
            $drugs->addDrug($drug->toJson());
        }

        DBConnexion::getInstance()->destroyQueryResults();

        return $drugs->getDrugsToJson();
    }


    /*
    * Method to return drug  to JSON with code
    */
    function getDrug($code)
    {
        $request = "SELECT * FROM DRUG WHERE bar_code = ? OR flash_code = ?;";
        $param = array('1' => array($code, PDO::PARAM_STR), '2' => array($code, PDO::PARAM_STR));
        DBConnexion::getInstance()->prepareAndExecuterQuerySelect($request, $param);
        $response = DBConnexion::getInstance()->getResult();
        $drugs = new Drugs();

        foreach ($response as $resp)
        {
            $drug = new Drug(
                $resp['id'],
                $resp['title'],
                $resp['sub_name'],
                $resp['bar_code'],
                $resp['flash_code'],
                $resp['notice']
            );
            $drugs->addDrug($drug->toJson());
        }

        DBConnexion::getInstance()->destroyQueryResults();

        return $drugs->getDrugsToJson();
    }

    /*
    * Method to add drug
    */
    function addDrug($drug)
    {
        $request = "SELECT * FROM DRUG WHERE bar_code = ? OR flash_code = ?;";
        $param = array('1' => array($code, PDO::PARAM_STR), '2' => array($code, PDO::PARAM_STR));
        DBConnexion::getInstance()->prepareAndExecuterQuerySelect($request, $param);
        $response = DBConnexion::getInstance()->getResult();
        $drugs = new Drugs();

        foreach ($response as $resp)
        {
            $drug = new Drug(
                $resp['id'],
                $resp['title'],
                $resp['sub_name'],
                $resp['bar_code'],
                $resp['flash_code'],
                $resp['notice']
            );
            $drugs->addDrug($drug->toJson());
        }

        DBConnexion::getInstance()->destroyQueryResults();

        return $drugs->getDrugsToJson();
    }


}