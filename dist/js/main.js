import {
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
} from './variables.js';

// ajout des qestions au quizz
quizzFarfelu.addQuestion(question1);
quizzFarfelu.addQuestion(question2);
quizzFarfelu.addQuestion(question3);
quizzFarfelu.addQuestion(question4);
quizzFarfelu.addQuestion(question5);

// fonction du click bouton accueil
const seeFirstQuestion = () => {
    elWelcomeScreen.classList.add('hidden');
    quizzFarfelu.showCurrentQuestion();
};

//click bouton acceuil
welcomeBtn.addEventListener('click', seeFirstQuestion);

//nb de questions (plusieurs)
for (let elNbQuestion of elNbQuestions) {
    elNbQuestion.textContent = quizzFarfelu.questions.length;
}

elNbQuestions;
// !!!!!!!!!!!!!! pour déclarer des imports / export, il faut typer la balise script du html type="module"

//  ============ GROUPER EXPORT IMPORT ================

// debut fichier import {sdfqsd, sdfsd,fsdf} from './ssdfd.js'

// fin du fichier export {qsdf,sdfsd,qsdqsd}

// ============= IMPORT EXPORT TOUT DS UN OBJET =========

// import * as Objet from './sfsd.js'

// Objet.méthodeImportéé()
