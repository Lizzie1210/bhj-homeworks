const tooltips = document.querySelectorAll('.has-tooltip');

const tooltipContainer = document.createElement('div');
tooltipContainer.classList.add('tooltip');
document.body.appendChild(tooltipContainer);

function showTooltip(event) {
    event.preventDefault(); 

    const target = event.target;
    const tooltipText = target.getAttribute('title');

    if (tooltipContainer.textContent === tooltipText && tooltipContainer.classList.contains('tooltip_active')) {
        tooltipContainer.classList.remove('tooltip_active');
        return;
    }

    tooltipContainer.textContent = tooltipText;
    tooltipContainer.classList.add('tooltip_active');

    const rect = target.getBoundingClientRect();

    const left = rect.left;
    const top = rect.bottom + 5; 

    tooltipContainer.style.left = `${left}px`;
    tooltipContainer.style.top = `${top}px`;
}

tooltips.forEach(tooltip => {
    tooltip.addEventListener('click', showTooltip);
});
