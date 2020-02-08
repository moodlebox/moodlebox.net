---
title: Comment connecter la MoodleBox à Internet
authors:
  - Nicolas Martignoni
type: kb
date: 2017-04-18
lastmod: 2020-02-08
description: Ce guide explique comment fournir une connexion Internet aux utilisateurs connectés par Wi-Fi à une MoodleBox.
slug: connexion-a-internet
weight: 9
categories:
  - Utilisation

---
Il est très facile de fournir une connexion Internet aux utilisateurs connectés par Wi-Fi à une MoodleBox.

Il suffit de brancher la MoodleBox à un réseau ayant lui-même accès à Internet au moyen d'un câble Ethernet. Dès que la connexion est établie, les appareils connectés par Wi-Fi à la MoodleBox ont eux-mêmes accès à Internet.

Si au contraire on veut utiliser la MoodleBox __sans connexion à Internet__, par exemple pour des activités telle qu'un _escape game_ ou des évaluations pour lesquelles l'accès à Internent des étudiants n'est pas désiré, il suffit de déconnecter le câble Ethernet de la MoodleBox. Sans connexion d'un câble Ethernet, les appareils connectés via Wi-Fi ne peuvent accéder qu'aux ressources disponibles sur la MoodleBox.

{{< notice note >}}
À partir de la version 3.5.2 de l'image MoodleBox, l'information indiquant si un câble Ethernet est branché est affichée sur le [tableau de bord de la MoodleBox]({{< relref "info-moodlebox" >}}).

Le nom de l'interface, usuellement `eth0`, ainsi que l'adresse IP de la MoodleBox, obtenue via DHCP, et l'adresse de la passerelle par défaut y sont également affichés.
{{< /notice >}}

{{< figure src="ethernet-connexion.png" caption="Câble ethernet connecté" class="centered-image" width="610px" >}}

Pour en savoir plus à ce sujet, jetez un œil à la [topologie du réseau de la MoodleBox][1].

 [1]: {{< relref "network-topology" >}}
 [2]: {{< relref "info-moodlebox" >}}
