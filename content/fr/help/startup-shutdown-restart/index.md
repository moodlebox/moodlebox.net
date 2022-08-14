---
title: Comment démarrer et arrêter la MoodleBox
authors:
  - Nicolas Martignoni
type: kb
date: 2017-04-17
lastmod: 2022-08-14
description: Si vous voulez savoir comment démarrer votre MoodleBox, l'arrêter ou la redémarrer correctement, voici les informations souhaitées
slug: demarrer-arreter-redemarrer
categories_weight: 1
categories:
  - Maintenance
  - Utilisation
---
#### Démarrer la MoodleBox

Insérer dans la Raspberry Pi la carte microSD (sur laquelle l'image-disque a été copiée) et brancher l'alimentation ainsi qu'un câble ethernet pour la connexion au réseau. La diode rouge s'allume, puis, après quelques secondes, la diode verte s'allume de façon intermittente.

{{< figure src="/img/media/pi-plug-in.gif" title="Démarrage" class="centered-image" width="600" >}}

Il n'y a pas d'autre manipulation à effectuer : dès la fin de son démarrage, la MoodleBox est prête et fonctionnelle.

Si possible, il est recommandé de brancher la MoodleBox au réseau câblé lors de chaque démarrage. Ainsi, les tâches de maintenance nécessitant une connexion à Internet (par exemple la synchronisation de l'horloge interne) se feront de manière complète.

#### Arrêter la MoodleBox

L'interface graphique de la MoodleBox permet d'arrêter et de redémarrer la MoodleBox sans risque.

Pour ce faire, après s'être connecté comme administrateur dans le Moodle de la MoodleBox, on visite [Administration du site > Serveur > MoodleBox][1] dans l'interface d'administration.

{{< figure src="restart-shutdown-fr.png" title="Éteindre et redémarrer" class="centered-image" width="735" >}}

Dans la section __Redémarrage et arrêt__, l'interface présente deux boutons, permettant de redémarrer et d'arrêter la MoodleBox. Après avoir cliqué sur le bouton __Arrêter la MoodleBox__, patienter quelques secondes et vérifier que la diode verte ne clignote plus. L'alimentation peut alors être débranchée sans risque.

{{< notice tip >}}
Afin de limiter au maximum les risques de corruption de données sur la carte microSD, pour éteindre la MoodleBox, il n'est pas recommandé de débrancher l'alimentation sans précaution. Il est préférable de commander manuellement son arrêt au préalable.
{{< /notice >}}

#### Redémarrer la MoodleBox

Après s'être connecté comme administrateur dans le Moodle de la MoodleBox, visiter [Administration du site > Serveur > MoodleBox][1] dans le bloc d'administration.

Cliquer sur le bouton __Redémarrer la MoodleBox__ et patienter quelques secondes, après quoi vous pourrez vous reconnecter à la Moodlebox.

### Installer un bouton matériel de démarrage et d'arrêt

Il est possible d'installer un bouton matériel permettant d'arrêter et de démarrer la MoodleBox. De base, l'[image-disque de la MoodleBox][2] permet l'utilisation d'un tel bouton sans aucune modification de configuration.

L'installation d'un bouton matériel est très simple : il suffit d'acheter un interrupteur, par exemple [ce bouton tactile][3], et de le relier aux broches du port GPIO de la MoodleBox (broches 5 et 6) grâce à [des cavaliers][4] (voir l'image ci-dessous, merci à Laurent Fleron), puis de redémarrer la MoodleBox.

{{< figure src="/img/media/hardware-button.jpg" title="Bouton matériel" class="centered-image" width="400" >}}

 [1]: http://moodlebox.home/admin/tool/moodlebox/index.php
 [2]: {{< relref "help/download-the-disk-image" >}}
 [3]: https://www.aliexpress.com/item/32713062171.html
 [4]: https://www.aliexpress.com/item/32800215149.html
