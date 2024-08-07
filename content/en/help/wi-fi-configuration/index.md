---
title: Update MoodleBox Wi-Fi network configuration
authors:
  - Nicolas Martignoni
type: kb
date: 2017-08-12
lastmod: 2022-08-15
description: It is possible to change several settings of the access point WiFi settings of the MoodleBox.
slug: update-wifi-configuration
categories_weight: 6
categories:
  - First steps
  - Maintenance
aliases:
  - updating-wi-fi-network-configuration

---
When the MoodleBox is turned on, it works as a wireless access point. An administrator or manager may change several settings of the access point Wi-Fi settings of the MoodleBox. To do this, visit the MoodleBox dashboard at [Site administration > Server > MoodleBox][1] in the administration interface.

{{< figure src="wifi-settings.png" title="Wi-Fi Settings" width="750" class="centered-image" >}}

### Change Wi-Fi network name (SSID)

You may change the network name (SSID). Type in a new SSID in the adequate field and click the button __Change Wi-Fi settings__. It is possible to enter SSIDs with specials characters such as emojis, including spaces.

{{< notice info >}}
SSID must be a string of at least 1 byte and at most 32 bytes. Remember that some characters, such as emojis, use more than one byte.
{{< /notice >}}

### Hide the Wi-Fi network

It is possible to hide the MoodleBox's Wi-Fi network by checking the __Hidden Wi-Fi Network__ box.

{{< notice tip >}}
When the Wi-Fi network is hidden, it is difficult to know that a MoodleBox is active in the area. Only enable this option if you are sure of what you are doing, as users will probably have more trouble finding the MoodleBox.
{{< /notice >}}

### Change Wi-Fi access point channel

To change the Wi-Fi channel of the wireless access point of the MoodleBox, select a channel number and click the button __Change Wi-Fi settings__.

### Change Wi-Fi regulatory country of the access point

To change the Wi-Fi regulatory country of the MoodleBox wireless access point, select a country from the drop-down list and click the __Change Wi-Fi settings__ button.

{{< notice info >}}
Authorized Wi-Fi channels depend on the country of regulation. Depending on the country selected, some channels will no longer be available.
{{< /notice >}}

### Remove Wi-Fi network password or change it

To enable a easier access of the Wi-Fi access point of the MoodleBox, it's possible to allow its access without a password. To do this, uncheck the __Wi-Fi network password protected__ checkbox. This can be rechecked at anytime.

It is also possible to change the password of the Wi-Fi access point of the MoodleBox. To do this, type in a new password in the adequate field. The password should be 8 to 63 characters long. If you fail to input a valid password, it will be reverted to the default password __moodlebox__.

### Change the static IP address of the Wi-Fi network

In order to avoid collisions with the existing LAN, it is possible to change the static IP address of the MoodleBox Wi-Fi network, by updating the corresponding field.

Only [private IP addresses][private] are allowed, and MoodleBox will always use an address ending in `.1`, for example `192.168.100.1`, even if the address entered is `192.168.100.100`.

The IP addresses delivered by DHCP to Wi-Fi clients will be in the range of the specified private network. For example, if the address entered is `172.28.10.1`, the addresses allocated will be in the range `172.28.10.10-172.28.10.254`.

 [1]: http://moodlebox.home/admin/tool/moodlebox/index.php
 [private]: https://en.wikipedia.org/wiki/Private_network
