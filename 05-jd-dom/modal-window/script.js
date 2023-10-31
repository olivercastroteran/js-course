'use strict';

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const openModalBtns = document.querySelectorAll('.show-modal');

const toggleModal = () => {
  overlay.classList.toggle('hidden');
  modal.classList.toggle('hidden');
};

for (let i = 0; i < openModalBtns.length; i++) {
  openModalBtns[i].addEventListener('click', toggleModal);
}

overlay.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) toggleModal();
});
