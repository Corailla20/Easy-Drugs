<?php

namespace Model\Entities;

/**
 * Class Drugs
 * @package Model\Entities
 * Author : Pierre CHARLES
 */
 class Drugs{

    private $drugs;

    public function __construct()
    {
        $this->drugs = array();
    }

    public function addDrug($drug)
    {
        array_push($this->drugs, $drug);
    }

    public function getDrugsToJson()
    {
        return json_encode($this->drugs);
    }
}
