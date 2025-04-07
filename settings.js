// Завантаження збереженої теми при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function() {
    loadSavedTheme();
    
    // Відсікаємо стилізацію превью тем від основних стилів сайту
    document.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.theme-option').forEach(opt => {
                opt.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});

// Функція для завантаження збереженої теми
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('zypherionTheme') || 'blue';
    setActiveTheme(savedTheme);
}

// Функція для встановлення активної теми
function setActiveTheme(themeName) {
    // Прибрати всі класи тем з body
    document.body.classList.remove('theme-blue', 'theme-purple', 'theme-turquoise');
    
    // Прибрати active клас з усіх опцій тем
    document.querySelectorAll('.theme-option').forEach(option => {
        option.classList.remove('active');
    });
    
    // Додати відповідний клас до body і встановити active на обрану опцію
    if (themeName === 'purple') {
        document.body.classList.add('theme-purple');
        document.getElementById('purpleTheme').classList.add('active');
    } else if (themeName === 'turquoise') {
        document.body.classList.add('theme-turquoise');
        document.getElementById('turquoiseTheme').classList.add('active');
    } else {
        // За замовчуванням синя тема
        document.body.classList.add('theme-blue');
        document.getElementById('blueTheme').classList.add('active');
    }
    
    // Переконатися, що логотип правильно оновився
    updateLogoGradient();
}

// Функція для оновлення градієнта логотипу
function updateLogoGradient() {
    // Переконуємося, що градієнт логотипу оновлюється відразу
    const logoText = document.querySelector('.logo-text');
    logoText.style.animation = 'none';
    logoText.offsetHeight; // Тригер reflow
    logoText.style.animation = 'shimmer 4s linear infinite';
}

// Обробники для вибору теми
document.getElementById('blueTheme').addEventListener('click', function() {
    setActiveTheme('blue');
    localStorage.setItem('zypherionTheme', 'blue');
});

document.getElementById('purpleTheme').addEventListener('click', function() {
    setActiveTheme('purple');
    localStorage.setItem('zypherionTheme', 'purple');
});

document.getElementById('turquoiseTheme').addEventListener('click', function() {
    setActiveTheme('turquoise');
    localStorage.setItem('zypherionTheme', 'turquoise');
});

// Обробник кнопки "Зберегти"
document.getElementById('saveSettings').addEventListener('click', function() {
    // Показати повідомлення про успішне збереження
    const saveMsg = document.getElementById('saveMessage');
    saveMsg.classList.add('show');
    
    // Сховати повідомлення через 3 секунди
    setTimeout(function() {
        saveMsg.classList.remove('show');
    }, 3000);
});

// Мобільне меню
document.getElementById('menuToggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('mobileNav').classList.toggle('active');
    
    if (this.classList.contains('active')) {
        this.children[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        this.children[1].style.opacity = '0';
        this.children[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        this.children[0].style.transform = 'none';
        this.children[1].style.opacity = '1';
        this.children[2].style.transform = 'none';
    }
});
