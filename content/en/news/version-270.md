---
title: Release of MoodleBox 2.7.0
description: MoodleBox 2.7.0 is based on Moodle 3.6.4+. It allows you to display the restart and stop buttons in the footer of all Moodle pages.
date: 2019-05-20
authors:
  - Nicolas Martignoni
slug: version-2.7.0
---

[Version 2.7.0][2] of the [MoodleBox disk image][1] is released today. It brings many new features.

  - This release provides [Moodle][3] version 3.6.4+.
  - It is based on the [Raspbian Stretch Lite image][4] published on April 8, 2019.
  - A new version of the [MoodleBox plugin for Moodle][5] allows you to place the [restart and shutdown buttons][7] in the footer of all Moodle pages.
  - A warning is displayed to the Moodle administrator if the MoodleBox power supply delivers insufficient voltage.
  - A [captive portal][6] is integrated into the MoodleBox. The captive portal is disabled by default. [Read the documentation][6] for more information.
  - Various bugs have been fixed.

This version also provides a preliminary version of the MoodleBox update script. The script is functional, but no documentation is yet provided.

See the [release notes on Github][2] for all info about this release.

 [1]: {{< relref "download-the-disk-image.md" >}}
 [2]: https://github.com/moodlebox/moodlebox/releases/tag/v2.7.0
 [3]: https://moodle.org/
 [4]: https://www.raspberrypi.org/downloads/raspbian/
 [5]: https://moodle.org/plugins/tool_moodlebox
 [6]: {{< relref "captive-portal" >}}
 [7]: {{< relref "buttons-in-footer" >}}
