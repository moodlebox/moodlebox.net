---
title: How to update Moodle
authors:
  - Nicolas Martignoni
  - Adrian Perez Rodriguez
type: kb
date: 2017-04-20
lastmod: 2020-10-20
description: Do you want to update Moodle on the MoodleBox? Follow these instructions!
slug: moodle-version-update
categories:
  - Maintenance
---
{{< notice warning >}}
Before updating your version of Moodle, make sure that the server requirements are met on your MoodleBox. To do this, log in to Moodle, visit [Site Administration > Server > Environment](http://moodlebox.home/admin/environment.php), click on _Update component_, then check that no line says _Check_ in red.

Warnings _site not https_ and _php not 64 bits_ are not a problem and can be ignored.
{{< /notice >}}

To update Moodle, perform the following operations, using the command line.

First [log into the MoodleBox via SSH][2], with the main password. [If you didn't change it][3] yet, use [the default main][4] password __Moodlebox4$__.

```bash
ssh moodlebox@moodlebox.home
```

### Update to a _minor_ version

To update to the next __minor version__ of Moodle (3.9.1, 3.9.2, etc.), type the following commands in the terminal:[^git]

```bash
cd /var/www/moodle/
sudo -u moodlebox -g www-data git pull
```

Visit then in your browser the URL http://moodlebox.home/admin and follow the update instructions, like any Moodle installation ([read the documentation][update]).

### Update to a _major_ version

To update to the next __major version__ of Moodle (3.9, 3.10[^future], 3.11[^future], 4.0[^future], etc.), type the commands above, then the __additional__ following commands, indicating the adequate branch, e.g. `MOODLE_39_STABLE`, `MOODLE_40_STABLE`, etc.:

```bash
sudo -u moodlebox -g www-data git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
sudo -u moodlebox -g www-data git fetch origin
sudo -u moodlebox -g www-data git checkout MOODLE_39_STABLE
```

Then visit the URL http://moodlebox.home/admin and follow the update instructions, like any Moodle installation ([read the documentation][update]).

{{< notice tip >}}
If you have a MoodleBox version 2.5.0 and earlier, use `sudo -u www-data git ...` instead of `sudo -u moodlebox -g www-data git ...` in the all the commands above.
{{< /notice >}}

 [update]: https://docs.moodle.org/en/Upgrading
 [2]: {{< relref "help/command-line-access" >}}
 [3]: {{< relref "help/change-password" >}}
 [4]: {{< relref "help/credentials" >}}

 [^git]: In order to allow a simplified update of Moodle, its installation was done using Git.
 [^future]: Of course, you'll have to choose an existing and stable branch, so wait for the [official release](https://docs.moodle.org/dev/Releases#General_release_calendar) of the wanted Moodle version to do so.
