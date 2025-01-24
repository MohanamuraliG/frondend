const questions = [
    {
        question: "Which method is used to remove the last element from an array?",
        options: [
            { answer: "pop()", isCorrect: true },
            { answer: "shift()", isCorrect: false },
            { answer: "push()", isCorrect: false },
            { answer: "unshift()", isCorrect: false }
        ]
    },
    {
        question: "Which method is used to join all elements of an array into a string?",
        options: [
            { answer: "join()", isCorrect: true },
            { answer: "concat()", isCorrect: false },
            { answer: "slice()", isCorrect: false },
            { answer: "splice()", isCorrect: false }
        ]
    },
    {
        question: "Which method creates a new array with all elements that pass a test?",
        options: [
            { answer: "filter()", isCorrect: true },
            { answer: "map()", isCorrect: false },
            { answer: "reduce()", isCorrect: false },
            { answer: "forEach()", isCorrect: false }
        ]
    },
    {
        question: "Which of the following is not a valid JavaScript data type?",
        options: [
            { answer: "Number", isCorrect: false },
            { answer: "String", isCorrect: false },
            { answer: "Float", isCorrect: true },
            { answer: "Boolean", isCorrect: false }
        ]
    },
    {
        question: "What will the following code output: `console.log(3 + '3')`?",
        options: [
            { answer: "33", isCorrect: true },
            { answer: "6", isCorrect: false },
            { answer: "NaN", isCorrect: false },
            { answer: "Error", isCorrect: false }
        ]
    }
];

let users = [];
let currentUser = null;

// DOM elements
const loginPage = document.getElementById('login-page');
const quizPage = document.getElementById('quiz-page');
const resultPage = document.getElementById('result-page');
const dashboardPage = document.getElementById('dashboard-page');
const questionsContainer = document.getElementById('questions-container');
const resultsContainer = document.getElementById('results-container');
const dashboardContainer = document.getElementById('dashboard-container');

// Show a specific page
function showPage(page) {
    [loginPage, quizPage, resultPage, dashboardPage].forEach(p => p.classList.add('hidden'));
    page.classList.remove('hidden');
}

// Login form submission
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!username || !email) {
        alert('Please fill in both fields.');
        return;
    }

    currentUser = { name: username, email, score: 0 };
    if (!users.some(user => user.email === email)) {
        users.push(currentUser);
    }

    loadQuestions();
    showPage(quizPage);
});

// Load questions
function loadQuestions() {
    questionsContainer.innerHTML = '';
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('mb-3');
        questionDiv.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            ${q.options.map((opt, i) => `
                <div>
                    <input type="radio" name="question${index}" value="${i}" id="q${index}o${i}" required>
                    <label for="q${index}o${i}">${opt.answer}</label>
                </div>
            `).join('')}
        `;
        questionsContainer.appendChild(questionDiv);
    });
}

// Quiz form submission
document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let score = 0;

    questions.forEach((q, index) => {
        const answerIndex = formData.get(`question${index}`);
        if (answerIndex && q.options[answerIndex].isCorrect) {
            score++;
        }
    });

    if (currentUser) {
        const user = users.find(u => u.email === currentUser.email);
        if (user) user.score = Math.max(user.score, score);
    }

    displayResults(score);
    showPage(resultPage);
});

// Display results
function displayResults(score) {
    resultsContainer.innerHTML = `
        <p>Your Score: ${score}/${questions.length}</p>
        <h3>Answers</h3>
    `;
    questions.forEach((q, index) => {
        resultsContainer.innerHTML += `
            <p>${index + 1}. ${q.question}</p>
            <p>Correct Answer: ${q.options.find(opt => opt.isCorrect).answer}</p>
        `;
    });
}

// View ranking button
document.getElementById('view-ranking').addEventListener('click', function () {
    displayLeaderboard();
    showPage(dashboardPage);
});

// Display leaderboard
function displayLeaderboard() {
    const sortedUsers = [...users].sort((a, b) => b.score - a.score);
    dashboardContainer.innerHTML = `
        <table class="table">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                ${sortedUsers.map((user, index) => `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.score}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Back to Quiz button
document.getElementById('back-to-quiz').addEventListener('click', function () {
    const username = document.getElementById('username').value="";
    const email = document.getElementById('email').value="";
    showPage(loginPage);
});
