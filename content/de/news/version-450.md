---
title: "MoodleBox 4.5.0: Mit Moodle 4.1 und Raspberry Pi Imager Unterstützung"
description: Version 4.5.0 von MoodleBox wird mit Moodle 4.1 ausgeliefert und unterstützt nativ das Raspberry Pi Imager Tool.
date: 2022-11-28
authors:
  - Nicolas Martignoni
slug: version-4.5.0
---

Die [Version 4.5.0][release] der MoodleBox, die das brandneue [Moodle 4.1][moodle41] enthält, unterstützt das [Raspberry Pi Imager][rpi-imager]-Tool, was das Kopieren des Images auf die microSD-Karte vereinfacht und gleichzeitig die Sicherheit erhöht.

{{< figure src="/img/media/rpi-imager.png" width="800" class="centered-image" alt="Raspberry Pi Imager" >}}

Hier einige Änderungen in [MoodleBox 4.5.0][release]:

- [Moodle][moodle] [Version 4.1][moodle41].
- Die H5P-Bibliotheken sind standardmässig verfügbar.
- Es basiert auf [Raspberry Pi OS Lite][rpios] 64-Bit Version vom 22. September 2022.
- Native Unterstützung des Tools [Raspberry Pi Imager][rpi-imager] zum einfacheren und sicheren Kopieren des Images.
- Eine neue Version des [MoodleBox-Plugins für Moodle][plugin].
- Zahlreiche Verbesserungen und Bugfixes.

Für die Installation der MoodleBox empfehlen wir Ihnen, den [Raspberry Pi Imager][rpi-imager] zu verwenden, der für Sie automatisch das MoodleBox-Disk-Image herunterlädt.

&Gt; [Weitere Informationen zur MoodleBox Installation][install]

Alle Informationen zu dieser Version finden Sie in den [Release Notes auf Github][release].

[disk]: {{< relref "help/copy-the-disk-image" >}}
[release]: https://github.com/moodlebox/moodlebox/releases/tag/v4.5.0
[plugin]: https://moodle.org/plugins/tool_moodlebox
[moodle]: https://moodle.org/
[rpios]: https://www.raspberrypi.com/software/operating-systems/
[moodle41]: https://moodle.com/news/announcing-moodle-lms-4-1/
[rpi-imager]: https://www.raspberrypi.com/software/
[install]: {{< relref "help/install-the-moodlebox" >}}
