function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    lightbox.style.display = 'flex';
    lightboxImg.src = src;
  }
  
  function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
  }
  
  