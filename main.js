// --- CUSTOM CURSOR LOGIC ---
        const cursorDot = document.querySelector('[data-cursor-dot]');
        const cursorOutline = document.querySelector('[data-cursor-outline]');
        const interactiveElements = document.querySelectorAll('[data-hover]');

        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Dot suit instantanément
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Outline suit avec un délai (effet fluide)
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });
        
    document.addEventListener('DOMContentLoaded', () => {
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                // Bascule la classe 'active' sur l'élément FAQ
                item.classList.toggle('active');
                
                // Gère l'affichage/la masquage de la réponse
                const answer = item.querySelector('.faq-answer');
                const plusSign = item.querySelector('.faq-question span');
                
                if (item.classList.contains('active')) {
                    // Ouvre la réponse
                    answer.style.maxHeight = answer.scrollHeight + "px";
                    plusSign.textContent = '–'; // Change le + en -
                } else {
                    // Ferme la réponse
                    answer.style.maxHeight = '0';
                    plusSign.textContent = '+'; // Change le - en +
                }
            });
        });
    });



        // Effet quand on survole un élément interactif
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
        });
        
        

        // --- CHATBOT LOGIC ---
        const chatToggle = document.getElementById('chatToggle');
        const chatWindow = document.getElementById('chatWindow');
        const closeChat = document.getElementById('closeChat');

        chatToggle.addEventListener('click', () => {
            const isHidden = chatWindow.style.display === 'none' || chatWindow.style.display === '';
            chatWindow.style.display = isHidden ? 'flex' : 'none';
            chatWindow.classList.toggle('active');
        });

        closeChat.addEventListener('click', () => {
            chatWindow.style.display = 'none';
        });
        
        