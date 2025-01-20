const API_URL_PHOTOS = "http://localhost:5678/api/works";
const API_URL_CATEGORIES = "http://localhost:5678/api/categories";

async function loadPhotosAndFilters() {
  const gallery = document.querySelector(".gallery");
  const filtersContainer = document.querySelector(".filters");

  try {
    // Charger les photos depuis l'API
    const photosResponse = await fetch(API_URL_PHOTOS);
    if (!photosResponse.ok) {
      throw new Error("Erreur lors de la récupération des photos.");
    }
    const photos = await photosResponse.json();
    window.allPhotos = photos;
    displayPhotos(photos);

    // Charger les catégories depuis l'API
    const categoriesResponse = await fetch(API_URL_CATEGORIES);
    if (!categoriesResponse.ok) {
      throw new Error("Erreur lors de la récupération des catégories.");
    }
    const categories = await categoriesResponse.json();

    // Ajouter le bouton "Tous"
    const allButton = document.createElement("button");
    allButton.textContent = "Tous";
    allButton.classList.add("filter-button");
    allButton.addEventListener("click", () => {
      setActiveFilter(allButton);
      displayPhotos(photos); // Affiche toutes les photos
    });
    filtersContainer.appendChild(allButton);

    // Ajouter des boutons pour chaque catégorie
    categories.forEach((category) => {
      const button = document.createElement("button");
      button.textContent = category.name;
      button.classList.add("filter-button");
      button.addEventListener("click", () => {
        setActiveFilter(button);
        const filteredPhotos = photos.filter(
          (photo) => photo.categoryId === category.id
        );
        displayPhotos(filteredPhotos); // Affiche les photos filtrées
      });
      filtersContainer.appendChild(button);
    });

    // Rendre le bouton "Tous" actif par défaut
    setActiveFilter(allButton);
  } catch (error) {
    console.error("Erreur :", error);
    gallery.textContent = "Impossible de charger les données.";
  }
}

// Fonction pour activer un bouton de filtre
function setActiveFilter(activeButton) {
  const filterButtons = document.querySelectorAll(".filters button");
  filterButtons.forEach((button) => button.classList.remove("active")); // Retirer 'active' de tous les boutons
  activeButton.classList.add("active"); // Ajouter 'active' au bouton cliqué
}


// Fonction pour afficher les photos
function displayPhotos(photos) {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = ""; // Efface la galerie existante

  photos.forEach((photo) => {
    if (!photo.imageUrl || !photo.title) {
      console.warn("Données manquantes pour la photo :", photo);
      return;
    }

    // Créer un conteneur pour chaque photo
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const caption = document.createElement("figcaption");

    // Attribuer les valeurs
    img.src = photo.imageUrl;
    img.alt = photo.title;
    caption.textContent = photo.title;

    // Ajouter les éléments au DOM
    figure.appendChild(img);
    figure.appendChild(caption);
    gallery.appendChild(figure);
  });
}

// Fonction pour filtrer les photos
function filterPhotos(categoryId) {
  const photos = window.allPhotos || [];
  if (categoryId === "all") {
    displayPhotos(photos);
  } else {
    const filteredPhotos = photos.filter(
      (photo) => photo.categoryId === categoryId
    );
    displayPhotos(filteredPhotos);
  }
}

// Charger les photos et les filtres lorsque le DOM est prêt
document.addEventListener("DOMContentLoaded", loadPhotosAndFilters);
