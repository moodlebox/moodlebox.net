---
title: Change the domain name of the MoodleBox
authors:
  - Nicolas Martignoni
type: kb
date: 2018-09-27
lastmod: 2018-09-30
description: The domain name of the MoodleBox can be changed to better match your own local situation. This guide explains how to change the domain name of your MoodleBox.
slug: domain-name-change
weight: 90
categories:
  - Usage

---
{{< notice warning >}}
The operations described on this page may __render your MoodleBox unusable__, requiring the complete wiping of the SD card and the __loss of all data__ (course contents, installed plug-ins, custom configurations, etc.). Do this only if you know exactly what you are doing. In any case, __no support is provided__ on this subject.

We accept no responsibility for any direct or indirect damage caused by the use of the MoodleBox, in particular following a change of domain name.
{{< /notice >}}

### How to proceed

The example below shows how to change the domain name of a MoodleBox, which will allow a local device to reach it with a new URL. The example shows how to give the MoodleBox the domain name `mybox.me`.

{{< notice info >}}
This operation has no influence on access to the MoodleBox from an Ethernet network or from the Internet: the MoodleBox __will remain accessible only from the Wi-Fi network it provides__, from the devices that have connected to it.
{{< /notice >}}

#### Step 1: Change the host name (_hostname_)

In the last line of the `/etc/hosts` file, replace `moodlebox` with `mybox`.

In the `/etc/hostname` file, replace `moodlebox` with `mybox` (this modification is not necessary, but highly recommended).

#### Step 2: Adapt the configuration of the nginx web server

Change the file `/etc/nginx/sites-available/default`, replacing `moodlebox` with the full domain name (_FQDN_) `mybox.me` in the `server_name` directive.

#### Step 3: Adapt the DHCP server configuration

Change the file `/etc/dnsmasq.conf`, replacing `home` by `mybox.me` in the two lines that start with `domain` and `local`.

#### Step 4: Adapt the Moodle configuration (Moodle URL)

In the file `/var/www/moodle/config.php`, on the line beginning with `$CFG->wwwroot`, replace the URL `http://moodlebox.home` by `http://mybox.me`. Do not add a slash at the end of the URL.

#### Step 5: Restart the MoodleBox

In order to apply these changes, restart your MoodleBox.

#### Step 6: Replace Moodle URLs

Access your MoodleBox through your browser using the new address `http://mybox.me/` and use the URL replacement tool at `http://mybox.me/admin/tool/replace/index.php` to replace URLs in the Moodle database.

### Other options available

- [Change the name of the Wi-Fi network][1] of the MoodleBox.
- Make the MoodleBox accessible [from an Ethernet wired network][2].

 [1]: {{< relref "wi-fi-configuration" >}}
 [2]: {{< relref "access-via-ethernet" >}}
