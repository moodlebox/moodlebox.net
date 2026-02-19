---
title: Disk-Image auf eine microSD-Karte kopieren
authors:
  - Nicolas Martignoni
  - Ralf Krause
type: kb
date: 2017-04-20
lastmod: 2026-02-18
description: Um das MoodleBox Disk-Image auf eine SD-Karte zu kopieren, laden Sie einfach den Raspberry Pi Imager herunter und folgen Sie diese Anweisungen.
slug: disk-image-kopieren
categories_weight: 4
categories:
  - Erste Schritte
aliases:
  - ../dl
---
Um das MoodleBox-Betriebssystem auf Ihre microSD-Karte zu kopieren, brauchen Sie [Raspberry Pi Imager][imager]. Dieses Programm wird von der Raspberry Pi Foundation angeboten.

### Vorgehensweise

1. Laden Sie die neueste Version des [Raspberry Pi Imager][imager] herunter und installieren Sie es auf Ihrem Computer.
1. Starten Sie das Programm _Raspberry Pi Imager_.
   {{< figure src="rpi-imager-de.png" alt="Raspberry Pi Imager" class="centered-image" width="700" >}}
1. Wählen Sie Ihr Raspberry Pi Modell, dann klicken Sie auf __Weiter__ um zum Tab __Betriebssystem__ zu gelangen, scrollen Sie nach unten und wählen Sie __Other specific-purpose OS__ aus.
1. Scrollen Sie nach unten, klicken Sie __MoodleBox__ und wählen Sie dann die Version des MoodleBox-Disk-Image aus.
1. Klicken Sie auf __Weiter__ zum Tab __Speicher__ und wählen Sie Ihre microSD-Karte aus.
1. Klicken Sie auf __Weiter__ zum Tab __Anpassung__ und geben Sie die Einstellungen an, die Sie für Ihre MoodleBox wünschen:
   - den __Hostnamen__, z.B. _moodlebox_,
   - die Lokalisierungseinstellungen (Stadt, Zeitzone und Tastaturlayout),
   - einen Benutzernamen und ein Passwort ein, z.B. _moodlebox_ und _Moodlebox4$_,
   - optional die SSID und das Passwort Ihres lokalen WLAN-Netzwerks,
   - aktivieren Sie SSH und klicken Sie auf das Optionsfeld __Passwort zur Authentifizierung verwenden__.
1. Klicken Sie auf __Weiter__ zum Tab __Schreiben__, klicken Sie auf __Schreiben__, und wenn Sie aufgefordert werden, mit dem Löschen aller Daten auf der SD-Karte fortzufahren, Klicken Sie auf __Ich verstehe. Lösche und schreibe__.
   {{< figure src="rpi-imager-warning-de.png" alt="Warnung Raspberry Pi Imager" class="centered-image" width="700" >}}

Das Programm __Raspberry Pi Imager__ lädt jetzt die neueste Version des MoodleBox-Image herunter und kopiert es auf Ihre microSD-Karte. Der Vorgang dauert einige Minuten. Die Dauer hängt von Ihrer Internetverbindung und der microSD-Karte ab.

 [imager]: https://www.raspberrypi.com/software/
