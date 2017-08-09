---
ID: 19
post_title: Installer la MoodleBox
author: nicolas.martignoni.admin
post_excerpt: ""
layout: page
permalink: https://moodlebox.net/fr/install/
published: true
post_date: 2016-09-01 20:39:10
---
Télécharger Etcher à cette adresse : <a href="https://etcher.io/" target="_blank">https://etcher.io</a> et suivez les instructions dans Etcher pour copier sur votre carte microSD le fichier <strong>moodlebox-x.y.z.img.gz</strong> que <a href="https://moodlebox.net/fr/dl/">vous avez téléchargé</a>.

<img class="alignnone size-full wp-image-352" src="https://moodlebox.net/fr/wp-content/uploads/sites/4/2016/09/Etcher-copy.png" alt="" width="800" height="380" />

Insérer la carte microSD dans la Raspberry Pi 3 et brancher l'alimentation ainsi qu'un câble ethernet pour la connexion au réseau. La diode rouge s'allume, puis, après quelques secondes, la diode verte s'allume de façon intermittente.

Il n'y a pas d'autre manipulation à effectuer : dès la fin de son redémarrage, la MoodleBox est prête et fonctionnelle.

Si possible, il est conseillé de brancher la MoodleBox au réseau lors de chaque démarrage. Ainsi, les tâches de maintenance nécessitant une connexion à Internet (par exemple la synchronisation de l'horloge interne) se feront de manière complète.
<h3>Pour les geeks</h3>
Si vous préférez utiliser la ligne de commande pour copier l'image-disque sur votre carte, décompressez le fichier <strong>moodlebox-x.y.z.img.gz</strong> que <a href="https://moodlebox.net/fr/dl/">vous avez téléchargé</a> et suivez les <a href="https://www.raspberrypi.org/documentation/installation/installing-images/README.md" target="_blank">instructions</a> pour copier l'image-disque <strong>moodlebox.img</strong> sur la carte microSD.
<ul>
 	<li><a href="https://www.raspberrypi.org/documentation/installation/installing-images/mac.md" target="_blank">Instructions pour Mac OS</a></li>
 	<li><a href="https://www.raspberrypi.org/documentation/installation/installing-images/windows.md" target="_blank">Instructions pour Windows</a></li>
 	<li><a href="https://www.raspberrypi.org/documentation/installation/installing-images/linux.md" target="_blank">Instructions pour Linux</a></li>
</ul>