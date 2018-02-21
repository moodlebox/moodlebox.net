---
title: Moodle aktualisieren
author: Nicolas Martignoni, Ralf Krause
type: kb
date: 2018-02-13
slug: moodle-aktualisieren
categories:
  - Maintenance

---
Um die Aktualisierung von Moodle auf der MoodleBox möglichst einfach zu machen, wurde die Installation über Git durchgeführt. Für eine Aktualisierung führen Sie folgende Anweisungen über die Kommandozeile im Terminal aus.

[Verbinden Sie sich mit der MoodleBox über SSH][2] und geben Sie das standardmäßige Kennwort __Moodlebox4$__ ein. Falls Sie das Kennwort geändert haben, müssen sie natürlich das neue Kennwort eingeben.

```bash
ssh moodlebox@moodlebox.home
```

### Aktualisierung auf eine __Minor Version__ (kleiner Versionssprung)

Um Ihr Moodle auf die nächste __Minor Version__ (3.4.1, 3.4.2, usw.) zu aktualisieren, schreiben Sie folgende Anweisungen ins Terminal:

```bash
cd /var/www/moodle/
sudo -u www-data git pull
```

Öffnen Sie anschließend im Browser die URL http://moodlebox.home/admin und folgen Sie der Anleitung wie für jede beliebige Moodle-Installation. ([Weitere Infos in der Dokumentation][1]).

### Aktualisierung auf eine __Major Version__ (großer Versionssprung)

Um mit Ihrem Moodle auf die nächste __Major Version__ (3.5, 3.6, usw.) zu gelangen, verwenden Sie folgende __zusätzliche__ Anweisungen:

```bash
sudo -u www-data git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
sudo -u www-data git fetch origin
sudo -u www-data git pull
sudo -u www-data git checkout MOODLE_35_STABLE
```

Öffnen Sie auch hier die URL http://moodlebox.home/admin und folgen Sie genau wie oben der Anleitung.

 [1]: https://docs.moodle.org/de/Aktualisierung_von_Moodle
 [2]: {{< relref "command-line-access.de.md" >}}
