import GLaDOS from '../app/classes/GLaDOS.mjs';
const glados = new GLaDOS();

/**
 * Créer une fonction qui prend en paramètre un nombre de centimes et qui retourne une chaine de caractères correspondant à la somme en euros.
 * - La valeur en entrée doit être de type "number" ou "string", sinon la fonction doit lever une exception
 * - Si la valeur est bien un nombre au format "string", elle doit être convertie en "number"
 * - La valeur en sortie doit être de type "string"
 * - La valeur en sortie doit être arrondie à 2 décimales
 * - La valeur en sortie doit être suffixée par le symbole "€"
 *
 * Voir https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
 */
function convertToEuro(value) {
    return 2;
}

glados.testConvertToEuro(convertToEuro);
