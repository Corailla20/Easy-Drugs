<?php

namespace Model\Entities;

/**
 * Class Drugs
 * @package Model\Entities
 * Author : Pierre CHARLES
 */
 class Drugs{

    private $drugs;

     /**
      * Drugs constructor.
      */
    public function __construct()
    {
        $this->drugs = array();
    }

     /**
      * @param $drug
      */
    public function addDrug($drug)
    {
        array_push($this->drugs, $drug);
    }

     /**
      * @return string
      */
    public function getDrugsToJson()
    {
        return json_encode($this->drugs);
    }
}
