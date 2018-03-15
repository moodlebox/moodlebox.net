---
title: Disk-Image auf eine MicroSD-Karte kopieren
author: Nicolas Martignoni, Ralf Krause
type: kb
date: 2017-04-20
slug: disk-image-kopieren
weight: 4
categories:
  - First steps

---
Haben Sie das [Disk-Image][1] heruntergeladen?

Installieren Sie zuerst [Etcher][2] auf Ihrem Computer. Befolgen Sie dann die Anleitung für Etcher, um das Disk-Image __{{< ghrelease user="moodlebox" repo="moodlebox" data="file_name" >}}__ auf Ihre MicroSD-Karte zu flashen.

{{< figure link="/img/media/etcher-copy.png" caption="Kopieren mit Etcher" caption-position="bottom" caption-effect="appear" width="800px" >}}

### Für Experten

Falls Sie es als Experte bevorzugen, zum Flashen der MicroSD-Karte einige Befehlszeilen ins Terminal einzugeben, geht dies auch. Extrahieren Sie die heruntergeladene Datei __{{< ghrelease user="moodlebox" repo="moodlebox" data="file_name" >}}__ und folgen Sie dann den [Anweisungen][3], um das Disk-Image __moodlebox-{{< ghrelease user="moodlebox" repo="moodlebox" data="version" >}}.img__ auf Ihre MicroSD-Karte zu kopieren.

  * [Anleitung für macOS][4]
  * [Anleitung für Windows][5]
  * [Anleitung für Linux][6]


 [1]: {{< relref "download-the-disk-image.de.md" >}}
 [2]: https://etcher.io/
 [3]: https://www.raspberrypi.org/documentation/installation/installing-images/README.md
 [4]: https://www.raspberrypi.org/documentation/installation/installing-images/mac.md
 [5]: https://www.raspberrypi.org/documentation/installation/installing-images/windows.md
 [6]: https://www.raspberrypi.org/documentation/installation/installing-images/linux.md

