---
title: MoodleBox 3.0.0 ist da!
description: MoodleBox Version 3.0.0 unterstützt die neue Raspberry Pi 4B. Es basiert auf Raspbian Buster und bietet Moodle 3.7.1.
date: 2019-07-13
authors:
  - Nicolas Martignoni
slug: version-3.0.0
---

Die [Version 3.0.0][2] des [Disk-Image der MoodleBox][1] wurde heute veröffentlicht. Es bringt viele neue Funktionen mit sich.

{{< figure src="/img/media/pi4-labelled.png" width="583" title="Raspberry Pi Model 4B" class="centered-image" >}}

  - Diese Version unterstützt das [neue Raspberry Pi-Modell 4B][8] (1GB, 2GB oder 4GB RAM) und bietet damit signifikante Performance-Gewinne.
  - Es liefert [Moodle][3] Version 3.7.1 und eine neue Version des [MoodleBox Plugins für Moodle][5].
  - Es basiert auf Raspbian Buster, dank des am 10. Juli 2019 veröffentlichten [Images Raspbian Buster Lite][4].
  - PHP wurde auf die Version 7.3 aktualisiert.
  - Zu Wartungszwecken wurde das phpMyAdmin-Skript zur Verwaltung der Moodle-Datenbank [durch Adminer ersetzt][6], ein schlankeres Tool [mit den gleichen Funktionen][7].
  - Der deprecated [Moodle administrator account][9] _admin_ ist nicht mehr standardmässig installiert.
  - Verschiedene Bugs wurden behoben.

Diese Version enthält auch eine erste Version des MoodleBox-Update-Skripts. Das Skript ist funktional, aber es gibt noch keine Dokumentation.

Alle Informationen über dieser Version finden Sie in den [Release Notes auf Github][2].

 [1]: {{< relref "help/copy-the-disk-image" >}}
 [2]: https://github.com/moodlebox/moodlebox/releases/tag/v3.0.0
 [3]: https://moodle.org/
 [4]: https://www.raspberrypi.org/downloads/raspbian/
 [5]: https://moodle.org/plugins/tool_moodlebox
 [6]: {{< relref "help/access-to-the-database" >}}
 [7]: https://www.adminer.org/
 [8]: https://www.raspberrypi.org/products/raspberry-pi-4-model-b/
 [9]: {{< relref "help/access-to-moodle" >}}
