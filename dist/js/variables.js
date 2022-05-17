import { Quizz, Question } from './functions.js';

// ===== nouveau quizz ==========
let quizzFarfelu = new Quizz();


// ====== nouvelles questions =========
let question1 = new Question(
    "Quelle est la couleur du cheval blanc d'Henri 4 ?",
    ['Rouge', 'Jaune', 'Blanc'],
    3
);

let question2 = new Question("Quelle est l'age du capitaine ?", [42, 101, 8], 1);

let question3 = new Question(
    "Quelle est la couleur du cheval blanc d'Henri 4 ?",
    ['Rouge', 'Orange', 'Blanc'],
    3
);

// el nb de bonnes questions 
let elNbGoodAnswer = document.querySelector('#nbGoodAnswer');

// el nb de questions (plusieurs)
let elNbQuestions = document.querySelectorAll('.nbQuestions');


// el btn acceuil
let welcomeBtn = document.getElementById('welcomeBtn');
// el bloc acceuil
let elWelcomeScreen = document.querySelector('#welcomeScreen');
// bloc question
let elQuestionScreen = document.querySelector('#questionScreen');
// el bloc resultat
let elResultScreen = document.querySelector('#resultScreen');










export {
    quizzFarfelu,
    question1,
    question2,
    question3,
    elNbGoodAnswer,
    elNbQuestions,
    welcomeBtn,
    elWelcomeScreen,
    elQuestionScreen,
    elResultScreen,
};