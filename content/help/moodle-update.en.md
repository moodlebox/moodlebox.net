---
title: How to update Moodle
author: Nicolas Martignoni
type: kb
date: 2017-04-20T20:03:31+00:00
slug: moodle-version-update
categories:
  - Maintenance

---
In order to allow a simplified update of Moodle, its installation was done using Git. To update Moodle, perform the following operations, using the command line.

[Log into the MoodleBox via SSH][2], with the usual password __Moodlebox4$__.

```bash
ssh moodlebox@moodlebox.home
```

### Update to a __minor version__

To update to the next __minor version__ of Moodle (3.4.1, 3.4.2, etc.), type the following commands in the terminal:

```bash
cd /var/www/moodle/
sudo -u www-data git pull
```

Visit then in your browser the URL http://moodlebox.home/admin and follow the update instructions, like any Moodle installation ([read the documentation][1]).

### Update to a __major version__

To update to the next __major version__ of Moodle (3.5, 3.6, etc.), type the __additional__ following commands:

```bash
sudo -u www-data git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
sudo -u www-data git fetch origin
sudo -u www-data git pull
sudo -u www-data git checkout MOODLE_35_STABLE
```

Then visit the URL http://moodlebox.home/admin and follow the update instructions, just like above.

 [1]: https://docs.moodle.org/en/Upgrading
 [2]: {{< relref "command-line-access.en.md" >}}
