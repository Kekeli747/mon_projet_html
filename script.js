// 2. Interaction avec les conteneurs (Cartes)
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            card.addEventListener('click', () => {
                const serviceName = card.querySelector('h3').textContent;
                alert(`Vous avez cliqué sur le service : ${serviceName}`);
            });
        });
