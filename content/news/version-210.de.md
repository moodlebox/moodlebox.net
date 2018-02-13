---
date: 2018-01-02
title: "Disk-Image Version 2.1.0"
description: "MoodleBox 2.1.0 basiert auf dem Raspbian Stretch Lite Image vom 2017-11-29. Der Image-Building-Prozess wurde umgestaltet."
slug: "version-2.1.0"
---

Die Version 2.1.0 des [Disk-Image der MoodleBox][1] ist heute veröffentlicht worden. [Diese Version][4] ändert für den Endanwender nicht viel. Doch unter der Haube wurden große Dinge getan.

- Der Bauprozess des Disk-Image wurde komplett überarbeitet. Anstatt ein Bash-Skript zu verwenden, verwenden wir jetzt [Ansible][3], was einen robusteren Build ermöglicht. Ansible ist ein Open-Source-Tool zur Automatisierung der Installation und Wartung von Servern.

- Diese Ausgabe basiert auf dem Bild von [Raspbian Stretch Lite][2], das am 29.11.2017 veröffentlicht wurde.

- Weitere kleine Änderungen und Ergänzungen wurden vorgenommen.

Siehe die [Release Notes auf Github][4] für weitere Informationen.

 [1]: {{< relref "download-the-disk-image.de.md" >}}
 [2]: https://www.raspberrypi.org/downloads/raspbian/
 [3]: https://www.ansible.com
 [4]: https://github.com/martignoni/moodlebox/releases/tag/v2.1.0
