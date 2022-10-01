---
title: Comment configurer le réseau Wi-Fi
authors:
  - Nicolas Martignoni
type: kb
date: 2017-08-12
lastmod: 2022-08-15
description: Il est possible de modifier différents réglages du point d'accès WiFi de la MoodleBox.
slug: modification-de-la-configuration-du-reseau-wi-fi
categories_weight: 6
categories:
  - Maintenance
  - Premiers pas

---
Lorsqu'on allume la MoodleBox, elle fonctionne comme un point d'accès sans fil. Un administrateur ou un gestionnaire peut modifier différents réglages du point d'accès sans fil de la MoodleBox, en visitant [Administration du site > Serveur > MoodleBox][1] dans le bloc d'administration.

{{< figure src="wifi-settings.png" title="Réglages Wi-Fi" width="750" class="centered-image" >}}

### Changer le nom du réseau Wi-Fi (SSID)

Pour changer le nom du réseau (SSID), saisir un nouveau SSID dans le champ adéquat et cliquer sur le bouton __Changer les réglages Wi-Fi__. Il est possible de choisir un SSID comportant des caractères spéciaux, tels que des émojis, et y compris des espaces.

{{< notice info >}}
Le SSID doit avoir une taille de 1 octet au minimum et de 32 octets au maximum. Attention ! Certains caractères, comme les émojis, utilisent plus d'un octet.
{{< /notice >}}

### Cacher le réseau Wi-Fi

Il est possible de cacher le réseau Wi-Fi de la MoodleBox en cochant la case __Réseau Wi-Fi caché__.

{{< notice tip >}}
Lorsque le réseau Wi-Fi est caché, il est difficile de savoir qu'une MoodleBox est active dans les environs. N'activez cette option que si vous êtes sûr de ce que vous faites, car les utilisateurs auront alors sans doute plus de peine à trouver la MoodleBox.
{{< /notice >}}

### Changer le canal Wi-Fi du point d'accès

Pour changer le canal Wi-Fi du point d'accès de la MoodleBox, sélectionner un numéro de canal et cliquer sur le bouton __Changer les réglages Wi-Fi__.

### Changer le pays de régulation du point d'accès sans fils

Pour changer le pays de régulation du point d'accès sans fils de la MoodleBox, sélectionner un pays dans la liste déroulante et cliquer sur le bouton __Changer les réglages Wi-Fi__.

{{< notice info >}}
Les canaux Wi-Fi autorisés dépendent du pays de régulation. Suivant le pays choisi, certains canaux ne seront pas disponibles.
{{< /notice >}}

### Retirer le mot de passe du réseau Wi-Fi ou le changer

Pour permettre un accès simplifié au point d'accès sans fils de la MoodleBox, il est possible d'autoriser son accès sans mot de passe, en décochant la case __Protégé par mot de passe__. Ce réglage peut être modifié en tout temps.

Il est également possible de modifier le mot de passe du point d'accès sans fils de la MoodleBox. Pour ce faire, saisir un nouveau mot de passe, composé d'au minimum 8 caractères et au maximum 63 caractères. Si le mot de passe choisi n'est pas valide, le mot de passe par défaut __moodlebox__ sera automatiquement remis.

### Changer l'adresse IP fixe du réseau WiFi de la MoodleBox

Afin d'éviter des collisions avec le réseau local existant, il est possible de changer l'adresse IP fixe du réseau WiFi de la MoodleBox, en modifiant le champ correspondant.

Seules les [adresses IP privées][private] sont autorisées, et MoodleBox utilisera toujours une adresse se terminant par `.1`, par exemple `192.168.100.1`, même si l'adresse saisie est `192.168.100.100`.

Les adresses IP distribuées par DHCP aux clients WiFi seront dans la plage du réseau privé spécifié. Par exemple, si l'adresse saisie est `172.28.10.1`, les adresses distribuées seront dans la plage `172.28.10.10-172.28.10.254`.

 [1]: http://moodlebox.home/admin/tool/moodlebox/index.php
 [private]: https://fr.wikipedia.org/wiki/Réseau_privé
