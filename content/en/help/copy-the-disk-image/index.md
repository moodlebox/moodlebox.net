---
title: Copy the disk image to a SD card
authors:
  - Nicolas Martignoni
type: kb
date: 2017-04-20
lastmod: 2026-02-18
description: To copy the MoodleBox disk image to an SD card, simply download the Raspberry Pi Imager utility and follow these instructions.
slug: copy-the-disk-image-on-a-sd-card
categories_weight: 4
categories:
  - First steps
aliases:
  - /download
  - ../dl
---
To copy the MoodleBox system on your microSD card, use the [Raspberry Pi Imager][imager] utility. This application is published by the Raspberry Pi Foundation.

### How to proceed

1. Download the latest version of the [Raspberry Pi Imager][imager] utility and install it on your computer.
1. Launch the _Raspberry Pi Imager_ application.
   {{< figure src="rpi-imager-en.png" alt="Raspberry Pi Imager" class="centered-image" width="700" >}}
1. Select your model of Raspberry Pi, then click __Next__ to the  _OS_ tab, scroll down and click __Other specific-purpose OS__.
1. Scroll down, click __MoodleBox__, choose the latest MoodleBox disk image version.
1. Click __Next__ to the __Storage__ tab and select your microSD card.
1. Click __Next__ to the __Customisation__ tab and specify the settings you want for your MoodleBox in the following windows. Indicate, if needed
   - the hostname, e.g. _moodlebox_,
   - the localisation settings (city, time zone and keyboard layout),
   - a username and a password, e.g. _moodlebox_ and _Moodlebox4$_,
   - optionnaly, the SSID and password of your local wireless network,
   - enable SSH and tick the radio button __Use password authentication__.
1. Click __Next__ to the tab __Writing__, click the __Write__ button, and when asked if you want to continue, erasing all data on your SD card, click on __I understand, erase and write__.
   {{< figure src="rpi-imager-warning-en.png" alt="Raspberry Pi Imager Warning" class="centered-image" width="700" >}}

The application __Raspberry Pi Imager__ will now download and flash the latest version of the MoodleBox disk image to your microSD card. This may take several minutes depending on the speed of your Internet connection and SD card.

 [imager]: https://www.raspberrypi.com/software/
