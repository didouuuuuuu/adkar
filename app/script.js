// Fonction pour incrémenter le compteur d'un Adhkar spécifique
function incrementCount(spanId, targetCount) {
    const countSpan = document.getElementById(spanId);
    let currentCount = parseInt(countSpan.textContent);

    if (currentCount < targetCount) {
        currentCount++;
    } else {
        // Feedback lorsque l'objectif est atteint
        alert("Machallah ! Vous avez atteint l'objectif pour ce dhikr.");
    }
    countSpan.textContent = currentCount;

    // Sauvegarder le compteur dans le localStorage
    localStorage.setItem(spanId, currentCount);
}

// Fonction pour réinitialiser le compteur d'un Adhkar spécifique
function resetCount(spanId) {
    const countSpan = document.getElementById(spanId);
    countSpan.textContent = 0;

    // Supprimer le compteur du localStorage
    localStorage.removeItem(spanId);
}

// Fonction pour charger les compteurs sauvegardés lorsque la page se charge
function loadSavedCounts() {
    const countSpans = document.querySelectorAll('.adhkar-card .count span');

    countSpans.forEach(span => {
        const spanId = span.id;
        const savedCount = localStorage.getItem(spanId);
        if (savedCount !== null) {
            span.textContent = savedCount;
        }
    });
}

// Appeler loadSavedCounts lorsque la page a fini de se charger
document.addEventListener('DOMContentLoaded', loadSavedCounts);