// Make a copy of the flashcards
const quizCards = JSON.parse(JSON.stringify(flashcards));

// Shuffle Function (Fisher-Yates)
function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];

    }

}

// Shuffle all questions
shuffle(quizCards);

// Quiz Variables
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let userAnswers = [];

// HTML Elements
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");

const questionNumber = document.getElementById("questionNumber");
const scoreDisplay = document.getElementById("scoreDisplay");

const progressFill = document.getElementById("progressFill");

const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");

const resultScreen = document.getElementById("resultScreen");
const reviewScreen = document.getElementById("reviewScreen");

const reviewBtn = document.getElementById("reviewBtn");
const reviewContainer = document.getElementById("reviewContainer");

// Start Quiz
loadQuestion();

// ==============================
// LOAD QUESTION
// ==============================

function loadQuestion() {

    selectedAnswer = null;

    submitBtn.disabled = false;
    nextBtn.disabled = true;

    const card = quizCards[currentQuestion];

    // Randomize Choices

    const correctAnswer = card.choices[card.answer];

    shuffle(card.choices);

    card.answer = card.choices.indexOf(correctAnswer);

    questionNumber.innerHTML =
        `Question ${currentQuestion + 1} of ${quizCards.length}`;

    scoreDisplay.innerHTML =
        `Score: ${score}`;

    progressFill.style.width =
        ((currentQuestion + 1) / quizCards.length) * 100 + "%";

    questionElement.innerHTML = card.question;

    choicesElement.innerHTML = "";

    card.choices.forEach((choice, index) => {

        const div = document.createElement("div");

        div.className = "choice";

        div.innerHTML = `
            <label>

                <input
                    type="radio"
                    name="choice"
                    value="${index}">

                <strong>${String.fromCharCode(65 + index)}.</strong>

                ${choice}

            </label>
        `;

        div.onclick = function () {

            document
                .querySelectorAll(".choice")
                .forEach(c => c.classList.remove("selected"));

            div.classList.add("selected");

            div.querySelector("input").checked = true;

            selectedAnswer = index;

        };

        choicesElement.appendChild(div);

    });

}


// =====================================
// SUBMIT ANSWER
// =====================================

submitBtn.onclick = function () {

    if (selectedAnswer === null) {

        alert("Please select an answer first.");
        return;

    }

    const card = quizCards[currentQuestion];

    // Save user's answer
    userAnswers.push({

        question: card.question,

        choices: [...card.choices],

        selected: selectedAnswer,

        correct: card.answer,

        explanation: card.explanation

    });

    // Check score
    if (selectedAnswer === card.answer) {

        score++;

    }

    scoreDisplay.innerHTML = `Score: ${score}`;

    // Disable buttons
    submitBtn.disabled = true;
    nextBtn.disabled = false;

    // Disable all radio buttons
    document
        .querySelectorAll('input[name="choice"]')
        .forEach(radio => {

            radio.disabled = true;

        });

    // Highlight answers
    document
        .querySelectorAll(".choice")
        .forEach((choiceDiv, index) => {

            choiceDiv.style.pointerEvents = "none";

            // Correct Answer
            if (index === card.answer) {

                choiceDiv.style.background = "#4CAF50";
                choiceDiv.style.color = "#fff";
                choiceDiv.style.borderColor = "#4CAF50";

            }

            // Wrong Selected Answer
            if (
                index === selectedAnswer &&
                selectedAnswer !== card.answer
            ) {

                choiceDiv.style.background = "#F44336";
                choiceDiv.style.color = "#fff";
                choiceDiv.style.borderColor = "#F44336";

            }

        });

};


// =====================================
// NEXT QUESTION
// =====================================

nextBtn.onclick = function () {

    currentQuestion++;

    if (currentQuestion >= quizCards.length) {

        finishQuiz();
        return;

    }

    loadQuestion();

};


// =====================================
// FINISH QUIZ
// =====================================

function finishQuiz() {

    document.querySelector(".card").classList.add("hidden");
    document.querySelector(".progress-container").classList.add("hidden");

    resultScreen.classList.remove("hidden");

    const percent = Math.round((score / quizCards.length) * 100);

    document.getElementById("finalScore").innerHTML =
        `${score} / ${quizCards.length}`;

    document.getElementById("percentage").innerHTML =
        percent + "%";

    let remarks = "";

    if (percent === 100) {

        remarks = "🏆 PERFECT SCORE!";

    }
    else if (percent >= 90) {

        remarks = "🌟 Outstanding!";

    }
    else if (percent >= 80) {

        remarks = "🎉 Excellent!";

    }
    else if (percent >= 75) {

        remarks = "✅ Passed";

    }
    else if (percent >= 60) {

        remarks = "🙂 Fair";

    }
    else {

        remarks = "📚 Needs More Review";

    }

    document.getElementById("remarks").innerHTML = remarks;

}


// =====================================
// REVIEW ANSWERS
// =====================================

reviewBtn.onclick = function () {

    resultScreen.classList.add("hidden");
    reviewScreen.classList.remove("hidden");

    reviewContainer.innerHTML = "";

    userAnswers.forEach((item, index) => {

        const isCorrect = item.selected === item.correct;

        const div = document.createElement("div");

        div.className = "review-item";

        div.innerHTML = `

            <h3>Question ${index + 1}</h3>

            <p>
                <strong>${item.question}</strong>
            </p>

            <br>

            <p>
                <strong>Your Answer</strong>
            </p>

            <p class="${isCorrect ? "correct" : "wrong"}">

                ${String.fromCharCode(65 + item.selected)}.
                ${item.choices[item.selected]}

            </p>

            <br>

            <p>
                <strong>Correct Answer</strong>
            </p>

            <p class="correct">

                ${String.fromCharCode(65 + item.correct)}.
                ${item.choices[item.correct]}

            </p>

            <div class="explanation">

                <strong>Explanation</strong>

                <br><br>

                ${item.explanation}

            </div>

            <hr>

        `;

        reviewContainer.appendChild(div);

    });

};


// =====================================
// OPTIONAL FUNCTIONS
// =====================================

// Restart Quiz
function restartQuiz(){

    location.reload();

}

// Scroll to top after opening review
reviewBtn.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



