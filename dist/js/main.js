// !!!!!!!!!!!!!! pour déclarer des imports / export, il faut typer la balise script du html type="module"

//  ============ GROUPER EXPORT IMPORT ================

// debut fichier import {sdfqsd, sdfsd,fsdf} from './ssdfd.js'

// fin du fichier export {qsdf,sdfsd,qsdqsd}

// ============= IMPORT EXPORT TOUT DS UN OBJET =========

// import * as Objet from './sfsd.js'

// Objet.méthodeImportéé()

import {
    quizzFarfelu,
    question1,
    question2,
    question3,
    elNbGoodAnswer,
    elNbQuestions,
} from './variables.js';

// ajout des qestions au quizz
quizzFarfelu.addQuestion(question1);
quizzFarfelu.addQuestion(question2);
quizzFarfelu.addQuestion(question3);

// lancement du Quizz
quizzFarfelu.launch();

console.log(quizzFarfelu);

elNbGoodAnswer.textContent = quizzFarfelu.nbGoodAnswer;

/* for (nbQuestion of elNbQuestions) */

for (let elNbQuestion of elNbQuestions) {
    elNbQuestion.textContent = quizzFarfelu.questions.length;
}
