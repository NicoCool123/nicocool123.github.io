// Optional: Füge Interaktivität hinzu
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Mehr Informationen bald verfügbar!');
        });
    });
});
