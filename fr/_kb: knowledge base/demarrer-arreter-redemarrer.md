---
ID: 418
post_title: >
  Comment démarrer et arrêter la
  MoodleBox ?
author: nicolas.martignoni.admin
post_excerpt: ""
layout: epkb_post_type_1
permalink: >
  https://moodlebox.net/fr/help/demarrer-arreter-redemarrer/
published: true
post_date: 2017-04-17 22:09:27
---
<h3>Démarrer la MoodleBox</h3>
Insérer dans la Raspberry Pi 3 la carte microSD (sur laquelle l'image-disque a été copiée) et brancher l’alimentation ainsi qu’un câble ethernet pour la connexion au réseau. La diode rouge s’allume, puis, après quelques secondes, la diode verte s’allume de façon intermittente.

Il n’y a pas d’autre manipulation à effectuer : dès la fin de son démarrage, la MoodleBox est prête et fonctionnelle.

Si possible, il est recommandé de brancher la MoodleBox au réseau câblé lors de chaque démarrage. Ainsi, les tâches de maintenance nécessitant une connexion à Internet (par exemple la synchronisation de l’horloge interne) se feront de manière complète.
<h3>Arrêter la MoodleBox</h3>
Afin de limiter au maximum les risques de corruption de données sur la carte microSD, pour éteindre la MoodleBox, il n'est pas recommandé de débrancher l'alimentation sans précaution. Il est préférable de commander manuellement son arrêt au préalable.

Pour ce faire, après s'être connecté comme administrateur dans le Moodle de la MoodleBox, on visite <a href="http://moodlebox.home/admin/tool/moodlebox/index.php" target="_blank" rel="noopener noreferrer">Administration du site &gt; Serveur &gt; MoodleBox</a> dans l'interface d'administration.

<img class="alignnone size-full wp-image-481" src="https://moodlebox.net/fr/wp-content/uploads/sites/4/2017/04/restart-shutdown.png" alt="" width="722" height="111" />

Dans la section <strong>Rédémarrage et arrêt</strong>, l'interface présente deux boutons, permettant de redémarrer et d'arrêter la MoodleBox. Après avoir cliqué sur le bouton <strong>Arrêter la MoodleBox</strong>, patienter quelques secondes et vérifier que la diode verte ne clignote plus. L'alimentation peut alors être débranchée sans risque.
<h3>Redémarrer la MoodleBox</h3>
Après s'être connecté comme administrateur dans le Moodle de la MoodleBox, visiter <a href="http://moodlebox.home/admin/tool/moodlebox/index.php" target="_blank" rel="noopener noreferrer">Administration du site &gt; Serveur &gt; MoodleBox</a> dans le bloc d'administration.

Cliquer sur le bouton <strong>Redémarrer la MoodleBox</strong> et patienter quelques secondes, après quoi vous pourrez vous reconnecter à la Moodlebox.