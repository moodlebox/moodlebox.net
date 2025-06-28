---
title: "MoodleBox 4.6.0: Lots of changes with Moodle 4.3 and Spanish language"
description: Version 4.6.0 of the MoodleBox image comes with the version 4.3 of Moodle. It is based on Bookworm, the Debian 12 release.
date: 2023-11-10
authors:
  - Nicolas Martignoni
slug: version-4.6.0
---
Long overdue [MoodleBox 4.6.0][release] release features a number of long-awaited changes, in particular [version 4.3][moodle43] of [Moodle][moodle]. It is based on _Bookworm_, the [Debian 12][debian] release.

{{< figure src="/img/media/moodlebox-460.png" width="780" class="centered-image" alt="MoodleBox release 4.6.0" >}}

Thanks to a new version of the [MoodleBox plugin for Moodle][plugin], the MoodleBox dashboard can be accessed more easily in the top level administration menu.

Here are the main new features of release [MoodleBox 4.6.0][release]:
- [Moodle][moodle] [version 4.3][moodle43].
- Based on the latest version of [Raspberry Pi OS Lite][rpios] from October 10, 2023, with Debian version 12, _Bookworm_
- Spanish (international) language pack installed by default
- Preliminary (untested!) support of the brand new [Raspberry Pi Model 5][rpi5]
- A new version of the [MoodleBox plugin for Moodle][plugin]
- Many other improvements and fixes, including Redis for Moodle caching and multiple USB keys mounting

To install MoodleBox we recommend that you use the [Raspberry Pi Imager][rpi-imager] utility, which will automatically download the MoodleBox disk image for you.

&Gt; [More information about MoodleBox installation][install]

Have a look at the [release notes on Github][release] for all info about this release.

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
