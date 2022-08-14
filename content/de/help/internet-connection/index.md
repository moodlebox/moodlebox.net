---
title: MoodleBox mit dem Internet verbinden
authors:
  - Nicolas Martignoni
  - Ralf Krause
type: kb
date: 2017-04-20
lastmod: 2022-08-14
description: Internetverbindung für Nutzer zur Verfügung stellen, die über WLAN mit einer MoodleBox verbunden sind.
slug: internet-verbindung
categories_weight: 9
categories:
  - Nutzung

---
Es ist sehr einfach, eine Internetverbindung für Nutzer zur Verfügung zu stellen, die über WLAN mit der MoodleBox verbunden sind.

Schließen Sie die MoodleBox mit einem Ethernet-Kabel an Ihren Router oder an ein Netzwerk mit Internetzugang an. Sobald die Verbindung verfügbar ist, haben alle über das WLAN __MoodleBox__ verbundenen Geräte selber Zugang zum Internet.

Wenn Sie die MoodleBox jedoch __ohne Internetverbindung__ verwenden möchten, z.B. für Aktivitäten wie ein Escape Game oder Assessments, bei denen ein Internetzugang der Nutzer nicht erwünscht ist, trennen Sie einfach das Ethernet-Kabel von der MoodleBox. Ohne eine Ethernet-Kabelverbindung können über WLAN angeschlossene Geräte nur auf die auf der MoodleBox verfügbaren Ressourcen zugreifen.

{{< notice tip >}}
Ab Version 3.5.2 des MoodleBox-Images werden Informationen darüber, ob ein Ethernet-Kabel angeschlossen ist, auf dem [MoodleBox-Dashboard]({{< relref "help/info-moodlebox" >}}) angezeigt.

Der Name der Schnittstelle, normalerweise `eth0`, die IP-Adresse der MoodleBox, die über DHCP zugewiesen wurde, und die IP-Adresse des Standard-Gateways werden angezeigt.
{{< /notice >}}

{{< figure src="ethernet-connexion.png" title="Ethernet-Kabel angeschlossen" class="centered-image" width="710" >}}

Weitere Informationen hierzu finden Sie in der [MoodleBox Netzwerktopologie][1].

 [1]: {{< relref "help/network-topology" >}}
 [2]: {{< relref "help/info-moodlebox" >}}
