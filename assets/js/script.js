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
const questionContainer = document.getElementById('question-container');
const nextQuestionBtn = document.getElementById('next-question');
const questionElement = document.getElementById('question');
const answerBtns = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;
let quizStarted = false;
let userAnswers = [];

// Adding event listeners for the start button and the next question button
// Start the quiz when button is clicked
startBtn.addEventListener('click', startQuiz);
// Go to the next question button when clicked
nextQuestionBtn.addEventListener('click', nextQuestion);

/**
 * Start Quiz Function
 */
function startQuiz() {
    // Hide the start button
    startBtn.classList.add('hide');
    // Shuffle the questions randomly
    shuffledQuestions = quizQuestions.sort(() => Math.random() - .5);
    // Set the current question index to 0
    currentQuestionIndex = 0;
    // Clear user answers
    userAnswers = [];
    // Set quiz started state to true
    quizStarted = true;
    // Show the question container
    questionContainer.classList.remove('hide');
    // Load the first quiz question
    loadQuiz();
}

/**
 * Function to load the quiz
 */
function loadQuiz() {
    // Reset the quiz for the current question  
    resetQuiz();
    // Show the current question
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}
/**
 * Function to show a question
 */
function showQuestion(question) {
    // Clear previous question and image
    questionElement.innerHTML = '';
    // Create a div for the question text
    const questionText = document.createElement('div');
    // Set the question text 
    questionText.textContent = question.question;
    // Append the question text to the question element
    questionElement.appendChild(questionText);

    // If there is an image for the question - show the image
    if (question.image) {
        // Create an img element
        const imageElement = document.createElement('img');
        // Set the image source
        imageElement.src = question.image;
        // Add a class to the image element
        imageElement.classList.add('quiz-image');
        // Append the image to the question element
        questionElement.appendChild(imageElement);
    }
    // For each option in the question
    question.options.forEach((option, index) => {
        // Create an answer button element
        const button = document.createElement('button');
        // Set the answer button text to the option text
        button.innerText = option;
        // Add a class to the button
        button.classList.add('btn');
        // Set a data attribute if the option is correct
        button.dataset.correct = index === question.correctAnswer;
        // Add an event listener to the button for the click event
        button.addEventListener('click', selectAnswer);
        // Append the button to the answer buttons container
        answerBtns.appendChild(button);
    });
}

/**
 * Function to reset the quiz for the current question
 */
function resetQuiz() {
    // Hide the next question button
    nextQuestionBtn.classList.add('hide');
    // While there are child elements in the answer buttons container remove the child element
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
        // Clear question and Image
        questionElement.innerHTML = '';
    }
}

/**
 * Function of selecting correct or wrong answer 
 */
function selectAnswer(e) {
    // Get the button that was clicked
    const selectedAnswerBtn = e.target;
    // Check if the answer is correct
    const correct = selectedAnswerBtn.dataset.correct === 'true';
    // Set the correct or wrong class on the body element
    setCorrectOrWrongClass(document.body, correct);
    // For each button in the answer buttons container set the correct or wrong class on the button
    Array.from(answerBtns.children).forEach(button => {
        setCorrectOrWrongClass(button, button.dataset.correct === 'true');
    });
    // Store the user's answer
    userAnswers[currentQuestionIndex] = correct;

    // If there are more questions show the next question button
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextQuestionBtn.classList.remove('hide');
    } else {
        // otherwise change the start button text to "Restart"
        startBtn.innerText = 'Restart';
        // Show the start button
        startBtn.classList.remove('hide');
        // Show the user's score
        showScore();
    }
}

/**
 * Function to set the correct or wrong class on an element
 */
function setCorrectOrWrongClass(element, correct) {
    // Clear the correct or wrong class from the element
    clearCorrectOrWrongClass(element);
    if (correct) { // If the answer is correct add the correct class to the element
        element.classList.add('correct');
    } else { // If the answer is wrong add the wrong class to the element
        element.classList.add('wrong');
    }
}

/**
 * Function to clear the correct or wrong class from an element
 */
function clearCorrectOrWrongClass(element) {
    // Remove the correct class from the element
    element.classList.remove('correct');
    // Remove the wrong class from the element
    element.classList.remove('wrong');
}

/**
 * Programming function to load the next question of the quiz
 */
function nextQuestion() {
    // If there are more questions increment the current question index
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        currentQuestionIndex++;
        // If there are more questions increment the current question index
        loadQuiz();
    } else {
        // Otherwise show the user's score
        showScore();
    }
}
/**
 * Setting up the scoreboard to show results
 */
function showScore() {
    // Hide the question container
    questionContainer.classList.add('hide');
    // Get the quiz container element
    const quizContainer = document.getElementById('quiz-container');
    // Clear the quiz container
    quizContainer.innerHTML = "";

    // Count the number of correct answers
    let correctCount = userAnswers.filter(answer => answer).length;

    // Create a div for the score message
    const scoreMessage = document.createElement('div');
    // Add a class to the score message
    scoreMessage.classList.add('quiz-score');
    // Set the score message content
    scoreMessage.innerHTML = `<h2>Quiz Complete!</h2><p>You got ${correctCount} out of ${shuffledQuestions.length} questions correct.</p>
<p>${correctCount >= shuffledQuestions.length / 2 ? 'You know a lot! Did you read the novel?' : 'Better luck next time!'}</p>`;

    // Append the score message to the quiz container
    quizContainer.appendChild(scoreMessage);

    // Create a button for restarting the quiz
    const restartBtn = document.createElement('button');
    // Add a class to the button
    restartBtn.classList.add('btn');
    // Set the button text to "Restart"
    restartBtn.innerText = 'Restart';
    // Add an event listener to the button for the click event
    restartBtn.addEventListener('click', () => location.reload());
    // Append the restart button to the quiz container
    quizContainer.appendChild(restartBtn);
}

// Load the map when the window finishes loading
window.onload = function () {
    loadMap();
};