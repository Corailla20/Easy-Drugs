<?php

namespace Controller;

use Model\DrugModal;
use Exception;

/**
 * Class RouteController
 * @package Controller
 * Author : Pierre CHARLES
 */
class RouteController {

    /**
     * RouteController constructor.
     * Check action request and redirect into correct queries
     */
    function __construct() {

        session_start(); // Session start

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
                case 'getDrugWithCode':
                    $this->getDrugWithCode();
                    break;
                case 'getDrugId':
                    $this->getDrugId();
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

    /**
     * Method to return complete drug list to JSON
     */
    function getDrugs()
    {
        $dal = new DrugModal();
        echo $dal->getDrugs();
    }

    /**
     * Method to return drug to JSON with Id
     */
    function getDrugId() {
        if (!isset($_REQUEST['code'])) {
            die("Server error, no id drug is defined");
        } else {
            $code = $_REQUEST['code'];
        }
        $dal = new DrugModal();
        echo $dal->getDrugId($code);
    }

    /**
     * Method to return drug to JSON with Id
     */
    function getDrugWithId() {
        if (!isset($_REQUEST['id'])) {
            die("Server error, no id drug is defined");
        } else {
            $id = $_REQUEST['id'];
        }
        $dal = new DrugModal();
        echo $dal->getDrugWithId($id);
    }


    /**
     * Method to return drug to JSON with code
     */
    function getDrugWithCode() {
        if (!isset($_REQUEST['code'])) {
            die("Server error, no code drug is defined");
        } else {
            $code = $_REQUEST['code'];
        }
        $dal = new DrugModal();
        echo $dal->getDrugWithCode($code);
    }


    /**
     * Method to add drug
     */
    function addDrug() {
        /* TODO : Not implemented yet */
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

    /**
     * Method to login
     */
    function login() {
        /* TODO : Not implemented yet */
    }


}