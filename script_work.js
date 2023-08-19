document.addEventListener('DOMContentLoaded', function () {
  const imgWraps = document.querySelectorAll('.img-wrap');
  const modals = document.querySelectorAll('.modal');

  imgWraps.forEach(imgWrap => {
    imgWrap.addEventListener('click', () => {
      const modalId = imgWrap.getAttribute('data-modal-target');
      document.querySelector(modalId).style.display = 'flex';
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
