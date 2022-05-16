function Quizz() {
    //tableau des questions
    this.questions = [];

    // ajouter une question au Quizz
    this.addQuestion = function (question) {
        this.questions.push(question);
    };
}

function Question(title, answers, goodAnswer) {
    this.title = title;
    this.answers = answers;
    this.goodAnswer = goodAnswer;

    // récupère les données de la question
    this.getBodyQuestion = function () {
        let bodyQuestion = this.title;
        for (let index = 0; index < this.answers.length; index++) {
            bodyQuestion += '   ' + (index + 1) + ' .. ' + this.answers[index];
        }

        return bodyQuestion;
    };

    // vérifie la bonne réponse
    this.isGoodAnswer = function (answerUser) {
        if (answerUser === this.goodAnswer) {
            console.log('gagné');
            return true;
        }
        console.log('perdu');
        return false;
    };
}















export { Quizz, Question };
