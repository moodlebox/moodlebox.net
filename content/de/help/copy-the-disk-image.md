---
title: Disk-Image auf eine MicroSD-Karte kopieren
authors:
  - Nicolas Martignoni
  - Ralf Krause
type: kb
date: 2017-04-20
lastmod: 2018-12-15
description: Um das MoodleBox Disk-Image auf eine SD-Karte zu kopieren, folgen Sie diese Anweisungen.
slug: disk-image-kopieren
weight: 4
categories:
  - Erste Schritte

---
Haben Sie das [Disk-Image][1] heruntergeladen?

Installieren Sie zuerst [balenaEtcher][2] (früher bekannt als _Etcher_) auf Ihrem Computer. Befolgen Sie dann die Anleitung für balenaEtcher, um das Disk-Image __{{< ghrelease user="moodlebox" repo="moodlebox" data="file_name" >}}__ auf Ihre MicroSD-Karte zu flashen.

{{< figure src="/img/media/etcher-copy.png" caption="Kopieren mit balenaEtcher" caption-position="bottom" caption-effect="appear" width="800px" >}}

### Für Experten

Falls Sie es als Experte bevorzugen, zum Flashen der MicroSD-Karte einige Befehlszeilen ins Terminal einzugeben, geht dies auch. Extrahieren Sie die heruntergeladene Datei __{{< ghrelease user="moodlebox" repo="moodlebox" data="file_name" >}}__ und folgen Sie dann den [Anweisungen][3], um das Disk-Image __moodlebox-{{< ghrelease user="moodlebox" repo="moodlebox" data="version" >}}.img__ auf Ihre MicroSD-Karte zu kopieren.

  * [Anleitung für macOS][4]
  * [Anleitung für Windows][5]
  * [Anleitung für Linux][6]


 [1]: {{< relref "help/download-the-disk-image" >}}
 [2]: https://www.balena.io/etcher/
 [3]: https://www.raspberrypi.org/documentation/installation/installing-images/README.md
 [4]: https://www.raspberrypi.org/documentation/installation/installing-images/mac.md
 [5]: https://www.raspberrypi.org/documentation/installation/installing-images/windows.md
 [6]: https://www.raspberrypi.org/documentation/installation/installing-images/linux.md

