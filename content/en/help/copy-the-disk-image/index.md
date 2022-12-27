---
title: Copy the disk image to a SD card
authors:
  - Nicolas Martignoni
type: kb
date: 2017-04-20
lastmod: 2022-12-27
description: To copy the MoodleBox disk image to an SD card, simply download the Raspberry Pi Imager utility and follow these instructions.
slug: copy-the-disk-image-on-a-sd-card
categories_weight: 4
categories:
  - First steps
---

The easiest way to copy the MoodleBox disk image to your microSD card is to use the [Raspberry Pi Imager][imager] utility published by the Raspberry Foundation.

### How to proceed

1. Download the latest version of the [Raspberry Pi Imager][imager] utility and install it on your computer.
2. Open the _Raspberry Pi Imager_ application.
3. Click __Choose OS__.
4. Scroll down and select the __Other specific purpose OS__.
5. Scroll down and select the __MoodleBox__, then choose the latest MoodleBox disk image.
6. Click __Choose Storage__ and select your microSD card.
7. Click the button with the cog icon, and specify the settings you want for your MoodleBox (see screenshot below, other options can be left unchanged):
   - Indicate the __hostname__, e.g. _moodlebox_
   - Check the __Enable SSH__ box and the option __Use password authentication__
   - Indicate the __username__ et the __password__, e.g. _moodlebox_ and _MoodleBox4$_
   - Click on __Save__.
8. Click on __Write__, then on __Yes__.

{{< figure src="/img/media/rpi-imager-settings.png" alt="Raspberry Pi Imager settings" class="centered-image" width="700" >}}

The application __Raspberry Pi Imager__ will now download and flash the latest version of the MoodleBox disk image to your microSD card. This may take several minutes depending on the speed of your internet connection and SD card.

### Advanced users

If you wish to use another tool such as BalenaEtcher or `dd` to flash the MoodleBox disk image, you can [download the disk image manually][manualdownload].

 [imager]: https://www.raspberrypi.com/software/
 [manualdownload]: {{< relref "help/download-the-disk-image" >}}
