function Quizz() {
    this.question = [];

    this.addQuestion = function (question) {
        this.question.push(question);
    };
}

function Question(title, answers, goodAnswer) {
    this.title = title;
    this.answers = answers;
    this.goodAnswer = goodAnswer;

    this.getBodyQuestion = function () {
        let bodyQuestion = this.title;
        for (let index = 0; index < this.answers.length; index++) {
            bodyQuestion += '   ' + (index + 1) + ' .. ' + this.answers[index];
        }

        return bodyQuestion;
    };

    this.isGoodAnswer = function (answerUser) {
        if (answerUser === this.goodAnswer) {
            return true;
        }
        return false;
    };
}

export { Quizz, Question };


