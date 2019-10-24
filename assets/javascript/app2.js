const quizContainer = $('quiz');
const resultsContainer = $('results');
const submitButton = $('submit');
(function(){
function buildQuiz(){
    const output = [];
    questions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for(letter in currentQuestion.answers){
                answers.push(
                    `<label>
                        <input type='radio' name='question${questionNumber}' value='${letter}'>${letter}:
                        ${currentQuestion.answers[letter]}</input>
                    </label>`
                );
            }
            output.push(
                `<div class='question'> ${currentQuestion.question}</div>
                <div class='answers'> ${answers.join('')}</div>`
            );
        }
    );
    quizContainer.innerHTML = output.join('');
}

function showResults(){
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0

    questions.forEach((currentQuestion, questionNumber) => {
        const answerContainers = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainers.querySelector(selector)|| {}).value;
        if (userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
            answerContainers[questionNumber].style.color = "lightgreen";
        }
        else{
            answerContainers[questionNumber].style.color="red";
        }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
}

const quizContainer = $('quiz');
const resultsContainer=$('results');
const submitButton= $('submit');

const questions = [
    {
        question: "Which avenger is green and has anger issues?",
        answers: {
            a: "Hulk",
            b: "Iron Man",
            c: "Thor",
            d: "Vision",
        },
        correctAnswer: "a"
    },
    {
        question: "How many Infinity Stones are there?",
        answers: {
            a:"10",
            b:"4",
            c:"8",
            d:"6",
        },
        correctAnswer: "d"
    },
    {
        question: "What planet is Thor from?",
        answers: {
            a:"Earth",
            b:"Vormir",
            c:"Asgard",
            d:"Ego",
        },
        correctAnswer: "c"
    },
    {
        Question: "Where does vibranium come from?",
        answers: {
            a:"Gotham",
            b:"Wakanda",
            c:"San Francisco",
            d:"Asgard",
        },
        correctAnswer:"b"
    },
    {
        question: "Who is not an Avenger?",
        answers: {
            a:"Thor",
            b:"Captain America",
            c:"Iron Man",
            d:"Batman",
        },
        correctAnswer:"d"
    },
];
buildQuiz();

$('submit').on('click', showResults());
})();