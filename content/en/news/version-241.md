---
title: Release of MoodleBox 2.4.1
description: MoodleBox 2.4.1 includes several small improvements for a better user experience.
date: 2018-06-12
authors:
  - Nicolas Martignoni
slug: version-2.4.1
---

[Version 2.4.1][2] of the [MoodleBox disk image][2] is released today.

This version contains only small modifications, essentially:

  - The Wi-Fi access point channel is initially set to 11 instead of 13, to improve compatibility with some older devices;
  - A new version of the [MoodleBox plugin for Moodle][3] allows more reliable detection of the Raspberry Pi model used. In particular, the Zero W model is correctly recognized.

Other improvements have been made under the hood. See the [release notes on Github][2] for more info about all changes to this version.

 [1]: {{< relref "help/download-the-disk-image" >}}
 [2]: https://github.com/moodlebox/moodlebox/releases/tag/v2.4.1
 [3]: http://moodle.org/plugins/tool_moodlebox
