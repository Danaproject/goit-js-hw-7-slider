import './css/style.css'
import Slider from './js/slider/index.js';
import Modal from './js/modal-gallery/index.js';
import imageList from './js/images.js';

const btn = document.querySelector('.show-modal');
const modal = new Modal('#modal');
const prevBtnRef = document.querySelector('.move-prev');
const nextBtnRef = document.querySelector('.move-next');
const slider = new Slider('#gallery', imageList);
slider.init();

btn.addEventListener('click', () => {
  modal.open();
  /** если надо можем переходить по индексу слайда */
  // slider.moveTo(2);
});

prevBtnRef.addEventListener('click', () => slider.movePrev());
nextBtnRef.addEventListener('click', () => slider.moveNext());