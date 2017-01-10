<?php

namespace Model;

use Model\Entities\Drug;
use Model\Entities\Drugs;

use PDO;

class DrugModal
{

    /**
     * Method to return complete drug list to JSON
     * @return string
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

    /**
     * Method to return drug id with a bar code or a flash_code.
     * @param $code
     * @return string (drug id or -1 if not exist)
     */
     function getDrugId($code){
         $request = "SELECT * FROM DRUG WHERE bar_code = ? OR flash_code = ?;";
         $param = array('1' => array($code, PDO::PARAM_STR), '2' => array($code, PDO::PARAM_STR));
         DBConnexion::getInstance()->prepareAndExecuterQuerySelect($request, $param);
         $response = DBConnexion::getInstance()->getResult();

         if(count($response)>0){
             $id = $response[0]['id'];
         } else {
             $id =  -1;
         }

         DBConnexion::getInstance()->destroyQueryResults();
         return $id;
     }


    /**
     * Method to return drug  to JSON with id
     * @param $id
     * @return string
     */
    function getDrugWithId($id)
    {
        $request = "SELECT * FROM DRUG WHERE id = ?;";
        $param = array('1' => array(intval($id), PDO::PARAM_STR));
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

    /**
     * Method for add a drug into database
     * @param $drug
     * @return string
     */
    function addDrug(Drug $drug)
    {
        $request = "INSERT INTO DRUG(id,title,sub_name,bar_code,flash_code) VALUES(?,?,?,?,?);";

        $param = array(
            '1' => array( intval($drug->getId()), PDO::PARAM_INT),
            '2' => array( $drug->getTitle(), PDO::PARAM_STR),
            '3' => array( $drug->getSubName(), PDO::PARAM_STR),
            '4' => array( $drug->getBarCode(), PDO::PARAM_STR),
            '5' => array( $drug->getFlashCode(), PDO::PARAM_STR)
        );

        DBConnexion::getInstance()->prepareAndExecuterQuerySelect($request, $param);
        $response = DBConnexion::getInstance()->getResult();

        var_dump($response);

        return json_encode($response);
    }

    /**
     * Method for get free drug id
     * @return string
     */
    function getFreeDrugId()
    {
        $request = "SELECT id FROM DRUG WHERE id = (SELECT MAX(id) FROM DRUG ORDER BY id ASC)";

        DBConnexion::getInstance()->prepareAndExecuterQuerySelect($request, null);
        $response = DBConnexion::getInstance()->getResult();

        return intval($response[0][0]+1);
    }


}