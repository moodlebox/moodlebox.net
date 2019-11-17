---
title: Passer MoodleBox en HTTPS
authors:
  - Nicolas Martignoni
type: kb
date: 2019-11-17
lastmod: 2019-11-17
description: MoodleBox peut être configurée pour offrir une connexion sécurisée par HTTPS. Cette configuration nécessite une intervention manuelle par une personne techniquement compétente.
slug: connexion-https
weight: 90
categories:
  - Maintenance
---
La procédure ci-dessous permet de configurer la MoodleBox pour offrir une connexion sécurisée par HTTPS. Une fois ceci effectué, __il ne sera plus possible de se connecter en HTTP__.

1. Se connecter à [MoodleBox en ligne de commande][ssh-connect] (via SSH).
2. Éditer le fichier `/var/www/moodle/config.php`, par exemple en tapant la commande `nano /var/www/moodle/config.php`.
3. Modifier la ligne commençant par `$CFG->wwwroot` en remplaçant `http://` par `https://` dans l'adresse `http://moodlebox.home`.
4. Enregistrer la modification.
5. Tester en chargeant l'URL https://moodlebox.home dans un navigateur.

{{< notice warning >}}
Une fois la configuration effectuée, les appareils qui se connectent en HTTPS verront s'afficher une fenêtre d'avertissement indiquant que le certificat de la MoodleBox n'est pas valide. Pour supprimer cet avertissement, __chaque appareil__ doit installer le certificat racine de la MoodleBox.

Pour plus d'information à ce sujet, voyez [Installation du certificat racine sur les appareils clients](#installation-du-certificat-racine-sur-les-appareils-clients) ci-dessous.
{{< /notice >}}

### Installation du certificat racine sur les appareils clients

Pour se connecter en HTTPS à la MoodleBox sans affichage d'une fenêtre d'avertissement, il est nécessaire d'installer le certificat racine (ou certificat CA) de la MoodleBox. Ce certificat, émis par le [projet MoodleBox][project] en tant qu'autorité de certification, permet au navigateur de s'assurer que le certificat du site web de la MoodleBox est bien valide.

L'installation du certificat CA dépend du navigateur et du système d'exploitation.

- [Installation pour macOS]({{< relref "install-certificate-macos" >}})
- [Installation pour Windows]({{< relref "install-certificate-windows" >}})

  [project]: {{< relref "/project" >}}
  [ssh-connect]: {{< relref "command-line-access" >}}
