---
title: MoodleBox mit dem Internet verbinden
authors:
  - Nicolas Martignoni
  - Ralf Krause
type: kb
date: 2017-04-20
lastmod: 2020-02-08
description: Diese Anleitung erklärt, wie man Nutzern, die über WLAN mit einer MoodleBox verbunden sind, eine Internetverbindung zur Verfügung stellt.
slug: internet-verbindung
categories_weight: 9
categories:
  - Nutzung

---
Es ist sehr einfach, Nutzern, die drahtlos mit einer MoodleBox verbunden sind, eine Internetverbindung zur Verfügung zu stellen.

Schließen Sie die MoodleBox einfach mit einem Ethernet-Kabel an ein Netzwerk mit Internetzugang an. Sobald die Verbindung verfügbar ist, haben die über das WLAN __MoodleBox__ verbundenen Geräte selbst Zugang zum Internet.

Wenn Sie die MoodleBox jedoch __ohne Internetverbindung__ verwenden möchten, z.B. für Aktivitäten wie ein Escape Game oder Assessments, bei denen ein Internetzugang der Studierenden nicht erwünscht ist, trennen Sie einfach das Ethernet-Kabel von der MoodleBox. Ohne eine Ethernet-Kabelverbindung können über WLAN angeschlossene Geräte nur auf die auf der MoodleBox verfügbaren Ressourcen zugreifen.

{{< notice note >}}
Ab Version 3.5.2 des MoodleBox-Images werden Informationen darüber, ob ein Ethernet-Kabel angeschlossen ist, auf dem [MoodleBox-Dashboard]({{{< relref "help/info-moodlebox" >}}) angezeigt.

Der Name der Interface, normalerweise `eth0`, sowie die IP-Adresse der MoodleBox, die über DHCP ermittelt wurde, und die Adresse des Default-Gateways werden ebenfalls angezeigt.
{{< /notice >}}

{{< figure src="ethernet-connexion.png" caption="Ethernet-Kabel angeschlossen" class="centered-image" width="700px" >}}

Weitere Informationen hierzu finden Sie in der [MoodleBox Netzwerktopologie][1].

 [1]: {{< relref "help/network-topology" >}}
 [2]: {{< relref "help/info-moodlebox" >}}
