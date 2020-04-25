---
title: WLAN-Einstellungen ändern
authors:
  - Nicolas Martignoni
  - Ralf Krause
type: kb
date: 2017-08-12
lastmod: 2019-10-30
description: Es ist möglich, zahlreiche WiFi-Einstellungen des MoodleBox AccessPoint zu ändern.
slug: wlan-einstellungen-aendern
categories_weight: 6
categories:
  - Erste Schritte
  - Wartung

---
Wenn Sie die MoodleBox einschalten, arbeitet die MoodleBox wie ein WLAN-AccessPoint. Als Administrator können Sie zahlreiche WLAN-Einstellungen ändern. Um dies zu tun, gehen Sie in den MoodleBox-Einstellungen auf [Website-Administration > Server > MoodleBox][1].

{{< figure src="wifi-settings.png" caption="WLAN-Eistellungen" width="800px" >}}

### WLAN-Namen (SSID) ändern

Sie können den WLAN-Namen (SSID) der MoodleBox ändern. Geben Sie einen neuen WLAN-Namen in das entsprechende Feld ein und tippen Sie auf die Taste __Einstellungen ändern__. Ab MoodleBox Version 2.3.0 ist es möglich, SSIDs mit Sonderzeichen wie Emojis, einschließlich Leerzeichen, einzugeben.

{{< notice note >}}
Der WLAN-Name (SSID) für die MoodleBox kann zwischen 1 und 32 Bytes lang sein. Beachten Sie, dass manche Zeichen (z.B. Emoticons) mehr als nur 1 Byte verwenden.
{{< /notice >}}

### WLAN verbergen

Ab der MoodleBox-Version 2.6.0 ist es möglich, das WLAN der MoodleBox zu verbergen, indem Sie das Kontrollkästchen __Verborgenes WLAN__ aktivieren.

{{< notice tip >}}
Wenn das WLAN verborgen wird, ist es schwierig zu wissen, ob eine MoodleBox im Umfeld aktiv ist. Aktivieren Sie diese Option nur, wenn Sie sich sicher sind, was Sie tun. Benutzer haben wahrscheinlich mehr Probleme, die MoodleBox zu finden.
{{< /notice >}}


### WLAN-Kanal ändern

Um den WLAN-Kanal der MoodleBox zu ändern, wählen Sie einen Kanal und tippen Sie auf die Taste __Einstellungen ändern__.

### WLAN-Regulierungsland ändern

Ab der MoodleBox-Version 2.5.0 ist es möglich, das WLAN-Regulierungsland einzustellen. Um das WLAN-Regulierungsland der MoodleBox zu ändern, Wählen Sie ein Land aus der Dropdown-Liste und tippen Sie auf die Taste __Einstellungen ändern__.

{{< notice info >}}
Autorisierte WLAN-Kanäle hängen vom Regulierungsland ab. Je nach gewähltem Land stehen einige Kanäle nicht zur Verfügung.
{{< /notice >}}

### WLAN-Kennwort entfernen oder ändern

Um einen besonders einfachen Zugang zum WLAN der MoodleBox zu schaffen, ist es möglich, einen Zugang ohne Kennwort einzustellen. Diese Option können Sie jederzeit aktivieren. Um das Kennwort zu entfernen, löschen Sie den Haken im Feld "WLAN-Kenwortschutz" und tippen Sie auf die Taste __Einstellungen ändern__.

Ebenso ist es möglich, das WLAN-Kennwort für die MoodleBox zu verändern. Um dies zu tun, geben Sie ein neues WLAN-Kennwort in das entsprechende Feld ein und tippen Sie auf die Taste __Einstellungen ändern__. Das Kennwort kann zwischen 8 und 63 Zeichen lang sein. Wenn Sie ein ungültiges WLAN-Kennwort eingeben, wird es automatisch auf das standardmäßige Kennwort __moodlebox__ zurückgesetzt.

 [1]: http://moodlebox.home/admin/tool/moodlebox/index.php

