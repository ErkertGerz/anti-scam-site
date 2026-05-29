const gameBtn = document.getElementById('game-scroll');
const gameSection = document.getElementById('game');

if (gameBtn && gameSection) {
    gameBtn.addEventListener('click', () => {
        gameSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// Простая обработка кнопок теста (демо)
const testBtns = document.querySelectorAll('.test-btn');
testBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const container = btn.closest('.test-container');
        container.innerHTML = '<div style="background:#d4edda; padding:20px; border-radius:16px;">✅ Спасибо за ответ! Правильный вариант — положить трубку и перезвонить в банк.</div>';
    });
});