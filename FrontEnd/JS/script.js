// Fonction pour activer un bouton de filtre
function setActiveFilter(activeButton) {
  const filterButtons = document.querySelectorAll(".filters button");
  filterButtons.forEach((button) => button.classList.remove("active")); // Retirer 'active' de tous les boutons
  activeButton.classList.add("active"); // Ajouter 'active' au bouton cliqué
}
