
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accueil IADE - ICP</title>

  <style>
    /* =========================
   1. RESET
========================= */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* =========================
   2. BASE
========================= */

    body {
  font-family: 'Segoe UI', Arial, sans-serif;
  background-color: #f7f9fb;
  color: #2c3e50;

  margin: 0;
  padding: 0;
    }
    .container {
  padding: 0px;
    }

/* =========================
   3. HEADER
========================= */
header {
  background: linear-gradient(135deg, #5dade2, #48c9b0);
  color: white;
  padding: 15px 10px;
  text-align: center;
  border-radius: 16px;
  margin-bottom: 10px;
  animation: fadeInHeader 0.8s ease;
}

header h1 {
  font-size: 20px;
}

header p {
  font-size: 13px;
  opacity: 0.9;
}

.title {
  opacity: 0;
  transform: translateY(-10px);
  animation: fadeTitle 0.6s ease forwards;
}

.icons {
  font-size: 28px;
  margin-top: 5px;
  opacity: 0;
  transform: scale(0.8);
  animation: popIcons 0.5s ease forwards;
  animation-delay: 0.4s;
}

.icons.show {
  opacity: 1;
  transform: scale(1);
  animation: float 2s infinite ease-in-out;
}
/* =========================
   LOGIN POPUP IOS PREMIUM
========================= */

.login-modal {
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0,0,0,0.35);
  backdrop-filter: blur(12px);

  z-index: 9999;

  opacity: 0;
  visibility: hidden;
  transition: 0.35s ease;
}

.login-modal.show {
  opacity: 1;
  visibility: visible;
}

/* BOX */
.login-box {
  width: 90%;
  max-width: 340px;

  background: rgba(255,255,255,0.75);
  backdrop-filter: blur(25px);

  border: 1px solid rgba(255,255,255,0.3);

  border-radius: 28px;

  padding: 28px 22px;

  text-align: center;

  box-shadow:
    0 10px 30px rgba(0,0,0,0.15),
    inset 0 1px 1px rgba(255,255,255,0.4);

  transform: translateY(40px) scale(0.92);
  transition: 0.35s ease;
}

/* animation popup */
.login-modal.show .login-box {
  transform: translateY(0) scale(1);
}

/* TITRE */
.login-box h2 {
  font-size: 1.4rem;
  margin-bottom: 20px;
  color: #1f2937;
}

/* INPUT IOS */
.login-box input {
  width: 100%;
  padding: 16px;

  border: none;
  outline: none;

  border-radius: 18px;

  background: rgba(255,255,255,0.7);

  font-size: 16px;
  text-align: center;

  margin-top: 10px;

  box-shadow:
    inset 0 2px 6px rgba(0,0,0,0.05);
}

/* BOUTON PRINCIPAL */
.login-box button {
  width: 100%;
  padding: 15px;

  border: none;
  border-radius: 18px;

  margin-top: 14px;

  font-size: 16px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.25s ease;
}

/* bouton entrer */
.login-box button:first-of-type {
  background: linear-gradient(135deg, #0ea5e9, #2563eb);
  color: white;

  box-shadow:
    0 6px 18px rgba(37,99,235,0.35);
}

/* bouton annuler */
.login-box button:last-of-type {
  background: rgba(255,255,255,0.7);
  color: #374151;
}

/* effets */
.login-box button:hover {
  transform: translateY(-2px);
}

.login-box button:active {
  transform: scale(0.98);
}

/* erreur */
#error {
  margin-top: 10px;
  font-size: 14px;
  color: #ef4444;
}

/* animation smooth */
@media (max-width: 600px) {
  .login-box {
    border-radius: 30px;
  }
}


/* =========================
   5. CARDS
========================= */
.card {
  background: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  transition: 0.2s;
}

.card:hover {
  transform: translateY(-2px);
}
    .cards-row {
  display: flex;
  gap: 10px;
}

.cards-row .card {
  flex: 1;
  min-width: 0; /* 🔥 évite le débordement */
}

/* =========================
   6. BUTTONS
========================= */
.btn {
  display: block;
  background: #3498db;
  color: white;
  text-decoration: none;
  padding: 16px;
  margin-bottom: 10px;
  border-radius: 12px;
  text-align: center;
  font-weight: bold;
}
    .btn:active,
.card:active {
  transform: scale(0.97);
  transition: 0.1s;
}
/* =========================
   POPUP BASE
========================= */
.popup {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1000;

  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  transition: opacity 0.25s ease, visibility 0.25s ease;
}

/* état ouvert */
.popup.show {
  opacity: 1;
  visibility: visible;
  pointer-events: all;
}

/* =========================
   POPUP CONTENT (clean)
========================= */
.popup-content {
  background: white;
  padding: 20px;
  border-radius: 16px;

  width: 100%;
  max-width: 500px;

  position: relative;

  transform: translateY(40px) scale(0.96);
}

/* animation ouverture */
.popup.show .popup-content {
  animation: iosBounce 0.45s ease-out forwards;
}

/* =========================
   CLOSE BUTTON
========================= */
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;

  width: 32px;
  height: 32px;
  border-radius: 50%;

  border: none;
  background: rgba(0,0,0,0.05);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  cursor: pointer;
}

.close-btn:hover {
  transform: scale(1.1);
  transition: 0.2s;
}

/* =========================
   ANIMATION IOS
========================= */
@keyframes iosBounce {
  0% {
    transform: translateY(40px) scale(0.96);
    opacity: 0;
  }
  60% {
    transform: translateY(-6px) scale(1.01);
    opacity: 1;
  }
  80% {
    transform: translateY(2px) scale(0.99);
  }
  100% {
    transform: translateY(0) scale(1);
  }
}


/* =========================
   8. DISCLAIMER
========================= */
.disclaimer-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(8px);
  opacity: 0;
  pointer-events: none;
  transition: 0.4s;
  z-index: 9999;
}

.disclaimer-overlay.show {
  opacity: 1;
  pointer-events: all;
}

.disclaimer-box {
  background: white;
  padding: 25px;
  border-radius: 16px;
  text-align: center;
  max-width: 500px;
}

/* =========================
   9. UTILITIES
========================= */
.hidden {
  display: none !important;
}

.clickable {
  cursor: pointer;
}

/* =========================
   10. MENU BAS
========================= */
.bottom-menu {
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 500px;
  background: white;
  display: flex;
  justify-content: space-around;
  padding: 10px;
}

/* =========================
   11. ANIMATIONS
========================= */
@keyframes fadeInHeader {
  from { opacity: 0; transform: translateY(-15px); }
}

@keyframes fadeTitle {
  to { opacity: 1; transform: translateY(0); }
}

@keyframes popIcons {
  to { opacity: 1; transform: scale(1); }
}

@keyframes float {
  50% { transform: translateY(-4px); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(15px); }
}
    /* 🔥 Empêche TOUS les débordements */
html, body {
  overflow-x: hidden;
}

/* 🔥 Assure que tout reste dans l'écran */
.container,
.card,
.btn,
.popup-content {
  max-width: 100%;
}

/* 🔥 Important pour les boutons */
.btn {
  width: 100%;
}

/* 🔥 Corrige le menu du bas */
.bottom-menu {
  left: 50%;
  transform: translateX(-50%);
  max-width: 500px;
}
    /* =========================
   FICHES
========================= */
.fiche {
  background: #ffffff;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.06);
  margin-bottom: 15px;
  transition: 0.2s;
}

.fiche:hover {
  transform: translateY(-2px);
  background: #f0f6ff;
}

.fiche a {
  text-decoration: none;
  color: #2c3e50;
  display: block;
}

/* version spéciale */
.fiche-plan {
  background: #ffffff;
}

/* =========================
   BOUTONS VARIANTS
========================= */

/* bouton PDF */
.btn-pdf {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #2c7be5;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: 0.2s;
}

.btn-pdf:hover {
  background-color: #1a5fd0;
}

/* bouton vidéo */
.video-btn {
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  background: linear-gradient(135deg, #48c9b0, #5dade2);
  color: white;
  font-weight: bold;
  transition: 0.2s;
}

.video-btn:active {
  transform: scale(0.98);
}

/* bouton urgence */
.btn.urgence {
  background: linear-gradient(135deg, #ff3b3b, #b30000);
  animation: pulseUrgence 1.8s infinite;
}

.btn.urgence:hover {
  transform: scale(1.05);
}

/* bouton bilan */
.btn.bilan {
  background: linear-gradient(135deg, #28a745, #1e7e34);
}

.btn.bilan:hover {
  transform: scale(1.05);
}

/* bouton chirurgie (menu rose) */
.btn.chirurgie {
  background: linear-gradient(135deg, #ff4fa3, #ff7ac3);
}
    /* =========================
    couleur 
========================= */
.rouge {
  color: red;
  font-weight: bold;
}

.vert {
  color: green;
}
    .hint {
  font-size: 12px;
  color: gray;
  margin-top: 5px;
    }
/* =========================
   ANIMATION URGENCE
========================= */
@keyframes pulseUrgence {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
    /* bouton version menu (fond blanc) */
.btn.menu {
  background: white;
  color: #2c3e50;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}

/* petit effet au survol */
.btn.menu:hover {
  background: #f0f6ff;
}
    /* 🔽 Menu animé */
.submenu {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transform: translateY(-10px);
  transition: 
    max-height 0.4s ease,
    opacity 0.3s ease,
    transform 0.3s ease;
}

/* 🔼 état ouvert */
.submenu.open {
  max-height: 500px; /* assez grand pour contenir */
  opacity: 1;
  transform: translateY(0);
}
    .submenu.open a {
  animation: fadeItem 0.3s ease forwards;
}

@keyframes fadeItem {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
    /* HERO */
.hero {
height: 100vh;
background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3');
background-size: cover;
background-position: center;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
color: #fff;
font-family: Arial, sans-serif;
}

.overlay {
max-width: 700px;
padding: 20px;
}

.hero h1 {
font-size: 2.5em;
margin-bottom: 10px;
}

.hero p {
font-size: 1.2em;
opacity: 0.9;
}

/* BUTTONS */
.buttons {
margin-top: 30px;
}

.btn {
display: inline-block;
padding: 15px 25px;
margin: 10px;
border-radius: 10px;
text-decoration: none;
font-weight: bold;
transition: 0.3s;
}

.btn-light {
background: #22c55e;
color: white;
}

.btn-light:hover {
background: #16a34a;
transform: translateY(-2px);
}

.btn-dark {
background: #1e3a8a;
color: white;
}

.btn-dark:hover {
background: #172554;
transform: translateY(-2px);
}

.info {
margin-top: 20px;
font-size: 0.9em;
opacity: 0.7;
}

    </style>

</head>

<body>
<div class="wrapper">
  <section class="hero">
<div class="overlay">
<h1>Bienvenue au bloc opératoire</h1>
<p>Votre parcours IADE commence ici</p>

<div class="buttons">
  <a href="#" onclick="openLogin()" class="btn btn-light">
  🌍 Accès guide étudiant
</a>


<a href="TON-LIEN-SHAREPOINT" target="_blank" class="btn btn-dark">
🔐 Accès contenu complet
</a>
</div>

<p class="info">
Certains contenus nécessitent un accès au réseau hospitalier
</p>
</div>
</section>


<!-- 🔐 PAGE DE CONNEXION -->

<div id="loginModal" class="login-modal">
  <div class="login-box">
    <h2>🔐 Accès étudiant</h2>
    <input type="password" id="password" placeholder="Mot de passe">
    <button onclick="checkPassword()">
      Continuer
    </button>
    <button onclick="closeLogin()">
      Annuler
    </button>
    <p id="error"></p>
    
  </div>
</div>


<!-- DISCLAIMER -->
<div id="disclaimer" class="disclaimer-overlay">
  <div class="disclaimer-box">
    <h2>⚠️ Avertissement</h2>
    
    <p>
      Ce site est un support pédagogique personnel destiné aux étudiants IADE.
      Il ne remplace en aucun cas les protocoles officiels de notre établissement.
    </p>

    <p>
      Les informations présentées sont générales et doivent être adaptées
      aux pratiques locales et aux recommandations en vigueur.
    </p>

    <p>
      Ce site est non officiel et n’engage pas le CHU de Lille.</p>
      <p>
      En cliquant sur Continuer, vous reconnaissez avoir pris connaissance de cet avertissement.
    </p>

    <button onclick="acceptDisclaimer()">✅ Continuer</button>
  </div>
</div>
</div>
<!-- 🔓 CONTENU -->

<div class="bottom-menu">
  <a href="#documents">📑</a>
  <a href="#plan">🗺</a>
  <a href="#visite">🎥</a>
  <a href="#retour">📝</a>
  <a href="pdf/telephones.pdf">☎️</a>
</div>

<div id="content" class="hidden">

<div class="container">

  <div class="card">
    <h2>👋 Message de bienvenue</h2>
    <p>
      Toute l’équipe du bloc opératoire de l’Institut Cœur Poumon est ravie de vous accueillir.  
    </p>
    <p>
      Nous savons que les débuts peuvent être impressionnants — ici, vous êtes là pour apprendre, progresser et poser toutes vos questions...
    </p>
    <p>
      Votre bien être, votre épanouissement professionnel et votre autonomisation sont au cœur de notre accompagnement.
    </p>
    <p><strong>👉 Il n’y a pas de "mauvaises questions".</strong></p>
  </div>
  
  <div class="cards-row">
    
  <div class="card clickable" onclick="openPopup('popupJour')">
  <h2>📍 Votre premier jour ➡️ </h2>
  </div>
    
    <!-- Popup Votre premier jour -->
    
<div id="popupJour" class="popup">
  <div class="popup-content">
    <button class="close-btn" onclick="closePopup('popupJour')">✖️</button>

    <h2>📍 Votre premier jour </h2>    
    <ul>
      <li><strong>Heure :</strong> RDV à 8h</li>
      <li><strong>Lieu :</strong> la salle de réveil du bloc</li>
      <li><strong>Tenue :</strong> Pyjama de bloc, calot jetable, masque, sabots dédiés</li>
      <li><strong>À prévoir :</strong> Badge, feuilles d'évaluation de stage</li>
      <li>une bannette <strong>"étudiants IADE "</strong> vous permettra de déposer vos fiches d'horaire ainsi que vos rapports de stage</li>
      <li>vous y trouverez une <strong>fiche de suivi</strong> à remplir tout au long du stage</li>
      <li>une date de <strong>bilan de demi-stage</strong> sera fixée pour chaque Étudiant</li>
    </ul>
  </div>
</div>

<!-- Carte -->
<div class="card clickable" onclick="openPopup('popupVie')">
  <h2>🏥 Vie pratique  ➡️ </h2>
</div>

<!-- Popup -->
<div id="popupVie" class="popup">
  <div class="popup-content">
    <button class="close-btn" onclick="closePopup('popupVie')">✖️</button>
    <h2>🏥 Vie pratique  </h2>
    
    <ul>
      <p><span class="rouge">À VOTRE DISPOSITION</span></p> 
    
    <h3>👕 Vestiaires</h3>
    <li>👉 Pensez à prévoir un cadenas pour votre casier.</li>
    <li>👉 Merci de ne pas y laisser d’objets de valeur.</li>
    <h3>🧥 Casiers</h3>
    <li>Des casiers sont à votre disposition en SSPI.</li>
     <h3>☕ Salle de pause</h3>
    <li>Une salle de pause est à votre disposition.</li>
    <li>👉 Espace de repos réservé au café.</li>
    <h3>🍽️ restauration</h3>
    <li>La salle à manger est située au sein du bloc.</li>
    <li>le self est situé au niveau-2.</li>  
    <li>le relais H est situé au niveau 0.</li>
    <li>👉 Possibilité de réchauffer vos repas sur place.
    </li>
    </ul>
</div>
</div>

</div>
<div>
<div class="card" id="plan">
  
  <h3>🗺️ Plan du bloc opératoire</h3>
  <p>Consultez le plan pour vous repérer facilement dans le service.</p>
<a href="pdf/plan2.pdf" download>
   ✅️  Télécharger le plan
  </a>
  <a href="pdf/plan2.pdf" target="_blank" class="btn-pdf">
  📄 Ouvrir le plan (plein écran)
</a>
<p class="hint">👉 Appuyez sur retour pour revenir au site</p>
</div>
</div>
<div>
<div class="card" id="visite">
  <h2>🎥 Visite du service</h2>
  <i>disponible prochainement</i>

  <button id="videoBtn" class="video-btn" onclick="toggleVideo()">
    ▶️ Voir la visite du bloc
  </button>
  <div id="videoContainer" class="video hidden">
  
  <iframe id="videoFrame"
  src="https://www.youtube.com/embed/TON_ID_VIDEO?autoplay=1"
  frameborder="0"
  allow="fullscreen; autoplay"
  allowfullscreen>
</iframe>
  </div>
  </div>
  </div>
  <div>
  <!-- Carte -->
<div class="card clickable" onclick="openPopup('popuporganigramme')">
  <h2>🩺 Organigramme du service</h2>
</div>

<!-- Popup -->

<div id="popuporganigramme" class="popup">
  <div class="popup-content">
    <button class="close-btn" onclick="closePopup('popuporganigramme')">✖️</button>

    <h2>🩺 Organigramme </h2>

    <ul>
    <li><strong>ANESTHÉSIE:</strong></li>
      <p>Chef de service: Dr Desbordes</p>
      <p>Responsable réanimation: Pr Moussa</p>
      <p>Responsable SIPO: Dr Robin</p>      <li><strong>BLOC OPÉRATOIRE:</strong></li>
      <p>Chirurgie cardiaque: Pr Vincentelli </p>
      <p>Chirurgie thoracique: Pr Venissac</p>   
      <p>Chirurgie Vasculaire: Pr Sobocinski</p>  
      <p>Pneumologie: Dr Fournier </p>
      <li><strong>PTI:</strong></li>
      <p>Cardiologie: Pr Lemesle</p>
      <p>Radiologie: Pr Pontana </p>
    
    <li> Vous serez encadré(e)s par une équipe d’IADE, de médecins anesthésistes et d’IDE expérimenté(e)s. </li>
    </ul>
  </div>
  </div>
  </div>
 <div>
<!-- Carte -->
<div class="card clickable" onclick="openPopup('popupReferents')">
  <h2>♻️ Référents</h2>
</div>

<!-- Popup -->
<div id="popupReferents" class="popup">
  <div class="popup-content">
    <button class="close-btn" onclick="closePopup('popupReferents')">✖️</button>

    <h2> ♻️ Référents</h2>
    <ul>
      <li><strong>cadre supérieur:</strong><p></p> Mme Reumaux Laurence </li><p></p>
    <li><strong>IADE Référente de soins:</strong><p></p> Mme Hennache Audrey </li><p></p>
    <li><strong>Référents IADE :</strong><p></p>
    <p>Mme Tosolini Karen</p></li>
    <p>Mme Ait Ben Said Sabah</p>
    <p> Mr Lavergne Sebastien</p><p>Mr Molinaro Camille</p><p></p>
      <li><strong>Référent SSPI:</strong><p></p>Mme Bichelberger Eve</li>
      </ul>
  </div>
  </div>
 
<div>
<a class="btn" href="pdf/telephones.pdf" target="_blank">
  ☎️ Telephones 
</a>
  </div>
  
  
    <div class="card" id="documents">
  <h2>📄 Accès rapide aux documents</h2><i>(source principale  RFE SFAR)</i>
  <p class="hint">👉 Appuyez sur retour pour revenir au site</p>
  </div>
  
<div>
  <div class="btn" onclick="toggleMenu('chirMenu')">
    
    ✅ présentation des chirurgies
  </div>
  

  <div id="chirMenu" class="submenu">  
    <a class="btn menu" href="pdf/COEUR.pdf" target="_blank"> 🫀 À cœur ouvert</a> 
    <a class="btn menu" href="pdf/CEC.pdf" target="_blank"> 🔧 ⚙️La CEC</a>
    <a class="btn menu" href="pdf/CARDIOLOGIE1.pdf" target="_blank">❤️ interventionnelle</a> 
    <a class="btn menu"
href="pdf/VASCULAIRE.pdf" target="_blank">
📕 vasculaire</a>    
    <a class="btn menu"
href="pdf/anatomiepulmonaire.pdf" target="_blank">
🩻 thoracique</a>
      
  </div>
</div>
   </div> 

    
  <div class="btn" onclick="toggleMenu('specialitesMenu')">
  📂 Anesthésie par spécialité
</div>

<div id="specialitesMenu" class="submenu">

  <div class="fiche">
    <a href="pdf/CHIRURGIE_CARDIAQUE.pdf" target="_blank">
      ❤️ Chirurgie cardiaque
    </a>
  </div>

  <div class="fiche">
    <a href="pdf/chirtho.pdf" target="_blank">
      🫁 Chirurgie thoracique
    </a>
  </div>
  <div class="fiche">
  <a href="pdf/endoscopie bronchique.pdf"
    target="_blank">
     🩻 médecine endobronchique 
  </a>
  </div>
  
  <div class="fiche">
    <a href="pdf/CHIRURGIE_VASCULAIRE.pdf" target="_blank">
      🩸 Chirurgie vasculaire
    </a>
  </div>

  <div class="fiche">
    <a href="pdf/TAVI.pdf" target="_blank">
      💉 Cardiologie interventionnelle
    </a>
  </div>
</div>

  <div class="btn urgence" onclick="toggleMenu('urgencesMenu')">
  🚨 Protocoles d'urgence
</div>

<div id="urgencesMenu" class="submenu">

  <div class="fiche">
    <a href="pdf/hemorragie.pdf" target="_blank">
      🩸 Hémorragie
    </a>
  </div>

  <div class="fiche">
    <a href="pdf/arret.pdf" target="_blank">
      ❤️ Arrêt cardiaque
    </a>
  </div>

  <div class="fiche">
    <a href="pdf/choc_anaphylactique.pdf" target="_blank">
      ⚠️ Choc anaphylactique
    </a>
  </div>

  <div class="fiche">
    <a href="pdf/detresse_respiratoire.pdf" target="_blank">
      🫁 Détresse respiratoire
    </a>
  </div>
  
  <div class="fiche">
    <a 
      href="pdf/hyperthermie_maligne.pdf" target="_blank">
      🌡hyperthermie maligne 
    </a>
  </div>
  

</div>
<a class="btn"
  href="pdf/Antibioprophylaxie_ICP.pdf"
  target="_blank">
      💊 Antibioprophylaxie
</a>
<a class="btn bilan" href="pdf/Bilandemistage.pdf" target="_blank">
      ✒️ bilan de demi-stage
    </a>
  <div class="card">
    <h2>💬 Petit mot pour vous</h2>
    <p>
      Le bloc est un environnement exigeant, mais aussi passionnant.  
      Prenez le temps d’observer, de comprendre… et surtout de vous faire confiance.
    </p>
    <p><strong>On est là pour vous accompagner 🤝</strong></p>
  </div>

<div class="card" id="retour">
  <h2>📝 Retour de stage</h2>

  <p>
    Votre avis est essentiel pour améliorer l’accueil des étudiants.
  </p><p>Ce questionnaire est anonyme.</p>

  <a class="btn" href="https://forms.gle/4ATLvfYK83cmkXiN7" target="_blank">
    📝 Donner mon avis
  </a>
</div>
<footer>
  Institut Cœur Poumon – Bloc opératoire
</footer>

<script>
  /* =========================
LOGIN
========================= */

function openLogin() {
document.getElementById("loginModal").classList.add("show");
}

function closeLogin() {
document.getElementById("loginModal").classList.remove("show");
}

function checkPassword() {

const password = document.getElementById("password").value;

if (password === "iadeicp543") {

// ferme popup login
closeLogin();

// cache le hero
document.querySelector(".hero").style.display = "none";

// affiche disclaimer
document.getElementById("disclaimer").classList.add("show");

} else {

document.getElementById("error").innerText =
"Mot de passe incorrect";

}
}

  
function softClick() {
  // vibration mobile (si supporté)
  if (navigator.vibrate) {
    navigator.vibrate(10); // très léger = "soft click"
  }
}
document.querySelectorAll(".btn, .card, .clickable").forEach(el => {
  el.addEventListener("click", () => {
    softClick();
  });
});
  function openPopup(id) {
  const popup = document.getElementById(id);
  popup.style.display = "flex";
  setTimeout(() => popup.classList.add("show"), 10);
}

function closePopup(id) {
  const popup = document.getElementById(id);
  popup.classList.remove("show");
  setTimeout(() => popup.style.display = "none", 300);
}
function toggleMenu(id) {
  const menus = document.querySelectorAll(".submenu");

  menus.forEach(menu => {
    if (menu.id === id) {
      menu.classList.toggle("open");
    } else {
      menu.classList.remove("open");
    }
  });
}
  
function toggleVideo() {
  const video = document.getElementById("videoContainer");
  const iframe = document.getElementById("videoFrame");
  const button = document.getElementById("videoBtn");

  if (video.classList.contains("show")) {
    video.classList.remove("show");
    setTimeout(() => video.classList.add("hidden"), 400);
    button.innerHTML = "▶️ Voir la visite du bloc";
  } else {
    video.classList.remove("hidden");
    setTimeout(() => video.classList.add("show"), 10);
    button.innerHTML = "❌ Fermer la vidéo";

    setTimeout(() => {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    }, 500);
  }
}
    
function showDisclaimer() {
  document.getElementById("disclaimer").classList.add("show");
}

  function acceptDisclaimer() {
  const disclaimer = document.getElementById("disclaimer");
  const content = document.getElementById("content");
disclaimer.classList.remove("show");
  content.classList.remove("hidden");
  }
function toggleItem(element) {
  const content = element.querySelector(".content");
  content.classList.toggle("hidden");
}window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".icons")?.classList.add("show");
  }, 800);
});
  window.addEventListener("load", () => {
  setTimeout(() => {
    const icons = document.querySelector(".icons");
    if (icons) {
      icons.classList.add("show");
    }
  }, 800);
});
</script>



