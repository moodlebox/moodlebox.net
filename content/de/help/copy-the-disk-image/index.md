---
title: Disk-Image auf eine microSD-Karte kopieren
authors:
  - Nicolas Martignoni
  - Ralf Krause
type: kb
date: 2017-04-20
lastmod: 2022-12-29
description: Um das MoodleBox Disk-Image auf eine SD-Karte zu kopieren, laden Sie einfach den Raspberry Pi Imager herunter und folgen Sie diese Anweisungen.
slug: disk-image-kopieren
categories_weight: 4
categories:
  - Erste Schritte
---

Um das MoodleBox-Betriebssystem auf Ihre microSD-Karte zu kopieren, empfehlen wir den [Raspberry Pi Imager][imager]. Dieses Programm wird von der Raspberry Pi Foundation angeboten.

### Vorgehensweise

1. Laden Sie die neueste Version des [Raspberry Pi Imager][imager] herunter und installieren Sie es auf Ihrem Computer.
2. Starten Sie das Programm _Raspberry Pi Imager_.
3. Klicken Sie unter Betriebssystem auf __OS wählen__.
4. Scrollen Sie nach unten und wählen Sie __Other specific purpose OS__ aus.
5. Scrollen Sie nach unten, wählen Sie __MoodleBox__ aus und klicken Sie dann auf die Version des MoodleBox-Disk-Image.
6. Klicken Sie auf __SD-Karte wählen__ und wählen Sie Ihre microSD-Karte aus.
7. Klicken Sie auf die Taste mit dem Zahnrad und geben Sie die Einstellungen an, die Sie für Ihre MoodleBox wünschen (siehe Screenshot unten, die anderen Optionen können unverändert bleiben):
   - Geben Sie den __Hostnamen__ ein, z.B. _moodlebox_
   - Markieren Sie die Option __SSH aktivieren__ und die Option __Password zur Authentifizierung verwenden__ an
   - Geben Sie den __Benutzernamen__ und das __Passwort__ ein, z.B. _moodlebox_ und _MoodleBox4$_
   - Klicken Sie auf __Speichern__.
8. Klicken Sie auf __Schreiben__ und beantworten Sie anschliessend die Frage __Möchten Sie wirklich fortfahren?__ mit  __Ja__.

{{< figure src="/img/media/rpi-imager-settings.png" alt="Einstellungen von Raspberry Pi Imager" class="centered-image" width="700" >}}

Das Programm _Raspberry Pi Imager_ lädt jetzt die neueste Version des MoodleBox-Image herunter und kopiert es auf Ihre microSD-Karte. Der Vorgang dauert einige Minuten. Die Dauer hängt von Ihrer Internetverbindung und der microSD-Karte ab.

### Alternative Vorgehensweise für Fortgeschrittene

Sie können auch das [Disk-Image manuell herunterladen][manualdownload] und anschliessend mit einem Tool auf die microSD-Karte kopieren, z.B. mit Raspberry Pi Imager, BalenaEtcher oder `dd`.

 [imager]: https://www.raspberrypi.com/software/
 [manualdownload]: {{< relref "help/download-the-disk-image" >}}
