---
date: 2018-01-02
title: Disk-Image Version 2.1.0
description: MoodleBox 2.1.0 basiert auf Raspbian Stretch Lite vom 29.11.2017. Der Image-Building-Prozess wurde umgestaltet.
authors:
  - Nicolas Martignoni
slug: version-2.1.0
---
Die Version 2.1.0 des [Disk-Image der MoodleBox][4] wurde heute veröffentlicht. Dieses [Major Release][4] erscheint für den Endanwender nahezu unverändert, aber unter der Haube haben sich große Dinge getan.

  - Der Building-Prozess des Disk-Image wurde komplett überarbeitet. Anstatt wie bisher ein Bash-Skript zu nutzen, verwenden wir jetzt [Ansible][3], was einen wesentlich robusteren Build ermöglicht. Ansible ist ein Open-Source-Tool zur Automatisierung der Installation und Wartung von Servern.
  - Das neue Release basiert auf den Distribution-Image von [Raspbian Stretch Lite][2], das am 29.11.2017 veröffentlicht wurde.
  - Mehrere kleine Änderungen und Ergänzungen wurden vorgenommen.

Weitere Informationen finden Sie in den [Release Notes auf Github][4].

 [1]: {{< relref "download-the-disk-image.md" >}}
 [2]: https://www.raspberrypi.org/downloads/raspbian/
 [3]: https://www.ansible.com
 [4]: https://github.com/moodlebox/moodlebox/releases/tag/v2.1.0
