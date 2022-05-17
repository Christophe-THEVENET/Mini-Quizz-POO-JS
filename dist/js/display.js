import {
    welcomeBtn,
    elWelcomeScreen,
    elQuestionScreen,
    elResultScreen,
    quizzFarfelu,
    question1,
    question2,
    question3,
} from './variables.js';

const seeFirstQuestion = () => {
    elWelcomeScreen.classList.add('hidden');

    quizzFarfelu.showCurrentQuestion();
};

welcomeBtn.addEventListener('click', seeFirstQuestion);
