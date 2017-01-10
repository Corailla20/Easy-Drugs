<?php

namespace Model;

use PDO;

/**
 * Author : Pierre CHARLES
 * Database connexion class. It's a singleton to make an unique connexion
     * Globals variables -> file : config/config.php
     * $host        = L'hôte (ordinateur sur lequel Mysql est installé)
     * $base        = Le nom de la base de données
     * $login       = Le nom d'utilisateur
     * $mdp         = Le mot de passe
*/

class DBConnexion {

    // Variables utiles
    private static
        $dbh=null,
        $instance = null,
        $statement;

    // Constructeur : methode pour instancier une nouvelle connexion à la base de donnée.
    private function __construct() {
        global $login, $mdp, $base, $host;
        self::$dbh = new PDO('mysql:host='.$host.';dbname='.$base.'',$login,$mdp);
    }

    // Methode pour le singleton qui permet de récuperer ou d'instancier de Connexion à la base de données
    public static function getInstance() {
        if (self::$instance == null) {
            self::$instance = new self;
        }
        return self::$instance;
    }

    // Méthode de préparation et d'éxéution d'une requete. -> Remplace les ? de la requete.
    public function prepareAndExecuterQuerySelect($requete, $param){
        self::$statement = self::$dbh->prepare($requete);
        if (isset($param) && $param!=null) {
            for ($i = 1; $i <= count($param); $i++) {
                self::$statement->bindParam($i, $param[$i][0], $param[$i][1]);
            }
        }
        self::$statement->execute();
    }

    // Methode de récuperation des resultats.
    public static function getResult(){
        return self::$statement->fetchAll();
    }

    // Methode de destruction du statement.
    public static function destroyQueryResults(){
        self::$statement->closeCursor();
        self::$statement=NULL;
    }
}