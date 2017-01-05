<?php

class Drug {

    private $id_drug;
    private $name;
    private $sub_name;
    private $bar_code;
    private $flash_code;
    private $notice;

    public function __construct($id_drug, $name, $sub_name, $bar_code, $flash_code, $notice) {
        $this->setIdDrug($id_drug);
        $this->setName($name);
        $this->setSubName($sub_name);
        $this->setBarCode($bar_code);
        $this->setFlashCode($flash_code);
        $this->setNotice($notice);
    }

    public function getIdDrug() {
        return $this->id_drug;
    }
    
    public function getName(){
        return $this->name;
    }

    public function getSubName() {
        return $this->sub_name;
    }

    public function getBarCode() {
        return $this->bar_code;
    }

    public function getFlashCode() {
        return $this->flash_code;
    }

    public function getNotice() {
        return $this->notice;
    }

    public function setIdDrug($id) {
        if (empty($id)) {
            header('HTTP/1.1 500 Internal Server Explosion');
            header('Content-Type: application/json; charset=UTF-8');
            die(json_encode(array('message' => 'Drug must have an ID', 'code' => 500)));
        } else {
            $this->id_drug = $id;
        }
    }

    public function setName($drugName) {
        if (empty($drugName)) {
            $this->name = "No name";
        } else {
            $this->name = $drugName;
        }
    }
    
    public function setSubName($drugSubName) {
        if (empty($drugSubName)) {
            $this->sub_name = "No subname";
        } else {
            $this->sub_name = $drugSubName;
        }
    }

    public function setBarCode($bar) {
        if (empty($bar)) {
            $this->bar_code = "No barcode";
        } else {
            $this->bar_code = $bar;
        }
    }

    public function setFlashCode($flash) {
        if (empty($flash)) {
            $this->flash_code = "No flash-code";
        } else {
            $this->flash_code = $flash;
        }
    }

    public function setNotice($drugNotice) {
        if (empty($drugNotice)) {
            $this->notice = "No drug notice";
        } else {
            $this->notice = $drugNotice;
        }
    }

}

?>