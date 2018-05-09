---
title: MoodleBox einschalten, ausschalten und neustarten
authors:
  - Nicolas Martignoni
  - Ralf Krause
type: kb
date: 2017-04-20
description: Wenn Sie wissen wollen, wie Sie Ihre MoodleBox richtig starten, stoppen oder neu starten können, finden Sie hier die gewünschten Informationen
slug: einschalten-ausschalten-neustarten
weight: 1
categories:
  - Maintenance
  - Usage

---
#### Einschalten

Setzen Sie die kopierte MicroSD-Karte in den Steckplatz im Raspberry Pi 3 ein. Verbinden Sie die MoodleBox über ein Ethernet-Kabel mit dem Netzwerk oder dem Internetrouter. Schalten Sie die Stromversorgung ein. Die rote LED leuchtet und nach einigen Sekunden beginnt die grüne LED zu blinken.

Es sind keine weiteren Einstellungen notwendig. Sofort nach dem Start ist die MoodleBox fertig und voll funktionsfähig.

Falls es möglich ist, sollten Sie die MoodleBox bei jedem Start über Ethernet mit dem Netzwerk zu verbinden. Nur dann können die Wartungsaufgaben erfolgreich durchgeführt werden, die eine Internetverbindung erfordern (z.B. die Synchronisation der internen Systemuhr).

#### Ausschalten

{{% notice warning %}}
Um das Risiko von Datenbeschädigungen auf der MicroSD-Karte zu minimieren, fahren Sie zuerst die MoodleBox manuell herunter, bevor Sie die Stromversorgung ausschalten.
{{% /notice %}}

Über die grafische Benutzeroberfläche können Sie die MoodleBox neu starten und sicher ausschalten.

Melden Sie sich mit einem Administratorkonto in der Moodle-Plattform der MoodleBox an und rufen Sie die Einstellungsseite [Website-Administration > Server > MoodleBox] [1] auf.

{{< figure link="/img/media/restart-shutdown-en.png" caption="Neustarten und ausschalten" caption-position="bottom" caption-effect="appear" width="722px" >}}

Im Abschnitt __Neustarten und ausschalten__ zeigt die Benutzeroberfläche zwei Schaltflächen, mit denen Sie die MoodleBox neustarten oder ausschalten können. Tippen Sie auf die Schaltfläche __MoodleBox ausschalten__, warten Sie einige Sekunden und kontrollieren Sie, dass die grüne LED nicht mehr leuchtet. Jetzt können Sie das Netzteil entfernen.

### Neustarten

Melden Sie sich mit einem Administratorkonto in der Moodle-Plattform der MoodleBox an und rufen Sie die Einstellungsseite [Website-Administration > Server > MoodleBox] [1] auf.

Tippen Sie auf die Schaltfläche __MoodleBox neustarten__. Warten Sie einige Sekunden, bis die MoodleBox wieder verfügbar ist.

### Hardware zum Ein- und Ausschalten erweitern

Wenn Sie möchten, können Sie eine Hardwaretaste installieren, um die MoodleBox ein- und auszuschalten. Das [MoodleBox Disk-Image][2] erlaubt die Verwendung einer solchen Taste ohne Konfigurationsänderungen.

Die Installation einer Hardwaretaste ist sehr einfach. Sie müssen lediglich eine Taste kaufen, z.B. eine [kapazitive Taste][3], und sie mit [Jumperkabeln][4] an die richtigen Pins des GPIO-Ports (Pins 5 und 6) der MoodleBox anschließen (siehe Bild unten, dank an Laurent Fleron). Danach starten Sie die MoodleBox neu.

{{< figure link="/img/media/hardware-button.jpg" thumb="-small" caption="Hardwaretaste" caption-position="bottom" caption-effect="appear" width="400px" >}}

 [1]: http://moodlebox.home/admin/tool/moodlebox/index.php
 [2]: {{< relref "download-the-disk-image.md" >}}
 [3]: https://www.aliexpress.com/item/5pcs-TTP223-TTP223B-Jog-digital-touch-sensor-capacitive-touch-touch-switch-modules-Accessories/32694092023.html
 [4]: https://www.aliexpress.com/item/40pcs-lot-10cm-2-54mm-1pin-feMale-to-feMale-jumper-wire-Dupont-cable/32800215149.html
