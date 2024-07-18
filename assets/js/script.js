// Declare map locations data array
const locations = [{
        name: "Holy Cross Mountains",
        description: "'They may not be the tallest, but they are certainly some of the oldest natural formations in Europe. (...) Lands where pagans loved to live freely. Where the long lustful nights full of barbaric drinks and rituals around the bonfire gave birth to the legends of Baba Yaga.'",
        col: 64,
        row: 27
    },
    {
        name: "High School",
        description: "'The first days of year one were the most important. Older students would recognize who was made of what after primary school. Traditional bullying greetings had begun. Bullies searched for the cats on first breaks. A cat was a rookie. A new guy. Someone they didn’t know. Someone they could cut down in size.'",
        col: 15,
        row: 72
    },
    // Add 4-6 locations more
]

// Setting up main variables for the Map Section
const mapContainer = document.getElementById('map-container');
const mapImage = document.getElementById('map-image');
const mapDescription = document.getElementById('map-description');

function loadMap() {
    locations.forEach(location => {

        // Declaring amount of grid columns and rows
        const gridColumnNumber = 100;
        const gridRowNumber = 100;

        // Creating new element for the map - a floating dot
        const floatingDot = document.createElement('div');

        // Add the floating dot according to styling in CSS
        floatingDot.classList.add("floating-dot");

        // Declaring position coordinates for each location 
        const leftPosition = (location.col / gridColumnNumber) * 100;
        const topPosition = (location.row / gridRowNumber) * 100;

        // Assigning locations to each floating dot
        floatingDot.style.left = `${leftPosition}%`;
        floatingDot.style.top = `${topPosition}%`;

        // Add the floating dot to the map image
        mapContainer.appendChild(floatingDot)

        floatingDot.addEventListener("click", () => {
            // document.body.innerHTML = "";
            mapDescription.innerHTML = `<h3>${location.name}</h3><p>${location.description}</p>`;
        })

        mapContainer.addEventListener("click", (event) => {
            if (event.target === mapContainer || event.target === mapImage) {
                mapDescription.innerHTML = '<p>Click on a location to learn more</p>';
            }
        })

    })
}

// THE QUIZ SECTION
const startBtn = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container')
const nextQuestion = document.getElementById('next-question')
const questionElement = document.getElementById('question')
const answerBtns = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    startBtn.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetQuiz()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBtns.appendChild(button)
    })
}

function resetQuiz() {
    nextQuestion.classList.add('hide')
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild)
    }
}

function selectAnswer(e) {
    const selectedAnswerBtn = e.target
    const correct = selectedAnswerBtn.dataset.correct
    setCorrectOrWrongClass(document.body, correct)
    Array.from(answerBtns.children).forEach(button => {
        setCorrectOrWrongClass(button, button.dataset.correct)
    })
}

function setCorrectOrWrongClass(answerAttempt, correct) {
    clearCorrectOrWrongClass(answerAttempt)
    if (correct) {
        answerAttempt.classList.add('correct')
    } else {
        answerAttempt.classList.add('wrong')
    }
}

function clearCorrectOrWrongClass(answerAttempt) {
    answerAttempt.classList.remove('correct')
    answerAttempt.classList.remove('wrong')
}

const questions = [{
    question: 'What is the name of the main character?',
    answers: [{
            text: 'Edward Teslenstein',
            correct: true
        },
        {
            text: 'Bilbo Baggins',
            correct: false
        }
    ]
}]


// Load the loadMap function after the website will load in the browser
window.onload = function () {
    loadMap();
}