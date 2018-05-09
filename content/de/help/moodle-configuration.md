---
title: Wie sind die Einstellungen von Moodle
authors:
  - Nicolas Martignoni
  - Ralf Krause
type: kb
date: 2017-04-20
description: Ausführliche Informationen zur Konfiguration der Moodle-Installation der MoodleBox finden Sie hier
slug: moodle-einstellungen
categories:
  - Maintenance

---
Die Moodle-Plattform auf der MoodleBox hat keine besondere Konfiguration. Lediglich die folgenden Einstellungen sind angepasst, um die Verwendung zu erleichtern oder die Leistung zu verbessern.

Mobile App
:   Der mobile Webservice für die offizielle [Moodle Mobile App][1] ist aktiviert. Die Moodle Mobile App kann über über den [Moodle Download][2] heruntergeladen werden.

Maximale Dateigröße
:   Die maximale Dateigröße beim Hochladen in der MoodleBox ist auf __50MB__ gesetzt, und zwar über die PHP-Einstellungen _post\_max\_size_ und _upload\_max\_filesize_.

Cron
:   Der _cron_ ist so konfiguriert, dass er __jede Minute__ abläuft (alle 3 Minuten vor Version 2.2.0). Mehrere zeitgesteuerte Prozesse benötigen einen Internetzugang. Es wird empfohlen, die MoodleBox über ein Ethernet-Kabel mit dem Internet zu verbinden.

Multi-Language Filter
:   Der Multi-Language Inhaltsfilter ist aktiviert.

Cache
:   Der Cache von Moodle ist so konfiguriert, dass eine __optimierte Reaktionsgeschwindigkeit__ der MoodleBox sichergestellt wird.

MoodleBox Plugin
:   Das Plugin zur [MoodleBox Administration][3] ist in Moodle installiert. Dieses Plugin ermöglicht einem Moodle-Administrator, eine Reihe von Dingen über eine GUI einzustellen: MoodleBox neustarten und ausschalten, Datum und Uhrzeit einstellen, WLAN-Einstellungen ändern, Hardware kontrollieren.

MathJax Bibliothek
:   Ab der Version 2.0.0 ist die MathJax Bibliothek lokal auf der MoodleBox installiert. damit der MathJax Filter auch dann aktiviert werden kann und richtig arbeitet, wenn die MoodleBox nicht mit dem Internet verbunden ist.

 [1]: https://docs.moodle.org/de/Moodle_App
 [2]: https://download.moodle.org/mobile/
 [3]: https://moodle.org/plugins/tool_moodlebox
