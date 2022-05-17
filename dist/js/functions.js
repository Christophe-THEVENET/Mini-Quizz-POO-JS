//========== CREER UN QUIZZ ==============
import { elQuestionScreen, elWelcomeScreen, elResultScreen, quizzFarfelu } from './variables.js';

function Quizz() {
    //tableau des questions
    this.questions = [];
    this.nbGoodAnswer = 0;
    this.indexCurrentQuestion = 0;
    // ajouter une question au Quizz
    this.addQuestion = (question) => this.questions.push(question);

    this.showCurrentQuestion = () => {
        if (this.indexCurrentQuestion < this.questions.length) {
            this.questions[this.indexCurrentQuestion].getElement();
        } else {
            elQuestionScreen.classList.add('hidden');
            elResultScreen.classList.add('visible');
        }
    };
}

// ========== CREER UNE QUESTION ==============

function Question(title, answers, goodAnswer) {
    this.title = title;
    this.answers = answers;
    this.goodAnswer = goodAnswer;
    // ====== ajouter question dans le DOM =======
    this.getElement = () => {
        // ajout html question 1/3
        let elQuestionNumberOf = document.createElement('h2');
        elQuestionNumberOf.classList.add('quizz__title');
        elQuestionNumberOf.textContent = `Question `;
        elQuestionScreen.append(elQuestionNumberOf);

        //ajout html titre question
        let elQuestionTitle = document.createElement('h3');
        elQuestionTitle.classList.add('quizz__subtitle');
        elQuestionTitle.textContent = this.title;
        elQuestionScreen.append(elQuestionTitle);

        //ajout html réponses possible
        let elQuestionAnswers = document.createElement('ul'); //ul
        elQuestionAnswers.classList.add('questionScreen__answers');

        this.answers.forEach((answer, i) => {
            let elAnswer = document.createElement('li'); //li
            elAnswer.classList.add('questionScreen__answer');
            elAnswer.textContent = answer;
            // on ajoute un id a l'element li
            elAnswer.id = i + 1;
            elQuestionAnswers.append(elAnswer);
            // écoute case bonne réponse
            elAnswer.addEventListener('click', this.checkAnswer);
        });
        elQuestionScreen.append(elQuestionAnswers);
    };

    this.checkAnswer = (e) => {
        // on recupere l'id de l'element cliqué
        let answerCliqued = e.target;

        if (answerCliqued.id == this.goodAnswer) {
            answerCliqued.classList.add('answer--correct');
            quizzFarfelu.nbGoodAnswer++;
        } else {
            answerCliqued.classList.add('answer--wrong');
        }
        // vider boite question
        setTimeout(() => {
            elQuestionScreen.textContent = '';
            quizzFarfelu.indexCurrentQuestion++;
            quizzFarfelu.showCurrentQuestion();
        }, 1000);
    };
}

export { Quizz, Question };
