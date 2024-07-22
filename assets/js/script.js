// Declare map locations data array
const locations = [{
        name: "Holy Cross Mountains",
        description: "'They may not be the tallest, but they are certainly some of the oldest natural formations in Europe. (...) Lands where pagans loved to live freely. Where the long lustful nights full of barbaric drinks and rituals around the bonfire gave birth to the legends of Baba Yaga.'<br><span style='display: block; text-align: right; margin-top: 10px; font-weight: bold;'>Part 1: The Origin<br>Chapter 1: Straight Street Ground</span>",
        col: 64,
        row: 26
    },
    {
        name: "High School",
        description: "'The first days of year one were the most important. Older students would recognize who was made of what after primary school. Traditional bullying greetings had begun. Bullies searched for the cats on first breaks. A cat was a rookie. A new guy. Someone they didn’t know. Someone they could cut down in size.'<br><span style='display: block; text-align: right; margin-top: 10px; font-weight: bold;'>Part 1: The Origin<br>Chapter 8: Journey</span>",
        col: 16,
        row: 72
    },
    {
        name: "Old Technology",
        description: "'(...)We had even landed a few robots on Mars, which drove around gathering and sending data, including videos back to Earth. Humans were still not ready to leave our planet’s zone. The technology to travel in space hadn’t really improved much since the first visit to the moon.<br>Space shuttles still were working based on the old rocket engine. Burning fuel as a main source of power. Using tons of it just to get out of Earth’s gravity. These ships were made for just a couple of people, but there were great plans for the colonization of Mars.'<br><span style='display: block; text-align: right; margin-top: 10px; font-weight: bold;'>Part 2: The Scrutiny<br>Chapter 26: Humanity Composition</span>",
        col: 87,
        row: 18
    },
    {
        name: "Edward Teslenstein",
        description: "'(...)I never thought of myself as anyone special. Nor anyone who would experience so many complex moral contemplations. I would even often say that nobody is perfect—and especially not me myself. As I saw double, the confusion brought by these tormenting thoughts didn’t allow me to settle for a moment. I was forced to assume and have faith that I assumed well. I was not ready to believe I was wise enough to know. I called it a blessing of guessing. An ability of my inner duality. Forever to be so insecure and certain at the very same time.'<br><span style='display: block; text-align: right; margin-top: 10px; font-weight: bold;'>Part 2: The Scrutiny<br>Chapter 18: Questioning Knowledge</span>",
        col: 49.3,
        row: 83
    },
    {
        name: "TEMPUS",
        description: "'(...)I decided to make the shuttle ready for radio and satellite communication. Develop it more before exiting the Earth’s atmosphere. There was much to do. At least, I knew that the Tempus was working. The Tesla Electro Magnetic Power Unit Shuttle was ready, and only a few more weeks of research divided me from reaching Mars(...)'<br><span style='display: block; text-align: right; margin-top: 10px; font-weight: bold;'>Part 3: The TEMPUS<br>Chapter 28: The Reverse Day</span> <br>'I went back to the captain’s armchair. Realizing what had to be done took a moment. I knew Mars wouldn’t be particularly interesting on my journey. I knew I’d just go there to put my foot down. Then I had to go back to modify the ship and prepare for the real exploration escapade.'<br><span style='display: block; text-align: right; margin-top: 10px; font-weight: bold;'>Part 3: The TEMPUS<br>Chapter 36: Red Destination</span>",
        col: 78,
        row: 12
    },
    {
        name: "TEMPUS Artificial Intelligence Assistant",
        description: "'TAIA was fluent in every language existing in human history—including dead languages, digital languages, and scientific languages—and had all knowledge ever discovered by human beings. Additionally, it was developing modes of communication with animals as training for possible extraterrestrial contact. Learning was what AI did.'<br><span style='display: block; text-align: right; margin-top: 10px; font-weight: bold;'>Part 3: The TEMPUS<br>Chapter 45: Thoughtful Advancement</span>",
        col: 75,
        row: 72
    },
    {
        name: "TEMPUS Suit",
        description: "'Being quite nervous, I couldn’t maintain a straight posture, but after a while, I realized I was in my T-Suit. I could get out of there anytime I wanted. That boosted my confidence a bit.'<br><span style='display: block; text-align: right; margin-top: 10px; font-weight: bold;'>Part 3: The TEMPUS<br>Chapter 39: Kind Rebellion</span>",
        col: 50,
        row: 85
    },
    {
        name: "Edward's Dream",
        description: "'The gates were wide open. It almost seemed like they had waited for me to pass through them. While I took the course and levitated towards these open heavens, my inner self awoke and began to resist the will of this “dream.” I began to decline and break out from this gracious privilege of joining the divine. It was not the right time to enter the blissful heavens. There was much to do back home. There were many things left for me to change back on Earth.'<br><span style='display: block; text-align: right; margin-top: 10px; font-weight: bold;'>Part 1: The Origin<br>Chapter 15: The Spirit Drive</span>",
        col: 15,
        row: 18
    },
    {
        name: "Edward's Mind",
        description: "'Always deep in thought. Completely disconnected from the surrounding reality. Living in an alternate world. Step by step. Part to part putting its pieces together just to find out what the core of global problems might be. To find the genesis of the state that I came to face on this earth. To understand ourselves as a civilization.'<br><span style='display: block; text-align: right; margin-top: 10px; font-weight: bold;'>Part 2: The Scrutiny<br>Chapter 23: Conscious Insights</span>",
        col: 50,
        row: 30
    },

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
        options: ["Museum", "Holy Cross Mountains", "Space Station", "Desert"],
        correctAnswer: 1,
        image: "assets/images/part1-setting.jpeg"
    },
    {
        question: "Who is the main protagonist in the novel?",
        options: ["Edward Teslenstein", "John Smith", "Jane Doe", "Mysterious Stranger"],
        correctAnswer: 0,
        image: "assets/images/edwards-dilemmatic-character.png"
    },
    {
        question: "What does TAIA stand for?",
        options: ["Technical Automated Interactive Agent", "Telecommunication AI Assistant", "Tech Advanced Intelligent Agent", "TEMPUS Artificial Intelligence Assistant"],
        correctAnswer: 3,
        image: "assets/images/taia.jpg"
    },
    {
        question: "Is TEMPUS a:",
        options: ["Type of Space Shuttle", "Planet", "Weapon", "Time-traveling device"],
        correctAnswer: 0,
        image: "assets/images/scientists-building-tempus.jpg"
    },
    {
        question: "The T-Suit is an extremly versatilve device. What is it primarily used for?",
        options: ["Underwater diving", "Mountain Climbing", "Space Exploration", "Virtual Reality gaming"],
        correctAnswer: 2,
        image: "assets/images/first-dream1.png"
    },
    {
        question: "What planet is the 'Red Destination'?",
        options: ["Venus", "Mars", "Saturn", "Jupiter"],
        correctAnswer: 1,
        image: "assets/images/cylinder.jpg"
    },
    {
        question: "What condition does Edward experience, causing him to see double?",
        options: ["Astigmatism", "Myopia", "Hyperopia", "Diplopia"],
        correctAnswer: 3,
        image: "assets/images/scatterbrained-artist-scientist3.png"
    },
    {
        question: "What technology does the TEMPUS Engine use?",
        options: ["Solar Power", "Nuclear Fusion", "Gravity Speed", "Rocket Fule"],
        correctAnswer: 2,
        image: "assets/images/cylinder3.jpg"
    },
    {
        question: "What is a 'cat' in the High School?",
        options: ["A teacher", "A bully", "A rookie student", "A pet"],
        correctAnswer: 2,
        image: "assets/images/scatterbrained-artist-scientist2.png"
    },
    {
        question: "What kind of rituals are associated with the history of the Holy Cross Mountains?",
        options: ["Religious Ceremonies", "Pagan Rituals", "Scientific experiments", "Military drills"],
        correctAnswer: 1,
        image: "assets/images/pagans-loved-to-live-freely.png"
    },
    {
        question: "What has unique ability to boost Edward's confidence?",
        options: ["Wearing the T-Suit", "Finding a treasure", "Meeting an old friend", "Winning a battle"],
        correctAnswer: 0,
        image: "assets/images/scatterbrained-artist-scientist4.jpg"
    },
    {
        question: "What is a blessing of guessing?",
        options: ["A cooking recipe", "A title of a book", "TAIA's password", "'An ability of my inner duality'"],
        correctAnswer: 3,
        image: "assets/images/cylinder2.jpg"
    },
];

// Defining Quiz Variables
const startBtn = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const nextQuestionBtn = document.getElementById('next-question');
const questionElement = document.getElementById('question');
const answerBtns = document.getElementById('answer-buttons');
// Preserving the same section size through the quiz
const quizSection = document.getElementById('quiz-section');

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
    //Preserving the same section size through the quiz
    quizSection.style.maxWidth = '800px';
    quizSection.style.height = '810px';
    quizSection.style.marginBottom = '60px';
    // Scroll to the quiz section
    quizSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
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

    // Show Current Question Number
    const questionsLeft = document.getElementById('questions-left');
    questionsLeft.textContent = `Question ${currentQuestionIndex + 1} of ${shuffledQuestions.length}`;

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

    // Mark the chosen incorrect answer (so it looks a bit different than other ones)
    if (!correct) {
        selectedAnswerBtn.classList.add('selected-wrong');
    }

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

    // Determine the message based on the score
    let message;
    if (correctCount === shuffledQuestions.length) {
        message = '<marquee width="90%" style="border:black 2px solid"><b>WOW!! Congratulations!! You got all 12 out of 12 questions correct!! Contact me to get your code for a free audiobook!</b></marquee>';
    } else if (correctCount >= 7) {
        message = "Nice Try! Did you read the novel?";
    } else if (correctCount >= 4) {
        message = "You're doing great! All the answers are on the Map.";
    } else {
        message = "Better luck next time! Check out the map maybe?";
    }

    // Set the score message
    scoreMessage.innerHTML = `<h2>Quiz Complete!</h2><p>You got ${correctCount} out of ${shuffledQuestions.length} questions correct.</p>
    <p>${message}</p>`;

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

// Instructions Button Dialog Setup
// Defining Variables
const instructionsTxt = document.getElementById('instructions');
const openInstructions = document.getElementById('instruction-button');
const closeInstructions = document.getElementById('close-instructions');

// Set up events listener for the button
openInstructions.addEventListener('click', () => {
    instructionsTxt.showModal();
});

closeInstructions.addEventListener('click', () => {
    instructionsTxt.close();
});


// Load the map when the window finishes loading
window.onload = function () {
    loadMap();
};