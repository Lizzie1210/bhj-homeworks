document.querySelectorAll('.dropdown').forEach(dropdown => {
    const valueEl = dropdown.querySelector('.dropdown__value');
    const listEl = dropdown.querySelector('.dropdown__list');
    const links = dropdown.querySelectorAll('.dropdown__link');

    valueEl.addEventListener('click', () => {
        listEl.classList.toggle('dropdown__list_active');
    });

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            valueEl.textContent = link.textContent; 
            listEl.classList.remove('dropdown__list_active');
        });
    });
});