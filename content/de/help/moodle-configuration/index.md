---
title: Wie sind die Einstellungen von Moodle
authors:
  - Nicolas Martignoni
  - Ralf Krause
type: kb
date: 2017-04-20
lastmod: 2021-03-10
description: Ausführliche Informationen zur Konfiguration der Moodle-Installation der MoodleBox finden Sie hier
slug: moodle-einstellungen
categories:
  - Wartung

---
Die Moodle-Plattform auf der MoodleBox ist komplett im Standard.

Lediglich die folgenden Einstellungen sind angepasst, um die Verwendung von MoodleBox zu erleichtern oder ihre Leistung zu verbessern.

### Angepasste Moodle-Einstellungen

[Mobile App](http://moodlebox.home/admin/category.php?category=mobileapp)
:   Der mobile Webservice für die offizielle [Moodle Mobile App][1] ist aktiviert. Die Moodle Mobile App kann über über den [Moodle Download][2] heruntergeladen werden.

[Maximale Dateigröße](http://moodlebox.home/admin/settings.php?section=sitepolicies#admin-maxbytes)
:   Die maximale Dateigröße beim Hochladen in der MoodleBox ist auf __50MB__ gesetzt, und zwar über die PHP-Einstellungen `post_max_size` und `upload_max_filesize`.

[Cron](http://moodlebox.home/admin/tool/task/scheduledtasks.php)
:   Der _cron_ ist so konfiguriert, dass er __jede Minute__ abläuft. Mehrere zeitgesteuerte Prozesse benötigen einen Internetzugang. Es wird empfohlen, die MoodleBox über ein Ethernet-Kabel mit dem Internet zu verbinden.

[Multi-Language Filter](http://moodlebox.home/admin/settings.php?section=filtersettingmultilang)
:   Der Multi-Language Inhaltsfilter ist aktiviert.

[Cache](http://moodlebox.home/cache/admin.php)
:   Der Cache von Moodle ist so konfiguriert, dass eine __optimierte Reaktionsgeschwindigkeit__ der MoodleBox sichergestellt wird.

[MoodleBox Plugin](http://moodlebox.home/admin/category.php?category=moodlebox)
:   Das Plugin zur [MoodleBox Administration][3] ist in Moodle installiert. Dieses Plugin ermöglicht einem Moodle-Administrator, eine Reihe von Dingen über eine GUI einzustellen: MoodleBox neustarten und ausschalten, Datum und Uhrzeit einstellen, WLAN-Einstellungen ändern, Hardware kontrollieren.

[MathJax Bibliothek](http://moodlebox.home/admin/settings.php?section=filtersettingmathjaxloader)
:   MathJax Bibliothek ist lokal auf der MoodleBox installiert, damit der MathJax Filter auch dann aktiviert werden kann und richtig arbeitet, wenn die MoodleBox nicht mit dem Internet verbunden ist.

[Systempfade](http://moodlebox.home/admin/settings.php?section=systempaths)
:   Systempfade zu den Programmen `php`, `du`, `ghostscript` und `python` sind entsprechend eingestellt.

[Debugging](http://moodlebox.home/admin/settings.php?section=debugging)
:   Debug-Meldungen Anzeige ist deaktiviert.

 [1]: https://docs.moodle.org/de/Moodle_App
 [2]: https://download.moodle.org/mobile/
 [3]: https://moodle.org/plugins/tool_moodlebox
