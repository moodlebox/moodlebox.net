---
title: Disk-Image auf eine microSD-Karte kopieren
authors:
  - Nicolas Martignoni
  - Ralf Krause
type: kb
date: 2017-04-20
lastmod: 2022-12-27
description: Um das MoodleBox Disk-Image auf eine SD-Karte zu kopieren, laden Sie einfach das Programm Raspberry Pi Imager herunter und folgen Sie diese Anweisungen.
slug: disk-image-kopieren
categories_weight: 4
categories:
  - Erste Schritte
---

Die einfachste Methode, das MoodleBox-Disk-Image auf Ihre microSD-Karte zu kopieren, ist die Verwendung des von der Raspberry Foundation veröffentlichten Tools [Raspberry Pi Imager][imager].

### Vorgehensweise

1. Laden Sie die neueste Version des Programms [Raspberry Pi Imager][imager] herunter und installieren Sie es auf Ihrem Computer.
2. Öffnen Sie das Programm _Raspberry Pi Imager_.
3. Klicken Sie auf __OS wählen__.
4. Scrollen Sie nach unten und wählen Sie __Other specific purpose OS__.
5. Scrollen Sie nach unten und wählen Sie __MoodleBox__, und klicken Sie dann auf die Version des MoodleBox-Disk-Image.
6. Klicken Sie auf __SD-Karte wählen__ und wählen Sie Ihre microSD-Karte.
7. Klicken Sie auf die Taste mit dem Zahnrad-Icon, und geben Sie die Einstellungen an, die Sie für Ihre MoodleBox wünschen (s. Screenshot unten, die anderen Optionen können unverändert bleiben):
   - Geben Sie den __Hostnamen__ an, z.B. _moodlebox_
   - Kreuzen Sie das Kästchen __Enable SSH__ und die Option __Use password authentication__ an
   - Geben Sie den __Benutzernamen__ und das __Passwort__ an, z.B. _moodlebox_ und _MoodleBox4$_
   - Klicken Sie auf __Save__.
8. Klicken Sie auf __Schreiben__, dann auf __Ja__.

{{< figure src="/img/media/rpi-imager-settings.png" alt="Einstellungen von Raspberry Pi Imager" class="centered-image" width="700" >}}

Das Programm _Raspberry Pi Imager_ wird die neueste Version des MoodleBox-Disk-Image herunterladen und auf Ihre microSD-Karte kopieren. Der Vorgang dauert einige Minuten; die Dauer hängt von Ihrer Internetverbindung und der microSD-Karte ab.

### Fortgeschrittene Benutzer

Wenn Sie ein anderes Tool wie BalenaEtcher oder `dd` verwenden möchten, um das MoodleBox-Image zu kopieren, können Sie [das Disk-Image manuell herunterladen][manualdownload].


 [imager]: https://www.raspberrypi.com/software/
 [manualdownload]: {{< relref "help/download-the-disk-image" >}}
