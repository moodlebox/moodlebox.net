---
title: How to copy the disk image to a SD card
author: Nicolas Martignoni
type: kb
date: 2017-04-20
slug: copy-the-disk-image-on-a-sd-card
weight: 4
categories:
  - First steps

---
First [download Etcher][2], then follow the instructions in Etcher to flash the __{{< ghrelease user="martignoni" repo="moodlebox" data="file_name" >}}__ file [you've downloaded][1] on your microSD card.

{{< figure link="/img/media/etcher-copy.png" caption="Copy with Etcher" caption-position="bottom" caption-effect="appear" width="800px" >}}

### For the geeks

If you prefer to use a command line interface to flash your card: extract the __{{< ghrelease user="martignoni" repo="moodlebox" data="file_name" >}}__ file [you've downloaded][1] and follow the [instructions][3] to copy the disk image __moodlebox-{{< ghrelease user="martignoni" repo="moodlebox" data="version" >}}.img__ to your microSD card.

  * [Mac OS instructions][4]
  * [Windows instructions][5]
  * [Linux instructions][6]

 [1]: {{< relref "download-the-disk-image.en.md" >}}
 [2]: https://etcher.io/
 [3]: https://www.raspberrypi.org/documentation/installation/installing-images/README.md
 [4]: https://www.raspberrypi.org/documentation/installation/installing-images/mac.md
 [5]: https://www.raspberrypi.org/documentation/installation/installing-images/windows.md
 [6]: https://www.raspberrypi.org/documentation/installation/installing-images/linux.md
