---
title: "MoodleBox 3.5.0: HTTPS available!"
description: MoodleBox version 3.5.0 provides Moodle 3.8. It allows the activation of HTTPS and is based on the latest version of Raspbian.
date: 2019-11-18
authors:
  - Nicolas Martignoni
slug: version-3.5.0
---

[Version 3.5.0][2] of the [MoodleBox disk image][1] was just released.

{{< figure src="/img/media/moodle38.jpg" width="600" caption="Moodle 3.8" class="centered-image" >}}

  - This version provides [Moodle][3] version 3.8.
  - It's based on the last version of [Raspbian Buster Lite][raspbian], published on September 26, 2019.
  - It is now possible to [enable HTTPS][https] for more secure connections between MoodleBox and client devices.
  - A new version of the [MoodleBox Plugin for Moodle][4] fixes some bugs to improve usability.
  - Captive portal software [Nodogsplash][6] is updated to its latest version.
  - [MathJax][mathjax] is updated to its latest version too.

See the [release notes on Github][2] for all info about this release.

 [1]: {{< relref "help/download-the-disk-image" >}}
 [2]: https://github.com/moodlebox/moodlebox/releases/tag/v3.5.0
 [3]: https://moodle.org/
 [4]: https://moodle.org/plugins/tool_moodlebox
 [6]: https://nodogsplashdocs.readthedocs.io/
 [https]:{{< relref "help/https-connection" >}}
 [mathjax]: https://mathjax.org/
 [raspbian]: https://www.raspberrypi.org/downloads/raspbian/
