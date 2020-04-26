---
title: Comment accéder à la MoodleBox par Ethernet
authors:
  - Nicolas Martignoni
type: kb
date: 2017-12-23
lastmod: 2019-09-01
description: Il est possible de configurer votre réseau local pour accéder à la MoodleBox au moyen d'une connexion Ethernet
slug: comment-acceder-a-la-moodlebox-par-ethernet
categories_weight: 80
categories:
  - Utilisation

---
La MoodleBox n'est pas destinée à servir ses appareils clients par Ethernet. Cependant, il est possible de s'y connecter via Ethernet, moyennant la configuration de votre routeur.

La plateforme Moodle ne fonctionne correctement que si elle est appelée via son nom de domaine __moodlebox.home__. Par défaut, ce nom de domaine n'est pas connu dans le réseau Ethernet, et c'est là que réside la difficulté !

{{< notice warning >}}
En raison de la diversité du matériel installé chez les utilisateurs, __aucune assistance ne peut être assurée__ pour la configuration de votre routeur ou de votre appareil. N'effectuez de telles modifications que si vous savez vraiment ce que vous faites.
{{< /notice >}}

### Configurer le serveur DNS de votre routeur

Il est nécessaire que, sur votre réseau Ethernet, le nom de domaine __moodlebox.home__ soit attribué à la MoodleBox. Ceci requiert de disposer d'un serveur DNS sur votre réseau Ethernet (par exemple sur votre routeur). Ce serveur DNS va attribuer le nom de domaine à l'adresse IP numérique de votre MoodleBox. L'adresse IP numérique est elle-même distribuée par le serveur DHCP du routeur (habituellement, cette adresse est quelque chose comme 192.168.1.143).

Une fois cette modification effectuée, les appareils clients sur le réseau filaire peuvent se connecter facilement à la MoodleBox (sans avoir besoin de retenir son adresse numérique) au moyen de l'adresse http://moodlebox.home/, et l'instance de Moodle de la MoodleBox répondra de manière correcte. Les appareils qui se connectent via Wi-Fi peuvent également continuer à le faire.

Si vous n'avez besoin d'accéder à la MoodleBox via Ethernet que par SSH, il est possible de le faire au moyen de son adresse IP numérique, sans nécessiter de modification.

Le nom d'hôte (_hostname_) de la MoodleBox est __moodlebox__. Son nom de domaine complet (_FQDN_) est __moodlebox.home__.

### Modification du fichier de configuration `hosts` de votre ordinateur

Une autre façon de faire correspondre le nom de domaine à l'adresse IP numérique de votre MoodleBox est d'utiliser le fichier de configuration `hosts` quelque part dans le système d'exploitation de votre ordinateur. Vous __ne devez en aucun cas modifier__ la première partie du fichier, mais vous pouvez ajouter les quelques lignes comme ci-dessous.

Après avoir ajouté la section ci-dessous, avec l'adresse IP réelle de votre MoodleBox, vous devriez pouvoir accéder à la page d'accueil de Moodlebox __moodlebox.home__ dans votre navigateur.

```bash
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1	localhost
255.255.255.255	broadcasthost
::1             localhost
##
# MoodleBox connection via Ethernet
# MoodleBox must get an ip address via dhcp
192.168.1.143	moodlebox.home	moodlebox
```
