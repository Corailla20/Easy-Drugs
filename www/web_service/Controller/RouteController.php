<?php

namespace Controller;

use Model\DrugModal;
use Model\Entities\Drug;

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
                case 'getDrug':
                    $this->getDrug();
                    break;
                case 'addDrug':
                    $this->addDrug();
                    break;
                case 'login':
                    $this->login();
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
        $dal = new DrugModal();
        echo $dal->getDrugs();
    }

    /*
     * Method to return drug  to JSON with Id
    */
    function getDrug() {
        if (!isset($_REQUEST['code'])) {
            die("Server error, no id drug is defined");
        } else {
            $code = $_REQUEST['code'];
        }
        $dal = new DrugModal();
        echo $dal->getDrug($code);
    }

    /*
    * Method to add drug
    */
    function addDrug() {
        /*
        if (!isset($_REQUEST['data'])) {
            die("Server error, no data drug is defined");
        } else {
            $data = $_REQUEST['data'];
        }
        //$drug = new Drug(, , , , , )
        $dal = new DrugModal();
        echo $dal->addDrug($drug);
        */
    }

    /*
    * Method to login
    */
    function login() {

    }


}