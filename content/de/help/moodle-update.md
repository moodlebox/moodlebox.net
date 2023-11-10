---
title: Moodle auf der MoodleBox aktualisieren
authors:
  - Nicolas Martignoni
  - Ralf Krause
  - Adrian Perez Rodriguez
type: kb
date: 2018-02-13
lastmod: 2023-11-10
description: Möchten Sie das Moodle auf der MoodleBox aktualisieren? Folgen Sie diese Anweisungen.
slug: moodle-aktualisieren
categories:
  - Wartung

---
{{< notice info >}}
Bevor Sie das Moodle auf Ihrer MoodleBox aktualisieren, stellen Sie sicher, dass die Serveranforderungen auf Ihrem MoodleBox erfüllt sind. Melden Sie sich dazu bei Moodle an, besuchen Sie [Website-Administration > Server > Serverkonfiguration](http://moodlebox.home/admin/environment.php), klicken Sie auf _Komponente aktualisieren_ und überprüfen Sie dann, dass keine Zeile in rot _Prüfen_ sagt.

Die Warnung _site not https_ ist kein Problem und kann ignoriert werden.
{{< /notice >}}

Für eine Aktualisierung führen Sie folgende Anweisungen über die Kommandozeile im Terminal aus.

Zuerst [verbinden Sie sich mit der MoodleBox über SSH][cli] und geben Sie Ihr Kennwort ein. Falls Sie [das Kennwort noch nicht geändert][change-pwd] haben, müssen sie natürlich [das standardmäßige Kennwort][default-pwd] __Moodlebox4$__ eingeben.

```bash
ssh moodlebox@moodlebox.home
```

### Aktualisierung auf eine _Minor_ Version (kleiner Versionssprung)

Um Ihr Moodle auf die nächste __Minor Version__ (4.3.1, 4.3.2, usw.) zu aktualisieren, schreiben Sie folgende Anweisungen ins Terminal:[^git]

```bash
cd /var/www/moodle/
sudo -u www-data -g moodlebox git pull
```

Öffnen Sie anschließend im Browser die URL http://moodlebox.home/admin/ und folgen Sie der Anleitung wie für jede andere Moodle-Installation. ([Weitere Infos finden Sie in der Dokumentation][update]).

### Aktualisierung auf eine _Major_ Version (großer Versionssprung)

Um mit Ihrem Moodle auf die nächste __Major Version__ (4.4[^future], 4.5[^future], usw.) zu gelangen, schreiben Sie oben angegebenen Anweisungen ins Terminal, und dann verwenden Sie noch folgende __zusätzliche__ Anweisungen, wobei der entsprechende Branch angegeben wird, z.B. `MOODLE_404_STABLE`, `MOODLE_405_STABLE`, usw.:

```bash
sudo -u www-data -g moodlebox git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
sudo -u www-data -g moodlebox git fetch origin
sudo -u www-data -g moodlebox git checkout MOODLE_404_STABLE
```

Öffnen Sie auch hier im Browser die URL http://moodlebox.home/admin und folgen Sie der Anleitung wie für jede andere Moodle-Installation. ([Weitere Infos finden Sie in der Dokumentation][update]).

 [update]: https://docs.moodle.org/de/Aktualisierung_von_Moodle
 [cli]: {{< relref "help/command-line-access" >}}
 [change-pwd]: {{< relref "help/change-password" >}}
 [default-pwd]: {{< relref "help/credentials" >}}

 [^git]: Um die Aktualisierung von Moodle auf der MoodleBox möglichst einfach zu machen, wurde die Installation über Git durchgeführt.
 [^future]: Natürlich müssen Sie sich für einen vorhandenen und stabilen Branch entscheiden, also warten Sie auf die [offizielle Veröffentlichung](https://docs.moodle.org/dev/Releases#General_release_calendar) der gewünschten Moodle-Version, um dies zu tun.
