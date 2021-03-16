import './css/style.css'
import Slider from './js/slider/index.js';
import Modal from './js/modal-gallery/index.js';
import imageList from './js/images.js';
import thumbnailsTpl from './js/templates/galleryThumbnails.js'

const btn = document.querySelector('.show-modal');
const modal = new Modal('#modal');
const prevBtnRef = document.querySelector('.move-prev');
const nextBtnRef = document.querySelector('.move-next');
const thumbnailsRef = document.querySelector('.gallery-thumbnails');
const slider = new Slider('#gallery', imageList);
slider.init();

btn.addEventListener('click', () => {
  modal.open();
  /** если надо можем переходить по индексу слайда */
  // slider.moveTo(2);
});

prevBtnRef.addEventListener('click', () => slider.movePrev());
nextBtnRef.addEventListener('click', () => slider.moveNext());

thumbnailsRef.innerHTML = thumbnailsTpl(imageList);
thumbnailsRef.addEventListener('click', (event) => {
  const { target } = event;
  if (target.hasAttribute('data-id')) {
    const { id } = target.dataset;
    slider.moveTo(id);
  }
});