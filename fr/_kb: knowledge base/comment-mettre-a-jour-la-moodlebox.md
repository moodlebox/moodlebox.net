---
ID: 787
post_title: Comment mettre à jour la MoodleBox ?
author: nicolas.martignoni.admin
post_excerpt: ""
layout: epkb_post_type_1
permalink: >
  https://moodlebox.net/fr/help/comment-mettre-a-jour-la-moodlebox/
published: true
post_date: 2017-12-22 11:37:36
---
Comme mesure de sécurité régulière, il est recommandé de mettre à jour les logiciels serveur de la MoodleBox afin de combler les éventuelles failles trouvées dans la distribution Raspbian et de corriger d'autres bogues découverts.

Pour cette opération, la MoodleBox doit être connectée à Internet.
<h3>Mise à jour des logiciels de la MoodleBox</h3>
<ol>
 	<li>Se connecter à <a href="https://moodlebox.net/fr/help/connexion-ssh-en-ligne-de-commande/">l'interface en ligne de commande de la MoodleBox</a> via SSH, en utilisant les nom et mot de passe appropriés. Consulter au besoin les <a href="https://moodlebox.net/fr/help/noms-dutilisateur-et-mots-de-passe/">noms d’utilisateur et des mots de passe par défaut</a>.</li>
 	<li>Brancher la MoodleBox à un réseau local ayant accès à Internet, au moyen d'un câble Ethernet.</li>
 	<li>Taper la commande suivante dans l'interface du terminal :
<code>sudo apt-get update &amp;&amp; sudo apt-get upgrade -y</code>
et confirmer avec la touche Retour.</li>
 	<li>Cette opération durera quelques minutes. La durée dépend du nombre des logiciels à mettre à jour, de votre bande passante Internet et de la qualité de votre carte microSD.</li>
 	<li>Lorsque la mise à jour se termine, tapez <code>exit</code>, et confirmer avec la touche Retour.</li>
</ol>