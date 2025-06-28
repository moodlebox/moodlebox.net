---
title: "Lots of new stuff in MoodleBox 4.0.0"
description: With version 4.0.0, MoodleBox enters a new era!
date: 2021-11-09
authors:
  - Nicolas Martignoni
slug: version-4.0.0
---

With [version 4.0.0][release], MoodleBox enters a new era!

[MoodleBox 4.0.0][release] brings a number of new features, including _AP+STA_ mode, which allows the MoodleBox to connect to an existing Wi-Fi network and act as a wireless access point for other devices at the same time. This mode allows full MoodleBox functionality with the Raspberry Pi 3A+, Zero W, and the newly released Raspberry Pi Zero 2 W.

And thanks to new optimised firmware, [MoodleBox 4.0.0][release] now reliably supports 20 Wi-Fi clients.

[MoodleBox 4.0.0][release] is now based on _Bullseye_, the Debian 11 release.

{{< figure src="/img/media/debian-bullseye.jpg" width="800" class="centered-image" alt="Debian Bullseye" >}}

&gt; [Download disk image][disk]

Here are the main new features of [MoodleBox version 4.0.0][release].
  - _AP+STA_ mode
  - Full support for Raspberry Pi 3A+, Zero W and Zero 2 W; it is not recommended to use the Zero W RPi, which is too slow for a MoodleBox
  - Based on the latest version of [Raspberry Pi OS Lite][rpios] from October 10, 2021, with Debian version 11, _Bullseye_
  - [Moodle][moodle] version 3.11.4
  - A new version of the [MoodleBox plugin for Moodle][plugin] allows to change the IP address of the MoodleBox Wi-Fi network
  - Many other performance improvements and fixes

Have a look at the [release notes on Github][release] for all info about this release.

[disk]: {{< relref "help/copy-the-disk-image" >}}
[release]: https://github.com/moodlebox/moodlebox/releases/tag/v4.0.0
[moodle]: https://moodle.org/
[plugin]: https://moodle.org/plugins/tool_moodlebox
[rpios]: https://www.raspberrypi.com/software/operating-systems/
