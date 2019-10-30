---
title: Wie wird die MoodleBox installiert
authors:
  - Nicolas Martignoni
  - Ralf Krause
type: kb
date: 2017-09-15
lastmod: 2019-10-30
description: Diese Vorgehensweise ist notwendig, um die MoodleBox für die erste Verwendung zu installieren
slug: moodlebox-installieren
weight: 1
categories:
  - First steps
aliases:
  - ../install

---
Die folgende Vorgehensweise ist notwendig, um die MoodleBox für die erste Verwendung zu installieren.

### Schritt 1: Hardware kaufen

Die [Sachen, die Sie für Ihre MoodleBox benötigen][1], sind im Wesentlichen ein Raspberry Pi Model 3A, 3B, 3B+ oder 4B, ein Netzteil und eine MicroSD-Karte. [Weitere Informationen][1].

{{< notice tip >}}
Der Erwerb einer __hochqualitativen__ microSD-Karte und einer geeigneten Stromversorgung sind für den störungsfreien Betrieb der MoodleBox __unerlässlich__.

Wir empfehlen das [offizielle Netzteil](https://www.raspberrypi.org/products/raspberry-pi-universal-power-supply/) der Raspberry Foundation und eine microSD-Karte mit geprüfter Leistung, z.B. [von Wirecutter empfohlen](http://thewirecutter.com/reviews/best-microsd-card/). Die Verwendung anderer Netzteile sowie von microSD-Karten aus zweifelhaften Quellen kann zu systematischen Störungen führen, für die __keine Unterstützung geleistet werden kann__.
{{< /notice >}}

### Schritt 2: MoodleBox Disk-Image herunterladen

Laden Sie das aktuelle [MoodleBox Disk-Image][2] aus dem Internet herunter und speichern Sie es auf Ihrer Festplatte.

### Schritt 3: Disk-Image auf eine MicroSD-Karte kopieren

Für diese Aufgabe empfehlen wir Ihnen vorzugsweise [balenaEtcher][10]. [Weitere Informationen][3].

### Schritt 4: MoodleBox starten

Setzen Sie die kopierte MicroSD-Karte in den Steckplatz im Raspberry Pi 3 ein. Schalten Sie die Stromversorgung ein. Die rote LED leuchtet und nach einigen Sekunden beginnt die grüne LED zu blinken. Auf Wunsch verbinden Sie die MoodleBox mit dem Netzwerk oder einem Internetrouter über ein Ethernet-Kabel, damit angeschlossene Geräte auf das Internet zugreifen können.

Es sind keine weiteren Einstellungen notwendig. Sofort nach dem Start ist die MoodleBox fertig und voll funktionsfähig.

### Nächste Schritte

  * [WLAN verbinden][5]
  * [Moodle öffnen][4]
  * [Ändern des Hauptkennworts][11]
  * [WLAN konfigurieren][6]
  * [SSH Zugriff][7] auf die MoodleBox
  * [Projekt MoodleBox unterstützen][8]

Weitere Informationen finden Sie, wenn Sie in unserer [Knowledge Base][9] stöbern.

 [1]: {{< relref "hardware" >}}
 [2]: {{< relref "download-the-disk-image" >}}
 [3]: {{< relref "copy-the-disk-image" >}}
 [4]: {{< relref "access-to-moodle" >}}
 [5]: {{< relref "wi-fi-connection" >}}
 [6]: {{< relref "wi-fi-configuration" >}}
 [7]: {{< relref "command-line-access" >}}
 [8]: {{< relref "/support-moodlebox" >}}
 [9]: {{< relref "/help" >}}
 [10]: https://www.balena.io/etcher/
 [11]: {{< relref "/change-password" >}}
