---
title: "MoodleBox 4.6.0: vielen Erweiterungen, Moodle 4.3 und Spanische"
description: Die Version 4.6.0 der MoodleBox wird mit der Version 4.3 von Moodle angeboten. Sie basiert auf Bookworm, der Debian 12 Version.
date: 2023-11-10
authors:
  - Nicolas Martignoni
slug: version-4.6.0
---
Die längst erwartete [Version 4.6.0][release] von MoodleBox enthält eine Reihe von lang gewünschten Änderungen, insbesondere die [Version 4.3][moodle43] von [Moodle][moodle]. Sie basiert auf _Bookworm_, der [Debian 12][debian] Version.

{{< figure src="/img/media/moodlebox-460.png" width="780" class="centered-image" alt="MoodleBox Version 4.6.0" >}}

Dank einer neuen Version des [MoodleBox-Plugin für Moodle][plugin] ist das MoodleBox-Dashboard jetzt noch einfacher über das Verwaltungsmenü der obersten Ebene zugänglich.

Hier sind die wichtigsten neuen Funktionen der Version [MoodleBox 4.6.0][release]:
- [Moodle][moodle] [Version 4.3][moodle43]!
- Basierend auf der neuesten Version von [Raspberry Pi OS Lite][rpios] vom 10. Oktober 2023, mit Debian Version 12, _Bookworm_
- Spanisches (internationales) Sprachpaket standardmässig installiert
- Provisorische (ungetestete!) Unterstützung für den brandneuen [Raspberry Pi Model 5][rpi5]
- Eine neue Version des [MoodleBox-Plugin für Moodle][plugin]
- Viele weitere Verbesserungen und Korrekturen, einschliesslich Redis für Moodle-Caching und Montage mehrerer USB-Sticks

Für die Installation der MoodleBox empfehlen wir Ihnen, den [Raspberry Pi Imager][rpi-imager] zu verwenden, der für Sie automatisch das MoodleBox-Disk-Image herunterlädt.

&Gt; [Weitere Informationen zur MoodleBox Installation][install]

Alle Informationen zu dieser Version finden Sie in den [Release Notes auf Github][release].

[disk]: {{< relref "help/copy-the-disk-image" >}}
[release]: https://github.com/moodlebox/moodlebox/releases/tag/v4.6.0
[plugin]: https://moodle.org/plugins/tool_moodlebox
[moodle]: https://moodle.org/
[rpios]: https://www.raspberrypi.com/software/operating-systems/
[rpi5]: https://www.raspberrypi.com/products/raspberry-pi-5/
[moodle43]: https://moodle.com/news/moodle-lms-4-3-a-leap-forward-in-user-experience-and-efficiency/
[rpi-imager]: https://www.raspberrypi.com/software/
[debian]: https://www.debian.org/News/2023/20230610
[install]: {{< relref "help/install-the-moodlebox" >}}
