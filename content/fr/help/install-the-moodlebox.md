---
title: Installer la MoodleBox
authors:
  - Nicolas Martignoni
type: kb
date: 2017-09-15
lastmod: 2026-02-20
description: La procédure pour installer la MoodleBox en vue de sa première utilisation est décrite ici
slug: installer-la-moodlebox
categories_weight: 1
categories:
  - Premiers pas
aliases:
  - ../install

---
Pour la première utilisation de la MoodleBox, veuillez procéder de la manière suivante.

### Étape 1 : acheter le matériel

Le [matériel nécessaire][1] pour faire votre MoodleBox consiste essentiellement en une Raspberry Pi modèle 3A+, 3B, 3B+, 4B, 400 ou 5, une alimentation électrique adéquate et une carte microSD de qualité supérieure. Un boîtier est également recommandé afin de protéger la Raspberry Pi.

&Gt; [Plus d'informations ici][1]

### Étape 2 : copier l'image-disque sur la carte microSD

Pour cette opération, utiliser l'utilitaire [Raspberry Pi Imager][rpi-imager], qui téléchargera __automatiquement__ pour vous l'image disque MoodleBox. Lors de la copie de l'image, n'oubliez pas d'appliquer les réglages recommandés.

&Gt; [Plus d'informations ici][3]

### Étape 3 : démarrer votre MoodleBox

Insérer dans la Raspberry Pi la carte microSD sur laquelle l'image-disque a été copiée et brancher l'alimentation. La diode rouge s'allume, puis, après quelques secondes, la diode verte s'allume de façon intermittente. En connectant la MoodleBox au réseau ou à un routeur Internet avec un câble ethernet, les appareils connectés en WiFi pourront accéder à Internet.

&Gt; [Plus d'informations ici][10]

Il n'y a pas d'autre manipulation à effectuer. Dès la fin de son démarrage, la MoodleBox est prête et complètement fonctionnelle.

### Étapes suivantes

  * [Se connecter en Wi-Fi][5]
  * [Accéder à Moodle][4]
  * [Changer le mot de passe principal][11]
  * [Configurer le réseau Wi-Fi][6]
  * [Accéder à la MoodleBox via SSH][7]
  * [Soutenir le projet MoodleBox][8]

Pour plus d'informations, [consultez la documentation][9].

 [1]: {{< relref "help/hardware" >}}
 [3]: {{< relref "help/copy-the-disk-image" >}}
 [4]: {{< relref "help/access-to-moodle" >}}
 [5]: {{< relref "help/wi-fi-connection" >}}
 [6]: {{< relref "help/wi-fi-configuration" >}}
 [7]: {{< relref "help/command-line-access" >}}
 [8]: {{< relref "/support-moodlebox" >}}
 [9]: {{< relref "/help" >}}
 [10]: {{< relref "help/startup-shutdown-restart" >}}
 [11]: {{< relref "help/change-password" >}}
 [rpi-imager]: https://www.raspberrypi.com/software/
