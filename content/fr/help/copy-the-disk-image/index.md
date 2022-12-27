---
title: Copier l'image-disque sur une carte SD
authors:
  - Nicolas Martignoni
type: kb
date: 2017-04-17
lastmod: 2022-12-27
description: Pour copier l'image-disque MoodleBox sur une carte SD, il suffit de télécharger l'utilitaire Raspberry Pi Imager et de suivre ces instructions.
slug: copier-limage-disque-sur-une-carte-sd
categories_weight: 4
categories:
  - Premiers pas
---

Le plus simple pour copier l'image-disque MoodleBox sur votre carte microSD est d'employer l'utilitaire [Raspberry Pi Imager][imager] publié par la fondation Raspberry.

### Marche à suivre

1. Téléchargez la dernière version de l'utilitaire [Raspberry Pi Imager][imager] et installez-le sur votre ordinateur.
2. Ouvrez l'application _Raspberry Pi Imager_.
3. Cliquez le bouton __Choisissez l'OS__.
4. Défilez vers le bas et sélectionnez __Other specific purpose OS__.
5. Défilez vers le bas et sélectionnez __MoodleBox__, puis cliquez sur la version de l'image-disque MoodleBox.
6. Cliquez le bouton __Choisissez le stockage__ et sélectionnez votre carte microSD.
7. Cliquez sur le bouton avec l'icône d'engrenage, et spécifiez les paramètres que vous voulez pour votre MoodleBox (voir la copie-écran ci-dessous, les autres options peuvent être laissées inchangées):
   - indiquez le __nom d'hôte__, par exemple _moodlebox_,
   - cochez la case __Enable SSH__ et l'option __Use password authentication__,
   - indiquez le __nom d'utilisateur__ et le __mot de passe__, par exemple _moodlebox_ et _MoodleBox4$_, puis
   - cliquez le bouton __Save__.
8. Cliquez le bouton __Écrire__, puis sur __Oui__.

{{< figure src="/img/media/rpi-imager-settings.png" alt="Réglages de Raspberry Pi Imager" class="centered-image" width="700" >}}

L'application _Raspberry Pi Imager_ va télécharger et copier la dernière version de l'image MoodleBox sur votre carte microSD. L'opération prend quelques minutes ; la durée dépend de votre connexion Internet de de la carte microSD.

### Utilisateurs avancés

Si vous souhaitez utiliser un autre outil tel que BalenaEtcher ou `dd` pour copier l'image MoodleBox, vous pouvez [télécharger manuellement l'image disque][manualdownload].

 [imager]: https://www.raspberrypi.com/software/
 [manualdownload]: {{< relref "help/download-the-disk-image" >}}
