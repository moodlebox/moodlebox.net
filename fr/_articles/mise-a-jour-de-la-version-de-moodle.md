---
ID: 404
post_title: Mise à jour de la version de Moodle
author: nicolas.martignoni.admin
post_date: 2017-04-17 21:33:38
post_excerpt: ""
layout: epkb_post_type_1
permalink: >
  https://moodlebox.net/fr/help/mise-a-jour-de-la-version-de-moodle/
published: true
---
Afin de permettre une mise à jour simplifiée de Moodle, son installation a été faite au moyen de Git. Pour mettre à jour Moodle, on effectuera donc les opérations suivantes, en ligne de commande.

Connexion à la MoodleBox via SSH, avec le mot de passe habituel <strong>Moodlebox4$</strong>.

<code>ssh moodlebox@moodlebox.home</code>

On tape les commandes suivantes dans le terminal :

<code>cd /var/www/html/</code>
<code>sudo git pull</code>

On charge ensuite dans le navigateur l'URL <a class="_blanktarget" href="http://moodlebox.home/admin">http://moodlebox.home/admin</a>, et on suit les instructions de mise à jour, comme avec un Moodle standard (voir la documentation ici : <a class="_blanktarget" href="https://docs.moodle.org/fr/Mise_%C3%A0_jour" target="_blank" rel="noopener noreferrer">https://docs.moodle.org/fr/Mise_à_jour</a>).

Pour une mise à jour à une <strong>version majeure</strong> de Moodle (3.4, 3.5, etc.), on tape <strong>en plus</strong> les commandes suivantes :

<code>sudo git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"</code>
<code>sudo git fetch origin</code>
<code>sudo git pull</code>
<code>sudo git checkout MOODLE_34_STABLE</code>