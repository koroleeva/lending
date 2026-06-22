document.addEventListener('DOMContentLoaded', function() {
    console.log('burger.js loaded');
    
    const burgerIcon = document.querySelector('.burger-icon');
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerClose = document.querySelector('.burger-close'); // ← добавил
    
    if (!burgerIcon) {
        console.error('burger-icon not found');
        return;
    }
    
    if (!burgerMenu) {
        console.error('burger-menu not found');
        return;
    }
    
    console.log('Both elements found, attaching event');

    function closeMenu() {
        burgerMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
        console.log('Menu closed');
    }

    function openMenu() {
        burgerMenu.classList.add('active');
        document.body.classList.add('menu-open');
        console.log('Menu opened');
    }

    // Клик по бургер-иконке
    burgerIcon.onclick = function(e) {
        e.stopPropagation();
        console.log('Burger clicked');
        if (burgerMenu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    // Клик по крестику (если есть)
    if (burgerClose) {
        burgerClose.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('Close button clicked');
            closeMenu();
        });
    }

    // Клик по ссылкам в меню
    const burgerLinks = burgerMenu.querySelectorAll('a');
    burgerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Burger link clicked, closing menu');
            closeMenu();
        });
    });

    // Клик вне меню
    document.addEventListener('click', function(e) {
        if (burgerMenu.classList.contains('active')) {
            if (!burgerMenu.contains(e.target) && !burgerIcon.contains(e.target)) {
                closeMenu();
            }
        }
    });

    // Закрытие при изменении размера окна (если стало больше 1440px)
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 1440 && burgerMenu.classList.contains('active')) {
            closeMenu();
        }
    });
});