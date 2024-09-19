const quizData = [
    {
        question: "Qual é a capital da França?",
        options: ["Paris", "Londres", "Roma", "Madri"],
        correctAnswer: "Paris"
    },
    {
        question: "Qual é a maior montanha do mundo?",
        options: ["K2", "Everest", "Kilimanjaro", "Denali"],
        correctAnswer: "Everest"
    },
    {
        question: "Quem escreveu 'Dom Quixote'?",
        options: ["Miguel de Cervantes", "William Shakespeare", "Dante Alighieri", "J.K. Rowling"],
        correctAnswer: "Miguel de Cervantes"
    }
];

// Geração dinâmica do quiz usando loop for
const quizContainer = document.getElementById("quiz");
let output = "";

for (let questionIndex = 0; questionIndex < quizData.length; questionIndex++) {
    const currentQuestion = quizData[questionIndex];
    let optionsHTML = "";

    for (let i = 0; i < currentQuestion.options.length; i++) {
        optionsHTML += 
            `<label>
                <input type="radio" name="question${questionIndex}" value="${currentQuestion.options[i]}">
                ${currentQuestion.options[i]}
            </label>`;
    }

    output += `<div class="question"> ${currentQuestion.question}</div>
    <div class="options"> ${optionsHTML} </div>`;
}

    quizContainer.innerHTML = output;

// Função para mostrar os resultados
    function showResults() {
        const answerContainers = document.querySelectorAll(".options");
        let numCorrect = 0;
        let numIncorrect = 0;
    
        for (let questionIndex = 0; questionIndex < quizData.length; questionIndex++) {
            const answerContainer = answerContainers[questionIndex];
            const selector = `input[name=question${questionIndex}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    
        if (userAnswer === quizData[questionIndex].correctAnswer) {
            numCorrect++;
        } else {
            numIncorrect++;
        }
    }

    document.getElementById("results").innerHTML = `Acertos: ${numCorrect} <br> Erros: ${numIncorrect}`;
}

document.getElementById("submit").addEventListener("click", showResults);
