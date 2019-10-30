---
title: How to update Moodle
authors:
  - Nicolas Martignoni
  - Adrian Perez Rodriguez
type: kb
date: 2017-04-20
lastmod: 2019-10-30
description: Want to update Moodle on the MoodleBox? Follow these instructions
slug: moodle-version-update
categories:
  - Maintenance

---
To update Moodle, perform the following operations, using the command line.

First [log into the MoodleBox via SSH][2], with your admin password. [If you didn't change it][3] yet, use [the default main][4] password __Moodlebox4$__.

```bash
ssh moodlebox@moodlebox.home
```

### Update to a _minor_ version

To update to the next __minor version__ of Moodle (3.7.1, 3.7.2, etc.), type the following commands in the terminal:[^1]

```bash
cd /var/www/moodle/
sudo -u moodlebox -g www-data git pull
```

Visit then in your browser the URL http://moodlebox.home/admin and follow the update instructions, like any Moodle installation ([read the documentation][update]).

### Update to a _major_ version

To update to the next __major version__ of Moodle (3.8, 3.9, etc.), type the commands above, then the __additional__ following commands:

```bash
sudo -u moodlebox -g www-data git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
sudo -u moodlebox -g www-data git fetch origin
sudo -u moodlebox -g www-data git checkout MOODLE_38_STABLE
```

Then visit the URL http://moodlebox.home/admin and follow the update instructions, like any Moodle installation ([read the documentation][update]).

{{< notice warning >}}
If you have a MoodleBox version 2.5.0 and earlier, use `sudo -u www-data git ...` instead of `sudo -u moodlebox -g www-data git ...` in the all the commands above.
{{< /notice >}}

 [update]: https://docs.moodle.org/en/Upgrading
 [2]: {{< relref "command-line-access.md" >}}
 [3]: {{< relref "change-password.md" >}}
 [4]: {{< relref "credentials.md" >}}

 [^1]: In order to allow a simplified update of Moodle, its installation was done using Git.
