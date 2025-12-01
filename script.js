document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        // Zmiana ikony hamburgera na 'X' i z powrotem
        const hamburgerIcon = hamburger.querySelector('.fa-bars');
        const closeIcon = document.createElement('i');
        closeIcon.className = 'fas fa-times';
        hamburger.appendChild(closeIcon);

        hamburger.addEventListener('click', () => {
            // Przełączanie klasy 'nav-active' do wysuwania menu
            navLinks.classList.toggle('nav-active');
            
            // Przełączanie widoczności ikon
            hamburger.classList.toggle('toggle');
        });
    }

    // Logika dla rozwijanego menu w trybie mobilnym
    // Zapobiega zamykaniu się menu po kliknięciu w sub-elementy
    const dropdowns = document.querySelectorAll('.main-nav .dropdown');

    dropdowns.forEach(dropdown => {
        // Po kliknięciu w "Oferta" na mobilnym, pokaż/ukryj podmenu
        const dropBtn = dropdown.querySelector('.drop-btn');

        // Tworzymy osobny event listener dla przycisku, aby nie kolidował z nawigacją
        const mobileToggle = document.createElement('span');
        mobileToggle.className = 'mobile-toggle';
        mobileToggle.innerHTML = ' <i class="fas fa-chevron-down"></i>';
        dropBtn.replaceWith(dropBtn.cloneNode(true)); // Klonujemy, by usunąć stare listenery
        
        // Nowy kod do obsługi rozwijania na mobile
        const newDropBtn = dropdown.querySelector('.drop-btn');
        newDropBtn.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault(); // Zapobiegaj przejściu do href="#"
                const menu = dropdown.querySelector('.dropdown-menu');
                
                // Prosta animacja rozwijania
                if (menu.style.display === 'block') {
                    menu.style.display = 'none';
                } else {
                    menu.style.display = 'block';
                }
            }
        });
    });
});
