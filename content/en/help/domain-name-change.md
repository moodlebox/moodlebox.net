---
title: Change the domain name of the MoodleBox
authors:
  - Nicolas Martignoni
type: kb
date: 2018-09-27
lastmod: 2023-11-27
description:  This guide explains how to change the domain name of your MoodleBox to better match your own local situation.
slug: domain-name-change
categories_weight: 90
categories:
  - Usage

---
{{< notice warning >}}
The operations described on this page may __render your MoodleBox unusable__, requiring the complete wiping of the SD card and the __loss of all data__ (course contents, installed plug-ins, custom configurations, etc.). Do this only if you know exactly what you are doing. In any case, __no support is provided__ on this subject.

We accept no responsibility for any direct or indirect damage caused by the use of the MoodleBox, in particular following a change of domain name.
{{< /notice >}}

### How to proceed

The instructions below shows how to change the domain name of a MoodleBox, which will allow a local device to reach it with a new URL. The example shows how to give the MoodleBox the domain name __learn.example.com__.

{{< notice info >}}
This operation has no influence on access to the MoodleBox from an Ethernet network or from the Internet: the MoodleBox __will remain accessible only from the Wi-Fi network it provides__, from the devices that have connected to it.
{{< /notice >}}

#### Step 1: Change the host name (_hostname_)

In the last line of the `/etc/hosts` file, replace `moodlebox` with __learn.example.com__.

In the `/etc/hostname` file, replace `moodlebox` with __learn.example.com__ (this modification is not necessary, but highly recommended).

#### Step 2: Adapt the configuration of the nginx web server

In the file `/etc/nginx/sites-available/default`, replace `moodlebox` with the full domain name (_FQDN_) __learn.example.com__ in the `server_name` directive.

#### Step 3: Adapt the DNS server masquerading configuration

In the file `/etc/NetworkManager/dnsmasq-shared.d/00-dhcp.conf`, replace `home` by __learn.example.com__ in the two lines that start with `domain` and `local`.

If your domain name is a public one, comment out or delete completely the line starting with `address`. Otherwise, if your new domain name will remain local, ending with `.home`, you can keep this line untouched.

#### Step 4: Adapt the captive portal configuration (Nodogsplash)

In the file `/etc/nodogsplash/nodogsplash.conf`, replace the URL `http://moodlebox.home/` by `http://learn.example.com`.

#### Step 5: Adapt the Moodle configuration (Moodle URL)

In the file `/var/www/moodle/config.php`, on the line beginning with `$CFG->wwwroot`, replace the URL `http://moodlebox.home` by `http://learn.example.com`. Do not add a slash at the end of the URL.

#### Step 6: Restart the MoodleBox

In order to apply these changes, restart your MoodleBox.

#### Step 7: Replace Moodle URLs

Access your MoodleBox through your browser using the new address `http://learn.example.com/` and use the URL replacement tool at `http://learn.example.com/admin/tool/replace/index.php` to replace URLs in the Moodle database.

#### Step 8: Replace SSL certificates (optional)

If you want to [use HTTPS][3], you'll have to get your own SSL certificates, as those provided by the MoodleBox won't work with your custom domain name __learn.example.com__. Don't forget to change the URL too.

### Related options

- [Change the name of the Wi-Fi network][1] of the MoodleBox.
- Make the MoodleBox accessible [from an Ethernet wired network][2].

 [1]: {{< relref "help/wi-fi-configuration" >}}
 [2]: {{< relref "help/access-via-ethernet" >}}
 [3]: {{< relref "help/https-connection" >}}
