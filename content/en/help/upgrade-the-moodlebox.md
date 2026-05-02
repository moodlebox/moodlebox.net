---
title: Upgrade the MoodleBox system
authors:
  - Nicolas Martignoni
type: kb
date: 2017-12-22
lastmod: 2026-05-02
description: Follow the instructions below to regularly update your MoodleBox system via shell access
keywords:
  - shell
  - ssh
  - command line
  - cli
  - rpios
  - debian
  - os
slug: upgrade
categories:
  - Maintenance
aliases:
  - upgrade-the-moodlebox

---
As a routine security measure, it is recommended to update regularly the server software and the operating system Raspberry Pi OS on the MoodleBox to patch vulnerabilities found in the OS and to fix other discovered bugs.

For this operation, the MoodleBox must be connected to the Internet via Ethernet cable.

### How to proceed

  1. Connect to [the command line interface of the MoodleBox][1] via SSH, using your credentials. Here are the [defaults credentials][2].
  2. Branch the MoodleBox with an Ethernet cable to a local network with Internet access.
  3. Type the following command in the terminal interface:

      ```bash
      sudo apt-get update && sudo apt-get full-upgrade -y
      ```
      and confirm with Return.
  4. This operation will take a couple of minutes. The duration depends on the number of the softwares to update, on your Internet bandwidth and on the quality of your microSD card.
  5. At the end of the update process, type `exit`, and confirm with Return.

 [1]: {{< relref "help/command-line-access" >}}
 [2]: {{< relref "help/credentials" >}}
