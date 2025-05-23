---
title: Update Moodle on the MoodleBox
authors:
  - Nicolas Martignoni
  - Adrian Perez Rodriguez
type: kb
date: 2017-04-20
lastmod: 2025-04-05
description: Do you want to update Moodle on the MoodleBox? Follow these instructions!
keywords:
  - shell
  - ssh
  - command line
  - cli
slug: moodle-version-update
categories:
  - Maintenance
---
{{< notice info >}}
Before updating your version of Moodle, make sure that the server requirements are met on your MoodleBox. To do this, log in to Moodle, visit [Site Administration > Server > Environment](http://moodlebox.home/admin/environment.php), click on _Update component_, then check that no line says _Check_ in red.

Warning _site not https_ is not a problem and can be ignored.
{{< /notice >}}

To update Moodle, perform the following operations, using the command line.

First [log into the MoodleBox via SSH][cli], with the main password, to get shell access. [If you didn't change it][change-pwd] yet, use [the default main][default-pwd] password __Moodlebox4$__.

```bash
ssh moodlebox@moodlebox.home
```

### Update to a _minor_ version

To update to the next __minor version__ of Moodle (4.5.1, 4.5.2, etc.), type the following commands in the terminal:[^git]

```bash
cd /var/www/moodle/
sudo -u www-data -g moodlebox git pull
```

Visit then in your browser the URL http://moodlebox.home/admin and follow the update instructions, like any Moodle installation ([read the documentation][update]).

### Update to a _major_ version

To update to the next __major version__ of Moodle (5.0[^future], 6.0[^future], etc.), type the commands above, then the __additional__ following commands, indicating the adequate branch, e.g. `MOODLE_500_STABLE`, `MOODLE_600_STABLE`, etc.:

```bash
sudo -u www-data -g moodlebox git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
sudo -u www-data -g moodlebox git fetch origin
sudo -u www-data -g moodlebox git checkout MOODLE_500_STABLE
```

Then visit the URL http://moodlebox.home/admin and follow the update instructions, like any Moodle installation ([read the documentation][update]).

 [update]: https://docs.moodle.org/en/Upgrading
 [cli]: {{< relref "help/command-line-access" >}}
 [change-pwd]: {{< relref "help/change-password" >}}
 [default-pwd]: {{< relref "help/credentials" >}}

 [^git]: In order to allow a simplified update of Moodle, its installation was done using Git.
 [^future]: Of course, you'll have to choose an existing and stable branch, so wait for the [official release](https://moodledev.io/general/releases) of the wanted Moodle version to do so.
