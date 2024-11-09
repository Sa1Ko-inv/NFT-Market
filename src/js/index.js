// script.js
document.getElementById('toggleButton-btn').addEventListener('click', function() {
    const content = document.getElementById('content');
    const contentContainer = document.getElementById('contentContainer');
    const discovered = document.getElementById('discover');
    const arrowIcon = this.querySelector('img');

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        discovered.style.paddingBottom = '104px'; // Добавляем отступ внизу
        arrowIcon.style.transform = 'rotate(180deg)'; // Поворачиваем стрелку вверх
    } else {
        content.classList.add('hidden');
        discovered.style.paddingBottom = '0'; // Убираем отступ внизу
        arrowIcon.style.transform = 'rotate(0deg)'; // Возвращаем стрелку вниз
    }
});
