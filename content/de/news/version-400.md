---
title: Viele Neuigkeiten in MoodleBox 4.0.0
description: Mit der Version 4.0.0 beginnt für die MoodleBox eine neue Ära!
date: 2021-11-09
authors:
  - Nicolas Martignoni
slug: version-4.0.0
---

Mit der [Version 4.0.0][release] beginnt für die MoodleBox eine neue Ära!

[MoodleBox 4.0.0][release] bringt eine Reihe neuer Funktionen, darunter den _AP+STA_ Modus, der es der MoodleBox ermöglicht, sich mit einem bestehenden Wi-Fi-Netzwerk zu verbinden und gleichzeitig als wireless access point für andere Geräte zu fungieren. Dieser Modus ermöglicht die volle Funktionalität der MoodleBox mit dem Raspberry Pi 3A+, Zero W und dem neu erschienenen Raspberry Pi Zero 2 W.

Dank einer neuen, optimierten Firmware unterstützt die [MoodleBox 4.0.0][release] nun zuverlässig 20 Wi-Fi Clients.

Die [MoodleBox 4.0.0][release] basiert nun auf _Bullseye_, der Debian 11 Version.

{{< figure src="/img/media/debian-bullseye.jpg" width="800" class="centered-image" alt="Debian Bullseye" >}}

&gt; [Download disk image][disk]

Hier sind die wichtigsten neuen Funktionalitäten der [MoodleBox Version 4.0.0][release].
  - _AP+STA_ Modus
  - Volle Unterstützung für Raspberry Pi 3A+, Zero W und Zero 2 W; es wird nicht empfohlen, den Zero W RPi zu verwenden, der zu langsam für eine MoodleBox ist
  - Basierend auf der neuesten Version von [Raspberry Pi OS Lite][rpios] vom 10. Oktober 2021, mit Debian Version 11, _Bullseye_
  - [Moodle][moodle] Version 3.11.4
  - Eine neue Version des [MoodleBox-Plugin für Moodle][plugin] ermöglicht es, die IP-Adresse des MoodleBox-Wi-Fi-Netzwerks zu ändern
  - Viele weitere Leistungsoptimierungen und Fixes

Alle Informationen zu dieser Version finden Sie in den [Release Notes auf Github][release].

[disk]: {{< relref "help/copy-the-disk-image" >}}
[release]: https://github.com/moodlebox/moodlebox/releases/tag/v4.0.0
[moodle]: https://moodle.org/
[plugin]: https://moodle.org/plugins/tool_moodlebox
[rpios]: https://www.raspberrypi.com/software/operating-systems/
