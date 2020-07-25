---
title: Disk-Image herunterladen
authors:
  - Visvanath Ratnaweera
  - Ralf Krause
type: kb
date: 2018-02-02
lastmod: 2020-07-25
description: Das MoodleBox Disk-Image kann von dieser Seite frei heruntergeladen werden.
slug: disk-image-herunterladen
categories_weight: 3
categories:
  - Erste Schritte
aliases:
  - ../dl

---
### MoodleBox Disk-Image

<div class="downloads">
  <div class="image-icon">
    <a class="piwik_download" href="{{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" >}}"><img alt="MoodleBox SD card" src="/img/media/moodlebox-sdcard.png" width="150" height="150"></a>
  </div>
  <div class="image-info">
    <div class="image-description">
      MoodleBox Disk-Image für microSD-Karte
    </div>
    <div class="image-details">
      Version: <strong>{{< ghrelease user="moodlebox" repo="moodlebox" data="version" >}}</strong>
    </div>
    <div class="image-details">
      Moodle Version: <strong>3.9.1+ (Build: 20200723)</strong>
    </div>
    <div class="image-details">
      Größe: <strong>{{< ghrelease user="moodlebox" repo="moodlebox" data="file_size" >}} MB</strong>
    </div>
    <div class="image-details">
      Datum: <strong>{{< ghrelease user="moodlebox" repo="moodlebox" data="file_date" >}}</strong>
    </div>
    <div class="image-details">
      Update weitere Informationen: <strong><a href="https://github.com/moodlebox/moodlebox/blob/master/CHANGELOG.md" target="_blank">auf Github</a></strong>
    </div>
    <div class="image-details">
      SHA-256: <strong><a href="{{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" id=1 >}}" target="_blank">{{< ghrelease user="moodlebox" repo="moodlebox" data="file_name" id=1 >}}</a></strong>
    </div>
    <div class="image-download-links">
      <a class="btn dl-zip piwik_download" href="{{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" >}}"><i class="fa fa-download" aria-hidden="true"></i>Disk-Image herunterladen</a>
      &nbsp;&nbsp;&nbsp;
      <a class="btn" href="{{< relref "/support-moodlebox" >}}"><i class="fa fa-heart" aria-hidden="true"></i>Jetzt spenden</a>
    </div>
  </div>
</div>


Folgen Sie nach dem Herunterladen des Disk-Images den Anleitungen für das [Kopieren auf die microSD-Karte][1] und [Einschalten der MoodleBox][2] zur ersten Verwendung.

Wenn Sie möchten, können Sie die [Entwicklung der MoodleBox unterstützen][3], indem Sie eine [freiwillige Spende machen][3].

Das MoodleBox Disk-Image wird auf der Basis der Distribution [Raspbian Lite für Raspberry Pi][raspbian] gebaut.

### Probleme beim Herunterladen

Wenn beim Herunterladen des Disk-Images nicht erklärbare Probleme auftreten, verwenden Sie die Eingabezeile im Terminal, z.B. mit diesem Befehl

```bash
wget -c {{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" >}}
```

oder mit diesem

```bash
curl -C - {{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" >}}
```

### Ältere Versionen des Disk-Images

Die Disk-Images älterer Versionen von MoodleBox [sind auf Github verfügbar][releases].

 [1]: {{< relref "help/copy-the-disk-image" >}}
 [2]: {{< relref "help/startup-shutdown-restart" >}}
 [3]: {{< relref "/support-moodlebox" >}}
 [4]: {{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" >}}
 [5]: {{< relref "help/install-the-moodlebox" >}}
 [raspbian]: https://www.raspberrypi.org/downloads/raspbian/
 [releases]: https://github.com/moodlebox/moodlebox/releases
