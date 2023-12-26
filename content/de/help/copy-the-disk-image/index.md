---
title: Disk-Image auf eine microSD-Karte kopieren
authors:
  - Nicolas Martignoni
  - Ralf Krause
type: kb
date: 2017-04-20
lastmod: 2023-12-26
description: Um das MoodleBox Disk-Image auf eine SD-Karte zu kopieren, laden Sie einfach den Raspberry Pi Imager herunter und folgen Sie diese Anweisungen.
slug: disk-image-kopieren
categories_weight: 4
categories:
  - Erste Schritte
---
Um das MoodleBox-Betriebssystem auf Ihre microSD-Karte zu kopieren, empfehlen wir den [Raspberry Pi Imager][imager]. Dieses Programm wird von der Raspberry Pi Foundation angeboten.

### Vorgehensweise

1. Laden Sie die neueste Version des [Raspberry Pi Imager][imager] herunter und installieren Sie es auf Ihrem Computer.
1. Starten Sie das Programm _Raspberry Pi Imager_.
   {{< figure src="rpi-imager-de.png" alt="Raspberry Pi Imager" class="centered-image" width="700" >}}
1. Klicken Sie unter _Raspberry Pi Modell_ auf __Modell wählen__ und wählen Sie Ihr Raspberry Pi Modell.
1. Klicken Sie unter _Betriebssystem (OS)_ auf __OS wählen__, scrollen Sie nach unten und wählen Sie __Other specific purpose OS__ aus.
1. Scrollen Sie nach unten, klicken Sie __MoodleBox__ aus und wählen Sie dann auf die Version des MoodleBox-Disk-Image.
1. Klicken Sie auf __SD-Karte wählen__ und wählen Sie Ihre microSD-Karte aus.
1. Klicken Sie auf __Weiter__, dann auf __Einstellungen bearbeiten__ im nächsten Dialog und beantworten Sie die Frage _Möchten Sie das Wifi-Passwort aus dem System-Schlüsselbund vorab ausfüllen?_ mit _Nein_.
1. Auf dem Tab _Allgemein_ des nächsten Fensters geben Sie die Einstellungen an, die Sie für Ihre MoodleBox wünschen:
   - Markieren Sie die Option __Hostname__ und geben Sie den __Hostnamen__ ein, z.B. _moodlebox_
   - Markieren Sie die Option __Benutzername und Passwort festlegen__ und geben Sie den __Benutzernamen__ und das __Passwort__ ein, z.B. _moodlebox_ und _Moodlebox4$_
   - Markieren Sie __nicht__ die übrigen Kästchen (_Wifi einrichten_ und _Spracheinstellungen festlegen_)
   {{< figure src="rpi-imager-os-custom-de.png" alt="Einstellungen von Raspberry Pi Imager" class="centered-image" width="700" >}}
1. Auf dem Tab _Dienste_ markieren Sie die Option __SSH aktivieren__ und die Option __Password zur Authentifizierung verwenden__
1. Klicken Sie auf __Speichern__.
1. Beantworten Sie __Ja__, wenn Sie aufgefordert werden, mit dem Löschen aller Daten auf der SD-Karte fortzufahren.

Das Programm _Raspberry Pi Imager_ lädt jetzt die neueste Version des MoodleBox-Image herunter und kopiert es auf Ihre microSD-Karte. Der Vorgang dauert einige Minuten. Die Dauer hängt von Ihrer Internetverbindung und der microSD-Karte ab.

### Alternative Vorgehensweise für Fortgeschrittene

Sie können auch das [Disk-Image manuell herunterladen][manualdownload] und anschliessend mit einem Tool auf die microSD-Karte kopieren, z.B. mit Raspberry Pi Imager, BalenaEtcher oder `dd`.

 [imager]: https://www.raspberrypi.com/software/
 [manualdownload]: {{< relref "help/download-the-disk-image" >}}
