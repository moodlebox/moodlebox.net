---
title: Wie wird Moodle aktualisiert
authors:
  - Nicolas Martignoni
  - Ralf Krause
  - Adrian Perez Rodriguez
type: kb
date: 2018-02-13
lastmod: 2020-10-20
description: Möchten Sie das Moodle auf der MoodleBox aktualisieren? Folgen Sie diese Anweisungen.
slug: moodle-aktualisieren
categories:
  - Wartung

---
{{< notice warning >}}
Bevor Sie das Moodle auf Ihrer MoodleBox aktualisieren, stellen Sie sicher, dass die Serveranforderungen auf Ihrem MoodleBox erfüllt sind. Melden Sie sich dazu bei Moodle an, besuchen Sie [Website-Administration > Server > Serverkonfiguration](http://moodlebox.home/admin/environment.php), klicken Sie auf _Komponente aktualisieren_ und überprüfen Sie dann, dass keine Zeile in rot _Prüfen_ sagt.

Die Warnungen _site not https_ und _php not 64 bits_ sind kein Problem und können ignoriert werden.
{{< /notice >}}

Für eine Aktualisierung führen Sie folgende Anweisungen über die Kommandozeile im Terminal aus.

Zuerst [verbinden Sie sich mit der MoodleBox über SSH][2] und geben Sie Ihr Kennwort ein. Falls Sie [das Kennwort noch nicht geändert][3] haben, müssen sie natürlich [das standardmäßige Kennwort][4] __Moodlebox4$__ eingeben.

```bash
ssh moodlebox@moodlebox.home
```

### Aktualisierung auf eine _Minor_ Version (kleiner Versionssprung)

Um Ihr Moodle auf die nächste __Minor Version__ (3.9.1, 3.9.2, usw.) zu aktualisieren, schreiben Sie folgende Anweisungen ins Terminal:[^git]

```bash
cd /var/www/moodle/
sudo -u moodlebox -g www-data git pull
```

Öffnen Sie anschließend im Browser die URL http://moodlebox.home/admin/ und folgen Sie der Anleitung wie für jede andere Moodle-Installation. ([Weitere Infos finden Sie in der Dokumentation][update]).

### Aktualisierung auf eine _Major_ Version (großer Versionssprung)

Um mit Ihrem Moodle auf die nächste __Major Version__ (3.9, 3.10[^future], 3.11[^future], 4.0[^future], usw.) zu gelangen, schreiben Sie oben angegebenen Anweisungen ins Terminal, und dann verwenden Sie noch folgende __zusätzliche__ Anweisungen, wobei der entsprechende Branch angegeben wird, z.B. `MOODLE_39_STABLE`, `MOODLE_40_STABLE`, usw.:

```bash
sudo -u moodlebox -g www-data git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
sudo -u moodlebox -g www-data git fetch origin
sudo -u moodlebox -g www-data git checkout MOODLE_39_STABLE
```

Öffnen Sie auch hier im Browser die URL http://moodlebox.home/admin und folgen Sie der Anleitung wie für jede andere Moodle-Installation. ([Weitere Infos finden Sie in der Dokumentation][update]).

{{< notice tip >}}
Wenn Sie eine MoodleBox Version 2.5.0 und früher haben, verwenden Sie `sudo -u www-data git ...` anstelle von `sudo -u moodlebox -g www-data git ...` in den oben angegebenen Anweisungen.
{{< /notice >}}

 [update]: https://docs.moodle.org/de/Aktualisierung_von_Moodle
 [2]: {{< relref "help/command-line-access" >}}
 [3]: {{< relref "help/change-password" >}}
 [4]: {{< relref "help/credentials" >}}

 [^git]: Um die Aktualisierung von Moodle auf der MoodleBox möglichst einfach zu machen, wurde die Installation über Git durchgeführt.
 [^future]: Natürlich müssen Sie sich für einen vorhandenen und stabilen Branch entscheiden, also warten Sie auf die [offizielle Veröffentlichung](https://docs.moodle.org/dev/Releases#General_release_calendar) der gewünschten Moodle-Version, um dies zu tun.
