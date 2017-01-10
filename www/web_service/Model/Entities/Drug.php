<?php

namespace Model\Entities;

/**
 * Class Drug
 * @package Model\Entities
 * Author : Pierre CHARLES
 */
class Drug {

    private $id;
    private $title;
    private $sub_name;
    private $bar_code;
    private $flash_code;
    private $notice;

    public function __construct($id, $title, $sub_name, $bar_code, $flash_code, $notice) {
        $this->setId($id);
        $this->setTitle($title);
        $this->setSubName($sub_name);
        $this->setBarCode($bar_code);
        $this->setFlashCode($flash_code);
        $this->setNotice($notice);
    }

    public function toJson(){
        return [
            'id' => $this->id,
            'title' => $this->title,
            'sub_name' => $this->sub_name,
            'bar_code' => $this->bar_code,
            'flash_code' => $this->flash_code,
            'notice' => $this->notice
        ];
    }

    public function getId() {
        return $this->id;
    }

    public function getTitle() {
        return $this->id;
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

    public function setId($id) {
         $this->id = $id;
    }

    public function setTitle($title) {
        $this->title = $title;
    }

    public function setSubName($sub_name) {
        $this->sub_name = $sub_name;
    }

    public function setBarCode($bar_code) {
        $this->bar_code = $bar_code;
    }

    public function setFlashCode($flash_code) {
        $this->flash_code = $flash_code;
    }

    public function setNotice($notice) {
        $this->notice = $notice;
    }

}