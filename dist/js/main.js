// !!!!!!!!!!!!!! pour déclarer des imports / export, il faut typer la balise script du html type="module"

//  ============ GROUPER EXPORT IMPORT ================

// debut fichier import {sdfqsd, sdfsd,fsdf} from './ssdfd.js'

// fin du fichier export {qsdf,sdfsd,qsdqsd}

// ============= IMPORT EXPORT TOUT DS UN OBJET =========

// import * as Objet from './sfsd.js'

// Objet.méthodeImportéé()

import { quizzFarfelu, question1, question2, question3 } from './variables.js';

import { Quizz, Question } from './functions.js';




quizzFarfelu.addQuestion(question1);
quizzFarfelu.addQuestion(question2);
quizzFarfelu.addQuestion(question3);

console.log(question1.getBodyQuestion());
console.log(question2.getBodyQuestion());
console.log(question3.getBodyQuestion());


