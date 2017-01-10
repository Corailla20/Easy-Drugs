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

    /**
     * Drug constructor.
     * @param $id
     * @param $title
     * @param $sub_name
     * @param $bar_code
     * @param $flash_code
     */
    public function __construct($id, $title, $sub_name, $bar_code, $flash_code) {
        $this->setId($id);
        $this->setTitle($title);
        $this->setSubName($sub_name);
        $this->setBarCode($bar_code);
        $this->setFlashCode($flash_code);
    }

    /**
     * Convert object to JSON
     * @return array
     */
    public function toJson(){
        return [
            'id' => $this->id,
            'title' => $this->title,
            'sub_name' => $this->sub_name,
            'bar_code' => $this->bar_code,
            'flash_code' => $this->flash_code
        ];
    }

    /**
     * @return mixed
     */
    public function getId() {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getTitle() {
        return $this->title;
    }

    /**
     * @return mixed
     */
    public function getSubName() {
        return $this->sub_name;
    }

    /**
     * @return mixed
     */
    public function getBarCode() {
        return $this->bar_code;
    }

    /**
     * @return mixed
     */
    public function getFlashCode() {
        return $this->flash_code;
    }


    /**
     * @param $id
     */
    public function setId($id) {
         $this->id = $id;
    }

    /**
     * @param $title
     */
    public function setTitle($title) {
        $this->title = $title;
    }

    /**
     * @param $sub_name
     */
    public function setSubName($sub_name) {
        $this->sub_name = $sub_name;
    }

    /**
     * @param $bar_code
     */
    public function setBarCode($bar_code) {
        $this->bar_code = $bar_code;
    }

    /**
     * @param $flash_code
     */
    public function setFlashCode($flash_code) {
        $this->flash_code = $flash_code;
    }

}