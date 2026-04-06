// script.js - Interacciones estilo 2000s, carrito mock y alertas "rawr"

document.addEventListener('DOMContentLoaded', () => {
    // Botones de compra con estilo scene
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
            // alerta rawr
            alert(`🖤 RAWr! Agregaste "${productName}" a tu carrito (demo).\nPrecio: $${parseInt(price).toLocaleString()}\nTotal items: ${cartCount} 🖤\n☆ MySpace never dies ☆`);
            // efecto vibrar botón
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => { btn.style.transform = 'scale(1)'; }, 150);
        });
    });

    // Formulario de contacto con mensaje escene
    const form = document.querySelector('.contact-form-scene');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = form.querySelector('input[name="name"]');
            alert(`✖ hell yeah ✖ ${nameInput.value || 'desconocidx'}! tu mensaje ha sido enviado a la bandeja de MySpace. \n★ te contestaremos con un glitter comment ★`);
            form.reset();
        });
    }

    // Enlaces no funcionales con alerta nostálgica
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

    // Efecto de "skull" hover en el título
    const title = document.querySelector('.scene-title');
    if (title) {
        title.addEventListener('mouseenter', () => {
            title.style.textShadow = '0 0 15px white, 0 0 30px magenta';
        });
        title.addEventListener('mouseleave', () => {
            title.style.textShadow = '3px 3px 0px white';
        });
    }

    console.log('☆ MySpace Scene Plushies ☆ | xX_rawr_Xx');
});