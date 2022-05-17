import { welcomeBtn, elWelcomeScreen, elQuestionScreen, elResultScreen } from './variables.js';


welcomeBtn.addEventListener('click', () => {
    elWelcomeScreen.style.display = 'none';
    elQuestionScreen.style.display = 'block'
});

