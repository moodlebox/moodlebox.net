---
title: Wie wird die MoodleBox installiert
authors:
  - Nicolas Martignoni
  - Ralf Krause
type: kb
date: 2017-09-15
lastmod: 2020-04-25
description: Diese Schritte sind notwendig, um die MoodleBox für die erste Verwendung zu installieren
slug: moodlebox-installieren
categories_weight: 1
categories:
  - Erste Schritte
aliases:
  - ../install

---
Die folgende Vorgehensweise ist notwendig, um die MoodleBox für die erste Verwendung zu installieren.

### Schritt 1: Hardware kaufen

Die [Dinge, die Sie für Ihre MoodleBox benötigen][1], sind im Wesentlichen ein Raspberry Pi 3A, 3B, 3B+ oder 4B, ein geeignetes Netzteil und eine microSD-Karte. [Weitere Infos zur Hardware][1].

{{< notice tip >}}
Der Erwerb einer __hochwertigen__ microSD-Karte und einer geeigneten Stromversorgung sind für den störungsfreien Betrieb der MoodleBox __unerlässlich__.

Wir empfehlen das [offizielle Netzteil](https://www.raspberrypi.org/products/raspberry-pi-universal-power-supply/) der Raspberry Foundation und eine microSD-Karte mit geprüfter Leistung, z.B. [von Wirecutter empfohlen](https://thewirecutter.com/reviews/best-microsd-card/). Die Verwendung anderer Netzteile sowie von microSD-Karten aus zweifelhaften Quellen kann zu systematischen Störungen führen, für die __keine Unterstützung geleistet werden kann__.
{{< /notice >}}

### Schritt 2: MoodleBox Disk-Image herunterladen

Laden Sie das aktuelle [MoodleBox Disk-Image][2] aus dem Internet herunter und speichern Sie es auf Ihrer Festplatte.

### Schritt 3: Disk-Image auf eine microSD-Karte kopieren

Für diese Aufgabe empfehlen wir Ihnen vorzugsweise [balenaEtcher][10]. [Weitere Informationen][3].

### Schritt 4: MoodleBox starten

Setzen Sie die kopierte microSD-Karte in den Steckplatz im Raspberry Pi ein. Schalten Sie die Stromversorgung ein. Die rote LED leuchtet und nach einigen Sekunden beginnt die grüne LED zu blinken. Auf Wunsch verbinden Sie die MoodleBox mit dem Netzwerk oder einem Internetrouter über ein Ethernet-Kabel, damit angeschlossene Geräte auf das Internet zugreifen können.

Es sind keine weiteren Einstellungen notwendig. Sofort nach dem Start ist die MoodleBox fertig und voll funktionsfähig.

### Nächste Schritte

  * [WLAN verbinden][5]
  * [Moodle öffnen][4]
  * [Hauptkennwort ändern][11]
  * [WLAN konfigurieren][6]
  * [Zugriff über SSH][7] auf die MoodleBox
  * [Projekt MoodleBox unterstützen][8]

Weitere Informationen finden Sie, wenn Sie systematisch in unserer [Wissensbasis][9] stöbern.

 [1]: {{< relref "help/hardware" >}}
 [2]: {{< relref "help/download-the-disk-image" >}}
 [3]: {{< relref "help/copy-the-disk-image" >}}
 [4]: {{< relref "help/access-to-moodle" >}}
 [5]: {{< relref "help/wi-fi-connection" >}}
 [6]: {{< relref "help/wi-fi-configuration" >}}
 [7]: {{< relref "help/command-line-access" >}}
 [8]: {{< relref "/support-moodlebox" >}}
 [9]: {{< relref "/help" >}}
 [10]: https://www.balena.io/etcher/
 [11]: {{< relref "/change-password" >}}
