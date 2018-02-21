---
title: Zugang über Ethernet
author: Nicolas Martignoni, Ralf Krause
type: kb
date: 2017-12-23
slug: zugang-ueber-ethernet
weight: 95
categories:
  - Usage

---
Normalerweise ist es nicht vorgesehen, mit kabelgebundenen Nutzergeräten im Ethernet-Netzwerk auf die MoodleBox zuzugreifen. Trotzdem ist dies aber möglich, wenn man ein paar zusätzliche Einstellungen vornimmt.

Die Moodle-Plattform funktioniert nur dann korrekt, wenn sie über ihren Domänenname __moodlebox.home__ aufgerufen wird. Standardmäßig ist dieser Domänenname aber im Ethernet-Netzwerk nicht bekannt, und hier liegt die Schwierigkeit!

{{% notice warning %}}
Aufgrund der Vielfalt der installierten Hardware kann keine Unterstützung für die Konfiguration Ihres Routers oder Geräts geleistet werden. Nehmen Sie solche Änderungen nur dann vor, wenn Sie wirklich wissen, was Sie tun.{{% /notice %}}

### DNS-Server im Kabel-Netzwerk konfigurieren

In Ihrem Ethernet-Netzwerk muss der Domänenname __moodlebox.home__ für die MoodleBox zugewiesen werden. Dies erfordert einen DNS-Server in Ihrem Ethernet-Netzwerk (z.B. auf Ihrem Internetrouter). Im DNS-Server wird die Zuordnung zwischen dem Domänennamen und der numerischen IP-Adresse der MoodleBox vorgenommen. Die numerische IP-Adresse selber wird vom DHCP-Server des Routers verteilt (normalerweise sowas wie 192.168.1.143).

Sobald diese Änderung vorgenommen wurde, können alle Nutzergeräte im Kabelnetzwerk auf die MoodleBox zugreifen (ohne selber deren numerische IP-Adresse zu kennen). Sie verwenden die Adresse http://moodlebox.home/, und die Moodle-Plattform auf der MoodleBox wird korrekt antworten. Alle Geräte, die sich über WLAN verbinden, können dies weiterhin tun.

Wenn Sie nur über SSH auf die MoodleBox über Ethernet zugreifen müssen, können Sie dies mit der numerischen IP-Adresse tun, ohne dass Änderungen erforderlich sind.

### Konfigurationsdatei hosts Ihres Nutzergeräts erweitern

Eine andere Möglichkeit, eine Zuordnung zwischen dem Domänennamen und der numerischen IP-Adresse der MoodleBox vorzunehmen, ist die Konfigurationsdatei hosts, die es irgendwo im Betriebssystem Ihres Nutzergeräts gibt. Den oberen Teil der Datei dürfen Sie nicht ändern, aber Sie können unten ein paar Zeilen hinzufügen.

```bash
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1        localhost
255.255.255.255  broadcasthost
::1              localhost
##
# MoodleBox connection via Ethernet
# MoodleBox must get a static ip address from dhcp
192.168.1.143    moodlebox.home    moodlebox
##
```
