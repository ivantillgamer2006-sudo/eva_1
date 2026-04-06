// ========== SCRIPT COMPLETO MYSPACE SCENE ==========

document.addEventListener('DOMContentLoaded', () => {
    // ========== CARRITO DE COMPRAS ==========
    const buyBtns = document.querySelectorAll('.btn-buy-scene');
    let cartCount = 0;
    
    const cartDisplay = document.createElement('div');
    cartDisplay.id = 'scene-cart-counter';
    cartDisplay.style.position = 'fixed';
    cartDisplay.style.bottom = '20px';
    cartDisplay.style.right = '20px';
    cartDisplay.style.backgroundColor = 'black';
    cartDisplay.style.color = 'hotpink';
    cartDisplay.style.border = '2px solid hotpink';
    cartDisplay.style.padding = '10px 15px';
    cartDisplay.style.borderRadius = '40px';
    cartDisplay.style.fontFamily = "'Press Start 2P', monospace";
    cartDisplay.style.fontSize = '12px';
    cartDisplay.style.zIndex = '999';
    cartDisplay.style.backdropFilter = 'blur(8px)';
    cartDisplay.innerHTML = `🛒 Carrito: 0`;
    document.body.appendChild(cartDisplay);

    function updateCartUI() {
        cartDisplay.innerHTML = `🛒 Carrito: ${cartCount}`;
        cartDisplay.style.transform = 'scale(1.1)';
        setTimeout(() => { cartDisplay.style.transform = 'scale(1)'; }, 200);
    }

    buyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const productName = btn.getAttribute('data-name') || 'peluche scene';
            const price = btn.getAttribute('data-price') || '0';
            cartCount++;
            updateCartUI();
            alert(`🖤 RAWr! Agregaste "${productName}" a tu carrito (demo).\nPrecio: $${parseInt(price).toLocaleString()}\nTotal items: ${cartCount} 🖤\n☆ MySpace never dies ☆`);
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => { btn.style.transform = 'scale(1)'; }, 150);
        });
    });

    // ========== FORMULARIO DE CONTACTO ==========
    const form = document.querySelector('.contact-form-scene');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = form.querySelector('input[name="name"]');
            alert(`✖ hell yeah ✖ ${nameInput.value || 'desconocidx'}! tu mensaje ha sido enviado a la bandeja de MySpace. \n★ te contestaremos con un glitter comment ★`);
            form.reset();
        });
    }

    // ========== ENLACES NO FUNCIONALES ==========
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => {
        if (link.href && (link.href.includes('#') || link.href.includes('javascript'))) {
            link.addEventListener('click', (e) => {
                if (link.getAttribute('href') !== '#productos' && link.getAttribute('href') !== '#contacto') {
                    e.preventDefault();
                    alert('⚠️ Enlace demo MySpace 2006 ⚠️\n"Under Construction" - vuelve pronto!');
                }
            });
        }
    });

    // ========== REPRODUCTOR DE AUDIO ==========
    let audioPlayer = document.getElementById('sceneAudio');
    if (audioPlayer) {
        audioPlayer.volume = 0.5;
        
        const volumeSlider = document.getElementById('volumeSlider');
        if (volumeSlider) {
            volumeSlider.addEventListener('input', (e) => {
                audioPlayer.volume = e.target.value / 100;
                const volIcon = document.getElementById('volIcon');
                if (volIcon) {
                    if (audioPlayer.volume === 0) volIcon.className = 'fas fa-volume-mute';
                    else if (audioPlayer.volume < 0.5) volIcon.className = 'fas fa-volume-down';
                    else volIcon.className = 'fas fa-volume-up';
                }
            });
        }
    }
});

// Funciones globales para el reproductor
function playMusic() {
    const audio = document.getElementById('sceneAudio');
    if (audio) {
        audio.play();
        showNowPlayingNotification();
    }
}

function pauseMusic() {
    const audio = document.getElementById('sceneAudio');
    if (audio) audio.pause();
}

function stopMusic() {
    const audio = document.getElementById('sceneAudio');
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}

function activarMusica() {
    const audio = document.getElementById('sceneAudio');
    if (audio) {
        audio.play().then(() => {
            const btn = document.querySelector('.activate-music-btn');
            if (btn) btn.style.display = 'none';
            showNowPlayingNotification();
        }).catch(error => {
            alert('⚠️ Haz clic en el botón PLAY del reproductor ⚠️');
        });
    }
}

function showNowPlayingNotification() {
    const notif = document.createElement('div');
    notif.className = 'myspace-notification';
    notif.innerHTML = '🎸 ♪ NOW PLAYING: Lucky.mp3 - MySpace emo radio ♪ 🎸';
    notif.style.position = 'fixed';
    notif.style.bottom = '100px';
    notif.style.left = '20px';
    notif.style.backgroundColor = '#ff1493';
    notif.style.color = 'black';
    notif.style.padding = '8px 15px';
    notif.style.borderRadius = '30px';
    notif.style.fontFamily = "'Press Start 2P', monospace";
    notif.style.fontSize = '0.6rem';
    notif.style.zIndex = '999';
    notif.style.border = '2px solid white';
    notif.style.animation = 'fadeOut 3s forwards';
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.remove();
    }, 3000);
}

// Agregar animación CSS para la notificación
const styleSheet = document.createElement("style");
styleSheet.textContent = `
    @keyframes fadeOut {
        0% { opacity: 1; transform: translateX(0); }
        70% { opacity: 1; transform: translateX(0); }
        100% { opacity: 0; transform: translateX(-50px); display: none; }
    }
    .myspace-notification {
        animation: fadeOut 3s forwards;
    }
`;
document.head.appendChild(styleSheet);

console.log('☆ MySpace Scene Plushies ☆ | xX_PlushieCore_Xx | Audio: Lucky.mp3 listo');