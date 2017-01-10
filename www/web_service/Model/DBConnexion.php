<?php

namespace Model;

use PDO;

/**
 * Class DBConnexion
 * @package Model
 * Author : Pierre CHARLES
 * Database connexion class. It's a singleton to make an unique connexion
     * Globals variables -> file : Config/config.php
     * $host        = database host
     * $base        = database name
     * $login       = database username
     * $mdp         = database password
 */
class DBConnexion {

    /**
     * useful variables
     * @var null|PDO
     */
    private static
        $dbh=null,
        $instance = null,
        $statement;


    /**
     * DBConnexion constructor.
     * Method for instantiate a new database connexion
     */
    private function __construct() {
        global $login, $mdp, $base, $host;
        self::$dbh = new PDO('mysql:host='.$host.';dbname='.$base.'',$login,$mdp);
    }


    /**
     * Method for singleton who get or instantiate a database connexion
     * @return DBConnexion|null|PDO
     */
    public static function getInstance() {
        if (self::$instance == null) {
            self::$instance = new self;
        }
        return self::$instance;
    }


    /**
     * Method for prepare and execute request (Replace ? by parameters if exist)
     * @param $requete
     * @param $param
     */
    public function prepareAndExecuterQuerySelect($requete, $param){
        self::$statement = self::$dbh->prepare($requete);
        if (isset($param) && $param!=null) {
            for ($i = 1; $i <= count($param); $i++) {
                self::$statement->bindParam($i, $param[$i][0], $param[$i][1]);
            }
        }   
        self::$statement->execute();
    }


    /**
     * Method for get results
     * @return mixed
     */
    public static function getResult(){
        return self::$statement->fetchAll();
    }


    /**
     * Method for destruct results
     */
    public static function destroyQueryResults(){
        self::$statement->closeCursor();
        self::$statement=NULL;
    }
}