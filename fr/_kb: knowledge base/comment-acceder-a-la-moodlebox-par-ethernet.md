---
ID: 792
post_title: >
  Comment accéder à la MoodleBox par
  Ethernet ?
author: nicolas.martignoni.admin
post_excerpt: ""
layout: epkb_post_type_1
permalink: >
  https://moodlebox.net/fr/help/comment-acceder-a-la-moodlebox-par-ethernet/
published: true
post_date: 2017-12-23 17:31:15
---
La MoodleBox n'est pas destinée à servir ses appareils clients par Ethernet. Cependant, il est possible de s'y connecter via Ethernet, moyennant la configuration de votre routeur.
<h3>Configurer le serveur DNS de votre routeur</h3>
Il est nécessaire que, sur votre réseau Ethernet, le nom de domaine <strong>moodlebox.home</strong> soit attribué à la MoodleBox. Ceci nécessite de disposer d'un serveur DNS sur votre réseau Ethernet (par exemple sur votre routeur). Ce serveur DNS va attribuer le nom de domaine à l'adresse IP numérique de votre MoodleBox. L'adresse IP numérique est elle-même distribuée par le serveur DHCP du routeur (habituellement, cette adresse est quelque chose comme 192.168.1.143).

Une fois cette modification effectuée, les appareils clients sur le réseau filaire peuvent se connecter facilement à la MoodleBox (sans avoir besoin de retenir son adresse numérique) au moyen de l'adresse <a href="http://moodlebox.home/">http://moodlebox.home/</a>, et l'instance de Moodle de la MoodleBox répondra de manière correcte. Les appareils qui se connectent via Wi-Fi peuvent également continuer à le faire.

Si vous n'avez besoin d'accéder à la MoodleBox via Ethernet que par SSH, il est possible de le faire au moyen de son adresse IP numérique, sans nécessiter de modification.