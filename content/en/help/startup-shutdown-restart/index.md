---
title: How to start-up, shutdown and restart the MoodleBox
authors:
  - Nicolas Martignoni
type: kb
date: 2017-04-20
lastmod: 2022-08-14
description: If you want to know how to start, switch off or restart your MoodleBox correctly, here is the desired information
slug: startup-shutdown-restart
categories_weight: 1
categories:
  - Maintenance
  - Usage

---
#### Startup

Insert your microSD card into the Raspberry Pi slot, power it up and connect it to the network via an Ethernet cable. The red LED lights up, and after a few seconds the green LED lights up intermittently.

{{< figure src="/img/media/pi-plug-in.gif" title="Startup" class="centered-image" width="600" >}}

There is no other manipulation to do: after the boot, your MoodleBox ready and totally functional.

If possible, it is recommended to connect the MoodleBox via Ethernet to the network at each startup. Thus, the maintenance tasks requiring an Internet connection (for example the synchronization of the internal clock) will be successfully done.

#### Shutdown

The graphical interface of the MoodleBox allows you to safely stop and restart the MoodleBox.

Log in the Moodle instance of the MoodleBox and visit [Site administration > Server > MoodleBox][1] in the administration interface.

{{< figure src="restart-shutdown-en.png" title="Shutdown and restart" class="centered-image" width="735" >}}

In the section __Restart and shutdown__, the interface displays two buttons allowing to restart and shutdown the MoodleBox. Click on the button __Shutdown MoodleBox__, wait a few seconds and check that the green LED doesn't lights up any more. You may now safely unplug the power supply.

{{< notice tip >}}
In order to minimize the risk of data corruption on the microSD card, it is not recommended to unplug the power supply without care to shutdown the MoodleBox. It is preferable to manually control its shutdown beforehand.
{{< /notice >}}

#### Restart

Log in the Moodle instance of the MoodleBox and visit [Site administration > Server > MoodleBox][1] in the administration interface.

Click on the button __Restart MoodleBox__. Wait a few seconds and the MoodleBox will be available again.

### Install a hardware startup and shutdown button

It is possible to install a hardware button to switch off and start the MoodleBox. The [MoodleBox Disk Image][2] allows the use of such a button without any configuration changes.

The installation of a hardware button is very simple: you just have to buy a button, for example [this capacitive button][3], and connect it to the pins of the MoodleBox GPIO (pins 5 and 6) port using [jumpers][4] (see the image below, thanks to Laurent Fleron), then restart the MoodleBox.

{{< figure src="/img/media/hardware-button.jpg" title="Hardware button" class="centered-image" width="400" >}}

 [1]: http://moodlebox.home/admin/tool/moodlebox/index.php
 [2]: {{< relref "help/download-the-disk-image" >}}
 [3]: https://www.aliexpress.com/item/32713062171.html
 [4]: https://www.aliexpress.com/item/32800215149.html
