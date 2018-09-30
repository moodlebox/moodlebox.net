---
title: Make the MoodleBox accessible from the Internet
authors:
  - Nicolas Martignoni
type: kb
date: 2018-09-30
lastmod: 2018-09-30
description: It is possible to make a MoodleBox directly accessible from the Internet. This guide explains how to do this.
slug: access-from-internet
weight: 95
categories:
  - Usage

---
{{% notice warning %}}
The MoodleBox is built on a low-performance computer. It could quickly be overloaded and __become very slow__, or even totally frozen in the event of a massive amount of visitors.

The availability of a MoodleBox on the web __implies significant security risks__. In particular, the server can be attacked and made unusable by various means. Change all MoodleBox passwords before making these modifications.

The operations described on this page may __render your MoodleBox unusable__, requiring the complete wiping of the SD card and the __loss of all data__ (course contents, installed plug-ins, custom configurations, etc.). Do this only if you know exactly what you are doing. In any case, __no support is provided__ on this subject.

We accept no responsibility for any direct or indirect damage caused by the use of the MoodleBox, in particular following a change in configuration in order to expose the MoodleBox on the Internet.
{{% /notice %}}

The MoodleBox was not designed to provide a Moodle platform permanently accessible from the Internet, as it is usually the case with a Moodle server. However, for specific use cases, this feature may be useful.

It is possible to configure a MoodleBox to make it accessible directly from the Internet, provided that you have __good knowledge in system administration__.

### Requirements

The following items are required to make your MoodleBox accessible from the Internet:

1. a valid __domain name__, for which you have the administrative rights, e.g. `example.com`;
1. a __fixed IP address__ or a functional __[dynamic DNS][1]__ configuration;
1. the MoodleBox must be connected to your network or router using an Ethernet cable.

{{% notice info %}}
This documentation does not explain how to manage a domain name, how to obtain a fixed IP address, or how to configure a dynamic DNS. Please refer to your Internet service provider for more information.
{{% /notice %}}

### How to proceed

#### Step 1 - Change the domain name of your MoodleBox

Read the [related documentation page][2]. Specify the domain name for which you have administrative rights. It is also possible to use a subdomain, for example: `learn.example.com`.

#### Step 2 - Allow web traffic to the MoodleBox

As a security measure, only your router is visible from the Internet; no device on your local network can be reached. It is therefore necessary to configure your router so that it transmits to your MoodleBox the web traffic that arrives to it.

The necessary actions must be performed on your router. Consult the documentation provided by your service provider. Due to the diversity of hardware installed among users, no support can be provided for the configuration of your router. Do only make such changes if you really know what you are doing.

1. Identify the public IP address of your router, for example `182.83.142.233`.
1. Identify the private IP address given to your MoodleBox by your router, for example `192.168.1.226`, using the `hostname -I` command on your MoodleBox.
1. In your router, permanently assign this address to your MoodleBox (not mandatory, but recommended).
1. In your router, redirect web traffic from port 80 (http) to the MoodleBox (port forwarding). If you want to administer your MoodleBox from the Internet, also redirect port 22 (ssh).

#### Step 3 - Configure the domain name server

At your domain name provider, associate the public address of your router, for example `182.83.142.233`, with the desired domain name, for example `learn.example.com`. Refer to the documentation provided by your domain name provider.

If you do not have a fixed IP address, configure the dynamic DNS.

#### Step 4 - Strengthen security

This step is not required. However is __very highly recommended__.

1. Change all MoodleBox passwords, using strong passwords:
  - using the MoodleBox dashboard for the main password and the Wi-Fi password,
  - via the administrator user account profile in Moodle.
2. Enforce hard passwords for all Moodle user accounts.
3. Install [fail2ban][3] on your MoodleBox. This software allows to block some systematic attacks against servers exposed on the Internet.
4. [Enable HTTPS][4] on the nginx web server of the MoodleBox, using e.g. LetsEncrypt certificates.  In this case, don't forget to redirect port 443 (https) traffic to your router (see above).

 [1]: https://en.wikipedia.org/wiki/Dynamic_DNS
 [2]: {{< relref "domain-name-change.md" >}}
 [3]: https://www.fail2ban.org/
 [4]: https://github.com/moodlebox/moodlebox/issues/27#issuecomment-326818647
