---
title: Comment installer la MoodleBox
authors:
  - Nicolas Martignoni
type: kb
date: 2017-09-15
lastmod: 2018-07-31
description: La procédure pour installer la MoodleBox en vue de sa première utilisation est décrite ici
slug: installer-la-moodlebox
weight: 1
categories:
  - Premiers pas
aliases:
  - fr/install

---
Voici la procédure pour installer la MoodleBox en vue de sa première utilisation.

### Étape 1: acheter le matériel

Le [matériel nécessaire][1] pour faire votre MoodleBox consiste essentiellement en une Raspberry Pi modèle 3B ou modèle 3B+ avec une alimentation et une carte MicroSD. [Plus d'informations ici][1].

### Étape 2: télécharger l'image-disque de la MoodleBox

L'[image-disque][2] nécessaire pour construire la MoodleBox est [disponible ici][2].

### Étape 3: copier l'image-disque sur votre carte MicroSD

Pour cette opération, il est préférable d'utiliser [Etcher][10]. [Plus d'informations ici][3].

### Étape 4: démarrer votre MoodleBox

Insérer dans la Raspberry Pi 3 la carte microSD (sur laquelle l'image-disque a été copiée) et brancher l'alimentation ainsi qu'un câble ethernet pour la connexion au réseau. La diode rouge s'allume, puis, après quelques secondes, la diode verte s'allume de façon intermittente.

Il n'y a pas d'autre manipulation à effectuer : dès la fin de son démarrage, la MoodleBox est prête et fonctionnelle.

### Étapes suivantes

  * [Accès à Moodle][4]
  * [Connexion Wi-Fi][5] et [configuration du réseau Wi-Fi][6]
  * [Accès SSH][7] à la MoodleBox
  * [Soutenir le projet MoodleBox][8]

Pour plus d'informations, [consultez la documentation][9].

 [1]: {{< relref "hardware-needed.md" >}}
 [2]: {{< relref "download-the-disk-image.md" >}}
 [3]: {{< relref "copy-the-disk-image.md" >}}
 [4]: {{< relref "access-to-moodle.md" >}}
 [5]: {{< relref "wi-fi-connection.md" >}}
 [6]: {{< relref "wi-fi-configuration.md" >}}
 [7]: {{< relref "command-line-access.md" >}}
 [8]: {{< relref "support-the-moodlebox-project.md" >}}
 [9]: /fr/help
 [10]: https://etcher.io
