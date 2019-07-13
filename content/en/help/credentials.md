---
title: What are the MoodleBox credentials
authors:
  - Nicolas Martignoni
type: kb
date: 2017-09-16
lastmod: 2018-10-24
description: All credentials used in the MoodleBox (WiFi, SSH, Moodle, database) are provided here
slug: moodlebox-credentials
weight: 8
categories:
  - Maintenance
  - Usage

---
This page lists all the credentials used in the MoodleBox. Of course the credentials are different if you have changed something.

### Wi-Fi access

This password should be used to [connect to the Wi-F][3]i network of the MoodleBox. The network name (SSID) is __MoodleBox__.

  * Password: __moodlebox__

### Moodle access

These credentials should be used to [log into the Moodle][4] default administrator account.

  * Username: __moodlebox__
  * Password: __Moodlebox4$__

{{< notice info >}}
The username __admin__ (with the same password __Moodlebox4$__), used up to version 2.5.1 of the MoodleBox, is still valid, but is no longer recommended. It will be removed in a future version of the image.
{{< /notice >}}

### Command line access (Unix account, SSH, SFTP)

These credentials should be used for the Unix account. Use these credentials to [access the MoodleBox via SSH][1] or [via SFTP][2].

  * Username: __moodlebox__
  * Password: __Moodlebox4$__

### Access to the database

These credentials should be used to [access to the database management interface][5].

  * Username: __moodlebox__
  * Password: __Moodlebox4$__

 [1]: {{< relref "command-line-access" >}}
 [2]: {{< relref "using-files-with-the-moodlebox" >}}
 [3]: {{< relref "wi-fi-connection" >}}
 [4]: {{< relref "access-to-moodle" >}}
 [5]: {{< relref "access-to-the-database" >}}
