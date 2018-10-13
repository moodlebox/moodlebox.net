---
title: How to update Moodle
authors:
  - Nicolas Martignoni
type: kb
date: 2017-04-20
lastmod: 2018-10-13
description: Want to update Moodle on the MoodleBox? Follow these instructions
slug: moodle-version-update
categories:
  - Maintenance

---
In order to allow a simplified update of Moodle, its installation was done using Git. To update Moodle, perform the following operations, using the command line.

[Log into the MoodleBox via SSH][2], with the usual password __Moodlebox4$__.

```bash
ssh moodlebox@moodlebox.home
```

{{% notice info %}}
As of MoodleBox version 2.5.1 and later, use `sudo -u moodlebox -g www-data git pull` instead of `sudo -u www-data git pull` in the commands indicated below.
{{% /notice %}}

### Update to a __minor version__

To update to the next __minor version__ of Moodle (3.5.1, 3.5.2, etc.), type the following commands in the terminal:

```bash
cd /var/www/moodle/
sudo -u www-data git pull
```

Visit then in your browser the URL http://moodlebox.home/admin and follow the update instructions, like any Moodle installation ([read the documentation][1]).

### Update to a __major version__

To update to the next __major version__ of Moodle (3.6, 3.7, etc.), type the __additional__ following commands:

```bash
sudo -u www-data git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
sudo -u www-data git fetch origin
sudo -u www-data git pull
sudo -u www-data git checkout MOODLE_35_STABLE
```

Then visit the URL http://moodlebox.home/admin and follow the update instructions, just like above.

 [1]: https://docs.moodle.org/en/Upgrading
 [2]: {{< relref "command-line-access.md" >}}
