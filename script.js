let currentQuestion = 0;
let score = 0;
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

let selectedAnswer = null;

// ==============================
// START QUIZ
// ==============================

loadQuestion();

// ==============================
// LOAD QUESTION
// ==============================

function loadQuestion() {

    selectedAnswer = null;

    submitBtn.disabled = false;
    nextBtn.disabled = true;

    const card = flashcards[currentQuestion];

    questionNumber.innerHTML =
        `Question ${currentQuestion + 1} of ${flashcards.length}`;

    scoreDisplay.innerHTML =
        `Score: ${score}`;

    progressFill.style.width =
        ((currentQuestion) / flashcards.length) * 100 + "%";

    questionElement.innerHTML = card.question;

    choicesElement.innerHTML = "";

    card.choices.forEach((choice, index) => {

        const div = document.createElement("div");

        div.className = "choice";

        div.innerHTML = `
            <label>
                <input type="radio"
                       name="choice"
                       value="${index}">
                ${String.fromCharCode(65 + index)}.
                ${choice}
            </label>
        `;

        div.onclick = function () {

            document.querySelectorAll(".choice")
                .forEach(c => c.classList.remove("selected"));

            div.classList.add("selected");

            div.querySelector("input").checked = true;

            selectedAnswer = index;

        };

        choicesElement.appendChild(div);

    });

}

// ==============================
// SUBMIT ANSWER
// ==============================

submitBtn.onclick = function () {

    if (selectedAnswer === null) {

        alert("Please select an answer.");

        return;

    }

    const card = flashcards[currentQuestion];

    userAnswers.push({

        question: card.question,

        selected: selectedAnswer,

        correct: card.answer,

        explanation: card.explanation,

        choices: card.choices

    });

    if (selectedAnswer === card.answer) {

        score++;

    }

    scoreDisplay.innerHTML =
        `Score: ${score}`;

    submitBtn.disabled = true;

    nextBtn.disabled = false;

}

// ==============================
// NEXT QUESTION
// ==============================

nextBtn.onclick = function () {

    currentQuestion++;

    if (currentQuestion >= flashcards.length) {

        finishQuiz();

        return;

    }

    loadQuestion();

}

// ==============================
// FINISH QUIZ
// ==============================

function finishQuiz() {

    document.querySelector(".card").classList.add("hidden");

    document.querySelector(".progress-container")
        .classList.add("hidden");

    resultScreen.classList.remove("hidden");

    let percent =
        Math.round((score / flashcards.length) * 100);

    document.getElementById("finalScore").innerHTML =
        `${score} / ${flashcards.length}`;

    document.getElementById("percentage").innerHTML =
        percent + "%";

    let remarks = "";

    if (percent >= 90)
        remarks = "🏆 Excellent!";
    else if (percent >= 75)
        remarks = "🎉 Passed!";
    else if (percent >= 60)
        remarks = "🙂 Good Job!";
    else
        remarks = "📚 Keep Studying!";

    document.getElementById("remarks").innerHTML =
        remarks;

}

// ==============================
// REVIEW
// ==============================

reviewBtn.onclick = function () {

    resultScreen.classList.add("hidden");

    reviewScreen.classList.remove("hidden");

    reviewContainer.innerHTML = "";

    userAnswers.forEach((item, index) => {

        const correct =
            item.selected === item.correct;

        reviewContainer.innerHTML += `

        <div class="review-item">

            <h3>Question ${index + 1}</h3>

            <p><strong>${item.question}</strong></p>

            <br>

            <p>

            Your Answer:

            <span class="${correct ? "correct" : "wrong"}">

            ${String.fromCharCode(65 + item.selected)}.
            ${item.choices[item.selected]}

            </span>

            </p>

            <br>

            <p>

            Correct Answer:

            <span class="correct">

            ${String.fromCharCode(65 + item.correct)}.
            ${item.choices[item.correct]}

            </span>

            </p>

            <div class="explanation">

            <strong>Explanation</strong>

            <br><br>

            ${item.explanation}

            </div>

        </div>

        `;

    });

};

