---
title: Télécharger l'image-disque
authors:
  - Nicolas Martignoni
type: kb
date: 2017-04-17
lastmod: 2021-11-09
description: L'image-disque de la MoodleBox peut être téléchargée gratuitement et librement sur sur cette page.
slug: telecharger-limage-disque
categories_weight: 3
categories:
  - Premiers pas
aliases:
  - ../dl

---
### Image disque MoodleBox

<div class="downloads">
  <div class="image-icon">
    <a class="piwik_download" href="{{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" >}}"><img alt="Carte microSD MoodleBox" src="/img/media/moodlebox-sdcard.png" width="150" height="150"></a>
  </div>
  <div class="image-info">
    <div class="image-description">
      Image disque MoodleBox pour carte microSD
    </div>
    <div class="image-details">
      Version : <strong>{{< ghrelease user="moodlebox" repo="moodlebox" data="version" >}}</strong>
    </div>
    <div class="image-details">
      Version de Moodle : <strong>3.11.4 (Build: 20211108)</strong>
    </div>
    <div class="image-details">
      Taille : <strong>{{< ghrelease user="moodlebox" repo="moodlebox" data="file_size" >}} Mo</strong>
    </div>
    <div class="image-details">
      Date : <strong>{{< ghrelease user="moodlebox" repo="moodlebox" data="file_date" >}}</strong>
    </div>
    <div class="image-details">
      Notes de mise à jour : <strong><a href="https://github.com/moodlebox/moodlebox/blob/main/CHANGELOG.md" target="_blank">sur Github</a></strong>
    </div>
    <div class="image-details">
      SHA-256 : <strong><a href="{{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" id=1 >}}" target="_blank">{{< ghrelease user="moodlebox" repo="moodlebox" data="file_name" id=1 >}}</a></strong>
    </div>
    <div class="image-download-links">
      <a class="btn dl-zip piwik_download" href="{{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" >}}"><i class="fa fa-download" aria-hidden="true"></i>Télécharger l'image</a>
      &nbsp;&nbsp;&nbsp;
      <a class="btn" href="{{< relref "/support-moodlebox" >}}"><i class="fa fa-heart" aria-hidden="true"></i>Faire un don</a>
    </div>
  </div>
</div>

Après avoir téléchargé l'image-disque, suivez les [instructions pour la copier sur la carte microSD][1] et [démarrez votre MoodleBox][2]. Consultez les [instructions d'installation][5] pour plus d'informations.

Si vous le souhaitez, vous pouvez [soutenir le développement][3] de la MoodleBox en [faisant un don][3].

L'image-disque MoodleBox est construite sur la base de la distribution [Raspberry Pi OS Lite][rpios].

### En cas de difficulté

En cas de difficulté de téléchargement, utilisez la ligne de commande pour télécharger l'image-disque, soit avec la commande

```bash
wget -c {{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" >}}
```

soit avec celle-ci

```bash
curl -C - {{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" >}}
```

### Anciennes versions de l'image disque

Les images disques des anciennes versions de MoodleBox [sont disponibles sur Github][releases].

 [1]: {{< relref "help/copy-the-disk-image" >}}
 [2]: {{< relref "help/startup-shutdown-restart" >}}
 [3]: {{< relref "/support-moodlebox" >}}
 [4]: {{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" >}}
 [5]: {{< relref "help/install-the-moodlebox" >}}
 [rpios]: https://www.raspberrypi.org/downloads/raspberry-pi-os/
 [releases]: https://github.com/moodlebox/moodlebox/releases
