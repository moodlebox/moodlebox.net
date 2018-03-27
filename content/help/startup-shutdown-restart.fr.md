---
title: Comment démarrer et arrêter la MoodleBox
author: Nicolas Martignoni
type: kb
date: 2017-04-17
description: Si vous voulez savoir comment démarrer votre MoodleBox, l'arrêter ou la redémarrer correctement, voici les informations souhaitées
slug: demarrer-arreter-redemarrer
weight: 1
categories:
  - Maintenance
  - Utilisation

---
#### Démarrer la MoodleBox

Insérer dans la Raspberry Pi 3 la carte microSD (sur laquelle l'image-disque a été copiée) et brancher l'alimentation ainsi qu'un câble ethernet pour la connexion au réseau. La diode rouge s'allume, puis, après quelques secondes, la diode verte s'allume de façon intermittente.

Il n'y a pas d'autre manipulation à effectuer : dès la fin de son démarrage, la MoodleBox est prête et fonctionnelle.

Si possible, il est recommandé de brancher la MoodleBox au réseau câblé lors de chaque démarrage. Ainsi, les tâches de maintenance nécessitant une connexion à Internet (par exemple la synchronisation de l'horloge interne) se feront de manière complète.

#### Arrêter la MoodleBox

{{% notice warning %}}
Afin de limiter au maximum les risques de corruption de données sur la carte microSD, pour éteindre la MoodleBox, il n'est pas recommandé de débrancher l'alimentation sans précaution. Il est préférable de commander manuellement son arrêt au préalable.
{{% /notice %}}

L'interface graphique de la MoodleBox permet d'arrêter et de redémarrer la MoodleBox sans risque.

Pour ce faire, après s'être connecté comme administrateur dans le Moodle de la MoodleBox, on visite [Administration du site > Serveur > MoodleBox][1] dans l'interface d'administration.

{{< figure link="/img/media/restart-shutdown-fr.png" caption="Éteindre et redémarrer" caption-position="bottom" caption-effect="appear" width="722px" >}}

Dans la section __Redémarrage et arrêt__, l'interface présente deux boutons, permettant de redémarrer et d'arrêter la MoodleBox. Après avoir cliqué sur le bouton __Arrêter la MoodleBox__, patienter quelques secondes et vérifier que la diode verte ne clignote plus. L'alimentation peut alors être débranchée sans risque.

#### Redémarrer la MoodleBox

Après s'être connecté comme administrateur dans le Moodle de la MoodleBox, visiter [Administration du site > Serveur > MoodleBox][1] dans le bloc d'administration.

Cliquer sur le bouton __Redémarrer la MoodleBox__ et patienter quelques secondes, après quoi vous pourrez vous reconnecter à la Moodlebox.

### Installer un bouton matériel de démarrage et d'arrêt

Il est possible d'installer un bouton matériel permettant d'arrêter et de démarrer la MoodleBox. De base, l'[image-disque de la MoodleBox][2] permet l'utilisation d'un tel bouton sans aucune modification de configuration.

L'installation d'un bouton matériel est très simple : il suffit d'acheter un interrupteur, par exemple [ce bouton tactile][3], et de le relier aux broches du port GPIO de la MoodleBox (broches 5 et 6) grâce à [des cavaliers][4] (voir l'image ci-dessous, merci à Laurent Fleron), puis de redémarrer la MoodleBox.

{{< figure link="/img/media/hardware-button.jpg" thumb="-small" caption="Bouton matériel" caption-position="bottom" caption-effect="appear" width="400px" >}}

 [1]: http://moodlebox.home/admin/tool/moodlebox/index.php
 [2]: {{< relref "download-the-disk-image.fr.md" >}}
 [3]: https://www.aliexpress.com/item/5pcs-TTP223-TTP223B-Jog-digital-touch-sensor-capacitive-touch-touch-switch-modules-Accessories/32694092023.html
 [4]: https://www.aliexpress.com/item/40pcs-lot-10cm-2-54mm-1pin-feMale-to-feMale-jumper-wire-Dupont-cable/32800215149.html
