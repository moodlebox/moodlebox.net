---
title: MoodleBox 3.0.0 is here!
description: MoodleBox version 3.0.0 supports the new Raspberry Pi 4B. It is based on Raspbian Buster and provides Moodle 3.7.1.
date: 2019-07-13
authors:
  - Nicolas Martignoni
slug: version-3.0.0
---

[Version 3.0.0][2] of the [MoodleBox disk image][1] is released today. It brings many new features.

{{< figure src="/img/media/pi4-labelled.png" width="583" caption="Raspberry Pi model 4B" class="centered-image" >}}

  - This version supports the new [Raspberry Pi model 4B][8] (1GB, 2GB or 4GB of RAM), delivering significant performance gains.
  - It provides [Moodle][3] version 3.7.1 and a new version of the [MoodleBox plugin for Moodle][5].
  - It is based on Raspbian Buster, thanks to the [Raspbian Buster Lite image][4] published on July 10, 2019.
  - PHP was updated to version 7.3.
  - For maintenance purposes, the phpMyAdmin script to manage the Moodle database [has been replaced][6] by Adminer, a lighter tool [with the same features][7].
  - The deprecated [Moodle administrator account][9] _admin_ is no longer installed by default.
  - Various bugs have been fixed.

This version also provides a preliminary version of the MoodleBox update script. The script is functional, but no documentation is yet provided.

See the [release notes on Github][2] for all info about this release.

 [1]: {{< relref "help/download-the-disk-image" >}}
 [2]: https://github.com/moodlebox/moodlebox/releases/tag/v3.0.0
 [3]: https://moodle.org/
 [4]: https://www.raspberrypi.org/downloads/raspbian/
 [5]: https://moodle.org/plugins/tool_moodlebox
 [6]: {{< relref "help/access-to-the-database" >}}
 [7]: https://www.adminer.org/
 [8]: https://www.raspberrypi.org/products/raspberry-pi-4-model-b/
 [9]: {{< relref "help/access-to-moodle" >}}
