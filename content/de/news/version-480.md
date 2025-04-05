---
title: "MoodleBox 4.8.0: mit Raspberry Pi Connect"
description: MoodleBox Version 4.8.0 bietet Fernzugriff über Raspberry Pi Connect und weitere Verbesserungen.
date: 2024-11-03
authors:
  - Nicolas Martignoni
slug: version-4.8.0
---
Das Image [MoodleBox Version 4.8.0][release] bietet Fernzugriff über [Raspberry Pi Connect][connect] und weitere Verbesserungen.

{{< figure src="/img/media/connect.webp" width="780" class="centered-image" alt="Raspberry Pi Connect" >}}

Hier sind die wichtigsten neuen Funktionen der Version [MoodleBox 4.8.0][release]:
- [Moodle][moodle] [version 4.5+][moodle45] _Long Term Support_!
- [Raspberry Pi Connect][connect] vorinstalliert, um den Fernzugriff und die Wartung der MoodleBox zu ermöglichen, wenn sie mit dem Internet verbunden ist; lesen Sie die [Dokumentation][remote-shell]
- Basierend auf der neuesten Version von [Raspberry Pi OS Lite][rpios] vom 22. Oktober 2024
- Eine neue Version des [MoodleBox-Plugin für Moodle][plugin]
- Viele weitere Verbesserungen und Fixes, z.B. eine neue Version von Adminer und `rpi-clone`

Für die Installation der MoodleBox empfehlen wir Ihnen, den [Raspberry Pi Imager][rpi-imager] zu verwenden, der für Sie automatisch das MoodleBox-Disk-Image herunterlädt.

&Gt; [Weitere Informationen zur MoodleBox Installation][install]

Alle Informationen zu dieser Version finden Sie in den [Release Notes auf Github][release].

[disk]: {{< relref "help/download-the-disk-image" >}}
[release]: https://github.com/moodlebox/moodlebox/releases/tag/v4.8.0
[connect]: https://connect.raspberrypi.com/
[remote-shell]: {{< relref "help/remote-shell" >}}
[plugin]: https://moodle.org/plugins/tool_moodlebox
[moodle]: https://moodle.org/
[rpios]: https://www.raspberrypi.com/software/operating-systems/
[rpi-imager]: https://www.raspberrypi.com/software/
[install]: {{< relref "help/install-the-moodlebox" >}}
[moodle45]: https://moodle.com/news/moodle-lms-45-unlock-the-power-of-ai-for-your-courses/
