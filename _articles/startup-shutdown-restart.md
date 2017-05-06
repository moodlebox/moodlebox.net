---
ID: 438
post_title: >
  Start-up, shutdown and restart the
  MoodleBox
author: nicolas.martignoni.admin
post_date: 2017-04-20 21:03:11
post_excerpt: ""
layout: epkb_post_type_1
permalink: >
  https://moodlebox.net/en/help/startup-shutdown-restart/
published: true
---
<h3>Startup</h3>
Insert your microSD card into the Raspberry Pi 3 slot, power it up and connect it to the network via an Ethernet cable. The red LED lights up, and after a few seconds the green LED lights up intermittently.

There is no other manipulation to do: after the boot, your MoodleBox ready and totally functional.

If possible, it is recommended to connect the MoodleBox via Ethernet to the network at each startup. Thus, the maintenance tasks requiring an Internet connection (for example the synchronization of the internal clock) will be successfully done.
<h3>Shutdown</h3>
In order to minimize the risk of data corruption on the microSD card, it is not recommended to unplug the power supply without care to shutdown the MoodleBox. It is preferable to manually control its shutdown beforehand.

Log in the Moodle instance of the MoodleBox and visit <a href="http://moodlebox.home/admin/tool/moodlebox/index.php" target="_blank">Site administration &gt; Server &gt; MoodleBox</a> in the administration interface.

<img class="alignnone size-full wp-image-440" src="https://moodlebox.net/en/wp-content/uploads/sites/3/2017/04/restart-shutdown-en.png" alt="" width="722" height="111" />

In the section <strong>Restart and shutdown</strong>, the interface displays two buttons allowing to restart and shutdown the MoodleBox. Click on the button <strong>Shutdown MoodleBox</strong>, wait a few seconds et check that the green LED doesn't lights up any more. You may now safely unplug the power supply.
<h3>Restart</h3>
Log in the Moodle instance of the MoodleBox and visit <a href="http://moodlebox.home/admin/tool/moodlebox/index.php" target="_blank">Site administration &gt; Server &gt; MoodleBox</a> in the administration interface.

Click on the button <strong>Restart MoodleBox</strong>. Wait a few seconds and the MoodleBox will be available again.