---
title: How to copy the disk image to a SD card
authors:
  - Nicolas Martignoni
type: kb
date: 2017-04-20
lastmod: 2022-12-27
description: To copy the MoodleBox disk image to an SD card, follow these instructions.
slug: copy-the-disk-image-on-a-sd-card
categories_weight: 4
categories:
  - First steps

---
Did you already download the [disk image][1]?

First [download balenaEtcher][2] (formerly known as _Etcher_), then follow the instructions in balenaEtcher to flash the __{{< ghrelease user="moodlebox" repo="moodlebox" data="file_name" id=2 >}}__ file [you've downloaded][1] on your microSD card.

{{< figure src="/img/media/etcher-copy.png" title="Copy with balenaEtcher" class="centered-image" width="700" >}}

<!--
### For the geeks

If you prefer to use a command line interface to flash your card: extract the __{{< ghrelease user="moodlebox" repo="moodlebox" data="file_name" id=2 >}}__ file [you've downloaded][1] and follow the [instructions][3] to copy the disk image __moodlebox-{{< ghrelease user="moodlebox" repo="moodlebox" data="version" >}}.img__ to your microSD card.

  * [Mac OS instructions][4]
  * [Windows instructions][5]
  * [Linux instructions][6]
 -->

 [1]: {{< relref "help/download-the-disk-image" >}}
 [2]: https://www.balena.io/etcher/
 [3]: https://www.raspberrypi.org/documentation/installation/installing-images/README.md
 [4]: https://www.raspberrypi.org/documentation/installation/installing-images/mac.md
 [5]: https://www.raspberrypi.org/documentation/installation/installing-images/windows.md
 [6]: https://www.raspberrypi.org/documentation/installation/installing-images/linux.md
