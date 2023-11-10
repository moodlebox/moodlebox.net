---
title: MoodleBox installation
authors:
  - Nicolas Martignoni
type: kb
date: 2017-09-15
lastmod: 2023-11-10
description: The procedure to install the MoodleBox for its first utilisation is described here
slug: install-the-moodlebox
categories_weight: 1
categories:
  - First steps
aliases:
  - ../install
  - moodlebox-installation

---
Proceed as follows to use the MoodleBox for the first time.

### Step 1: Buy the hardware

The [hardware you need for your MoodleBox][1] is essentially a Raspberry Pi (3A+, 3B, 3B+, 4B, 400 or 5), a good power supply and a high-quality microSD card. In addition, a case is recommended to protect the board.

&Gt; [More information here][1]

### Step 2: Copy the disk image on the microSD card

For this task we recommend that you use the [Raspberry Pi Imager][rpi-imager] utility, which will __automatically__ download the MoodleBox disk image for you. Please also apply the recommended settings when copying the image.

&Gt; [More information here][3]

### Step 3: Startup your MoodleBox

Insert your microSD card into the Raspberry Pi slot and power it up. The red LED lights up, and after a few seconds the green LED lights up intermittently. If you connect the MoodleBox to the network or to an internet router via an Ethernet cable, the mobile devices connected via WLAN can access the internet.

&Gt; [More information here][10]

No further settings are necessary. After starting, the MoodleBox is ready and fully functional.

### Next steps

  * [Wi-Fi connection][5]
  * [Access to Moodle][4]
  * [Change the main password][11]
  * [Wi-Fi configuration][6]
  * [SSH access][7] to the MoodleBox
  * [Support the MoodleBox project][8]

For more information, browse our [knowledge base][9].

 [1]: {{< relref "help/hardware" >}}
 [2]: {{< relref "help/download-the-disk-image" >}}
 [3]: {{< relref "help/copy-the-disk-image" >}}
 [4]: {{< relref "help/access-to-moodle" >}}
 [5]: {{< relref "help/wi-fi-connection" >}}
 [6]: {{< relref "help/wi-fi-configuration" >}}
 [7]: {{< relref "help/command-line-access" >}}
 [8]: {{< relref "/support-moodlebox" >}}
 [9]: {{< relref "/help" >}}
 [10]: {{< relref "help/startup-shutdown-restart" >}}
 [11]: {{< relref "/change-password" >}}
 [rpi-imager]: https://www.raspberrypi.com/software/
