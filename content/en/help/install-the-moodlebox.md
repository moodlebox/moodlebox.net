---
title: How to install the MoodleBox
authors:
  - Nicolas Martignoni
type: kb
date: 2017-09-15
lastmod: 2019-10-30
description: The procedure to install the MoodleBox for its first utilisation is described here
slug: install-the-moodlebox
weight: 1
categories:
  - First steps
aliases:
  - ../install

---
This is the procedure to install the MoodleBox for its first utilisation.

### Step 1: Buy the hardware

The [stuff you will need][1] to build your MoodleBox is essentially a Raspberry Pi Model 3A, 3B, 3B+ or 4B with a power supply and a microSD card. [More information here][1].

{{< notice tip >}}
Selecting a __good quality__ microSD card and an adequate power supply are __essential__ for the proper operation of the MoodleBox.

We recommend the [official Raspberry Foundation power supply](https://www.raspberrypi.org/products/raspberry-pi-universal-power-supply/) and a microSD card with tested performance, for example [those recommended by Wirecutter](http://thewirecutter.com/reviews/best-microsd-card/). The use of other power supplies, as well as microSD cards from dubious sources, can cause systematic malfunctions, for which __no support can be provided__.
{{< /notice >}}

### Step 2: Download the MoodleBox disk image

The [MoodleBox disk image][2] is available [here][2].

### Step 3: Copy the disk image on your microSD card

For this operation, use preferably [balenaEtcher][10]. [More information here][3].

### Step 4: Startup your MoodleBox

Insert your microSD card into the Raspberry Pi slot and power it up. The red LED lights up, and after a few seconds the green LED lights up intermittently. If desired, connect the MoodleBox to the network or to an Internet router with an Ethernet cable to allow connected devices to access the Internet.

There is no other manipulation to do: after the boot, your MoodleBox is ready and totally functional.

### Next steps

  * [Wi-Fi connection][5]
  * [Access to Moodle][4]
  * [Change the main password][11]
  * [Wi-Fi configuration][6]
  * [SSH access][7] to the MoodleBox
  * [Support the MoodleBox project][8]

For more information, browse the [knowledge base][9].

 [1]: {{< relref "help/hardware" >}}
 [2]: {{< relref "help/download-the-disk-image" >}}
 [3]: {{< relref "help/copy-the-disk-image" >}}
 [4]: {{< relref "help/access-to-moodle" >}}
 [5]: {{< relref "help/wi-fi-connection" >}}
 [6]: {{< relref "help/wi-fi-configuration" >}}
 [7]: {{< relref "help/command-line-access" >}}
 [8]: {{< relref "/support-moodlebox" >}}
 [9]: {{< relref "/help" >}}
 [10]: https://www.balena.io/etcher/
 [11]: {{< relref "/change-password" >}}
