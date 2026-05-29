const trapLink = document.getElementById('trap-link');
const modal = document.getElementById('warning-modal');
const continueBtn = document.getElementById('continue-btn');

trapLink.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'block';
});

continueBtn.addEventListener('click', function() {
    window.location.href = 'main.html';
});