---
title: "Comment accéder à la MoodleBox par Ethernet"
author: Nicolas Martignoni
type: kb
date: 2017-12-23T16:31:15+00:00
slug: comment-acceder-a-la-moodlebox-par-ethernet
weight: 95
categories:
  - Utilisation

---
La MoodleBox n'est pas destinée à servir ses appareils clients par Ethernet. Cependant, il est possible de s'y connecter via Ethernet, moyennant la configuration de votre routeur.

### Configurer le serveur DNS de votre routeur

Il est nécessaire que, sur votre réseau Ethernet, le nom de domaine __moodlebox.home__ soit attribué à la MoodleBox. Ceci requiert de disposer d'un serveur DNS sur votre réseau Ethernet (par exemple sur votre routeur). Ce serveur DNS va attribuer le nom de domaine à l'adresse IP numérique de votre MoodleBox. L'adresse IP numérique est elle-même distribuée par le serveur DHCP du routeur (habituellement, cette adresse est quelque chose comme 192.168.1.143).

Une fois cette modification effectuée, les appareils clients sur le réseau filaire peuvent se connecter facilement à la MoodleBox (sans avoir besoin de retenir son adresse numérique) au moyen de l'adresse http://moodlebox.home/, et l'instance de Moodle de la MoodleBox répondra de manière correcte. Les appareils qui se connectent via Wi-Fi peuvent également continuer à le faire.

Si vous n'avez besoin d'accéder à la MoodleBox via Ethernet que par SSH, il est possible de le faire au moyen de son adresse IP numérique, sans nécessiter de modification.
