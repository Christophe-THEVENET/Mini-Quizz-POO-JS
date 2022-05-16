//========== fonction pour créer un quizz ==============

function Quizz() {
    //tableau des questions
    this.questions = [];
    this.nbGoodAnswer = 0;

    // ajouter une question au Quizz
    this.addQuestion = (question) => this.questions.push(question);

    // lance le quizz
    this.launch = () => {
        // pour chaque question du quizz
        this.questions.forEach((question) => {
            // on récup la réponse de l'utilisateur
            let answerUser = ''; // a récupérer ds le DOM
            if (question.isGoodAnswer(answerUser)) {
                console.log('gagné');
                this.nbGoodAnswer++;
            } else {
                console.log('perdu');
            }
        });
        this.showResult();
    };

    this.showResult = () => {
        let msg =
            'Résultats:\n' + this.nbGoodAnswer + ' sur' + this.questions.length + ' correctes';
        console.log(msg);
        console.log(this.nbGoodAnswer);
    };
}

// ========== fonction pour créer une question ==============

function Question(title, answers, goodAnswer) {
    this.title = title;
    this.answers = answers;
    this.goodAnswer = goodAnswer;

    // récupère les données de la question
    this.getBodyQuestion = () => {
        let bodyQuestion = this.title;
        for (let index = 0; index < this.answers.length; index++) {
            bodyQuestion += '   ' + (index + 1) + ' .. ' + this.answers[index];
        }

        return bodyQuestion;
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
