---
title: MoodleBox Installation
authors:
  - Nicolas Martignoni
  - Ralf Krause
type: kb
date: 2017-09-15
lastmod: 2023-11-10
description: Diese Schritte sind notwendig, um die MoodleBox für die erste Verwendung zu installieren
slug: moodlebox-installation
categories_weight: 1
categories:
  - Erste Schritte
aliases:
  - ../install
  - moodlebox-installieren
---
Für die erste Verwendung der MoodleBox gehen Sie folgendermassen vor.

### Schritt 1: Hardware kaufen

Als [Hardware für Ihre MoodleBox][1] benötigen Sie im Wesentlichen einen Raspberry Pi (3A+, 3B, 3B+, 4B, 400 oder 5), ein geeignetes Netzteil und eine hochwertige microSD- Karte. Zusätzlich ist für den Schutz der Platine ein Gehäuse empfohlen.

&Gt; [Weitere Informationen][1]

### Schritt 2: Disk-Image auf die microSD-Karte kopieren

Für diese Aufgabe empfehlen wir Ihnen, den [Raspberry Pi Imager][rpi-imager] zu verwenden, der für Sie __automatisch__ das MoodleBox-Disk-Image herunterlädt. Nehmen Sie bitte beim Kopieren des Images zusätzlich die empfohlenen Einstellungen vor.

&Gt; [Weitere Informationen][3]

### Schritt 3: MoodleBox starten

Stecken Sie die kopierte microSD-Karte in den Steckplatz im Raspberry Pi und schalten Sie die Stromversorgung ein. Die rote LED leuchtet und nach einigen Sekunden beginnt die grüne LED zu blinken. Wenn Sie die MoodleBox über ein Ethernet-Kabel mit dem Netzwerk oder einem Internetrouter verbinden, können alle über WLAN verbundenen mobilen Endgeräte auf das Internet zugreifen.

&Gt; [Weitere Informationen][10]

Für den Betrieb sind keine weiteren Einstellungen notwendig. Sofort nach dem Start ist die MoodleBox fertig und voll funktionsfähig.

### Nächste Schritte

  * [WLAN verbinden][5]
  * [Moodle öffnen][4]
  * [Hauptkennwort ändern][11]
  * [WLAN konfigurieren][6]
  * [Zugriff über SSH][7] auf die MoodleBox
  * [Projekt MoodleBox unterstützen][8]

Weitere Informationen finden Sie beim systematischen Stöbern in unserer [Wissensbasis][9].

 [1]: {{< relref "help/hardware" >}}
 [2]: {{< relref "help/download-the-disk-image" >}}
 [3]: {{< relref "help/copy-the-disk-image" >}}
 [4]: {{< relref "help/access-to-moodle" >}}
 [5]: {{< relref "help/wi-fi-connection" >}}
 [6]: {{< relref "help/wi-fi-configuration" >}}
 [7]: {{< relref "help/command-line-access" >}}
 [8]: {{< relref "/support-moodlebox" >}}
 [9]: {{< relref "/help" >}}
 [10]: {{< relref "help/startup-shutdown-restart" >}}
 [11]: {{< relref "help/change-password" >}}
 [rpi-imager]: https://www.raspberrypi.com/software/
