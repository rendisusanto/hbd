function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'zahra' && password === 'ultah123') {
      sessionStorage.setItem('loggedIn', 'true');
      window.location.href = 'home.html';
    } else {
      alert('Username atau Password salah!');
    }
  }
  
  function logout() {
    sessionStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
  }
  
  function startPage() {
    if (sessionStorage.getItem('loggedIn') !== 'true') {
      window.location.href = 'login.html';
    }
    startMusic();
    startFireworks();
    document.getElementById('welcomeModal').style.display = 'flex';
    loadGallery();
  }
  
  // Musik
  function startMusic() {
    const music = document.getElementById('backgroundMusic');
    music.play();
  }
  
  function toggleMusic() {
    const music = document.getElementById('backgroundMusic');
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  }
  
  // Modal Welcome
  function closeModal() {
    document.getElementById('welcomeModal').style.display = 'none';
  }
  
  // Tema
  let isPink = true;
  function toggleTheme() {
    const body = document.body;
    if (isPink) {
      body.style.background = "linear-gradient(135deg, #8e9eab, #eef2f3)";
    } else {
      body.style.background = "linear-gradient(135deg, #ff9a9e, #fad0c4, #fbc2eb, #a18cd1)";
    }
    isPink = !isPink;
  }
  
  // Load Gallery Otomatis
  function loadGallery() {
    const galleryContainer = document.getElementById('galleryContainer');
    
    const totalImages = 20; // << kamu bisa ubah sesuai jumlah foto
    for (let i = 1; i <= totalImages; i++) {
      const img = document.createElement('img');
      img.src = `images/${i}.jpg`;
      img.alt = `Foto ${i}`;
      img.classList.add('gallery-image');
      img.onclick = function() {
        openLightbox(img.src);
      };
      galleryContainer.appendChild(img);
    }
  }
  
  const quotes = [
    "Hari ini adalah awal dari semua hal luar biasa. 🌸",
    "Tetaplah bersinar dengan senyummu yang indah! ✨",
    "Semoga langkahmu selalu dipenuhi kebahagiaan. 🎈",
    "Percayalah, masa depanmu cerah dan penuh harapan! 🌟",
    "Kamu lebih kuat dan lebih hebat dari yang kamu pikirkan! 💖",
    "Teruslah bermimpi besar, Zahhh! 🚀",
    "Dunia membutuhkan kebaikanmu. Tetaplah menjadi dirimu. 🌷",
    "Kamu layak mendapatkan semua cinta dan kebahagiaan ini. 🎉",
    "Nikmati setiap detik kehidupanmu, karena kamu istimewa! 💫"
  ];
  
  function generateQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quoteText').innerText = quote;
  }
  
  // panggil generateQuote() pertama kali saat buka halaman
  window.addEventListener('load', generateQuote);
  




// Fungsi untuk membuka amplop dan menampilkan pesan
function openEnvelope(envelopeNumber) {
    const messageModal = document.getElementById('messageModal');
    const messageText = document.getElementById('messageText');
  
    // Sesuaikan pesan berdasarkan amplop yang dibuka
    if (envelopeNumber === 1) {
      messageText.innerText = "Selamat Ulang Tahun Zahrotussyita! Semoga panjang umur dan selalu bahagia! 🎉";
    } else if (envelopeNumber === 2) {
      messageText.innerText = "Sory lek uangnya belom ke kumpul buat beli BMW 🚘";
    }
  
    // Tampilkan modal dengan pesan
    messageModal.style.display = 'flex';
  }
  
  // Fungsi untuk menutup modal pesan
  function closeMessage() {
    document.getElementById('messageModal').style.display = 'none';
  }
  