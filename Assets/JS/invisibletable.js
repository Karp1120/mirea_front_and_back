const toggleButton = document.getElementById('toggleLecturesBtn');
const tableContainer = document.getElementById('lecturesTableContainer');

toggleButton.addEventListener('click', () => {
    if (tableContainer.classList.contains('hidden')) {
        tableContainer.classList.remove('hidden');
        tableContainer.classList.add('visible');
        toggleButton.textContent = 'Скрыть таблицу';
    } else {
        tableContainer.classList.remove('visible');
        tableContainer.classList.add('hidden');
        toggleButton.textContent = 'Показать таблицу';
    }
});
