---
title: MoodleBox Dashboard
authors:
  - Nicolas Martignoni
  - Ralf Krause
type: kb
date: 2018-02-13
lastmod: 2020-02-26
description: MoodleBox wird mit einem Dashboard ausgestattet, um verschiedene Informationen über die installierte Hard- und Software anzuzeigen.
slug: moodlebox-dashboard
weight: 10
aliases:
  - moodlebox-version-anzeigen
categories:
  - First steps
  - Maintenance

---
Das MoodleBox Dashboard finden Sie in der Administrationsoberfläche unter [Website-Administration > Server > MoodleBox][1]. Es ist nur für Plattformadministratoren zugänglich.

Das Dashboard bietet Zugang zu wichtigen Informationen über die Funktionen der MoodleBox.

{{< figure src="info-moodlebox.png" width="800" caption="MoodleBox Informationen" class="centered-image" >}}

Das Dashboard ermöglicht es Ihnen auch, die folgenden Aktionen durchzuführen.

- Ändern Sie das Datum und die Uhrzeit der MoodleBox, wenn sie nicht mit dem Internet verbunden ist.
- Das [Hauptpasswort der MoodleBox ändern][3].
- Die [Konfiguration des Wi-Fi-Netzwerks ändern][4], die von der MoodleBox zur Verfügung wird.
- [Neustart oder Herunterfahren][5] der MoodleBox

{{< notice note >}}
Wenn die Stromversorgung der MoodleBox nicht ausreichend ist, wird __oben auf jeder Seite eine Warnung__ angezeigt. Diese Warnung ist nur für den Administrator sichtbar. Andere MoodleBox-Benutzer sehen es nicht.
{{< figure src="undervoltage.png" width="700" title="Nicht ausreichende Stromversorgung Warnung" class="centered-image" >}}
{{< /notice >}}

 [1]: http://moodlebox.home/admin/tool/moodlebox/index.php
 [3]: {{< relref "help/change-password" >}}
 [4]: {{< relref "help/wi-fi-configuration" >}}
 [5]: {{< relref "help/startup-shutdown-restart" >}}
