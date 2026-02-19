---
title: Copier l'image-disque sur une carte SD
authors:
  - Nicolas Martignoni
type: kb
date: 2017-04-17
lastmod: 2026-02-18
description: Pour copier l'image-disque MoodleBox sur une carte SD, il suffit de télécharger l'utilitaire Raspberry Pi Imager et de suivre ces instructions.
slug: copier-limage-disque-sur-une-carte-sd
categories_weight: 4
categories:
  - Premiers pas
aliases:
  - ../dl
---
Pour copier le système MoodleBox sur votre carte microSD, nous recommandons d'employer l'utilitaire [Raspberry Pi Imager][imager]. Ce programme est fourni par la Fondation Raspberry Pi.

### Marche à suivre

1. Télécharger la dernière version de l'utilitaire [Raspberry Pi Imager][imager] et l'installer sur l'ordinateur.
1. Lancer l'application _Raspberry Pi Imager_.
   {{< figure src="rpi-imager-fr.png" alt="Raspberry Pi Imager" class="centered-image" width="700" >}}
1. Sélectionner le modèle de votre Raspberry Pi, puis cliquer sur __Suivant__ pour accéder à l'onglet __OS__ et défiler vers le bas et cliquer __Other specific-purpose OS__.
1. Défiler vers le bas, cliquer __MoodleBox__, choisir la dernière version de l'image-disque MoodleBox et cliquer __Suivant__ vers l'onglet __Stockage__ et sélectionner votre carte microSD.
1. Cliquer __Suivant__ vers l'onglet __Personnalisation__, et spécifier les paramètres désirés pour votre MoodleBox dans les fenêtres suivantes :
   - le nom d'hôte, par exemple _moodlebox_,
   - les réglages de localisation (ville, fuseau horaire, clavier)
   - un nom d'utilisateur et un mot de passe, par exemple _moodlebox_ et _Moodlebox4$_,
   - optionnellement, le SSID et le mot de passe de votre réseau sans fil local,
   - activer SSH et cocher le bouton radio __Utiliser un mot de passe pour l'authentification__.
1. Cliquer __Suivant__ vers l'onglet __Écriture__, cliquer sur le bouton __Écrire__ et lorsqu'il est demandé de continuer en supprimant toutes les données sur la carte SD, clicker sur __Je comprends, effacer et écrire__.
   {{< figure src="rpi-imager-warning-fr.png" alt="Avertisssement Raspberry Pi Imager" class="centered-image" width="700" >}}

L'application __Raspberry Pi Imager__ télécharge alors la dernière version de l'image MoodleBox et la copie sur la carte microSD. L'opération prend quelques minutes. La durée dépend de la connexion Internet et de la carte microSD.

 [imager]: https://www.raspberrypi.com/software/
