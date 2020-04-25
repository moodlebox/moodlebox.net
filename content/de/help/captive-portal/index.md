---
title: Nutzung des WLAN-Captive-Portals der MoodleBox
authors:
  - Nicolas Martignoni
type: kb
date: 2019-05-20
lastmod: 2019-05-20
description: Die MoodleBox verfügt über ein Captive-Portal für ihr WLAN-Netzwerk, über das drahtlose Clients auf die MoodleBox-Startseite geleitet werden können.
slug: captive-portal
categories_weight: 85
categories:
  - Nutzung

---
{{< notice note >}}
Dieses Feature ist ab der __version 2.7.0__ von MoodleBox verfügbar.
{{< /notice >}}

Die MoodleBox enthält ein vollständig konfiguriertes [Captive Portal][1], basierend auf der Open Source Software [Nodogsplash][2], um Benutzer, die sich mit ihrem drahtlosen Netzwerk verbinden, auf die MoodleBox-Startseite zu leiten.

Das Captive-Portal __ist nicht standardmäßig aktiviert__. Wenn Sie es aktivieren möchten, führen Sie einfach den folgenden Befehl aus, nachdem [Sie sich mit der MoodleBox über SSH verbinden][3].
```bash
sudo systemctl start nodogsplash
```
Um das Captive-Portal zu stoppen, muss der folgende Befehl verwendet werden.
```bash
sudo systemctl stop nodogsplash
```
Wenn die MoodleBox erneut gestartet wird, bleibt der aktive oder inaktive Zustand des Captive-Portals derjenige, der zuletzt ausgewählt wurde.

{{< notice info >}}
Das Captive-Portal funktioniert nur dann, wenn die MoodleBox mit dem Internet verbunden ist. Andernfalls werden Benutzer [die sich mit dem WLAN-Netzwerk verbinden]({{< relref "help/wi-fi-connection" >}}) der MoodleBox nicht vom Captive-Portal abgefangen.
{{< /notice >}}

 [1]: https://de.wikipedia.org/wiki/Captive_Portal
 [2]: https://nodogsplashdocs.readthedocs.io/
 [3]: {{< relref "help/command-line-access" >}}
