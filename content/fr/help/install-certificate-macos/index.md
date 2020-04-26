---
title: Installer le certificat racine sur macOS
authors:
  - Nicolas Martignoni
type: kb
date: 2019-11-17
lastmod: 2019-11-17
description: Pour se connecter en HTTPS à la MoodleBox sans affichage d'une fenêtre d'avertissement, il est nécessaire d'installer le certificat racine de la MoodleBox.
slug: installer-certificat-racine-macos
categories_weight: 90
categories:
  - Utilisation
---
Pour se connecter en HTTPS à la MoodleBox sans affichage d'une fenêtre d'avertissement, il est nécessaire d'installer le certificat racine (ou certificat CA) de la MoodleBox. Ce certificat, émis par le [projet MoodleBox][project] en tant qu'autorité de certification, permet au navigateur de s'assurer que le certificat du site web de la MoodleBox est bien valide.

### Installation du certificat racine sur macOS (Safari et Chrome)

1. Télécharger le certificat CA sur la [page d'accueil de la MoodleBox][moodlebox] en cliquant le lien _Installer le certificat CA racine_. Le fichier `moodleboxCA.crt` sera téléchargé dans le dossier _Téléchargements_ de votre ordinateur.
  {{< figure src="download-CA-cert.png" caption="Télécharger le certificat CA" width="380px" >}}
2. Ouvrir le dossier _Téléchargements_ et double-cliquer sur le fichier `moodleboxCA.crt` pour l'enregistrer dans le _Trousseau d'accès_, soit dans le trousseau _session_, soit dans le trousseau _Système_. Pour mettre le certificat à la disposition de tous les utilisateurs de l'ordinateur, choisir le trousseau _Système_.
4. Dans _Trousseau d'accès_, sélectionner le trousseau dans lequel est installé le certificat, puis double-cliquer le certificat _MoodleBox Root CA_.
5. Déplier la section _Se fier_.
6. Modifier la valeur de l'option _Lors de l'utilisation de ce certificat_ à __Toujours approuver__.
  {{< figure src="trust-CA-cert-fr" caption="Approbation certificat CA" width="650px" >}}
7. Fermer la fenêtre et saisir votre mot de passe.

#### Capture vidéo de la procédure d'installation du certificat racine sur macOS

{{< video src="macos-ca-cert-screencast" width="90%" >}}

### Installation du certificat racine sur Firefox (macOS)

1. Lancer Firefox, accéder à la [page d'accueil de la MoodleBox][moodlebox] et cliquer le lien _Installer le certificat CA racine_.
2. Dans la fenêtre qui s'ouvre, cocher la case _Confirmer cette AC pour identifier des sites web_ et cliquer OK.
  {{< figure src="firefox-ca-cert.png" caption="Configurer le certificat CA avec Firefox" width="650px" >}}

  [project]: {{< relref "/project" >}}
  [moodlebox]: http://moodlebox.home/
