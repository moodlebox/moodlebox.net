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
La MoodleBox n'est pas destinée à servir ses appareils clients par Ethernet. Cependant, il est possible de s'y connecter via Ethernet, moyennant quelques travaux.

Pour ce faire, vous devez attribuer à la MoodleBox le nom de domaine <strong>moodlebox.home</strong>. Ceci nécessite de disposer d'un serveur DNS sur votre réseau Ethernet (par exemple sur votre routeur), qui vat attribuer ce nom de domaine à l'adresse de votre MoodleBox, qui est donnée par le serveur DHCP du routeur (habituellement, cette adresse est quelque chose comme 192.168.1.143).

Ainsi, les appareils clients peuvent se connecter facilement à la MoodleBox (sans avoir besoin de retenir son adresse numérique), et l'instance de Moodle de la MoodleBox répondra de manière correcte.

Si vous n'avez besoin d'accéder à la MoodleBox via Ethernet que par SSH, il est possible de le faire au moyen de son adresse IP numérique, sans autre configuration.