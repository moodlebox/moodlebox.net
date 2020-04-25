---
title: Kopieren eines Moodle Kurses in die MoodleBox
authors:
  - Nicolas Martignoni
type: kb
date: 2019-03-06
lastmod: 2019-03-06
description: Es ist einfach, einen Moodle-Kurs von einem anderen Moodle-Server auf eine MoodleBox zu kopieren.
slug: moodle-kurs-kopieren
weight: 6
categories:
  - Nutzung

---

Es ist einfach, einen Moodle-Kurs von einem anderen Moodle-Server auf eine MoodleBox zu kopieren, denn MoodleBox ist genau wie ein normaler Moodle-Server, nur kleiner und sehr transportabel. Auf dieser Seite geht es um die folgenden zwei Kurskopieszenarien.

Szenario 1
: Sie möchten einen Kurs auf dem Moodle-Server der Schule oder Firma in eine MoodleBox kopieren.

Szenario 2
: Sie möchten einen Kurs, der sich auf einer MoodleBox befindet, in eine andere MoodleBox kopieren.

{{< notice warning >}}
- Es ist nicht möglich, einen Kurs von einer neueren Version von Moodle auf eine ältere Version von Moodle zu kopieren. Bevor Sie mit den nachfolgend beschriebenen Aktionen beginnen, ist es daher notwendig, sicherzustellen, dass die Moodle-Version der Ziel-MoodleBox __gleich oder neuer__ ist als die des Quell-Moodle-Servers (auf einer anderen MoodleBox oder auf Ihrem Schulserver).
- Wenn Ihr Kurs eine Größe von 50 MB überschreitet, müssen Sie <a href="{{< relref "help/using-files-with-the-moodlebox" >}}">einen USB-Stick oder die SFTP-Serveroption der MoodleBox verwenden</a>, um ihn wiederherzustellen.
{{< /notice >}}

Der Prozess des Kopierens eines Kurses von einer Moodle zu einer MoodleBox ist genau derselbe wie bei jedem Moodle-Server. Der erste Schritt besteht darin, ein [Kurs-Backup][Backup] auf dem Moodle-Server der Schule oder der ersten MoodleBox, die Sie kopieren möchten, zu erstellen, sie auf einem geeigneten Medium zu speichern und dann [dieses Backup wiederherzustellen][Restore] auf der Ziel-MoodleBox.

### Vorgehensweise

#### Backup des zu kopierenden Kurses auf dem Moodle der Schule oder der ersten MoodleBox erstellen

1. Loggen Sie sich auf dem Moodle-Server, auf dem sich der Kurs gerade befindet, ein und betreten Sie den Kurs, mit mindestens einer Lehrerrolle.
1. Wählen Sie im Kursverwaltungsmenü (Zahnrad) die Option "Backup" und fahren Sie dann wie bei jeder Moodle-Kurssicherung fort.
1. Laden Sie am Ende der Sicherung die Backupsdatei, z.B. `sicherung-maths-20190306-2020.mbz`, auf Ihren Computer oder ein anderes geeignetes Speichermedium herunter.

Weitere Hilfe zu diesem Schritt finden Sie in der [offiziellen Moodle-Dokumentation zur Kurssicherung][Backup].

#### Wiederherstellung der Backups auf der MoodleBox

1. Loggen Sie sich mit einem Administratorkonto in die MoodleBox ein.
1. Wechseln Sie in die Moodle-Verwaltung der MoodleBox, Tab Kurs, und klicken Sie auf "[Wiederherstellen][restoreadmin]".
1. Die Datei aus dem zuvor gespeicherten Kurs `sicherung-maths-201909090306-2020.mbz` unter "Sicherungsdatei importieren" drag-and-drop und, wenn der Kurs groß ist, warten, bis der Download abgeschlossen ist. Wenn die Datei 50 MB überschreitet, [verwenden Sie einen USB-Stick oder die SFTP-Serveroption][bigfile] der MoodleBox.
1. Klicken Sie auf "Wiederherstellen", schließen Sie dann den Prozess der Wiederherstellung des Moodle-Kurses ab mit der Auswahl der gewünschten Optionen. Am Ende der Wiederherstellung ist der Kurs gebrauchsfertig.

Weitere Hilfe zu diesem Schritt finden Sie in der [offiziellen Moodle-Dokumentation zur Kurswiederherstellung][Wiederherstellung].

  [bigfile]: {{< relref "help/using-files-with-the-moodlebox" >}}
  [backup]: https://docs.moodle.org/de/Kurssicherung
  [restore]: https://docs.moodle.org/de/Kurswiederherstellung
  [restoreadmin]: http://moodlebox.home/backup/restorefile.php?contextid=1
