---
title: Release of MoodleBox 2.6.1
description: MoodleBox 2.6.1 is based on Moodle 3.6.1, which fixes a bug found in the instant messaging of Moodle 3.6.
date: 2018-12-09
authors:
  - Nicolas Martignoni
slug: version-2.6.1
---

[Version 2.6.1][2] of the [MoodleBox disk image][1] is released today.

  - This release provides [Moodle][3] version 3.6.1, which fixes a bug in the instant messaging of Moodle.
  - It uses PHP version 7.0 again. Version 7.1 of PHP complicates update operations, preventing the development of an automatic update script for the MoodleBox.

{{% notice note %}}
Version 2.6.0 of the MoodleBox image, released on December 3, 2018, __cannot be automatically updated with the update script__ under development. We recommend that you use this version instead.
{{% /notice %}}

See the [release notes on Github][2] for all info about this release.

 [1]: {{< relref "download-the-disk-image.md" >}}
 [2]: https://github.com/moodlebox/moodlebox/releases/tag/v2.6.1
 [3]: https://moodle.org/
