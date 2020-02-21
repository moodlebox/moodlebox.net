---
title: Herausgabe der MoodleBox 2.7.0
description: MoodleBox 2.7.0 basiert auf Moodle 3.6.4+. Es erlaubt, die Neustart- und Ausschalten-Schaltflächen auf allen Moodle-Seiten anzuzeigen.
date: 2019-05-20
authors:
  - Nicolas Martignoni
slug: version-2.7.0
---

Die [Version 2.7.0][2] des [Disk-Image der MoodleBox][1] wurde heute veröffentlicht. Es bringt viele neue Funktionen mit sich.

  - Dieses Release basiert auf [Moodle][3] Version 3.6.4+.
  - Sie basiert auf dem am 8. April 2019 veröffentlichten [Raspbian Stretch Lite Image][4].
  - Eine neue Version des [MoodleBox Plugins für Moodle][5] ermöglicht es, die [Neustart- und Ausschalten-Schaltflächen][7] in die Fußzeile aller Moodle-Seiten anzuzeigen.
  - Eine Warnung wird dem Moodle-Administrator angezeigt, wenn das Netzteil der MoodleBox eine unzureichende Spannung liefert.
  - Ein [Captive Portal][6] ist in die MoodleBox integriert. Das Captive-Portal ist standardmäßig deaktiviert. [Lesen Sie die Dokumentation][6] für weitere Informationen.
  - Verschiedene Bugs wurden behoben.

Diese Version enthält auch eine erste Version des MoodleBox-Update-Skripts. Das Skript ist funktional, aber es gibt noch keine Dokumentation.

Alle Informationen über dieser Version finden Sie in den [Release Notes auf Github][2].

 [1]: {{< relref "help/download-the-disk-image" >}}
 [2]: https://github.com/moodlebox/moodlebox/releases/tag/v2.7.0
 [3]: https://moodle.org/
 [4]: https://www.raspberrypi.org/downloads/raspbian/
 [5]: https://moodle.org/plugins/tool_moodlebox
 [6]: {{< relref "help/captive-portal" >}}
 [7]: {{< relref "help/buttons-in-footer" >}}
