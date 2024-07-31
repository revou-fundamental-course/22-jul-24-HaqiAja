// ini js
document.addEventListener('DOMContentLoaded', function() {
    // Menambahkan event listener ke setiap tautan navigasi yang memiliki hash
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Mencegah perilaku default link
  
        const targetId = this.getAttribute('href').substring(1); // Mendapatkan ID target dari href
        const targetElement = document.getElementById(targetId); // Mendapatkan elemen target berdasarkan ID
  
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth' // Mengatur scroll halus
          });
        }
      });
    });
  
    // Menangani pengiriman formulir kontak
    document.querySelector('.form-container form').addEventListener('submit', function(e) {
      e.preventDefault(); // Mencegah pengiriman formulir default
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const interest = document.getElementById('interest').value;
  
      // Validasi formulir
      if (!name || !email || !interest) {
        alert('Silakan isi form yang kosong.');
        return;
      }
  
      // Validasi format email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Silakan masukkan alamat email yang valid.');
        return;
      }
  
      // Jika formulir valid, lakukan aksi (misalnya, kirim data atau tampilkan pesan)
      alert(`Terimakasih, ${name}. Kami akan menghubungi Anda di ${email} mengenai minat anda pada ${interest}. Terimakasih telah mempercayai Agent kami, semoga perjalanan anda lancar dan bahagia.`);
  
      // Reset formulir setelah pengiriman
      this.reset();
    });
  });
  
  // Fungsi untuk membuka peta Bali di Maps
  function bali() {
    alert('Bali package details');
    var url = 'https://www.bing.com/maps?q=Bali&satid=id.sid%3Ac4f6d9fa-e141-4316-1f4b-6dff75b71985&FORM=KC2MAP&cp=-8.455991%7E115.070652&lvl=9.8';
    window.open(url, '_blank'); // Membuka URL dalam tab baru
  }
  
  // Fungsi untuk membuka peta Jepang di Maps
  function jepang() {
    alert('Jepang package details');
    var url = 'https://www.bing.com/maps?mepi=25%7E%7ETopOfPage%7EMap_Image&ty=18&q=Japan&satid=id.sid%3A130d0438-fafb-cd2d-1a9e-1dd9c5aa87a9&ppois=36.65415573120117_137.9765625_Japan_%7E&cp=36.654098%7E138.146896&v=2&sV=1&FORM=MIRE&lvl=11.0';
    window.open(url, '_blank'); // Membuka URL dalam tab baru
  }
  
  // Fungsi untuk membuka peta Singapura di Maps
  function singapura() {
    alert('Singapura package details');
    var url = 'https://www.bing.com/maps?q=Singapore&satid=id.sid%3Af5ffb882-7230-f3fe-7141-cde5f4b5ed1a&FORM=KC2MAP&cp=1.318586%7E103.841743&lvl=11.1';
    window.open(url, '_blank'); // Membuka URL dalam tab baru
  }
  
  // Fungsi untuk membuka peta Bandung di Maps
  function bandung() {
    alert('Bandung package details');
    var url = 'https://www.bing.com/maps?q=Bandung&satid=id.sid%3Aed67fa8f-ea47-ab3d-d5cc-730be457c2e0&FORM=KC2MAP&cp=-6.903299~107.695775&lvl=12.6';
    window.open(url, '_blank'); // Membuka URL dalam tab baru
  }
  
  // Fungsi untuk membuka peta Surabaya di Maps
  function surabaya() {
    alert('Surabaya package details');
    var url = 'https://www.bing.com/maps?q=Surabaya&satid=id.sid%3A39447d74-ad88-b8fe-9c7b-b46d0c188f4d&FORM=KC2MAP';
    window.open(url, '_blank'); // Membuka URL dalam tab baru
  }
  
  // Fungsi untuk membuka peta Arab Saudi di Maps
  function saudiArabia() {
    alert('Saudi Arabia package details');
    var url = 'https://www.bing.com/maps?q=Saudi+Arabia&satid=id.sid%3A672bc136-22f9-3750-0459-2fbd2340f892&FORM=KC2MAP&cp=24.512817%7E45.080927&lvl=5.5';
    window.open(url, '_blank'); // Membuka URL dalam tab baru
  }
  
  // Fungsi untuk membuka peta Jakarta di Maps
  function jakarta() {
    alert('Jakarta package details');
    var url = 'https://www.bing.com/maps?mepi=111%7E%7EUnknown%7EMap_Image&ty=18&q=Jakarta&satid=id.sid%3A6261fc72-a172-5cdd-9c67-a7644a026c29&ppois=-6.175_106.8275_Jakarta_%7E&cp=-6.174689%7E106.997223&v=2&sV=1&FORM=MPSRPL&lvl=11.0';
    window.open(url, '_blank'); // Membuka URL dalam tab baru
  }
  
  // Fungsi untuk membuka peta Russia di Maps
  function russia() {
    alert('Russia package details');
    var url = 'https://www.bing.com/maps?q=Moscow&satid=id.sid%3A6bb559e5-6af9-adf8-d8bc-7f999aba8a3a&FORM=KC2MAP&cp=55.742906%7E38.002235&lvl=9.8';
    window.open(url, '_blank'); // Membuka URL dalam tab baru
  }
  
  // Fungsi untuk membuka peta Prancis di Maps
  function prancis() {
    alert('Prancis package details');
    var url = 'https://www.bing.com/maps?q=Paris&satid=id.sid%3A85584d24-2116-5b98-89f9-5714db931ac6&FORM=KC2MAP&cp=48.863259%7E2.34318&lvl=9.4';
    window.open(url, '_blank'); // Membuka URL dalam tab baru
  }
  
  // Fungsi untuk membuka halaman dukungan Google Chat di tab baru
  function call() {
    var url = 'https://support.google.com/chatsupport/?hl=en';
    window.open(url, '_blank'); // Membuka URL dalam tab baru
  }
  