import GLaDOS from '../app/classes/GLaDOS.mjs';
const glados = new GLaDOS();

/**
 * Créer une function qui prend en paramètre une chaine de caractères et qui retourne censure un ou plusieurs terme en les remplaçant par des astérisques.
 * - Le type des valeurs en entrées doit être vérifier et lever une exception si nécessaire
 * - La valeur en sortie doit être de type "string"
 * - Le deuxieme parametre doit être un tableau de mots à censurer
 * - Le troisieme parametre (optionnel) doit être un caractère de remplacement, s'il n'est pas fourni, il doit être remplacé par des astérisques
 *
 * Voir https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
 */
function censor(value, words, replacement) {
    return 'NOT_IMPLEMENTED';
}

glados.testCensor(censor);
