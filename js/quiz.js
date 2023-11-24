// quiz.js

const questions = [
    {
        question: "What is a popular birthday party game?",
        options: ["a. Musical Chairs", "b. Sudoku", "c. Chess"],
        correctAnswer: "a"
    },
    {
        question: "Which decoration is commonly used for birthday celebrations?",
        options: ["a. Pumpkins", "b. Balloons", "c. Christmas Lights"],
        correctAnswer: "b"
    },
    {
        question: "What is a common birthday gift idea?",
        options: ["a. Sandpaper", "b. Gift Card", "c. Broken Umbrella"],
        correctAnswer: "b"
    },
    {
        question: "What is a traditional birthday cake flavor?",
        options: ["a. Vanilla", "b. Bacon", "c. Bubblegum"],
        correctAnswer: "a"
    },
    {
        question: "Which activity is commonly associated with birthday celebrations?",
        options: ["a. Sleeping", "b. Skydiving", "c. Eating Cake"],
        correctAnswer: "c"
    },
    {
        question: "What is a typical birthday party food?",
        options: ["a. Sushi", "b. Pizza", "c. Broccoli"],
        correctAnswer: "b"
    },
    {
        question: "Which color is often associated with birthday celebrations?",
        options: ["a. Black", "b. Yellow", "c. Pink"],
        correctAnswer: "c"
    },
    {
        question: "What is a popular birthday party theme?",
        options: ["a. Space", "b. Office Supplies", "c. Underwater"],
        correctAnswer: "a"
    },
    {
        question: "What is a common birthday tradition?",
        options: ["a. Wearing a costume", "b. Singing the birthday song", "c. Doing a handstand"],
        correctAnswer: "b"
    },
    {
        question: "Which type of gift is commonly exchanged at birthday parties?",
        options: ["a. Rocks", "b. Flowers", "c. Presents"],
        correctAnswer: "c"
    }
];


let currentQuestionIndex = 0;
let correctAnswers = 0;
const totalQuestions = questions.length;
let timer;

document.getElementById("next-btn").addEventListener("click", () => {
    const selectedOption = document.querySelector("input[name='option']:checked");

    if (selectedOption) {
        const selectedAnswer = selectedOption.value;
        handleOptionClick(selectedAnswer);
    } else {
        alert("Please select an option before moving to the next question.");
    }
});

function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");

    questionContainer.textContent = questions[currentQuestionIndex].question;
    optionsContainer.innerHTML = "";

    anime({
        targets: ".option",
        translateX: [-50, 0],
        opacity: [0, 1],
        duration: 500,
        easing: "easeInOutQuad",
        delay: anime.stagger(100)
    });

    questions[currentQuestionIndex].options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.innerHTML = `<input type="radio" name="option" value="${option.charAt(0).toLowerCase()}"> ${option}`;
        optionElement.className = "option";
        optionsContainer.appendChild(optionElement);
    });

    startTimer();
}

function handleOptionClick(selectedAnswer) {
    stopTimer();

    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
        correctAnswers++;
        alert("Correct! 🎉");
    } else {
        alert("Incorrect! 😞");
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < totalQuestions) {
        displayQuestion();
    } else {
        displayResults();
    }
}

function displayResults() {
    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.createElement("div");
    resultContainer.className = "result-container";

    const resultMessage = document.createElement("p");
    resultMessage.textContent = `Quiz completed! You answered ${correctAnswers} out of ${totalQuestions} questions correctly.`;

    resultContainer.appendChild(resultMessage);
    quizContainer.innerHTML = "";
    quizContainer.appendChild(resultContainer);
}

function startTimer() {
    let timeLeft = 59;
    timer = setInterval(() => {
        document.getElementById("time").textContent = timeLeft;
        timeLeft--;

        if (timeLeft < 0) {
            stopTimer();
            alert("Time's up! Moving to the next question.");
            currentQuestionIndex++;
            displayQuestion();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

// Initial setup
displayQuestion();