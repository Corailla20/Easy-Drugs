<?php

/*
 * Classe permettant le traitement de requete concecernant les objets type drug
 */

class Get{

    /*
     * Methode qui permet de recuprer toutes les drugs presentes dans la base de donnees.
     */
    public function getDrugs() {
        $i = 0;
        $request = "SELECT * FROM drugs";
        DBConnexion::getInstance()->prepareAndExecuterQuerySelect($request, null);
        $reponse = DBConnexion::getInstance()->getResult();
        $tabDrugs = array();
        foreach ($reponse as $n) {
            $tabDrugs[$i] = new News($n['titre'], $n['url'], $n['date_publication'], $n['contenu'], $n['categorie'], $n['image']);
            $i++;
        }
        connexionBD::getInstance()->destroyQueryResults();
        return json_encode($tabDrugs);
    }

}
