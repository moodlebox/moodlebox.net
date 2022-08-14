---
title: Dateien für MoodleBox bereitstellen
authors:
  - Nicolas Martignoni
  - Ralf Krause
type: kb
date: 2017-04-20
lastmod: 2022-08-14
description: Die MoodleBox macht es einfach, Dateien mit den unten beschriebenen Methoden zur Verfügung zu stellen
slug: dateien-fuer-moodlebox
categories_weight: 7
categories:
  - Nutzung

---
### Dateien auf einem USB-Stick

Sobald ein USB-Stick in einen der USB-Ports der MoodleBox eingesteckt wird, sind automatisch alle Dateien auf dem USB-Stick für Administratoren und Trainer in der Dateiauswahl von Moodle verfügbar, u.z. über das Repository __USB Drive__.

{{< figure src="usb-drive.png" title="Repository USB-Drive " class="centered-image" width="650" >}}

Wenn mehrere USB-Sticks in die MoodleBox eingesteckt werden, sind ausschließlich die Dateien auf dem zuerst eingesteckten USB-Stick verfügbar.

Die MoodleBox unterstützt folgenden Formatierungen zurecht: FAT32, VFAT, ext2, ext3, ext4, NTFS, exFAT und HFS+.

{{< notice tip >}}
An Stelle eines USB-Sticks kann auch eine USB-Festplatte oder eine USB-SSD an die MoodleBox angeschlossen und als Repository __USB Drive__ bereit gestellt werden. Beachten Sie bitte, dass eine USB-Festplatte möglicherweise zu viel Strom benötigt, mehr als der USB-Port der MoodleBox liefert.
{{< /notice >}}

### Dateien über SFTP

Dateien können auf die MoodleBox auch über SFTP hochgeladen werden. Dateien im Verzeichnis __files__ sind ebenfalls für Administrator und Trainer in der Dateiauswahl von Moodle verfügbar, u.z. über das Repository __SFTP Documents__.

{{< figure src="sftp-documents.png" title="Repository SFTP Documents" class="centered-image" width="650" >}}

Um Dateien über SFTP hochzuladen, nehmen Sie eine Software wie [FileZilla][1], [Cyberduck][2], [WinSCP][3] oder [Documents][4] und geben Sie folgende Anmeldedaten ein:

  * Anmeldename: __moodlebox__
  * Kennwort: __Moodlebox4$__

{{< notice note >}}
Aus Sicherheitsgründen ist eine Verbindung über FTP nicht möglich. Zur Dateiübertragung muss das Protokoll SFTP (Secure FTP, Port 22) verwendet werden.
{{< /notice >}}

 [1]: https://filezilla-project.org/
 [2]: https://cyberduck.io/
 [3]: http://winscp.net/
 [4]: https://readdle.com/de/products/documents/
