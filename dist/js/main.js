// !!!!!!!!!!!!!! pour déclarer des imports / export, il faut typer la balise script du html type="module"

//  ============ GROUPER EXPORT IMPORT ================

// debut fichier import {sdfqsd, sdfsd,fsdf} from './ssdfd.js'

// fin du fichier export {qsdf,sdfsd,qsdqsd}

// ============= IMPORT EXPORT TOUT DS UN OBJET =========

// import * as Objet from './sfsd.js'

// Objet.méthodeImportéé()

import { Quizz, Question } from './functions.js';

let quizzFarfelu = new Quizz();

let question1 = new Question(
    "Quelle est la couleur du cheval blanc d'Henri 4 ?",
    ['Rouge', 'Jaune', 'Blanc'],
    '2'
);

let question2 = new Question(
    "Quelle est la couleur du cheval blanc d'Henri 4 ?",
    ['Rouge', 'Vert', 'Blanc'],
    '2'
);

let question3 = new Question(
    "Quelle est la couleur du cheval blanc d'Henri 4 ?",
    ['Rouge', 'Orange', 'Blanc'],
    '2'
);

quizzFarfelu.addQuestion(question1);
quizzFarfelu.addQuestion(question2);
quizzFarfelu.addQuestion(question3);

console.log(question1.getBodyQuestion());
console.log(question2.getBodyQuestion());
console.log(question3.getBodyQuestion());
