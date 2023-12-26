---
title: Copier l'image-disque sur une carte SD
authors:
  - Nicolas Martignoni
type: kb
date: 2017-04-17
lastmod: 2023-12-26
description: Pour copier l'image-disque MoodleBox sur une carte SD, il suffit de télécharger l'utilitaire Raspberry Pi Imager et de suivre ces instructions.
slug: copier-limage-disque-sur-une-carte-sd
categories_weight: 4
categories:
  - Premiers pas
---
Pour copier le système MoodleBox sur votre carte microSD, nous recommandons d'employer l'utilitaire [Raspberry Pi Imager][imager]. Ce programme est fourni par la Fondation Raspberry Pi.

### Marche à suivre

1. Télécharger la dernière version de l'utilitaire [Raspberry Pi Imager][imager] et l'installer sur l'ordinateur.
1. Lancer l'application _Raspberry Pi Imager_.
   {{< figure src="rpi-imager-fr.png" alt="Raspberry Pi Imager" class="centered-image" width="700" >}}
1. Cliquer le bouton __Choisir le modèle__ sous _Modèle de Raspberry Pi_ et sélectionner le modèle de votre Raspberry Pi.
1. Cliquer le bouton __Choisir l'OS__ sous _Système d'exploitation_, défiler vers le bas et sélectionner __Other specific purpose OS__.
1. Défiler vers le bas, cliquer __MoodleBox__, puis cliquer sur la version de l'image-disque MoodleBox.
1. Cliquer le bouton __Choisir le stockage__ et sélectionner la carte microSD.
1. Cliquer le bouton __Suivant__, puis dans le dialogue suivant sur __Modifier réglages__ et répondre _Non_ à la question _Voulez-vous pré-remplir le mot de passe Wi-Fi à partir du trousseau du système ?_
1. Dans l'onglet _Général_ de la fenêtre suivante, spécifier les paramètres désirés pour la MoodleBox :
   - cocher la case __Nom d'hôte__ et indiquer le nom d'hôte, par exemple _moodlebox_,
   - cocher la case __Définir nom d'utilisateur et mot de passe__ et indiquer le __nom d'utilisateur__ et le __mot de passe__, par exemple _moodlebox_ et _Moodlebox4$_,
   - __ne pas cocher__ les autres cases (_Configurer le Wi-Fi_ et _Définir les réglages locaux_)
   {{< figure src="rpi-imager-os-custom-fr.png" alt="Réglages de Raspberry Pi Imager" class="centered-image" width="700" >}}
1. Dans l'onglet _Services_, cocher la case __Activer SSH__ et l'option __Utiliser un mot de passe pour l'authentification__.
1. Cliquer sur __Enregistrer__ et répondre __Oui__ à la question __Voulez-vous appliquer les réglages de personnalisation de l'OS ?__
1. Répondre __Oui__ lorsqu'il est demandé de continuer en supprimant toutes les données sur la carte SD.

L'application _Raspberry Pi Imager_ télécharge alors la dernière version de l'image MoodleBox et la copie sur la carte microSD. L'opération prend quelques minutes. La durée dépend de la connexion Internet et de la carte microSD.

### Marche à suivre alternative pour utilisateurs avancés

On peut aussi [télécharger manuellement l'image disque][manualdownload], puis utiliser un autre outil pour copier l'image MoodleBox, par exemple Raspberry Pi Imager, BalenaEtcher ou `dd`.

 [imager]: https://www.raspberrypi.com/software/
 [manualdownload]: {{< relref "help/download-the-disk-image" >}}
