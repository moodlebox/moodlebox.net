---
title: Access the MoodleBox via Ethernet
authors:
  - Nicolas Martignoni
type: kb
date: 2017-12-23
lastmod: 2019-09-01
description: It is possible to configure your local network to access the MoodleBox via an Ethernet connection
slug: access-moodlebox-via-ethernet
categories_weight: 80
categories:
  - Usage
aliases:
  - how-to-access-the-moodlebox-via-ethernet

---
The MoodleBox is not intended to serve client devices over Ethernet. However, it is possible to access it via Ethernet with some extra work.

The Moodle platform only works correctly if it is called via its domain name __moodlebox.home__. By default, however, this domain name is not known in the Ethernet network, and this is where the difficulty lies!

{{< notice warning >}}
Due to the diversity of hardware installed in the users' homes, __no support can be provided__ for the configuration of your router or device. Do only make such changes if you really know what you are doing.
{{< /notice >}}

### Configure your router's DNS server

It is necessary that on your Ethernet network, the domain name __moodlebox.home__ is assigned to the MoodleBox. This requires a DNS server on your Ethernet network (e.g. on your router). This DNS server will assign the domain name to the numeric IP address of your MoodleBox. The numeric IP address is itself distributed by the router's DHCP server (usually it is something like 192.168.1.143).

Once this change is made, the client devices on the wired network can easily access the MoodleBox (without needing to remember its numeric IP address) using http://moodlebox.home/, and the Moodle instance of the MoodleBox will answer correctly. Devices that connect via Wi-Fi can also continue to do so.

If you only need to access the MoodleBox over Ethernet via SSH, you can do so using its numeric IP address, without requiring any modification.

The hostname of the MoodleBox is __moodlebox__. Its fully qualified domain name (_FQDN_) is __moodlebox.home__.

### Updating the `hosts` configuration file on your computer

Another way to map the domain name to the MoodleBox's numeric IP address is to use the `hosts` configuration file, which is available somewhere in your computer's operating system. You __must not change__ the upper part of the file under any circumstances, but you can add a few lines below.

After having added the section below, with the real IP address of your MoodleBox, you should be able to access the Moodlebox home page __moodlebox.home__ in your computer's browser.

```bash
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1	localhost
255.255.255.255	broadcasthost
::1             localhost
##
# MoodleBox connection via Ethernet
# MoodleBox must get an ip address via dhcp
192.168.1.143	moodlebox.home	moodlebox
```
