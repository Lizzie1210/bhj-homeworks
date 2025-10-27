const tooltips = document.querySelectorAll('.has-tooltip');

const tooltipContainer = document.createElement('div');
tooltipContainer.classList.add('tooltip');
document.body.appendChild(tooltipContainer);

function showTooltip(e) {
    const tooltipText = e.target.getAttribute('title');
    
    tooltipContainer.textContent = tooltipText;
    tooltipContainer.classList.add('tooltip_active');
    
    const rect = e.target.getBoundingClientRect();
    const left = rect.left + rect.width + 10;
    const top = rect.top - 10;
    
    tooltipContainer.style.left = `${left}px`;
    tooltipContainer.style.top = `${top}px`;
}

function hideTooltip() {
    tooltipContainer.classList.remove('tooltip_active');
}

tooltips.forEach(tooltip => {
    tooltip.addEventListener('click', showTooltip);
    tooltip.addEventListener('mouseleave', hideTooltip);
});