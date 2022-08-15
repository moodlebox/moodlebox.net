---
title: WLAN-Einstellungen ändern
authors:
  - Nicolas Martignoni
  - Ralf Krause
type: kb
date: 2017-08-12
lastmod: 2022-08-15
description: Es ist möglich, zahlreiche WiFi-Einstellungen des MoodleBox AccessPoint zu ändern.
slug: wlan-einstellungen-aendern
categories_weight: 6
categories:
  - Erste Schritte
  - Wartung

---
Wenn Sie die MoodleBox einschalten, arbeitet die MoodleBox wie ein WLAN-AccessPoint. Als Administrator oder Manager können Sie zahlreiche WLAN-Einstellungen ändern. Um dies zu tun, gehen Sie in den MoodleBox-Dashboard auf [Website-Administration > Server > MoodleBox][1].

{{< figure src="wifi-settings.png" title="WLAN-Eistellungen" width="750" class="centered-image" >}}

### WLAN-Namen (SSID) ändern

Sie können den WLAN-Namen (SSID) der MoodleBox ändern. Geben Sie einen neuen WLAN-Namen in das entsprechende Feld ein und tippen Sie auf die Taste __Einstellungen ändern__. Es ist möglich, SSIDs mit Sonderzeichen wie Emojis, einschließlich Leerzeichen, einzugeben.

{{< notice info >}}
Der WLAN-Name (SSID) für die MoodleBox kann zwischen 1 und 32 Bytes lang sein. Beachten Sie, dass manche Zeichen (z.B. Emoticons) mehr als nur 1 Byte verwenden.
{{< /notice >}}

### WLAN verbergen

Es ist möglich, das WLAN der MoodleBox zu verbergen, indem Sie das Kontrollkästchen __Verborgenes WLAN__ aktivieren.

{{< notice tip >}}
Wenn das WLAN verborgen wird, ist es schwierig zu wissen, ob eine MoodleBox im Umfeld aktiv ist. Aktivieren Sie diese Option nur, wenn Sie sich sicher sind, was Sie tun. Benutzer haben wahrscheinlich mehr Probleme, die MoodleBox zu finden.
{{< /notice >}}

### WLAN-Kanal ändern

Um den WLAN-Kanal der MoodleBox zu ändern, wählen Sie einen Kanal und tippen Sie auf die Taste __Einstellungen ändern__.

### WLAN-Regulierungsland ändern

Um das WLAN-Regulierungsland der MoodleBox zu ändern, Wählen Sie ein Land aus der Dropdown-Liste und tippen Sie auf die Taste __Einstellungen ändern__.

{{< notice info >}}
Autorisierte WLAN-Kanäle hängen vom Regulierungsland ab. Je nach gewähltem Land stehen einige Kanäle nicht zur Verfügung.
{{< /notice >}}

### WLAN-Kennwort entfernen oder ändern

Um einen besonders einfachen Zugang zum WLAN der MoodleBox zu schaffen, ist es möglich, einen Zugang ohne Kennwort einzustellen. Diese Option können Sie jederzeit aktivieren. Um das Kennwort zu entfernen, löschen Sie den Haken im Feld "WLAN-Kenwortschutz" und tippen Sie auf die Taste __Einstellungen ändern__.

Ebenso ist es möglich, das WLAN-Kennwort für die MoodleBox zu verändern. Um dies zu tun, geben Sie ein neues WLAN-Kennwort in das entsprechende Feld ein und tippen Sie auf die Taste __Einstellungen ändern__. Das Kennwort kann zwischen 8 und 63 Zeichen lang sein. Wenn Sie ein ungültiges WLAN-Kennwort eingeben, wird es automatisch auf das standardmäßige Kennwort __moodlebox__ zurückgesetzt.

### Statische IP-Adresse des WLANs ändern

Um Kollisionen mit dem bestehenden LAN zu vermeiden, ist es möglich, die statische IP-Adresse des WLAN-Netzwerks der MoodleBox zu ändern, indem Sie das entsprechende Feld aktualisieren.

Es sind nur [private IP-Adressen][private] erlaubt, und MoodleBox wird immer eine Adresse verwenden, die auf `.1` endet, zum Beispiel `192.168.100.1`, auch wenn die eingegebene Adresse `192.168.100.100` ist.

Die IP-Adressen, die von DHCP an WLAN-Clients zugewiesen werden, liegen im Bereich des angegebenen privaten Netzwerks. Lautet die eingegebene Adresse beispielsweise `172.28.10.1`, werden die zugeteilten Adressen im Bereich `172.28.10.10-172.28.10.254` liegen.

 [1]: http://moodlebox.home/admin/tool/moodlebox/index.php
 [private]: https://de.wikipedia.org/wiki/Private_IP-Adresse
