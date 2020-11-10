function darkFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

document.getElementById("title01").innerHTML
=
"welcome to my site!";
/*
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


function buildQuiz(){
    const output = [];

myQuestions.forEach(
    (currentQuestion, questionNumber) => {
        const answers = [];
        for(letter in currentQuestion.answers){
            answers.push(
                <label>
                    <input type="radio" name="questions${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </input>
                </label>
            );
        };
        output.push(
            <div class="question">${currentQuestion.question}</div>
            <div class="answers">${amswers.join('')}</div>
        )
    }
)
quizContainer.innerHTML = output.join('');
};



function showResults(){}

buildQuiz();
submitButton.addEventListener('click' ,showResults);

const myQuestions = [
{
    question: "when was the broom invented?",
    answers: {
    a:"seventeen eighty nine",
    b:"seventeen ninty seven",
    c:"seventeen twenty four",
    d:"seventeen sixty three"
    },
    correctAnswer: "b"
},
{
    question: "who invented the broom?",
    answers: {
        a:"Ettore Steccone",
        b:"Mark Proett",
        c:"Daniel Hess",
        d:"Levi Dickenson"
    },
    correctAnswer: "d"
},
{
    question: "what type of broom is considered to be the most effective?",
    answers: {
        a:"hand broom",
        b:"push broom",
        c:"flat broom",
        d:"upright broom"
    },
    correctAnswer: "c"
},
{
    question: "where was the broom invented?",
    answers: {
        a:"Hadley, Massachusetts",
        b:"Bozeman, Montana",
        c:"Davenport, Iowa",
        d:"Oakland, California"
    },
    correctAnswer: "a"
}
]
*/
