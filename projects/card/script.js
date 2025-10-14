// JavaScript для раскрывающегося блока с навыками
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleBtn');
    const additionalText = document.getElementById('additionalText');
    
    toggleBtn.addEventListener('click', function() {
        additionalText.classList.toggle('show');
        
        if (additionalText.classList.contains('show')) {
            toggleBtn.textContent = 'Скрыть подробности';
        } else {
            toggleBtn.textContent = 'Подробнее о навыках';
        }
    });
    
    // Плавная прокрутка для навигационных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});