function sendToWhatsApp(e) {
    e.preventDefault();

    // Numéro WhatsApp de l’académie (au format international sans + ni espaces)
    const numeroAcademie = "243970000000";

    // Récupération des champs
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const telephone = document.getElementById("telephone").value;
    const dateNaissance = document.getElementById("dateNaissance").value;
    const adresse = document.getElementById("adresse").value;
    const message = document.getElementById("message").value;

    // Message formaté
    const texte = `
📝 Nouvelle demande d'inscription :

👤 Nom : ${nom}
📧 Email : ${email}
📱 Téléphone : ${telephone}
🎂 Date de naissance : ${dateNaissance}
🏠 Adresse : ${adresse}
💬 Message : ${message || "Aucun"}

-- envoyé depuis le site web
    `;

    // Création du lien WhatsApp
    const whatsappURL = `https://wa.me/${numeroAcademie}?text=${encodeURIComponent(texte)}`;

    // Ouvrir WhatsApp
    window.open(whatsappURL, "_blank");
  }

