---
title: Copy the disk image to a SD card
authors:
  - Nicolas Martignoni
type: kb
date: 2017-04-20
lastmod: 2023-12-26
description: To copy the MoodleBox disk image to an SD card, simply download the Raspberry Pi Imager utility and follow these instructions.
slug: copy-the-disk-image-on-a-sd-card
categories_weight: 4
categories:
  - First steps
---
To copy the MoodleBox system on your microSD card, we recommend to use the [Raspberry Pi Imager][imager] utility. This application is published by the Raspberry Pi Foundation.

### How to proceed

1. Download the latest version of the [Raspberry Pi Imager][imager] utility and install it on your computer.
1. Launch the _Raspberry Pi Imager_ application.
   {{< figure src="rpi-imager-en.png" alt="Raspberry Pi Imager" class="centered-image" width="700" >}}
1. Click __Choose Device__ under _Raspberry Pi Device_ and select your model of Raspberry Pi.
1. Click __Choose OS__ under _Operating System_, scroll down and click __Other specific purpose OS__.
1. Scroll down, click __MoodleBox__, then choose the latest MoodleBox disk image version.
1. Click __Choose Storage__ and select your microSD card.
1. Click __Next__ button, then __Edit settings__ on the next dialog and answer _No_ to the _Would you like to prefill the wifi password from the system keychain?_ question.
1. On the _General_ tab of the next window, specify the settings you want for your MoodleBox:
   - Check box __Set hostname__ and indicate the hostname, e.g. _moodlebox_
   - Check box __Set username and password__ and indicate the __username__ et the __password__, e.g. _moodlebox_ and _Moodlebox4$_
   - Do __not__ check the remaining boxes (_Configure wireless LAN_ and _Set locale settings_)
   {{< figure src="rpi-imager-os-custom-en.png" alt="Raspberry Pi Imager settings" class="centered-image" width="700" >}}
1. On the _Services_ tab, check box __Enable SSH__ and the option __Use password authentication__
1. Click on __Save__ button and answer __Yes__ to the question __Would you like to apply OS customisation setting?__
1. Answer __Yes__ when asked if you want to continue, erasing all data on your SD card.

The application __Raspberry Pi Imager__ will now download and flash the latest version of the MoodleBox disk image to your microSD card. This may take several minutes depending on the speed of your Internet connection and SD card.

### Alternative procedure for advanced users

You can [download the disk image manually][manualdownload], then use another tool to flash the MoodleBox disk image, e.g. Raspberry Pi Imager, BalenaEtcher or `dd`.

 [imager]: https://www.raspberrypi.com/software/
 [manualdownload]: {{< relref "help/download-the-disk-image" >}}
