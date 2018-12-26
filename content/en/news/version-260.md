---
title: Release of MoodleBox 2.6.0
description: MoodleBox 2.6.0 provides Moodle 3.6. The disk image is based on Raspbian Stretch Lite of November 13, 2018.
date: 2018-12-03
authors:
  - Nicolas Martignoni
slug: version-2.6.0
---

{{% notice warning %}}
This version __cannot be automatically updated with the update script__ under development. We recommend that you use version 2.6.1 instead.
{{% /notice %}}

[Version 2.6.0][2] of the [MoodleBox disk image][2] is released today.

  - This release provides [Moodle][6] version 3.6, which is released today.
  - It is based on the [Raspbian Stretch Lite image][4] published on November 13, 2018.
  - It uses now PHP version 7.1.
  - A new version of the [MoodleBox plugin for Moodle][3] allows to hide the Wi-Fi network name, if needed.
  - The default admin username is now _moodlebox_, instead of _admin_.
  - Ghostscript is installed by default, enabling to use directly PDF annotations without any further manupulations.

See the [release notes on Github][2] for more info about all changes to this version.

 [1]: {{< relref "download-the-disk-image.md" >}}
 [2]: https://github.com/moodlebox/moodlebox/releases/tag/v2.6.0
 [3]: https://moodle.org/plugins/tool_moodlebox
 [4]: https://www.raspberrypi.org/downloads/raspbian/
 [5]: {{< relref "moodle-update.md" >}}
 [6]: https://moodle.org/
