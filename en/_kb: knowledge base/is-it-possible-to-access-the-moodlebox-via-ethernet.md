---
ID: 662
post_title: >
  Is it possible to access the MoodleBox
  via Ethernet?
author: nicolas.martignoni.admin
post_excerpt: ""
layout: epkb_post_type_1
permalink: >
  https://moodlebox.net/en/help/is-it-possible-to-access-the-moodlebox-via-ethernet/
published: true
post_date: 2017-12-23 17:20:51
---
The MoodleBox is not intended to serve client devices over Ethernet. However, it is possible to access it via Ethernet with some extra work.
<h3>Configure your router's DNS server</h3>
It is necessary that on your Ethernet network, the domain name <strong>moodlebox.home </strong>is assigned to the MoodleBox. This requires a DNS server on your Ethernet network (e.g. on your router). This DNS server will assign the domain name to the numerical IP address of your MoodleBox, which is itself distributed by the router's DHCP server (usually this address is something like 192.168.1.143).

Once this change is made, the client devices on the wired network can easily access the MoodleBox (without needing to remember its numeric IP address) using http://moodlebox.home/, and the Moodle instance of the MoodleBox will respond correctly. Devices that connect via Wi-Fi can also continue to do so.

If you only need to access the MoodleBox over Ethernet via SSH, you can do so using its numeric IP address, without requiring any modification.