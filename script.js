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
// script.js

window.addEventListener('scroll', function () {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

document.getElementById('back-to-top').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});