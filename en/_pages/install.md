---
ID: 19
post_title: MoodleBox Installation
author: nicolas.martignoni.admin
post_excerpt: ""
layout: page
permalink: https://moodlebox.net/en/install/
published: true
post_date: 2016-09-01 20:39:10
---
Download Etcher here: <a href="https://etcher.io/" target="_blank">https://etcher.io</a> and follow the instructions in Etcher to flash the <strong>moodlebox-x.y.z.img.gz</strong> file <a href="https://moodlebox.net/en/dl/">you've downloaded</a> on your microSD card.

<img class="alignnone wp-image-361 size-full" src="https://moodlebox.net/en/wp-content/uploads/sites/3/2016/09/Etcher-copy.png" alt="" width="800" height="380" />

Insert microSD card into the Raspberry Pi 3 slot, power it up and connect it to the network via ethernet cable. The red LED lights up, and after a few seconds the green LED lights up intermittently.

There is no other manipulation to do : after the reboot, your MoodleBox ready and totally functional.

If possible, it is advisable to connect the MoodleBox via ethernet to the network at each startup. Thus, the maintenance tasks requiring an Internet connection (for example the synchronization of the internal clock) will be successfully done.
<h3>For the geeks</h3>
If you prefer to use a command line interface to flash your card: extract the <strong>moodlebox-x.y.z.img.gz</strong> file <a href="https://moodlebox.net/en/dl/">you've downloaded</a> and follow the <a href="https://www.raspberrypi.org/documentation/installation/installing-images/README.md" target="_blank">instructions</a> to copy the disk image <strong>moodlebox.img</strong> to your microSD card.
<ul>
 	<li><a href="https://www.raspberrypi.org/documentation/installation/installing-images/mac.md" target="_blank">Mac OS instructions</a></li>
 	<li><a href="https://www.raspberrypi.org/documentation/installation/installing-images/windows.md" target="_blank">Windows instructions</a></li>
 	<li><a href="https://www.raspberrypi.org/documentation/installation/installing-images/linux.md" target="_blank">Linux instructions</a></li>
</ul>