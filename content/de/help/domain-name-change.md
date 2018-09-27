---
title: Änderung des Domainnamens der MoodleBox
authors:
  - Nicolas Martignoni
type: kb
date: 2018-09-27
lastmod: 2018-09-27
description: Der Domainname der MoodleBox kann so geändert werden, dass er besser zu Ihrer eigenen lokalen Situation passt. In diesem Leitfaden wird erklärt, wie Sie den Domänennamen Ihrer MoodleBox ändern können.
slug: domainname-aenderung
weight: 90
categories:
  - Usage

---
{{% notice warning %}}
Die auf dieser Seite beschriebenen Vorgänge können __Ihre MoodleBox unbrauchbar machen__, was ein vollständiges Löschen der SD-Karte und den __Verlust aller Daten__ (Kursinhalte, installierte Plugins, benutzerdefinierte Konfigurationen, etc.) erfordert. Tun Sie dies nur, wenn Sie genau wissen, was Sie tun. In jedem Fall wird __keine Unterstützung__ zu diesem Thema geleistet.

Wir übernehmen keine Verantwortung für direkte oder indirekte Schäden, die durch die Nutzung der MoodleBox, insbesondere nach einem Domain-Namenwechsel, entstehen.
{{% /notice %}}

### Vorgehensweise

Das folgende Beispiel zeigt, wie man den Domänennamen einer MoodleBox ändert, damit ein lokaler Computer sie mit einer neuen URL erreichen kann. Das Beispiel zeigt, wie man der MoodleBox den Domainnamen `mybox.me` gibt.

{{% notice info %}}
Dieser Vorgang hat keinen Einfluss auf den Zugriff auf die MoodleBox von einem Ethernet-Netzwerk oder vom Internet aus: Die MoodleBox __bleibt nur über das von ihr bereitgestellte Wi-Fi-Netzwerk__, von den Geräten, die mit ihr verbunden sind, zugänglich.
{{% /notice %}}

#### Schritt 1: Änderung des Hostnamens (_Hostname_).

In der letzten Zeile der `/etc/hosts`-Datei, ersetzen Sie `moodlebox` durch `mybox`.

In der Datei `/etc/hostname` ersetzen Sie `moodlebox` durch `mybox` (diese Änderung ist nicht notwendig, wird aber dringend empfohlen).

#### Schritt 2: Anpassung der Konfiguration des nginx-Webservers

Ändern Sie die Datei `/etc/nginx/sites-available/default` und ersetzen Sie `moodlebox` durch den vollständigen Domainnamen (_FQDN_) `mybox.me` in der `server_name` Direktive.

#### Schritt 3: Anpassung der DHCP-Serverkonfiguration

Ändern Sie die Datei `/etc/dnsmasq.conf` und ersetzen Sie `home` durch `mybox.me` in den beiden Zeilen, die mit `domain` und `local` beginnen.

#### Schritt 4: Anpassung der Moodle-Konfiguration (Moodle-URL)

Ersetzen Sie in der Datei `/var/wwww/moodle/config.php` in der Zeile, die mit `$CFG->wwwwroot` beginnt, die URL `http://moodlebox.home` durch `http://mybox.me`. Fügen Sie keinen Schrägstrich am Ende der URL hinzu.

#### Step 5: Neustart der MoodleBox durchführen

Um diese Änderungen zu übernehmen, starten Sie Ihre MoodleBox neu.

#### Schritt 6: Ersetzen von Moodle-URLs

Greifen Sie über Ihren Browser mit der neuen Adresse `http://mybox.me/` auf Ihre MoodleBox zu und verwenden Sie das URL-Ersatz-Tool unter `http://mybox.me/admin/tool/replace/index.php`, um URLs in der Moodle-Datenbank zu ersetzen.

### Weitere verfügbare Möglichkeiten

- [Den Namen des Wi-Fi-Netzwerks ändern der MoodleBox][1].
- Die MoodleBox zugänglich machen [über ein Ethernet-Kabelnetz][2].
<!-- - Die Moodlebox zugänglich [vom Internet aus machen][3]. -->

 [1]: {{< relref "wi-fi-configuration.md" >}}
 [2]: {{< relref "access-via-ethernet.md" >}}
