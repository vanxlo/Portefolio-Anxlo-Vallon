// Pour l'affichage les détails de la date
function afficherDetailsDate() {
    const dateSaisie = document.getElementById("date-saisie").value;

 // Convertr la date en objet
 const [jour, mois, annee] = dateSaisie.split("-");
    const date = new Date(`${annee}-${mois}-${jour}`);

 // Verification
 if (isNaN(date.getTime())) {
        alert("Veuillez entrer une date valide au format JJ-MM-AAAA.");
        return;
    }
	
	 // Afficher le jour, mois et l'annee
	 document.getElementById("resultat-jour").textContent = `Jour : ${date.getDate() + 1}`;
    document.getElementById("resultat-mois").textContent = `Mois : ${date.getMonth() + 1}`; // Si les mois commencent a 0
    document.getElementById("resultat-annee").textContent = `Année : ${date.getFullYear()}`;
}

 // Calcul de la difference en jour
 function calculerDifferenceJours() {
    const dateSaisie = document.getElementById("date-saisie").value;
	
 // La date en objet date
 const [jour, mois, annee] = dateSaisie.split("-");
    const date = new Date(`${annee}-${mois}-${jour}`);

 // Verification de la validite de la date
  if (isNaN(date.getTime())) {
        alert("Veuillez entrer une date valide au format JJ-MM-AAAA.");
        return;
    }
 // Date actuelle
    const dateActuelle = new Date();

 // La différence en millisecondes
    const differenceMs = date - dateActuelle;

 // Conversions
    const differenceJours = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

 // Afficher le résultat
    document.getElementById("resultat-difference").textContent = `Différence en jours : ${Math.abs(differenceJours)}`;
}
