---
title: Changer le nom de domaine de la MoodleBox
authors:
  - Nicolas Martignoni
type: kb
date: 2018-09-27
lastmod: 2024-02-10
description: Ce guide explique la démarche à effectuer pour changer le nom de domaine de votre MoodleBox, de sorte à mieux refléter votre propre situation locale.
slug: changer-nom-de-domaine
categories_weight: 90
categories:
  - Utilisation

---
{{< notice warning >}}
Les opérations décrites sur cette page sont susceptibles de __rendre votre MoodleBox inutilisable__, nécessitant l'effacement complet de la carte SD et la __perte de toutes les données__ qui s'y trouvent (contenus de cours, plugins installés, configurations personnalisées, etc.). N'effectuez ces opérations que si vous savez exactement ce que vous faites. Dans tous les cas, __aucune assistance n'est assurée__ sur ce sujet.

Nous déclinons toute responsabilité pour tout dommage direct ou indirect lors de l'utilisation de la MoodleBox, notamment suite à un changement du nom de domaine.
{{< /notice >}}

### Marche à suivre

L'exemple ci-dessous montre comment changer le nom de domaine d'une MoodleBox, ce qui permettra à un appareil local de l'atteindre au moyen d'une nouvelle URL. L'exemple indique comment donner à la MoodleBox le nom de domaine __learn.example.com__.

{{< notice info >}}
Cette opération n'a pas d'influence sur l'accès à la MoodleBox depuis un réseau Ethernet ou depuis Internet : la MoodleBox __restera accessible uniquement depuis le réseau Wi-Fi qu'elle fournit__, depuis les appareils qui s'y sont connectés.
{{< /notice >}}

#### Étape 1 : changer le nom d'hôte (_hostname_)

À la dernière ligne du fichier `/etc/hosts`, remplacer `moodlebox` par __learn.example.com__.

Dans le fichier `/etc/hostname`, remplacer `moodlebox` par __learn.example.com__ (cette modification n'est n'est pas indispensable, mais vivement recommandée).

#### Étape 2 : adapter la configuration du serveur web nginx

Modifier le fichier `/etc/nginx/sites-available/default`, en y remplaçant `moodlebox` par le nom de domaine complet (_FQDN_) __learn.example.com__ dans la directive `server_name`.

#### Étape 3 : adapter la configuration du serveur DHCP

Modifier le fichier `/etc/NetworkManager/dnsmasq-shared.d/00-dhcp.conf`, en y remplaçant `home` par __learn.example.com__ dans les deux lignes qui commencent par `domain` et `local`.

Si le nouveau nom de domaine est public, commenter ou effacer complètement la ligne commençant par `address`. Sinon, si le nouveau nom de domaine reste local, se teminant par `.home`, cette ligne peut être laissée telle quelle.

#### Étape 4 : Adapter la configuration du portail captif (Nodogsplash)

Dans le fichier `/etc/nodogsplash/nodogsplash.conf`, remplacer l'URL `http://moodlebox.home` par `http://learn.example.com`.

#### Étape 5 : Adapter la configuration de Moodle (URL de Moodle)

Dans le fichier `/var/www/moodle/config.php`, à la ligne qui commence par `$CFG->wwwroot`, remplacer l'URL `http://moodlebox.home` par `http://learn.example.com`. Ne pas ajouter de barre oblique à la fin de l'URL.

#### Étape 6 : Redémarrer la MoodleBox

Afin de prendre en compte ces modifications, redémarrer votre MoodleBox.

#### Étape 7 : Remplacer les URLs de Moodle

Accéder à votre MoodleBox au moyen votre navigateur en utilisant la nouvelle adresse `http://learn.example.com/` et utiliser l'outil de remplacement d'URL à l'adresse `http://learn.example.com/admin/tool/replace/index.php` pour remplacer les URLs dans la base de données de Moodle.

#### Étape 8 : Remplacer les certificats SSL (optionel)

Si vous voulez [utiliser HTTPS][3], vous devrez obtenir vos propres certificats SSL, car ceux fournis par MoodleBox ne fonctionneront pas avec votre nom de domaine personnalisé __learn.example.com__. N'oubliez pas de changer également l'URL.

### Options similaires

- [Changer le nom du réseau Wi-Fi][1] de la MoodleBox.
- Rendre accessible la MoodleBox [depuis un réseau câblé Ethernet][2].

 [1]: {{< relref "help/wi-fi-configuration" >}}
 [2]: {{< relref "help/access-via-ethernet" >}}
 [3]: {{< relref "help/https-connection" >}}
