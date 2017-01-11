<?php

namespace Controller;

use Model\DrugModal;
use Model\Entities\Drug;
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
    public function __construct() {

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
                case 'getDrugId':
                    $this->getDrugId();
                    break;
                case 'addDrug':
                    $this->addDrug();
                    break;
                case 'getDrugsWithTesseract':
                    $this->getDrugsWithTesseract();
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
    public function getDrugs()
    {
        $dal = new DrugModal();
        echo $dal->getDrugs();
    }

    /**
     * Method to return drug to JSON with Id
     */
    public function getDrugId()
    {
        $code = $this->verifyDataRequest('code');
        $dal = new DrugModal();
        echo $dal->getDrugId($code);
    }

    /**
     * Method to return drug to JSON with Id
     */
    public function getDrugWithId()
    {
        $id = $this->verifyDataRequest('id');
        $dal = new DrugModal();
        echo $dal->getDrugWithId($id);
    }

    /**
     * Method to add drug
     */
    public function addDrug()
    {
        $data = array();
        $data['title'] = $this->verifyDataRequest('title');
        $data['subname'] = $this->verifyDataRequest('subname');
        $data['bar_code'] = $this->verifyDataRequest('bar_code');
        $data['flash_code'] = $this->verifyDataRequest('flash_code');

        $dal = new DrugModal();

        $id=$dal->getFreeDrugId();

        $drug = new Drug($id,$data['title'],$data['subname'],$data['bar_code'],$data['flash_code']);

        $dal->addDrug($drug);
        echo $drug->getId();

    }

    /**
     * Method to get Drugs With Tesseract
     */
    public function getDrugsWithTesseract()
    {

        $tesseract_result = $this->verifyDataRequest('tesseract_result');
        $dal = new DrugModal();
        echo $dal->getDrugsWithTesseract($tesseract_result);
    }

    /**
     * Method for verify data request
     * @param $data
     * @return mixed
     */
    public function verifyDataRequest($data)
    {
        if(!isset($_REQUEST[$data])) {
            die("Server error, no data drug is defined");
        } else {
            $result = $_REQUEST[$data];
        }
        return $result;
    }

}