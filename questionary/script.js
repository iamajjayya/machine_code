const questions = [
    "What type of trading are you most interested in?",
    "What is your preferred trading strategy?",
    "How do you usually analyze the market before making a trade?"
];

let currentQuestionIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    const questionnaireContainer = document.getElementById("questionnaireContainer");
    const questionCard = document.getElementById("questionCard");
    const titleScreen = document.getElementById("titleScreen");
    
    const answered = localStorage.getItem('answered');
    
    if (answered) {
        showTitleScreen();
    } else {
        showQuestion();
    }
});

function showQuestion() {
    const questionText = document.getElementById("questionText");
    const answerInput = document.getElementById("answerInput");

    questionText.textContent = questions[currentQuestionIndex];
    answerInput.value = '';
    answerInput.focus();
}

function handleNext() {
    const answerInput = document.getElementById("answerInput");
    const answer = answerInput.value.trim();
    
    if (answer === '') {
        alert('Please provide an answer.');
        return;
    }
    
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        localStorage.setItem('answered', true);
        showTitleScreen();
    }
}

function showTitleScreen() {
    const questionCard = document.getElementById("questionCard");
    const titleScreen = document.getElementById("titleScreen");

    questionCard.style.display = 'none';
    titleScreen.style.display = 'flex';
}
