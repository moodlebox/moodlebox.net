---
date: 2018-01-02
title: Disk image version 2.1.0
description: MoodleBox 2.1.0 is based on the Raspbian Stretch Lite image released on 2017-11-29. The image building process was refactored.
authors:
  - Nicolas Martignoni
slug: version-2.1.0
---

Version 2.1.0 of the [image of the MoodleBox][4] is released today. [This release][4] is not very big for the end user. However big things were done under the hood.

  - The building process of the image was completely overhauled. Instead of using a bash script, we use now [Ansible][3], which allows a more robust build. Ansible is an open source tool for automating the installation and maintenance of servers.
  - This release is based on the [Raspbian Stretch Lite image][2] released on 2017-11-29.
  - Other small changes and additions were done. See the [release notes on Github][4] for more info.

 [1]: {{< relref "help/copy-the-disk-image" >}}
 [2]: https://www.raspberrypi.org/downloads/raspbian/
 [3]: https://www.ansible.com
 [4]: https://github.com/moodlebox/moodlebox/releases/tag/v2.1.0
