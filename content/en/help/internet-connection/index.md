---
title: How to connect the Moodlebox to the Internet
authors:
  - Nicolas Martignoni
type: kb
date: 2017-04-20
lastmod: 2020-02-08
description: This guide explains how to provide an Internet connection to users connected via Wi-Fi to a MoodleBox.
slug: internet-connection
weight: 9
categories:
  - Usage

---
It is very easy to provide an internet connection to users connected wirelessly to a MoodleBox.

Simply connect the MoodleBox with an Ethernet cable to a network that has Internet access. As soon as the connection is available, the devices connected via Wi-Fi to the MoodleBox have Internet access themselves.

If however, you want to use the MoodleBox __without an Internet connection__, for example for activities such as an escape game or assessments where student access to the Internet is not desired, simply disconnect the Ethernet cable from the MoodleBox. Without an Ethernet cable connection, devices connected via Wi-Fi can only access the resources available on the MoodleBox.

{{< notice note >}}
Starting with version 3.5.2 of the MoodleBox image, information about whether an Ethernet cable is connected is displayed on the [MoodleBox dashboard]({{< relref "help/info-moodlebox" >}}).

The interface name, usually `eth0`, as well as the IP address of the MoodleBox, obtained via DHCP, and the address of the default gateway are also displayed.
{{< /notice >}}

{{< figure src="ethernet-connexion.png" caption="Ethernet cable connected" class="centered-image" width="700px" >}}

Have a look at the [MoodleBox network topology][1] for more information about this.

 [1]: {{< relref "help/network-topology" >}}
 [2]: {{< relref "help/info-moodlebox" >}}
