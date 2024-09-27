// Optional: Füge Interaktivität hinzu
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.getAttribute('data-action');

            switch (action) {
                case 'server-overview':
                    alert('Hier siehst du eine Übersicht über deine Server.');
                    break;
                case 'bot-settings':
                    alert('Hier kannst du die Einstellungen deines Bots anpassen.');
                    break;
                case 'mini-games':
                    alert('Hier sind die verfügbaren Minispiele des Bots.');
                    break;
                default:
                    alert('Mehr Informationen bald verfügbar!');
            }
        });
    });
});
