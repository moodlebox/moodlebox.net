---
title: Wie wird die MoodleBox installiert
author: Nicolas Martignoni, Ralf Krause
type: kb
date: 2017-09-15
description: Diese Vorgehensweise ist notwendig, um die MoodleBox für die erste Verwendung zu installieren
slug: moodlebox-installieren
weight: 1
categories:
  - First steps
aliases:
  - de/install

---
Die folgende Vorgehensweise ist notwendig, um die MoodleBox für die erste Verwendung zu installieren.

### Schritt 1: Hardware kaufen

Die [Sachen, die Sie für Ihre MoodleBox benötigen][1], sind im Wesentlichen ein Raspberry Pi 3, ein Netzteil und eine MicroSD-Karte. [Weitere Informationen][1].

### Schritt 2: MoodleBox Disk-Image herunterladen

Laden Sie das aktuelle [MoodleBox Disk-Image][2] aus dem Internet herunter und speichern Sie es auf Ihrer Festplatte.

### Schritt 3: Disk-Image auf eine MicroSD-Karte kopieren

Für diese Aufgabe empfehlen wir Ihnen vorzugsweise [Etcher][10]. [Weitere Informationen][3].

### Schritt 4: MoodleBox starten

Setzen Sie die kopierte MicroSD-Karte in den Steckplatz im Raspberry Pi 3 ein. Verbinden Sie die MoodleBox über ein Ethernet-Kabel mit dem Netzwerk oder dem Internetrouter. Schalten Sie die Stromversorgung ein. Die rote LED leuchtet und nach einigen Sekunden beginnt die grüne LED zu blinken.

Es sind keine weiteren Einstellungen notwendig. Sofort nach dem Start ist die MoodleBox fertig und voll funktionsfähig.

### Nächste Schritte

  * [Moodle öffnen][4]
  * [WLAN verbinden][5]
  * [WLAN konfigurieren][6]
  * [SSH Zugriff][7] auf die MoodleBox
  * [Projekt MoodleBox unterstützen][8]

Weitere Informationen finden Sie, wenn Sie in unserer [Knowledge Base][9] stöbern.

 [1]: {{< relref "hardware-needed.de.md" >}}
 [2]: {{< relref "download-the-disk-image.de.md" >}}
 [3]: {{< relref "copy-the-disk-image.de.md" >}}
 [4]: {{< relref "access-to-moodle.de.md" >}}
 [5]: {{< relref "wi-fi-connection.de.md" >}}
 [6]: {{< relref "updating-wi-fi-configuration.de.md" >}}
 [7]: {{< relref "command-line-access.de.md" >}}
 [8]: {{< relref "support-the-moodlebox-project.de.md" >}}
 [9]: /de/help
 [10]: https://etcher.io
