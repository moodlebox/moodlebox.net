---
title: Utiliser le portail captif Wi-Fi de la MoodleBox
authors:
  - Nicolas Martignoni
type: kb
date: 2019-04-30
lastmod: 2019-04-30
description: La MoodleBox dispose d'un portail captif pour son réseau WiFi, permettant de diriger les clients sans fils vers la page d'accueil de la MoodleBox.
slug: portail-captif
weight: 85
categories:
  - Utilisation

---
{{< notice note >}}
Cette fonctionnalité est disponible à partir de la __version 2.7.0__ de MoodleBox.
{{< /notice >}}

La MoodleBox contient un [portail captif][1] entièrement configuré, sur la base du logiciel libre [Nodogsplash][2], permettant de diriger les utilisateurs se connectant à son réseau sans fils vers la page d'accueil de la MoodleBox.

Le portail captif __n'est pas activé__ par défaut. Si vous désirez le rendre actif, il suffit de lancer la commande ci-dessous après [s'être connecté à la MoodleBox en ligne de commande][3].
```bash
sudo systemctl start nodogsplash
```
Pour stopper le portail captif, la commande suivante doit être utilisée.
```bash
sudo systemctl stop nodogsplash
```
Lors des démarrages suivants de la MoodleBox, l'état actif ou inactif du portail captif reste celui qui a été choisi en dernier.

{{< notice info >}}
Le portail captif ne fonctionne que __si la MoodleBox est connectée à Internet__. Dans le cas contraire, les utilisateurs [se connectant au réseau Wi-Fi]({{< relref "wi-fi-connection" >}}) de la MoodleBox ne seront pas interceptés par le portail captif.
{{< /notice >}}

 [1]: https://fr.wikipedia.org/wiki/Portail_captif
 [2]: https://nodogsplashdocs.readthedocs.io/
 [3]: {{< relref "command-line-access" >}}
 [4]: {{< relref "wi-fi-connection" >}}
