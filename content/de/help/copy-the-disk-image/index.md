---
title: Disk-Image auf eine microSD-Karte kopieren
authors:
  - Nicolas Martignoni
  - Ralf Krause
type: kb
date: 2017-04-20
lastmod: 2022-12-27
description: Um das MoodleBox Disk-Image auf eine SD-Karte zu kopieren, folgen Sie diese Anweisungen.
slug: disk-image-kopieren
categories_weight: 4
categories:
  - Erste Schritte

---
Haben Sie das [Disk-Image][1] heruntergeladen?

Installieren Sie zuerst [balenaEtcher][2] (früher bekannt als _Etcher_) auf Ihrem Computer. Befolgen Sie dann die Anleitung für balenaEtcher, um das Disk-Image __{{< ghrelease user="moodlebox" repo="moodlebox" data="file_name" id=3 >}}__ auf Ihre microSD-Karte zu flashen.

{{< figure src="/img/media/etcher-copy.png" title="Kopieren mit balenaEtcher" class="centered-image" width="700" >}}

<!--
### Für Experten

Falls Sie es als Experte bevorzugen, zum Flashen der microSD-Karte einige Befehlszeilen ins Terminal einzugeben, geht dies auch. Extrahieren Sie die heruntergeladene Datei __{{< ghrelease user="moodlebox" repo="moodlebox" data="file_name" id=3 >}}__ und folgen Sie dann den [Anweisungen][3], um das Disk-Image __moodlebox-{{< ghrelease user="moodlebox" repo="moodlebox" data="version" >}}.img__ auf Ihre microSD-Karte zu kopieren.

  * [Anleitung für macOS][4]
  * [Anleitung für Windows][5]
  * [Anleitung für Linux][6]

 -->

 [1]: {{< relref "help/download-the-disk-image" >}}
 [2]: https://www.balena.io/etcher/
 [3]: https://www.raspberrypi.org/documentation/installation/installing-images/README.md
 [4]: https://www.raspberrypi.org/documentation/installation/installing-images/mac.md
 [5]: https://www.raspberrypi.org/documentation/installation/installing-images/windows.md
 [6]: https://www.raspberrypi.org/documentation/installation/installing-images/linux.md

