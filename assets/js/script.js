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

// Quiz questions data
const quizQuestions = [{
        question: "What is the primary setting of The Age of New Era, Part 1: The Origin?",
        options: ["High School", "Holy Cross Mountains", "Space Station", "Desert"],
        correctAnswer: 1,
    },
    {
        question: "Who is the main protagonist in the novel?",
        options: ["Edward Teslenstein", "John Smith", "Jane Doe", "Mysterious Stranger"],
        correctAnswer: 0,
        image: "assets/images/map-of-universe.jpeg"
    },
    // Add 8-10 more questions here
];

// Defining Quiz Variables
const startBtn = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container')
const nextQuestionBtn = document.getElementById('next-question')
const questionElement = document.getElementById('question')
const answerBtns = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
let quizStarted = false;
let userAnswers = [];

// Adding event listeners for the start button and the next question button
startBtn.addEventListener('click', startQuiz);
nextQuestionBtn.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

/**
 * Start Quiz Function
 */
function startQuiz() {
    startBtn.classList.add('hide')
    shuffledQuestions = quizQuestions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')
    setNextQuestion()
    quizStarted = true
    loadQuiz()
}

function loadQuiz() {
    resetQuiz()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function setNextQuestion() {
    resetQuiz()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    if (question.image) {
        const imageElement = document.createElement('img')
        imageElement.src = question.image
        imageElement.classList.add('quiz-image')
        questionElement.appendChild(imageElement)
    }
    question.options.forEach((option, index) => {
        const button = document.createElement('button')
        button.innerText = option
        button.classList.add('btn')
        button.dataset.correct = index === question.correctAnswer
        button.addEventListener('click', selectAnswer)
        answerBtns.appendChild(button)
    })
}

function resetQuiz() {
    nextQuestionBtn.classList.add('hide')
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild)
        // Clear question and Image
        questionElement.innerHTML = ''
    }
}

/**
 * Function of selecting correct or wrong answer 
 */
function selectAnswer(e) {
    const selectedAnswerBtn = e.target
    const correct = selectedAnswerBtn.dataset.correct === 'true'
    setCorrectOrWrongClass(document.body, correct)
    Array.from(answerBtns.children).forEach(button => {
        setCorrectOrWrongClass(button, button.dataset.correct === 'true')
    })
    userAnswers[currentQuestionIndex] = correct ? true : false;

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextQuestionBtn.classList.remove('hide')
    } else {
        startBtn.innerText = 'Restart'
        startBtn.classList.remove('hide')
    }
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

// Load the loadMap function after the website will load in the browser
window.onload = function () {
    loadMap();
}