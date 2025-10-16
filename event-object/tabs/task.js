document.querySelectorAll('.tabs').forEach(tabsContainer => {
  const tabButtons = tabsContainer.querySelectorAll('.tab');
  const tabContents = tabsContainer.querySelectorAll('.tab__content');

  tabButtons.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('tab_active'));
      tabContents.forEach(content => content.classList.remove('tab__content_active'));

      tab.classList.add('tab_active');
      tabContents[index].classList.add('tab__content_active');
    });
  });
});
