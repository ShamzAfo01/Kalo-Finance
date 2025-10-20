const images = [
  "assets/Kalo page img.png"
];

const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('.lightbox__img');
const closeBtn = lightbox.querySelector('.lightbox__close');

function encodePath(path){
  return path.split('/').map(encodeURIComponent).join('/');
}

function filenameToCaption(path){
  const parts = path.split('/');
  return decodeURIComponent(parts[parts.length-1]).replace(/\.[^/.]+$/, '')
}

function renderGallery(){
  images.forEach(src => {
    const fig = document.createElement('figure');
    fig.className = 'card';

    const img = document.createElement('img');
    img.loading = 'lazy';
    img.src = encodePath(src);
    img.alt = filenameToCaption(src);

    const cap = document.createElement('figcaption');
    cap.className = 'caption';
    cap.textContent = filenameToCaption(src);

    fig.appendChild(img);
    fig.appendChild(cap);

    fig.addEventListener('click', () => openLightbox(src, img.alt));

    gallery.appendChild(fig);
  })
}

function openLightbox(src, alt){
  lightboxImg.src = encodePath(src);
  lightboxImg.alt = alt || '';
  lightbox.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(){
  lightbox.setAttribute('aria-hidden','true');
  lightboxImg.src = '';
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e)=>{
  if(e.target === lightbox) closeLightbox();
});
window.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape') closeLightbox();
});

renderGallery();
