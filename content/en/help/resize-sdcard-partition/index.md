---
title: How to resize the partition of the SD card
authors:
  - Nicolas Martignoni
type: kb
date: 2018-07-09
lastmod: 2022-08-14
description: Follow these instructions to resize your SD card partition.
slug: resize-sdcard-partition
categories_weight: 100
categories:
  - Maintenance
---

### Steps to follow

{{< notice note >}}
This operation is not required if you have downloaded the disk image from this website. However, it may be necessary to run it if you have received a custom disk image.
{{< /notice >}}

- [Copy your custom disk image][2] to the microSD card.
- [Start your MoodleBox][3] in the usual way.
- [Connect to the Moodle][4] of the MoodleBox using an administrator account. If MoodleBox user accounts have not been modified, use the [default login information][5].
- Access the [administration interface][6] of the MoodleBox ([Site Administration > Server > MoodleBox][6] in the administration block).
- Click on the button _Resize SD card partition_.

{{< figure src="resize-sdcard-en.png" title="Resize SD card partition" class="centered-image" width="700" >}}

The MoodleBox restarts immediately and is ready for use seconds after this operation.

{{< notice tip >}}
There is no problem clicking the _Resize SD card partition_ button when the SD card is already resized. The only consequence will be the restart of the MoodleBox.
{{< /notice >}}

 [1]: {{< relref "help/download-the-disk-image" >}}
 [2]: {{< relref "help/copy-the-disk-image" >}}
 [3]: {{< relref "help/startup-shutdown-restart" >}}
 [4]: {{< relref "help/access-to-moodle" >}}
 [5]: {{< relref "help/credentials" >}}
 [6]: http://moodlebox.home/admin/tool/moodlebox/index.php
