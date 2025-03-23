---
title: Disk-Image manuell herunterladen
authors:
  - Visvanath Ratnaweera
  - Ralf Krause
type: kb
date: 2018-02-02
lastmod: 2025-03-23
description: Das MoodleBox Disk-Image kann von dieser Seite frei heruntergeladen werden.
slug: disk-image-herunterladen
categories_weight: 3
categories:
  - Erste Schritte
aliases:
  - ../dl
---

{{< notice tip >}}
Um das [MoodleBox-Disk-Image auf Ihre microSD-Karte zu kopieren]({{< relref "help/copy-the-disk-image" >}}), empfehlen wir Ihnen, das [Programm Raspberry Pi Imager]({{< relref "help/copy-the-disk-image" >}}) zu verwenden, anstatt das Bild unten herunterzuladen und es manuell zu kopieren.
{{< /notice >}}

<div class="downloads row gx-0">
  <div class="image-icon text-center col-sm-3">
    <a class="piwik_download" href="{{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" id=4 >}}"><img alt="MoodleBox SD card" src="/img/media/moodlebox-sdcard.png" width="150" height="150"></a>
  </div>
  <div class="image-info col-sm-9">
    <div class="image-description">
      MoodleBox Disk-Image für microSD-Karte
    </div>
    <div class="image-details">
      Version: <strong>{{< ghrelease user="moodlebox" repo="moodlebox" data="version" id=4 >}}</strong>
    </div>
    <div class="image-details">
      Moodle Version: <strong>Moodle 4.5.3+ (Build: 20250321)</strong>
    </div>
    <div class="image-details">
      Größe: <strong>{{< ghrelease user="moodlebox" repo="moodlebox" data="file_size" id=4 >}} MB</strong>
    </div>
    <div class="image-details">
      Datum: <strong>{{< ghrelease user="moodlebox" repo="moodlebox" data="file_date" id=4 >}}</strong>
    </div>
    <div class="image-details">
      Update weitere Informationen: <strong><a href="https://github.com/moodlebox/moodlebox/blob/main/CHANGELOG.md" target="_blank">auf Github</a></strong>
    </div>
    <div class="image-details">
      SHA-256: <strong><a href="{{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" id=5 >}}" target="_blank">{{< ghrelease user="moodlebox" repo="moodlebox" data="file_name" id=5 >}}</a></strong>
    </div>
    <div class="image-download-links">
      <a class="btn dl-zip piwik_download" href="{{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" id=4 >}}"><i class="fa fa-download" aria-hidden="true"></i>Disk-Image herunterladen</a>
      <a class="btn" href="{{< relref "/support-moodlebox" >}}"><i class="fa fa-heart" aria-hidden="true"></i>Jetzt spenden</a>
    </div>
  </div>
</div>

Nach dem Herunterladen des Disk-Images kopieren Sie es manuell auf die microSD-Karte, z.B. mit BalenaEtcher oder `dd`, und folgen Sie die Anleitungen für das [Einschalten der MoodleBox][2] zur ersten Verwendung.

Wenn Sie möchten, können Sie die [Entwicklung der MoodleBox unterstützen][3], indem Sie eine [freiwillige Spende machen][3].

### Probleme beim Herunterladen

Wenn beim Herunterladen des Disk-Images nicht erklärbare Probleme auftreten, verwenden Sie die Eingabezeile im Terminal, z.B. mit diesem Befehl

```bash
wget -c {{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" id=4 >}}
```

oder mit diesem

```bash
curl -C - {{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" id=4 >}}
```

### Ältere Versionen des Disk-Images

Die Disk-Images älterer Versionen von MoodleBox [sind auf Github verfügbar][releases].

 [copyimage]: {{< relref "help/copy-the-disk-image" >}}
 [2]: {{< relref "help/startup-shutdown-restart" >}}
 [3]: {{< relref "/support-moodlebox" >}}
 [4]: {{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" id=4 >}}
 [5]: {{< relref "help/install-the-moodlebox" >}}
 [rpios]: https://www.raspberrypi.org/downloads/raspberry-pi-os/
 [releases]: https://github.com/moodlebox/moodlebox/releases
