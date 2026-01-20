// Обработка кликов по разделам
        document.addEventListener('DOMContentLoaded', function() {
            const sectionItems = document.querySelectorAll('.section-item');
            const cartSection = document.querySelector('.cart-section');
            
            sectionItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Удаляем активный класс у всех
                    sectionItems.forEach(i => i.classList.remove('active'));
                    
                    // Добавляем активный класс текущему
                    this.classList.add('active');
                    
                    console.log('Выбран раздел:', this.textContent);
                });
            });
            
            // Обработка клика по корзине
            cartSection.addEventListener('click', function() {
                console.log('Переход в корзину');
                alert('Переход в корзину (3 товара)');
            });
            
            // Имитация загрузки данных
            setTimeout(() => {
                console.log('Шапка загружена');
            }, 100);
        });
// Создание пузырьков
function createBubbles() {
    const bubblesContainer = document.getElementById('bubbles-container');
    if (!bubblesContainer) return;
    
    // Очищаем существующие пузырьки
    bubblesContainer.innerHTML = '';
    
    // Создаем 30 пузырьков (в 2 раза больше)
    for (let i = 0; i < 30; i++) {
        const bubble = document.createElement('div');
        
        // Распределяем размеры: 40% больших, 40% средних, 20% маленьких
        const sizeType = Math.random();
        let size, className, animationTime;
        
        if (sizeType < 0.4) {
            // Большие пузыри (40-80px)
            size = Math.random() * 40 + 40;
            className = 'large';
            animationTime = Math.random() * 10 + 20; // 20-30 секунд
        } else if (sizeType < 0.8) {
            // Средние пузыри (25-45px)
            size = Math.random() * 20 + 25;
            className = 'medium';
            animationTime = Math.random() * 8 + 15; // 15-23 секунды
        } else {
            // Маленькие пузыри (8-20px)
            size = Math.random() * 12 + 8;
            className = 'small';
            animationTime = Math.random() * 7 + 10; // 10-17 секунд
        }
        
        bubble.classList.add('bubble', className);
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        // Случайная позиция по горизонтали
        bubble.style.left = `${Math.random() * 100}%`;
        
        // Случайная задержка анимации
        bubble.style.animationDelay = `${Math.random() * 15}s`;
        
        // Случайная продолжительность анимации
        bubble.style.animationDuration = `${animationTime}s`;
        
        // Случайная прозрачность
        const opacity = Math.random() * 0.25 + 0.05;
        bubble.style.opacity = opacity;
        
        // Добавляем больше вариаций в движение
        const translateX = Math.random() * 200 - 100;
        bubble.style.setProperty('--translate-x', `${translateX}px`);
        
        // Случайное начальное смещение
        const startX = Math.random() * 100 - 50;
        bubble.style.transform = `translateX(${startX}px)`;
        
        bubblesContainer.appendChild(bubble);
    }
    
    // Добавляем еще 10 очень больших пузырей
    for (let i = 0; i < 10; i++) {
        const megaBubble = document.createElement('div');
        megaBubble.classList.add('bubble', 'large');
        
        // Очень большие пузыри (60-100px)
        const megaSize = Math.random() * 40 + 60;
        megaBubble.style.width = `${megaSize}px`;
        megaBubble.style.height = `${megaSize}px`;
        
        // Очень прозрачные
        megaBubble.style.opacity = Math.random() * 0.1 + 0.03;
        
        // Медленные
        megaBubble.style.animationDuration = `${Math.random() * 20 + 30}s`;
        megaBubble.style.animationDelay = `${Math.random() * 20}s`;
        
        // По всему экрану
        megaBubble.style.left = `${Math.random() * 100}%`;
        
        bubblesContainer.appendChild(megaBubble);
    }
}

// Создаем дополнительные динамические пузырьки
function createDynamicBubbles() {
    const bubblesContainer = document.getElementById('bubbles-container');
    if (!bubblesContainer) return;
    
    // Функция для создания одного случайного пузырька
    const createRandomBubble = () => {
        const bubble = document.createElement('div');
        const size = Math.random() * 50 + 20; // 20-70px
        
        bubble.classList.add('bubble');
        if (size > 50) bubble.classList.add('large');
        else if (size > 30) bubble.classList.add('medium');
        else bubble.classList.add('small');
        
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.opacity = Math.random() * 0.2 + 0.05;
        bubble.style.animationDuration = `${Math.random() * 15 + 15}s`;
        bubble.style.animationDelay = '0s';
        
        bubblesContainer.appendChild(bubble);
        
        // Удаляем пузырек после завершения анимации
        setTimeout(() => {
            if (bubble.parentNode === bubblesContainer) {
                bubblesContainer.removeChild(bubble);
            }
        }, 30000); // Чуть больше максимального времени анимации
    };
    
    // Создаем пузырьки каждые 500-1500ms
    setInterval(createRandomBubble, Math.random() * 1000 + 500);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    createBubbles();
    createDynamicBubbles(); // Добавляем динамическое создание
    
    // ... остальной код ...
    
    // Пересоздаем базовые пузырьки при изменении размера окна
    window.addEventListener('resize', createBubbles);
});