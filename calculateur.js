document.getElementById('mortgageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupérer les valeurs saisies
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const loanTerm = parseFloat(document.getElementById('loanTerm').value);

    // Valider les entrées
    if (isNaN(loanAmount) || loanAmount <= 0) {
        alert('Veuillez entrer un montant de prêt valide.');
        return;
    }
    if (isNaN(interestRate) || interestRate <= 0) {
        alert('Veuillez entrer un taux d\'intérêt valide.');
        return;
    }
    if (isNaN(loanTerm) || loanTerm <= 0) {
        alert('Veuillez entrer une durée de prêt valide.');
        return;
    }

    // Calculer le taux d'intérêt mensuel
    const monthlyInterestRate = (interestRate / 100) / 12;

    // Calculer le nombre total de paiements
    const numberOfPayments = loanTerm * 12;

    // Calculer le paiement mensuel
    const monthlyPayment = loanAmount * 
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    // Afficher le résultat
    document.getElementById('result').innerText = `Paiement mensuel: HTG${monthlyPayment.toFixed(2)}`;
});