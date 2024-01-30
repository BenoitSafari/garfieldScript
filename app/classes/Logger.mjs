export default class Logger {
    colors = {
        info: '\x1b[35m',
        error: '\x1b[31m',
        success: '\x1b[32m',
        bold: '\x1b[1m',
        infoBgWhiteTxt: '\x1b[45m\x1b[37m\x1b[1m',
        errorBgWhiteTxt: '\x1b[41m\x1b[37m\x1b[1m',
        successBgWhiteTxt: '\x1b[42m\x1b[30m\x1b[1m',
    };

    successTexts = [
        "J'appel ça, coder",
        'Yeeeeet!',
        'I require more lasagna',
        'Belle victoire',
        'Tu as réussi à coder, bravo!',
        "C'est pas mal, mais tu peux faire mieux (C'est faux, j'en sais rien en vrai cette phrase est générée aléatoirement)",
        'Tu as bravo à reussir, code!',
        'Hampter',
        "C'est original omg bravo",
        'Un bel exemple de code à succès',
        'Belle code',
    ];

    failTexts = [
        'Pas ouf...',
        'Réfléchis un peu gros',
        'Tu as pas réussi à coder, pas bravo!',
        'Tu as pas bravo à échouer, bravo pas pas!',
        "C'est si nul...",
        'Tu es sur que tu veux coder?',
        'Peut-être que tu devrais faire autre chose...',
        "Pourtant c'était pas compliqué",
        'Fais un effort stp',
        'Ca va pas du tout',
        'P-e faire une reconversion? (dans autre chose que le dev je veux dire)',
        "C'est l'exemple parfait de ce qu'il ne faut pas faire",
        "honteux, c'est honteux",
        'Pauvre code...',
    ];

    /**
     * @param {string} message - The message to log
     * @param {string} type - info, error, warn, success
     */
    log(message, type = 'info', bold = false) {
        let color = this.colors[type] || this.colors.info;
        bold && (color += this.colors.bold);
        console.log(`${color}${message}\x1b[0m`);
    }

    /**
     * @param {string} test - The name of the test
     */
    logSuccess(test) {
        console.log(`\n${this.colors.successBgWhiteTxt}${test} réussi !`);
        console.log(`${this.colors.success}${this.getRandomSuccessText()}`);
    }

    /**
     * @param {string} test - The name of the test
     * @param {string} e - The error message
     */
    logError(test, e) {
        console.log(`\n${this.colors.error}${test} échoué !`);
        console.log(`${this.colors.error}${this.getRandomFailText()}`);
    }

    getRandomSuccessText() {
        return this.successTexts[Math.floor(Math.random() * this.successTexts.length)];
    }

    getRandomFailText() {
        return this.failTexts[Math.floor(Math.random() * this.failTexts.length)];
    }

    getCurrentFolder() {
        return __dirname.split('/').pop();
    }
}
