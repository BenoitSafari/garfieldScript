import GLaDOS from '../app/classes/GLaDOS.mjs';
const glados = new GLaDOS();

/**
 * Créer une function qui prend en paramètre une chaine de caractères et qui retourne true ou false s'il est valide ou non.
 * - La valeur en sortie doit être de type "boolean"
 * - La fonction renvoie true si le mot de passe remplit les conditions suivantes :
 *      - Au moins 8 caractères
 *      - Au moins une lettre majuscule
 *      - Au moins une lettre minuscule
 *      - Au moins un chiffre
 *
 * Voir https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
 */
function checkPassword() {
    return 'NOT_IMPLEMENTED';
}

glados.testCheckPassword(checkPassword);
