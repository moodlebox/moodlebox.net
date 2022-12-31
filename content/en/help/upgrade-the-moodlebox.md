---
title: Upgrade the MoodleBox
authors:
  - Nicolas Martignoni
type: kb
date: 2017-12-22
lastmod: 2020-08-04
description: Follow the instructions below to regularly update your MoodleBox
slug: upgrade-the-moodlebox
categories:
  - Maintenance
aliases:
  - how-to-upgrade-the-moodlebox

---
As a routine security measure, it is recommended to update regularly the server software on the MoodleBox to patch vulnerabilities found in the Raspberry Pi OS distribution and to fix other discovered bugs.

For this operation, the MoodleBox must be connected to the Internet via Ethernet cable.

### Updating the MoodleBox software

  1. Connect to [the command line interface of the MoodleBox][1] via SSH, using your credentials. Here are the [defaults credentials][2].
  2. Branch the MoodleBox with an Ethernet cable to a local network with Internet access.
  3. Type the following command in the terminal interface:

      ```bash
      sudo apt-get update && sudo apt-get dist-upgrade -y
      ```
      and confirm with Return.
  4. This operation will take a couple of minutes. The duration depends on the number of the softwares to update, on your Internet bandwidth and on the quality of your microSD card.
  5. At the end of the update process, type `exit`, and confirm with Return.

 [1]: {{< relref "help/command-line-access" >}}
 [2]: {{< relref "help/credentials" >}}
