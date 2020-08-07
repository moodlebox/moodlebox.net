---
title: "MoodleBox 3.8.0: Bugfix-Version"
description: MoodleBox 3.8.0 behebt mehrere lästige Probleme und aktualisiert mehrere Komponenten, darunter Moodle 3.9.1+.
date: 2020-07-25
authors:
  - Nicolas Martignoni
slug: version-3.8.0
---

Die [Version 3.8.0][release] des [Disk-Image der MoodleBox][disk] wurde gerade veröffentlicht.

&gt; [Disk-Image herunterladen][disk]

{{< figure src="/img/media/pi4-8gb-labelled.png" width="500" class="centered-image" alt="Raspberry Pi 4 8GB" >}}

  - Eine neue Version des [MoodleBox-Plugins für Moodle][Plugin] behebt einen Fehler, der die korrekte Verwendung mit dem Raspberry Pi 4B mit 8 GB RAM verhinderte.
  - Diese Version bietet [Moodle][moodle] 3.9.1+.
  - Captive Portal Software [Nodogsplash][nds] ist auf die neueste Version 5.0.0 aktualisiert und behebt einen Fehler, der die Weiterleitung auf die MoodleBox-Homepage blockierte.
  - [Adminer][adminer] wurde auf die neueste Version 4.7.7 aktualisiert.
  - WiFi ist jetzt auf allen unterstützten Modellen korrekt aktiviert.
  - Selten auftretende 502 Fehler werden jetzt behandelt, und der Server wird im Falle eines Problems sofort neu gestartet.

Alle Informationen über dieser Version finden Sie in den [Release Notes auf Github][release].

 [disk]: {{< relref "help/download-the-disk-image" >}}
 [release]: https://github.com/moodlebox/moodlebox/releases/tag/v3.8.0
 [moodle]: https://moodle.org/
 [plugin]: https://moodle.org/plugins/tool_moodlebox
 [nds]: https://nodogsplashdocs.readthedocs.io/
 [adminer]: https://www.adminer.org/
