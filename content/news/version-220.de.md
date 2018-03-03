---
title: "Disk-Image Version 2.2.0"
description: "MoodleBox 2.2.0 basiert auf Moodle Version 3.4.1. Außerdem wurden verschiedene Verbesserungen vorgenommen."
date: 2018-03-02
slug: "version-2.2.0"
---

Die [Version 2.2.0][2] des [Disk-Image der MoodleBox][1]  wurde heute veröffentlicht.

Die wichtigsten Änderungen, die von [dieser Version][2] für Endbenutzer bereitgestellt werden, sind
- Moodle Version 3.4.1+, und
- Unterstützung für NTFS- und exFAT-formatierte USB-Laufwerke. Vielen Dank an Ralf Krause für die Anregung dieses neuen Features.

Moodle `cron` wird jetzt jede Minute ausgeführt, entsprechend der [offiziellen Empfehlung][3], da die resultierende CPU-Last die Leistung der MoodleBox nicht negativ beeinflusst.

Weitere Informationen über alle Änderungen an dieser Version finden Sie in den [Release Notes auf Github][2].

 [1]: {{< relref "download-the-disk-image.de.md" >}}
 [2]: https://github.com/martignoni/moodlebox/releases/tag/v2.2.0
 [3]: https://docs.moodle.org/de/Cron-Job#Cron_in_Moodle_2.7.2B
