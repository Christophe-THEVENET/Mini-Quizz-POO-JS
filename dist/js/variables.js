import { Quizz, Question } from './functions.js';

// ===== nouveau quizz ==========
let quizzFarfelu = new Quizz();

// ====== nouvelles questions =========
let question1 = new Question(
    "Quelle est la couleur du cheval blanc d'Henri 4 ?",
    ['Rouge', 'Jaune', 'Blanc'],
    3
);

let question2 = new Question(
    'Quel est le cri de la fourmi ?',
    ['La fourmi croonde', 'La fourmi crie fort', 'La fourmi hurle doucement'],
    1
);

let question3 = new Question(
    "Quelle est cette capitale européenne qui nous donne le nom de la femelle du Hamster ?",
    [
        "Rome",
        'Bruxelles',
        'Amsterdam',
    ],
    3
);

let question4 = new Question(
  "Quel est le groupe de Hard Rock préféré des groupes écologiques anti-nucléaires ?",
  [
      " Metalica",
      'ACDC',
      'Led Zeppelin',
  ],
  2
);

let question5 = new Question(
  "Qu\'est ce qui est jaune et qui attend ?",
  [
      "Jonathan",
      'un citron pressé',
      'Titi poursuivi par GrosMinet',
  ],
  1
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
let elResultScreen = document.querySelector('.resultScreen');

let elMain = document.querySelector('main');

export {
    quizzFarfelu,
    question1,
    question2,
    question3,
    question4,
    question5,
    elNbGoodAnswer,
    elNbQuestions,
    welcomeBtn,
    elWelcomeScreen,
    elQuestionScreen,
    elResultScreen,
    elMain,
};
