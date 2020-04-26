---
title: Use the MoodleBox's  Wi-Fi captive portal
authors:
  - Nicolas Martignoni
type: kb
date: 2019-05-20
lastmod: 2019-05-20
description: The MoodleBox has a captive portal for its Wi-Fi network, allowing wireless clients to be directed to the MoodleBox home page.
slug: captive-portal
categories_weight: 85
categories:
  - Usage

---
{{< notice note >}}
This feature is available from __version 2.7.0__ of MoodleBox.
{{< /notice >}}

The MoodleBox contains a fully configured [captive portal][1], based on free software [Nodogsplash][2], to direct users connecting to its wireless network to the MoodleBox home page.

The captive portal __is not enabled__ by default. If you want to make it active, simply run the command below after [accessing to the MoodleBox command line interface][3].
```bash
sudo systemctl start nodogsplash
```
To stop the captive portal, the following command must be used.
```bash
sudo systemctl stop nodogsplash
```
When the MoodleBox is started again, the active or inactive state of the captive portal remains the one that was last selected.

{{< notice info >}}
The captive portal only works __if the MoodleBox is connected to the Internet__. Otherwise, users [connecting to the Wi-Fi network]({{< relref "help/wi-fi-connection" >}}) of the MoodleBox will not be intercepted by the captive portal.
{{< /notice >}}

 [1]: https://en.wikipedia.org/wiki/Captive_portal
 [2]: https://nodogsplashdocs.readthedocs.io/
 [3]: {{< relref "help/command-line-access" >}}
 [4]: {{< relref "help/wi-fi-connection" >}}
