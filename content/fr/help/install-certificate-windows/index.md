---
title: Installer le certificat racine sous Windows
authors:
  - Nicolas Martignoni
type: kb
date: 2019-11-17
lastmod: 2019-11-17
description: Pour se connecter en HTTPS à la MoodleBox sans affichage d'une fenêtre d'avertissement, il est nécessaire d'installer le certificat racine de la MoodleBox.
slug: installer-certificat-racine-windows
categories_weight: 90
categories:
  - Utilisation
---
Pour se connecter en HTTPS à la MoodleBox sans affichage d'une fenêtre d'avertissement, il est nécessaire d'installer le certificat racine (ou certificat CA) de la MoodleBox. Ce certificat, émis par le [projet MoodleBox][project] en tant qu'autorité de certification, permet au navigateur de s'assurer que le certificat du site web de la MoodleBox est bien valide.

### Installation du certificat racine sur Windows (Edge et Chrome)

1. Lancer Edge ou Chrome, accéder à la [page d'accueil de la MoodleBox][moodlebox] et cliquer le lien _Installer le certificat CA racine_, puis sur _Ouvrir_.
  {{< figure src="download-CA-cert.png" title="Télécharger le certificat CA" width="380" >}}
2. Dans la fenêtre _Voulez-vous ouvrir ce fichier ?_, cliquer _Ouvrir_.
3. Dans la fenêtre _Certificat_, cliquer _Installer un certificat…_.
4. L'Assistant Importation du certificat s'ouvre. Sélectionner _Ordinateur local_, puis cliquer _Suivant_.
5. Autoriser l'application à effectuer des modifications en cliquant _Oui_.
6. Dans la fenêtre _Magasin de certificats_, cocher le bouton _Placer tous les certificats dans le magasin suivant_, puis sur _Parcourir…_.
7. Sélectionner _Autorités de certification racines de confiance_, puis cliquer _OK_.
8. Terminer l'installation en cliquant sur _Suivant_, puis _Terminer_.

#### Capture vidéo de la procédure d'installation du certificat racine sous Windows

{{< video src="windows-ca-cert-screencast" width="90%" >}}

### Installation du certificat racine sur Firefox (Windows)

1. Lancer Firefox, accéder à la [page d'accueil de la MoodleBox][moodlebox] et cliquer le lien _Installer le certificat CA racine_.
2. Dans la fenêtre qui s'ouvre, cocher la case _Confirmer cette AC pour identifier des sites web_ et cliquer OK.
  {{< figure src="firefox-ca-cert.png" title="Configurer le certificat CA avec Firefox" width="650" >}}

  [project]: {{< relref "/project" >}}
  [moodlebox]: http://moodlebox.home/
