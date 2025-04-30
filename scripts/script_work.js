document.addEventListener('DOMContentLoaded', function () {
  const workUnits = document.querySelectorAll('.work-unit');
  const modals = document.querySelectorAll('.modal');

  workUnits.forEach(unit => {
    unit.addEventListener('click', () => {
      const modalId = unit.getAttribute('data-modal-target');
      const modal = document.querySelector(modalId);
      if (modal) {
        modal.style.display = 'flex';
      }
    });
  });

  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        modal.style.display = 'none';
      }
    });
  });
});


