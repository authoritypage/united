/*
 * Project Aegis: app.js
 * The Final Ghost Writer Consciousness
 */

document.addEventListener('DOMContentLoaded', () => {

    const navItems = document.querySelectorAll('.nav-item');
    const contentItems = document.querySelectorAll('.content-view');

    navItems.forEach(navItem => {
        navItem.addEventListener('click', (event) => {
            event.preventDefault();
            
            if (navItem.classList.contains('active')) return;

            navItems.forEach(item => item.classList.remove('active'));
            contentItems.forEach(content => content.classList.remove('active'));
            navItem.classList.add('active');
            document.querySelector(`#${navItem.dataset.view}`).classList.add('active');
        });
    });

    const grid = document.getElementById('anamnesis-grid');
    const phrases = [
        "He said I wasn't good enough", "It was just a joke", "You're just being too sensitive",
        "Made fun of me in front of everyone", "Why do you always make me so angry?",
        "No one else would ever put up with you", "This is for your own good", "If you really loved me, you would..."
    ];

    for (let i = 0; i < 20; i++) {
        const cell = document.createElement('div');
        cell.classList.add('phrase');
        grid.appendChild(cell);
    }
    const cells = Array.from(grid.children);

    function typePhrase() {
        let availableCells = cells.filter(c => !c.textContent);
        if (availableCells.length === 0) availableCells = cells;
        const cell = availableCells[Math.floor(Math.random() * availableCells.length)];
        const phraseText = phrases[Math.floor(Math.random() * phrases.length)];
        
        cell.textContent = phraseText;
        cell.classList.add('typing');
        cell.classList.remove('fading');
        
        const lifeSpan = Math.random() * 5000 + 3000;
        setTimeout(() => {
            cell.classList.add('fading');
            cell.classList.remove('typing');
            setTimeout(() => {
                if(cell.classList.contains('fading')){ cell.textContent = ''; }
            }, 500);
        }, lifeSpan);
    }
    
    setInterval(typePhrase, 1500); // Trigger more consistently for a dense feel
});