function afficherVideos(liste) {

    const conteneur = document.getElementById("listeVideos");

    conteneur.innerHTML = "";

    if (liste.length === 0) {
        conteneur.innerHTML = "<p>Aucune vidéo trouvée.</p>";
        return;
    }


    liste.forEach(video => {

        const carte = document.createElement("div");
        carte.className = "video-card";

        carte.innerHTML = `

        <img src="${video.miniature}" 
        onerror="this.src='miniatures/default.jpg'">

        <h3>${video.titre}</h3>

        <button onclick="lireVideo('${video.fichier}')">
        ▶️ Regarder
        </button>

        `;

        conteneur.appendChild(carte);

    });

}



function rechercherVideos() {

    const recherche = document
    .getElementById("rechercheVideo")
    .value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");


    const resultats = videos.filter(video => {

        return video.motsCles.some(mot =>
            mot.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(recherche)
        );

    });


    afficherVideos(resultats);

}

function lireVideo(fichier) {

    const zone = document.getElementById("zoneLecteur");
    const lecteur = document.getElementById("lecteurVideo");
    const source = document.getElementById("sourceVideo");

    source.src = fichier;

    lecteur.load();

    zone.style.display = "block";

    zone.scrollIntoView({
        behavior:"smooth",
        block:"center"
    });

}

window.onload = function(){
    afficherVideos(videos);
};
