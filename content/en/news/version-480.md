---
title: "MoodleBox 4.8.0: with Raspberry Pi Connect"
description: MoodleBox version 4.8.0 features remote access thanks to Raspberry Pi Connect, and other improvements.
date: 2024-11-03
authors:
  - Nicolas Martignoni
slug: version-4.8.0
---
MoodleBox image [version 4.8.0][release]  features remote access thanks to [Raspberry Pi Connect][connect], and other improvements.

{{< figure src="/img/media/connect.webp" width="780" class="centered-image" alt="Raspberry Pi Connect" >}}

Here are the main new features of release [MoodleBox 4.8.0][release]:
- [Moodle][moodle] [version 4.5+][moodle45] _Long Term Support_!
- Raspberry Pi Connect pre-installed, to allow remote access and maintenance of MoodleBox when it is connected to the Internet; check the [documentation][remote-shell].
- Based on the latest version of [Raspberry Pi OS Lite][rpios] of October 2, 2024
- A new version of the [MoodleBox plugin for Moodle][plugin]
- Lots of other improvements and fixes, including a new version of Adminer and `rpi-clone`.

To install MoodleBox we recommend that you use the [Raspberry Pi Imager][rpi-imager] utility, which will automatically download the MoodleBox disk image for you.

&Gt; [More information about MoodleBox installation][install]

Have a look at the [release notes on Github][release] for all info about this release.

[disk]: {{< relref "help/copy-the-disk-image" >}}
[release]: https://github.com/moodlebox/moodlebox/releases/tag/v4.8.0
[connect]: https://connect.raspberrypi.com/
[remote-shell]: {{< relref "help/remote-shell" >}}
[plugin]: https://moodle.org/plugins/tool_moodlebox
[moodle]: https://moodle.org/
[rpios]: https://www.raspberrypi.com/software/operating-systems/
[rpi-imager]: https://www.raspberrypi.com/software/
[install]: {{< relref "help/install-the-moodlebox" >}}
[moodle45]: https://moodle.com/news/moodle-lms-45-unlock-the-power-of-ai-for-your-courses/
