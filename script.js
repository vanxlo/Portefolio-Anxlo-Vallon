document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche l'envoi traditionnel du formulaire

    const formData = new FormData(this);

    fetch('/submit-form', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        alert('Message envoyé avec succès !');
        this.reset(); // Réinitialise le formulaire
    })
    .catch(error => {
        alert('Une erreur est survenue. Veuillez réessayer.');
    });
});