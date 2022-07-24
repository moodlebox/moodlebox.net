---
title: How to change the main password
authors:
  - Nicolas Martignoni
type: kb
date: 2018-11-02
lastmod: 2018-11-02
description: You can change the main password of the MoodleBox by browsing the dashboard in the administration interface
slug: change-main-password
categories_weight: 5
categories:
  - Usage
---

{{< notice warning >}}
It is strongly recommended to __immediately change__ the main password of the MoodleBox, in order to prevent unauthorized persons from making unwanted changes and rendering it unusable.
{{< /notice >}}

To change the main password of your MoodleBox, visit the dashboard in the administration interface: [Site Administration > Server > MoodleBox][1].

This password is part of the main credentials of your MoodleBox. It gives access to the [command line interface][5] of the MoodleBox, to the [SFTP file upload][6]  as well as to the [database administration][7].

{{< figure src="/img/media/change-password-en.png" title="Change the main password" caption-position="bottom" caption-effect="appear" width="600"  >}}

In the __MoodleBox password section__, enter your new password, the same in both fields. By clicking on the eye icon, you can display the characters you have typed. We recommend choosing a strong password.

{{< notice info >}}
The password for the Moodle administrator account __is not changed__ by this operation. To change that password, log in to Moodle, visit the <a href="http://moodlebox.home/user/preferences.php" target="_blank">preferences for your profile</a> and <a href="http://moodlebox.home/login/change_password.php" target="_blank">change the password</a>.
{{< /notice >}}

 [1]: http://moodlebox.home/admin/tool/moodlebox/index.php
 [2]: http://moodlebox.home/
 [3]: http://moodlebox.home/user/preferences.php
 [4]: http://moodlebox.home/login/change_password.php
 [5]: {{< relref "help/command-line-access" >}}
 [6]: {{< relref "help/using-files-with-the-moodlebox" >}}
 [7]: {{< relref "help/access-to-the-database" >}}
