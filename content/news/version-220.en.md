---
title: "Disk image version 2.2.0"
description: "MoodleBox 2.2.0 is based on Moodle version 2.4.1. Various improvements have also been made."
date: 2018-03-02
slug: "version-2.2.0"
---

[Version 2.2.0][2] of the [image of the MoodleBox][1] is released today.

The main changes provided by [this version][2] for end-users are
- Moodle version 3.4.1+, and
- Support for NTFS and exFAT formatted USB drives. Thanks to Ralf Krause for suggesting this new feature.

Moodle `cron` is now performed every minute, following the [official recommendation][3], since the resulting CPU load does not affect the performance of the MoodleBox.

See the [release notes on Github][2] for more info about all changes to this version.

 [1]: {{< relref "download-the-disk-image.en.md" >}}
 [2]: https://github.com/martignoni/moodlebox/releases/tag/v2.2.0
 [3]: https://docs.moodle.org/en/Cron
