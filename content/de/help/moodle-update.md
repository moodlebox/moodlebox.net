---
title: Moodle aktualisieren
authors:
  - Nicolas Martignoni
  - Ralf Krause
  - Adrian Perez Rodriguez
type: kb
date: 2018-02-13
lastmod: 2020-02-18
description: Möchten Sie Moodle auf der MoodleBox aktualisieren? Folgen Sie diese Anweisungen.
slug: moodle-aktualisieren
categories:
  - Wartung

---
{{< notice warning >}}
Bevor Sie Ihre Version von Moodle aktualisieren, stellen Sie sicher, dass die Serveranforderungen auf Ihrem MoodleBox erfüllt sind. Melden Sie sich dazu bei Moodle an, besuchen Sie [Website-Administration > Server > Serverkonfiguration](http://moodlebox.home/admin/environment.php), klicken Sie auf _Komponente aktualisieren_, dann überprüfen Sie, dass keine Zeile in rot _Prüfen_ sagt.

Warnungen _site nicht https_ und _php nicht 64 bit_ sind kein Problem und können ignoriert werden.
{{< /notice >}}

Für eine Aktualisierung führen Sie folgende Anweisungen über die Kommandozeile im Terminal aus.

Erstens [verbinden Sie sich mit der MoodleBox über SSH][2] und geben Sie Ihr Kennwort ein. Falls Sie [das Kennwort noch nicht geändert][3] haben, müssen sie natürlich [das standardmäßige Kennwort][4] __Moodlebox4$__ eingeben.

```bash
ssh moodlebox@moodlebox.home
```

### Aktualisierung auf eine _Minor_ Version (kleiner Versionssprung)

Um Ihr Moodle auf die nächste __Minor Version__ (3.8.1, 3.8.2, usw.) zu aktualisieren, schreiben Sie folgende Anweisungen ins Terminal:[^1]

```bash
cd /var/www/moodle/
sudo -u moodlebox -g www-data git pull
```

Öffnen Sie anschließend im Browser die URL http://moodlebox.home/admin/ und folgen Sie der Anleitung wie für jede beliebige Moodle-Installation. ([Weitere Infos in der Dokumentation][update]).

### Aktualisierung auf eine _Major_ Version (großer Versionssprung)

Um mit Ihrem Moodle auf die nächste __Major Version__ (3.9, 4.0, usw.) zu gelangen, schreiben Sie oben angegebenen Anweisungen ins Terminal, und dann verwenden Sie noch folgende __zusätzliche__ Anweisungen:

```bash
sudo -u moodlebox -g www-data git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
sudo -u moodlebox -g www-data git fetch origin
sudo -u moodlebox -g www-data git checkout MOODLE_38_STABLE
```

Öffnen Sie auch hier die URL http://moodlebox.home/admin und folgen Sie der Anleitung wie für jede beliebige Moodle-Installation. ([Weitere Infos in der Dokumentation][update]).

{{< notice tip >}}
Wenn Sie eine MoodleBox Version 2.5.0 und früher haben, verwenden Sie `sudo -u www-data git ...` anstelle von `sudo -u moodlebox -g www-data git ...` in den oben angegebenen Anweisungen.
{{< /notice >}}

 [update]: https://docs.moodle.org/de/Aktualisierung_von_Moodle
 [2]: {{< relref "help/command-line-access" >}}
 [3]: {{< relref "help/change-password" >}}
 [4]: {{< relref "help/credentials" >}}

 [^1]: Um die Aktualisierung von Moodle auf der MoodleBox möglichst einfach zu machen, wurde die Installation über Git durchgeführt.
