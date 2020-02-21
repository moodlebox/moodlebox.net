---
title: Herausgabe der MoodleBox 2.6.0
description: MoodleBox 2.6.0 enthält Moodle 3.6. Der Disk-Image basiert auf Raspbian Stretch Lite vom 13. November 2018.
date: 2018-12-03
authors:
  - Nicolas Martignoni
slug: version-2.6.0
---

{{< notice warning >}}
Diese Version __kann nicht automatisch mit dem in Entwicklung befindlichen Update-Skript aktualisiert werden__. Wir empfehlen Ihnen, stattdessen Version 2.6.1 zu verwenden.
{{< /notice >}}

Die [Version 2.6.0][2] des [Disk-Image der MoodleBox][2] wurde heute veröffentlicht.

  - Dieses Release enthält Moodle 3.6, die auch heute veröffentlicht wird.
  - Es basiert auf den Distribution-Image von [Raspbian Stretch Lite][4], das am 13. November 2018 veröffentlicht wurde.
  - Es braucht jetzt PHP Version 7.1.
  - Eine neue Version des [MoodleBox-Plugins für Moodle][3] behebt einen falschen Hilfetext.
  - A new version of the [MoodleBox plugin for Moodle][3] ermöglicht es, den Namen des WLAN-Netzwerks bei Bedarf zu verbergen.
  - Der Standard-Admin-Benutzername lautet nun _moodlebox_, anstelle von _admin_.
  - Ghostscript ist vorinstalliert, so dass Sie direkt PDF-Annotationen ohne weitere Manupulationen verwenden können.

Weitere Informationen über alle Änderungen an dieser Version finden Sie in den [Release Notes auf Github][2].

 [1]: {{< relref "help/download-the-disk-image" >}}
 [2]: https://github.com/moodlebox/moodlebox/releases/tag/v2.6.0
 [3]: https://moodle.org/plugins/tool_moodlebox
 [4]: https://www.raspberrypi.org/downloads/raspbian/
 [5]: {{< relref "help/moodle-update" >}}
 [6]: https://moodle.org/
