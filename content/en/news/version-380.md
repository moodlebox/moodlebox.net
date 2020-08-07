---
title: "MoodleBox 3.8.0: bug-fix release"
description: MoodleBox 3.8.0 fixes several annoying issues and updates several components, including Moodle 3.9.1+.
date: 2020-07-25
authors:
  - Nicolas Martignoni
slug: version-3.8.0
---

[Version 3.8.0][release] of the [MoodleBox disk image][disk] was just released.

&gt; [Download disk image][disk]

### What's new and corrections

{{< figure src="/img/media/pi4-8gb-labelled.png" width="500" class="centered-image" alt="Raspberry Pi 4 8GB" >}}

  - A new version of the [MoodleBox Plugin for Moodle][plugin] fixes a bug that prevented its correct use with the Raspberry Pi 4B with 8 GB RAM.
  - This version provides [Moodle][moodle] version 3.9.1+.
  - Captive portal software [Nodogsplash][nds] is updated to its latest version 5.0.0, and fixes a bug that blocked the redirection to the MoodleBox home page.
  - [Adminer][adminer] has been updated to the latest version 4.7.7.
  - WiFi is now properly enabled on all supported models.
  - Rarely occurring 502 errors are now handled and the server restarts immediately in case of a problem.

See the [release notes on Github][release] for all info about this release.

 [disk]: {{< relref "help/download-the-disk-image" >}}
 [release]: https://github.com/moodlebox/moodlebox/releases/tag/v3.8.0
 [moodle]: https://moodle.org/
 [plugin]: https://moodle.org/plugins/tool_moodlebox
 [nds]: https://nodogsplashdocs.readthedocs.io/
 [adminer]: https://www.adminer.org/
