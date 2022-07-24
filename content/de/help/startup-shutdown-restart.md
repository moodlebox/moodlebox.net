---
title: MoodleBox einschalten, ausschalten und neustarten
authors:
  - Nicolas Martignoni
  - Ralf Krause
type: kb
date: 2017-04-20
lastmod: 2020-04-25
description: Informationen, wie Sie Ihre MoodleBox richtig starten, stoppen oder neu starten
slug: einschalten-ausschalten-neustarten
categories_weight: 1
categories:
  - Wartung
  - Nutzung

---
### Einschalten

Setzen Sie die kopierte microSD-Karte in den Steckplatz im Raspberry Pi ein. Verbinden Sie die MoodleBox über ein Ethernet-Kabel mit dem Netzwerk oder dem Internetrouter. Schalten Sie die Stromversorgung ein. Die rote LED leuchtet und nach einigen Sekunden beginnt die grüne LED zu blinken.

{{< figure src="/img/media/pi-plug-in.gif" title="Einschalten" caption-position="bottom" caption-effect="appear" width="750" >}}

Es sind keine weiteren Einstellungen notwendig. Sofort nach dem Start ist die MoodleBox fertig und voll funktionsfähig.

Wenn es möglich ist, sollten Sie die MoodleBox bei jedem Start über Ethernet mit dem Netzwerk zu verbinden. Nur dann können die Systemaufgaben erfolgreich ablaufen, die eine Internetverbindung erfordern (z.B. die Synchronisation der internen Systemuhr).

### Ausschalten

Über die grafische Benutzeroberfläche können Sie die MoodleBox neu starten und sicher ausschalten.

Melden Sie sich mit einem Administratorkonto in der Moodle-Plattform der MoodleBox an und rufen Sie die Einstellungsseite [Website-Administration > Server > MoodleBox][1] auf.

{{< notice warning >}}
Um das Risiko von Datenverlusten auf der microSD-Karte zu minimieren, fahren Sie bitte zuerst die MoodleBox manuell herunter, bevor Sie die Stromversorgung ausschalten.
{{< /notice >}}

{{< figure src="/img/media/restart-shutdown-de.png" title="Neustarten und ausschalten" caption-position="bottom" caption-effect="appear" width="735" >}}

Im Abschnitt __Neustarten und ausschalten__ zeigt die Benutzeroberfläche zwei Schaltflächen, mit denen Sie die MoodleBox neustarten oder ausschalten können. Tippen Sie auf die Schaltfläche __MoodleBox ausschalten__ und warten Sie dann einige Sekunden, bis die grüne LED nicht mehr leuchtet. Jetzt können Sie das Netzteil entfernen.

### Neustarten

Melden Sie sich mit einem Administratorkonto in der Moodle-Plattform der MoodleBox an und rufen Sie die Einstellungsseite [Website-Administration > Server > MoodleBox][1] auf.

Tippen Sie auf die Schaltfläche __MoodleBox neustarten__ und warten Sie einige Sekunden, bis die MoodleBox wieder verfügbar ist.

### Hardware zum Ein- und Ausschalten erweitern

Wenn Sie möchten, können Sie eine Hardwaretaste installieren, um die MoodleBox ein- und auszuschalten. Das [MoodleBox Disk-Image][2] erlaubt die Verwendung einer solchen Taste ohne Konfigurationsänderungen.

Die Installation einer Hardwaretaste ist sehr einfach. Sie müssen lediglich eine Taste kaufen, z.B. eine [kapazitive Taste][3], und sie mit [Jumperkabeln][4] an die richtigen Pins des GPIO-Ports (Pins 5 und 6) der MoodleBox anschließen (siehe Bild unten, dank an Laurent Fleron). Danach starten Sie die MoodleBox neu.

{{< figure src="/img/media/hardware-button.jpg" thumb="-small" title="Hardwaretaste" caption-position="bottom" caption-effect="appear" width="400" >}}

 [1]: http://moodlebox.home/admin/tool/moodlebox/index.php
 [2]: {{< relref "help/download-the-disk-image" >}}
 [3]: https://www.aliexpress.com/item/5pcs-TTP223-TTP223B-Jog-digital-touch-sensor-capacitive-touch-touch-switch-modules-Accessories/32694092023.html
 [4]: https://www.aliexpress.com/item/40pcs-lot-10cm-2-54mm-1pin-feMale-to-feMale-jumper-wire-Dupont-cable/32800215149.html
