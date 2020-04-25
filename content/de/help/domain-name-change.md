---
title: Änderung des Domainnamens der MoodleBox
authors:
  - Nicolas Martignoni
type: kb
date: 2018-09-27
lastmod: 2020-01-06
description: In diesem Leitfaden wird erklärt, wie Sie den Domänennamen Ihrer MoodleBox ändern können, dass er besser zu Ihrer eigenen lokalen Situation passt.
slug: domainname-aenderung
categories_weight: 90
categories:
  - Nutzung

---
{{< notice warning >}}
Die auf dieser Seite beschriebenen Vorgänge können __Ihre MoodleBox unbrauchbar machen__, was ein vollständiges Löschen der SD-Karte und den __Verlust aller Daten__ (Kursinhalte, installierte Plugins, benutzerdefinierte Konfigurationen, etc.) erfordert. Tun Sie dies nur, wenn Sie genau wissen, was Sie tun. In jedem Fall wird __keine Unterstützung__ zu diesem Thema geleistet.

Wir übernehmen keine Verantwortung für direkte oder indirekte Schäden, die durch die Nutzung der MoodleBox, insbesondere nach einem Domain-Namenwechsel, entstehen.
{{< /notice >}}

### Vorgehensweise

Das folgende Beispiel zeigt, wie man den Domänennamen einer MoodleBox ändert, damit ein lokales Gerät sie mit einer neuen URL erreichen kann. Das Beispiel zeigt, wie man der MoodleBox den Domainnamen __learn.example.com__ gibt.

{{< notice info >}}
Dieser Vorgang hat keinen Einfluss auf den Zugriff auf die MoodleBox von einem Ethernet-Netzwerk oder vom Internet aus: Die MoodleBox __bleibt nur über das von ihr bereitgestellte WLAN-Netzwerk__, von den Geräten, die mit ihr verbunden sind, zugänglich.
{{< /notice >}}

#### Schritt 1: Änderung des Hostnamens (_Hostname_).

In der letzten Zeile der `/etc/hosts`-Datei, ersetzen Sie `moodlebox` durch `learn.example.com`.

In der Datei `/etc/hostname` ersetzen Sie `moodlebox` durch `learn.example.com` (diese Änderung ist nicht notwendig, wird aber dringend empfohlen).

#### Schritt 2: Anpassung der Konfiguration des nginx-Webservers

Ändern Sie die Datei `/etc/nginx/sites-available/default` und ersetzen Sie `moodlebox` durch den vollständigen Domainnamen (_FQDN_) __learn.example.com__ in der `server_name` Direktive.

#### Schritt 3: Anpassung der DHCP-Serverkonfiguration

Ändern Sie die Datei `/etc/dnsmasq.conf` und ersetzen Sie `home` durch __learn.example.com__ in den beiden Zeilen, die mit `domain` und `local` beginnen. Auskommentieren oder löschen Sie ganz die Zeile, die mit `address` beginnt.

#### Schritt 4: Anpassung der Moodle-Konfiguration (Moodle-URL)

Ersetzen Sie in der Datei `/var/wwww/moodle/config.php` in der Zeile, die mit `$CFG->wwwwroot` beginnt, die URL `http://moodlebox.home` durch `http://learn.example.com`. Fügen Sie keinen Schrägstrich am Ende der URL hinzu.

#### Step 5: Neustart der MoodleBox durchführen

Um diese Änderungen zu übernehmen, starten Sie Ihre MoodleBox neu.

#### Schritt 6: Ersetzen von Moodle-URLs

Greifen Sie über Ihren Browser mit der neuen Adresse `http://learn.example.com/` auf Ihre MoodleBox zu und verwenden Sie das URL-Ersatz-Tool unter `http://learn.example.com/admin/tool/replace/index.php`, um URLs in der Moodle-Datenbank zu ersetzen.

#### Step 7: SSL-Zertifikate ersetzen (optional)

Wenn Sie [HTTPS][3] verwenden möchten, müssen Sie sich Ihre eigenen SSL-Zertifikate besorgen, da die von der MoodleBox bereitgestellten Zertifikate nicht mit Ihrem eigenen Domainnamen __learn.example.com__ funktionieren. Vergessen Sie nicht, auch die URL zu ändern.

### Ähnliche Möglichkeiten

- [Den Namen des WLAN-Netzwerks ändern der MoodleBox][1].
- Die MoodleBox zugänglich machen [über ein Ethernet-Kabelnetz][2].

 [1]: {{< relref "help/wi-fi-configuration" >}}
 [2]: {{< relref "help/access-via-ethernet" >}}
 [3]: {{< relref "help/https-connection" >}}
