import { Quizz, Question } from './functions.js';

// ===== nouveau quizz ==========
let quizzFarfelu = new Quizz();

// ========= nouvelles questions =============

let question1 = new Question(
    "Quelle est la couleur du cheval blanc d'Henri 4 ?",
    ['Rouge', 'Jaune', 'Blanc'],
    '2'
);

let question2 = new Question("Quelle est l'age du capitaine ?", [42, 101, 8], '2');

let question3 = new Question(
    "Quelle est la couleur du cheval blanc d'Henri 4 ?",
    ['Rouge', 'Orange', 'Blanc'],
    '2'
);


// nb de bonnes questions
let elNbGoodAnswer = document.querySelector('#nbGoodAnswer');

// nb de questions
let elNbQuestions = document.querySelectorAll('.nbQuestions')


export { quizzFarfelu, question1, question2, question3, elNbGoodAnswer,elNbQuestions };


