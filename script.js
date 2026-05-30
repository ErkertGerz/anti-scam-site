// Прокрутка к игре
document.getElementById('game-scroll')?.addEventListener('click', () => {
    document.getElementById('game').scrollIntoView({ behavior: 'smooth' });
});

// Заглушка для уровней
document.querySelectorAll('.game-small-card, .game-large-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('🎮 Скоро здесь появится игра! Уровень в разработке.');
    });
});