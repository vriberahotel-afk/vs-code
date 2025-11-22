// Анимация элементов при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Анимация карточек товаров
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 300 + index * 100);
    });
    
    // Анимация таймлайна
    const timelineSteps = document.querySelectorAll('.timeline-step');
    timelineSteps.forEach((step, index) => {
        step.style.opacity = '0';
        
        setTimeout(() => {
            step.style.transition = 'opacity 0.5s ease';
            step.style.opacity = '1';
        }, 800 + index * 200);
    });
});