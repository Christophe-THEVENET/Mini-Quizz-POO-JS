//========== CREER UN QUIZZ ==============
import { elQuestionScreen, elWelcomeScreen, elResultScreen } from './variables.js';

function Quizz() {
    //tableau des questions
    this.questions = [];
    this.nbGoodAnswer = 0;

    // ajouter une question au Quizz
    this.addQuestion = (question) => this.questions.push(question);

    this.showCurrentQuestion = () => {
        this.questions[0].getElement();
    };

    /*  // lance le quizz
    this.launch = () => {
        // pour chaque question du quizz
        this.questions.forEach((question) => {
            // on récup la réponse de l'utilisateur
            let answerUser = ''; // a récupérer ds le DOM
            if (question.isGoodAnswer(answerUser)) {
                this.nbGoodAnswer++;
            } else {
            }
        });
        this.showResult();
    };

    this.showResult = () => {
        let msg =
            'Résultats:\n' + this.nbGoodAnswer + ' sur' + this.questions.length + ' correctes';
    }; */
}

// ========== CREER UNE QUESTION ==============

function Question(title, answers, goodAnswer) {
    this.title = title;
    this.answers = answers;
    this.goodAnswer = goodAnswer;
    // ajouter question dans le DOM
    this.getElement = () => {
        // ajout html question 1/3
        let elQuestionNumberOf = document.createElement('h2');
        elQuestionNumberOf.classList.add('quizz__subtitle');
        elQuestionNumberOf.textContent = `Question`;
        elQuestionScreen.append(elQuestionNumberOf);

        //ajout html titre question
        let elQuestionTitle = document.createElement('h3');
        elQuestionTitle.classList.add('quizz__subtitle');
        elQuestionTitle.textContent = this.title;
        elQuestionScreen.append(elQuestionTitle);

        //ajout html réponses possible
        let elQuestionAnswers = document.createElement('ul'); //ul
        elQuestionAnswers.classList.add('questionScreen__answers');

        this.answers.forEach((answer) => {
            let elAnswer = document.createElement('li');
            elAnswer.classList.add('questionScreen__answer');
            elAnswer.textContent = answer;
            elQuestionAnswers.append(elAnswer);
        });
        elQuestionScreen.append(elQuestionAnswers);

    };

    // vérifie la bonne réponse
    this.isGoodAnswer = (answerUser) => {
        if (answerUser == this.goodAnswer) {
            return true;
        }
        return false;
    };
}

export { Quizz, Question };
