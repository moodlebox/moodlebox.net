---
title: Installer la MoodleBox
authors:
  - Nicolas Martignoni
type: kb
date: 2017-09-15
lastmod: 2019-10-30
description: La procédure pour installer la MoodleBox en vue de sa première utilisation est décrite ici
slug: installer-la-moodlebox
weight: 1
categories:
  - Premiers pas
aliases:
  - ../install

---
Voici la procédure pour installer la MoodleBox en vue de sa première utilisation.

### Étape 1 : acheter le matériel

Le [matériel nécessaire][1] pour faire votre MoodleBox consiste essentiellement en une Raspberry Pi modèle 3A, 3B, 3B+ ou 4B avec une alimentation et une carte microSD. [Plus d'informations ici][1].

{{< notice tip >}}
Le choix d'une carte microSD de __bonne qualité__ ainsi que d'une alimentation électrique adéquate sont __essentiels__ pour le bon fonctionnement de la MoodleBox.

Nous recommandons l'[alimentation officielle](https://www.raspberrypi.org/products/raspberry-pi-universal-power-supply/) de la Fondation Raspberry et une carte microSD disposant de performances éprouvées, par exemple celles qui sont [recommandées par Wirecutter](http://thewirecutter.com/reviews/best-microSD-card/). L'utilisation d'autres alimentations, ainsi que de cartes microSD de provenances douteuses peuvent être en effet la cause de dysfonctionnements systématiques, pour lesquels __aucune assistance ne peut être assurée__.
{{< /notice >}}


### Étape 2 : télécharger l'image-disque de la MoodleBox

L'[image-disque][2] nécessaire pour construire la MoodleBox est [disponible ici][2].

### Étape 3 : copier l'image-disque sur votre carte microSD

Pour cette opération, il est préférable d'utiliser [balenaEtcher][10]. [Plus d'informations ici][3].

### Étape 4 : démarrer votre MoodleBox

Insérer dans la Raspberry Pi la carte microSD (sur laquelle l'image-disque a été copiée) et brancher l'alimentation. La diode rouge s'allume, puis, après quelques secondes, la diode verte s'allume de façon intermittente. Si désiré, brancher la MoodleBox au réseau ou à un routeur Internet avec un câble ethernet afin de permettre aux appareils connectés d'accéder à Internet.

Il n'y a pas d'autre manipulation à effectuer : dès la fin de son démarrage, la MoodleBox est prête et fonctionnelle.

### Étapes suivantes

  * [Se connecter en Wi-Fi][5]
  * [Accéder à Moodle][4]
  * [Changer le mot de passe principal][11]
  * [Configurer le réseau Wi-Fi][6]
  * [Accéder à la MoodleBox via SSH][7]
  * [Soutenir le projet MoodleBox][8]

Pour plus d'informations, [consultez la documentation][9].

 [1]: {{< relref "help/hardware" >}}
 [2]: {{< relref "help/download-the-disk-image" >}}
 [3]: {{< relref "help/copy-the-disk-image" >}}
 [4]: {{< relref "help/access-to-moodle" >}}
 [5]: {{< relref "help/wi-fi-connection" >}}
 [6]: {{< relref "help/wi-fi-configuration" >}}
 [7]: {{< relref "help/command-line-access" >}}
 [8]: {{< relref "/support-moodlebox" >}}
 [9]: {{< relref "/help" >}}
 [10]: https://www.balena.io/etcher/
 [11]: {{< relref "/change-password" >}}
