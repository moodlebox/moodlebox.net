---
title: Dateien für MoodleBox bereitstellen
author: Nicolas Martignoni, Ralf Krause
type: kb
date: 2017-04-20
slug: dateien-fuer-moodlebox
weight: 7
categories:
  - Usage

---
### Dateien auf einem USB-Stick

Sobald ein USB-Stick in einen der USB-Ports der MoodleBox eingesteckt wird, sind automatisch alle Dateien auf dem USB-Stick für Administratoren und Trainer in der Dateiauswahl von Moodle verfügbar, u.z. über das Repository __USB Drive__.

{{< figure link="/img/media/usb-drive.png" thumb="-small" caption="Repository USB-Drive " caption-position="bottom" caption-effect="appear" width="550px" >}}

Wenn mehrere USB-Sticks in die MoodleBox eingesteckt werden, sind ausschließlich die Dateien auf dem zuerst eingesteckten USB-Stick verfügbar.

An Stelle eines USB-Sticks kann auch eine USB-Festplatte oder eine USB-SSD an die MoodleBox angeschlossen und als Repository __USB Drive__ bereit gestellt werden. Beachten Sie bitte, dass eine USB-Festplatte möglicherweise zu viel Strom benötigt, mehr als der USB-Port der MoodleBox liefert.

Die MoodleBox kommt mit folgenden Formatierungen zurecht: fat32, vfat, ext2, ext3, ext4 und hfs+. Die Formatierung ntfs funktioniert bisher nicht, soll aber in einer zukünftigen Version der MoodleBox hinzugefügt werden.
 

### Dateien über SFTP

Dateien können auf die MoodleBox auch über SFTP hochgeladen werden. Dateien im Verzeichnis __files__ sind ebenfalls für Administrator und Trainer in der Dateiauswahl von Moodle verfügbar, u.z. über das Repository __SFTP Documents__.

{{< figure link="/img/media/sftp-documents.png" thumb="-small" caption="Repository SFTP Documents" caption-position="bottom" caption-effect="appear" width="550px" >}}

Um Dateien über SFTP hochzuladen, nehmen Sie eine Software wie [FileZilla][1], [Cyberduck][2], [WinSCP][3] oder [Documents][4] und geben Sie folgende Anmeldedaten ein:

  * Anmeldename: __moodlebox__
  * Kennwort: __Moodlebox4$__

{{% notice note %}}
Aus Sicherheitsgründen ist eine Verbindung über FTP nicht möglich. Zur Dateiübertragung muss das Protokoll SFTP (Secure FTP, Port 22) verwendet werden.
{{% /notice %}}

 [1]: https://filezilla-project.org/
 [2]: https://cyberduck.io/
 [3]: http://winscp.net/
 [4]: https://readdle.com/de/products/documents/
