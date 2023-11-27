---
title: Domainnamen der MoodleBox ändern
authors:
  - Nicolas Martignoni
  - Ralf Krause
type: kb
date: 2018-09-27
lastmod: 2023-11-27
description: In dieser Anleitung wird erklärt, wie Sie den Domainnamen Ihrer MoodleBox ändern können, damit er besser zu Ihrer lokalen Situation passt.
slug: domainname-aenderung
categories_weight: 90
categories:
  - Nutzung

---
{{< notice warning >}}
Die auf dieser Seite beschriebenen Vorgänge können __Ihre MoodleBox unbrauchbar machen__, was ein vollständiges Löschen der microSD-Karte und den __Verlust aller Daten__ (Kursinhalte, installierte Plugins, benutzerdefinierte Konfigurationen, usw.) erfordert. Tun Sie dies nur, wenn Sie wirklich genau wissen, was Sie tun. Bei Problemen wird __keine Unterstützung__ zu diesem Thema geleistet.

Wir übernehmen keine Verantwortung für direkte oder indirekte Schäden, die durch die Nutzung der MoodleBox entstehen, insbesondere nach einer Änderung des Domainnamens.
{{< /notice >}}

### Vorgehensweise

Das Beispiel zeigt, wie man der MoodleBox den Domainnamen __learn.example.com__ gibt, damit ein lokales Endgerät die MoodleBox mit dieser neuen URL erreichen kann.

{{< notice info >}}
Dieser Vorgang hat keinen Einfluss auf den Zugriff auf die MoodleBox von einem Ethernet-Netzwerk oder vom Internet aus: Die MoodleBox __bleibt nur über das von ihr selber bereitgestellte WLAN-Netzwerk__ zugänglich.
{{< /notice >}}

#### Schritt 1: Änderung des Hostnamens (_Hostname_).

In der letzten Zeile der `/etc/hosts`-Datei, ersetzen Sie `moodlebox` durch `learn.example.com`.

In der Datei `/etc/hostname` ersetzen Sie `moodlebox` durch `learn.example.com` (diese Änderung ist nicht notwendig, wird aber dringend empfohlen).

#### Schritt 2: Anpassung des Webservers nginx

Ändern Sie die Datei `/etc/nginx/sites-available/default` und ersetzen Sie `moodlebox` durch den vollständigen Domainnamen (_FQDN_) __learn.example.com__ in der Zuweisung `server_name`.

#### Schritt 3: Anpassung der DNS-Server-Masquerading-Konfiguration

Ändern Sie die Datei `/etc/NetworkManager/dnsmasq-shared.d/00-dhcp.conf` und ersetzen Sie `home` durch __learn.example.com__ in den beiden Zeilen, die mit `domain` und `local` beginnen.

Wenn der neue Domänenname öffentlich ist, auskommentieren oder löschen Sie die Zeile, die mit `address` beginnt. Andernfalls, wenn der neue Domänenname lokal bleiben soll und mit `.home` endet, können Sie diese Zeile unverändert lassen.

#### Schritt 4: Anpassung der WLAN-Captive-Portals-Konfiguration (Nodogsplash)

Ersetzen Sie in der Datei `/etc/nodogsplash/nodogsplash.conf` die URL `http://moodlebox.home` durch `http://learn.example.com`.

#### Schritt 5: Anpassung der Moodle-Konfiguration (Moodle-URL)

Ersetzen Sie in der Datei `/var/wwww/moodle/config.php` in der Zeile, die mit `$CFG->wwwwroot` beginnt, die URL `http://moodlebox.home` durch `http://learn.example.com`. Fügen Sie keinen Schrägstrich am Ende der URL hinzu.

#### Schritt 6: Neustart der MoodleBox

Um alle Änderungen zu übernehmen, starten Sie Ihre MoodleBox neu.

#### Schritt 7: Ersetzen von Moodle-URLs

Rufen Sie mit Ihrem Browser die neue URL `http://learn.example.com/` auf und melden Sie sich als Administrator an. Verwenden Sie das Tool __Suchen und Ersetzen in der Datenbank__ `http://learn.example.com/admin/tool/replace/index.php`, um die URLs in der Moodle-Datenbank zu ersetzen.

#### Schritt 8: SSL-Zertifikate ersetzen (optional)

Wenn Sie [HTTPS][3] verwenden möchten, müssen Sie sich Ihre eigenen SSL-Zertifikate besorgen, da die von der MoodleBox bereitgestellten Zertifikate nicht mit dem neuen Domainnamen __learn.example.com__ funktionieren. Vergessen Sie nicht, auch die URL zu ändern.

### Ähnliche Möglichkeiten

- [Den Namen des WLAN-Netzwerks ändern der MoodleBox][1].
- Die MoodleBox zugänglich machen [über ein Ethernet-Netzwerk][2].

 [1]: {{< relref "help/wi-fi-configuration" >}}
 [2]: {{< relref "help/access-via-ethernet" >}}
 [3]: {{< relref "help/https-connection" >}}
