---
title: Quels sont les mots de passe de la MoodleBox
authors:
  - Nicolas Martignoni
type: kb
date: 2017-09-16
lastmod: 2018-10-24
description: Tous les identifiants utilisés sur la MoodleBox (WiFi, SSH, Moodle, base de données) sont indiqués ici
slug: noms-dutilisateur-et-mots-de-passe
weight: 8
categories:
  - Maintenance
  - Utilisation

---
Cette page fait l'inventaire des identifiants — noms d'utilisateur et mots de passe — utilisés sur la MoodleBox.

### Accès en ligne de commande (compte Unix, SSH, SFTP)

Ces données d'identification doivent être utilisées pour se connecter au compte Unix. À utiliser également pour [accéder à la MoodleBox par SSH][1] ou [par SFTP][2].

  * Nom d'utilisateur : __moodlebox__
  * Mot de passe : __Moodlebox4$__

### Accès au réseau Wi-Fi

Ce mot de passe doit être utilisé pour [se connecter au réseau Wi-Fi][3] de la MoodleBox. Le nom du réseau (SSID) est __MoodleBox__.

  * Mot de passe : __moodlebox__

### Accès à Moodle

Ces données d'identification doivent être utilisées pour [se connecter au compte administrateur][4] par défaut de Moodle.

  * Nom d'utilisateur : __moodlebox__
  * Mot de passe : __Moodlebox4$__

{{% notice info %}}
Le nom d'utilisateur __admin__ (avec le même mot de passe __Moodlebox4$__), utilisé jusqu'à la version 2.5.1 de la MoodleBox, est encore valable, mais n'est plus conseillé. Il sera supprimé dans une version future de l'image.
{{% /notice %}}

### Accès à la base de données

Ces données d'identification doivent être utilisées pour [accéder à l'interface de gestion de la base de données][5].

  * Nom d'utilisateur : __moodlebox__
  * Mot de passe : __Moodlebox4$__

 [1]: {{< relref "command-line-access.md" >}}
 [2]: {{< relref "using-files-with-the-moodlebox.md" >}}
 [3]: {{< relref "wi-fi-connection.md" >}}
 [4]: {{< relref "access-to-moodle.md" >}}
 [5]: {{< relref "access-to-the-database.md" >}}
