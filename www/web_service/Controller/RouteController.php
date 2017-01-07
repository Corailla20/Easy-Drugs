<?php

namespace Controller;

use Model\DBConnexion;
use Model\Entities\Drug;
use Model\Entities\Drugs;

class RouteController {

    /*
     * Check action request and redirect into correct queries
     */
    function __construct() {

        // Session start
        session_start();

        // Check if action request exist
        if (!isset($_REQUEST['action'])) {
            die("Server error, no action request is defined");
        } else {
            $action = $_REQUEST['action'];
        }

        Try {
            switch ($action) {
                case 'getDrugs':
                    $this->getDrugs();
                    break;
                case 'getDrugWithId':
                    $this->getDrugWithId();
                    break;
                case 'getDrugWithName':
                    $this->getDrugWithName();
                    break;
                case 'addDrug':
                    $this->addDrug();
                    break;
                default:
                    break;
            }

        } catch (Exception $ex) {
            echo $ex->getMessage();
        }
    }


    /*
     * Method to return complete drug list to JSON
     */
    function getDrugs()
    {
        $request = "SELECT * FROM DRUG";
        DBConnexion::getInstance()->prepareAndExecuterQuerySelect($request, null);
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

        echo $drugs->getDrugsToJson();
    }

    function getDrugWithId() {

    }

    function getDrugWithName() {

    }

    function addDrug() {

    }

}