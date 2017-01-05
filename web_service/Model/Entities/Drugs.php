<?php

 class Drugs{

    private $drugs;

    public function __construct()
    {
        $this->drugs=array();
    }

    public function addDrug($drug)
    {
        array_push($drugs, $drug);
    }

    public function getDrugsToJson()
    {
        return json_encode($this->drugs);
    }
}
