const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const photoLightbox = document.getElementById('photo-lightbox');
const photoLightboxImg = document.getElementById('photo-lightbox-img');
const photoLightboxCaption = document.getElementById('photo-lightbox-caption');
const photoLightboxClose = document.getElementById('photo-lightbox-close');

function openPhotoLightbox(src, caption) {
  if (!photoLightbox || !photoLightboxImg) return;
  photoLightboxImg.src = src;
  photoLightboxImg.alt = caption;
  if (photoLightboxCaption) photoLightboxCaption.textContent = caption;
  photoLightbox.hidden = false;
  document.body.style.overflow = 'hidden';
  photoLightboxClose?.focus();
}

function closePhotoLightbox() {
  if (!photoLightbox || !photoLightboxImg) return;
  photoLightbox.hidden = true;
  photoLightboxImg.src = '';
  document.body.style.overflow = '';
}

document.querySelectorAll('.pet-photo-trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const src = trigger.getAttribute('data-photo');
    const caption = trigger.textContent.trim();
    if (src) openPhotoLightbox(src, caption);
  });
});

photoLightboxClose?.addEventListener('click', closePhotoLightbox);

photoLightbox?.addEventListener('click', (event) => {
  if (event.target === photoLightbox) closePhotoLightbox();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && photoLightbox && !photoLightbox.hidden) {
    closePhotoLightbox();
  }
});
