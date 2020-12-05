let overallStress = 0;
let questionValue = 0;
let questions = [
    'Have you eaten in the last three hours?',
    'Have you showered in the past day?',
    'Have you stretched your legs in the past day?',
    'Have you said something nice to someone in the past day?',
    'Have you moved your body to music in the past day?',
    'Have you cuddled a living being in the past two days?',
    'Have you seen a therapist in the past few days?',
    'Have you changed any of your medications in the past couple of weeks, including skipped doses or a change in generic prescription brand?',
    'If daytime, are you dressed?',
    'If nighttime: are you sleepy and fatigued but resisting going to sleep?',
    'Do you feel ineffective?',
    'Do you feel unattractive?',
    'Do you feel paralyzed by indecision?',
    'Have you over-exerted yourself lately- physically, emotionally, socially, or intellectually?',
    'Have you waited a week?'
];

function nextQuestion(answerValue) {
    let question = document.getElementById('question');
    let x = document.getElementsByTagName('input');
    overallStress += answerValue;
    questionValue++;
    question.style.animation = 'fade-out-bottom 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
    setTimeout(next, 100)
    function next() {
        if (questionValue >= questions.length) {
            document.getElementById('questionText').textContent = 'Your Stress Score is' + ' ' + overallStress;
            for (y = 0; y < x.length; y++) {
                x[y].style.display = 'none';
            }
            question.style.animation = 'fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'
        }
        else {
            document.getElementById('questionText').textContent = questions[questionValue - 1];
            question.style.animation = 'fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'
        }
    }
}