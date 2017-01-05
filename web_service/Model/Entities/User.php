<?php

class user {

    private $id_user;
    private $login;
    private $password;

    public function __construct($id_user, $login, $password) {
        $this->setUserID($id_user);
        $this->setLogin($login);
        $this->setPassword($password);
    }

    public function getUserID() {
        return $this->id_user;
    }
    
    public function getLogin(){
        return $this->login;
    }

    public function getPassword() {
        return $this->password;
    }

    public function setUserID($id) {
        if (empty($id)) {
            header('HTTP/1.1 500 Internal Server Explosion');
            header('Content-Type: application/json; charset=UTF-8');
            die(json_encode(array('message' => 'User must have an ID', 'code' => 500)));
        } else {
            $this->id_user = $id;
        }
    }

    public function setLogin($log) {
        if (empty($log)) {
            $this->login = "No login";
        } else {
            $this->login = $log;
        }
    }
    
    public function setPassword($pwd) {
        if (empty($pwd)) {
            $this->password = "No password";
        } else {
            $this->password = $pwd;
        }
    }
}