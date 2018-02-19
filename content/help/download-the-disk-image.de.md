---
title: Disk-Image herunterladen
author: Visvanath Ratnaweera, Ralf Krause
type: kb
date: 2018-02-02
slug: disk-image-herunterladen
weight: 3
categories:
  - First steps
aliases:
  - de/dl

---
### MoodleBox Disk-Image

<ul class="downloads">
  <li>
  <div class="image-icon">
    <a class="piwik_download" href="{{< ghrelease user="martignoni" repo="moodlebox" data="download_link" >}}"><img alt="MoodleBox SD card" src="/img/media/moodlebox-sdcard.png" width="150" height="150"></a>
  </div>
  <div class="image-info">
    <div class="image-description">
      MoodleBox Disk-Image für microSD-Karte
    </div>
    <div class="image-details">
      Version: <strong>{{< ghrelease user="martignoni" repo="moodlebox" data="version" >}}</strong>
    </div>
    <div class="image-details">
      Moodle Version: <strong>3.4+ (Build: 20171123)</strong>
    </div>
    <div class="image-details">
      Größe: <strong>{{< ghrelease user="martignoni" repo="moodlebox" data="file_size" >}} MB</strong>
    </div>
    <div class="image-details">
      Datum: <strong>{{< ghrelease user="martignoni" repo="moodlebox" data="file_date" >}}</strong>
    </div>
    <div class="image-details">
      Update weitere Informationen: <strong><a href="https://github.com/martignoni/moodlebox/blob/master/CHANGELOG.md" target="_blank">on Github</a></strong>
    </div>
    <div class="image-download-links">
      <a class="btn dl-zip piwik_download" href="{{< ghrelease user="martignoni" repo="moodlebox" data="download_link" >}}"><i class="fa fa-download"></i>Disk-Image herunterladen</a>
    </div>
 </div>
 </li>
</ul>

Folgen Sie nach dem Herunterladen des Disk-Images den Anweisungen für [Kopieren auf die microSD-Karte][1] und [Stelle deine MoodleBox][2] zur ersten Verwendung ein.

Wenn Sie möchten, können Sie die [Entwicklung der MoodleBox unterstützen][3], indem Sie eine freiwillige Spende machen.

Das MoodleBox Disk-Image  wird auf der Basis der Distribution [Raspbian Lite für Raspberry Pi][6] gebaut.


### In case of trouble

If you experience any trouble when downloading the disk image, use your command line interface, for example with this command

```bash
wget -c {{< ghrelease user="martignoni" repo="moodlebox" data="download_link" >}}
```

or this one

```bash
curl -C - {{< ghrelease user="martignoni" repo="moodlebox" data="download_link" >}}
```

 [1]: {{< relref "help/copy-the-disk-image.de.md" >}}
 [2]: {{< relref "help/startup-shutdown-restart.de.md" >}}
 [3]: {{< relref "help/support-the-moodlebox-project.de.md" >}}
 [4]: {{< ghrelease user="martignoni" repo="moodlebox" data="download_link" >}}
 [5]: {{< relref "help/install-the-moodlebox.de.md" >}}
 [6]: https://www.raspberrypi.org/downloads/raspbian/
