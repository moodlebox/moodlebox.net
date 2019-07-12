---
title: Wie lauten die Zugangsdaten
authors:
  - Nicolas Martignoni
  - Ralf Krause
type: kb
date: 2017-09-16
lastmod: 2018-10-24
description: Alle auf der MoodleBox verwendeten Anmeldedaten (Anmeldename und Kennwort) für WiFi, SSH, Moodle und Datenbank sind hier aufgelistet
slug: zugangsdaten
weight: 8
categories:
  - Maintenance
  - Usage
---
Diese Seite listet alle Anmeldedaten der Zugänge auf, die für die MoodleBox standardmäßig festgelegt sind. Natürlich lauten die Zugänge anders, wenn Sie etwas geändert haben.

### Zugang zum WLAN

Dieses Kennwort ist notwendig, wenn Sie sich mit der MoodleBox über [WLAN verbinden][3].

  * WLAN-Name (SSID): __MoodleBox__
  * Passwort: __moodlebox__

### Zugang zu Moodle

Diese Anmeldedaten werden für das [Anmelden in Moodle][4] verwendet, wenn Sie mit dem voreingestellten Administratorkonto auf die Plattform zugreifen.

  * Anmeldename: __moodlebox__
  * Passwort: __Moodlebox4$__

{{< notice info >}}
Der bis zur Version 2.5.1 der MoodleBox verwendete Anmeldename __admin__ (mit dem gleichen Passwort __Moodlebox4$__) ist weiterhin gültig, wird aber nicht mehr empfohlen. Es wird in einer zukünftigen Version des Images gelöscht.
{{< /notice >}}

### Zugang zum Betriebssystem (Unix Account, SSH, SFTP)

Diese Anmeldedaten erlauben den Zugang zum Betriebssystem (Unix Account). Nutzen Sie diese Daten, um [über SSH][1] oder [über SFTP][2] auf die MoodleBox zuzugreifen.

  * Anmeldename: __moodlebox__
  * Passwort: __Moodlebox4$__

### Zugang zur Datenbank

Diese Anmeldedaten ermöglichen den [Zugang zur Datenbank-Verwaltungsoberfläche][5].

  * Anmeldename: __moodlebox__
  * Passwort: __Moodlebox4$__

 [1]: {{< relref "command-line-access.md" >}}
 [2]: {{< relref "using-files-with-the-moodlebox.md" >}}
 [3]: {{< relref "wi-fi-connection.md" >}}
 [4]: {{< relref "access-to-moodle.md" >}}
 [5]: {{< relref "access-to-the-database" >}}
