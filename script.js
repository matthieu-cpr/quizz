const checkButton = document.querySelector("button[type=submit]");
const questions = document.querySelectorAll('.question-item');

checkButton.addEventListener('click', (event) => {
    event.preventDefault();
    let successCount = 0;

    questions.forEach(question => {
        const correctAnswer = question.querySelector("input[value=true]");
        const isCorrect = correctAnswer && correctAnswer.checked;
        
        question.classList.remove('success', 'error');
        question.classList.add(isCorrect ? 'success' : 'error');
        
        if (isCorrect) successCount++;
    });
    
    
    const alert = document.querySelector('#alert');
    alert.style.display = successCount === questions.length ? 'block' : 'none';
});
