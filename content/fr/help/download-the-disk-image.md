---
title: Télécharger l'image-disque manuellement
authors:
  - Nicolas Martignoni
type: kb
date: 2017-04-17
lastmod: 2022-12-30
description: L'image-disque de la MoodleBox peut être téléchargée gratuitement et librement sur sur cette page.
slug: telecharger-limage-disque
categories_weight: 3
categories:
  - Premiers pas
aliases:
  - ../dl
---

{{< notice tip >}}
Pour [copier l'image disque MoodleBox]({{< relref "help/copy-the-disk-image" >}}) sur votre carte microSD, il est recommandé d'employer l'[utilitaire Raspberry Pi Imager]({{< relref "help/copy-the-disk-image" >}}), plutôt que de télécharger l'image ci-dessous et de la copier manuellement.
{{< /notice >}}

<div class="downloads row gx-0">
  <div class="image-icon text-center col-sm-3">
    <a class="piwik_download" href="{{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" id=2 >}}"><img alt="Carte microSD MoodleBox" src="/img/media/moodlebox-sdcard.png" width="150" height="150"></a>
  </div>
  <div class="image-info col-sm-9">
    <div class="image-description">
      Image disque MoodleBox pour carte microSD
    </div>
    <div class="image-details">
      Version : <strong>{{< ghrelease user="moodlebox" repo="moodlebox" data="version" id=2 >}}</strong>
    </div>
    <div class="image-details">
      Version de Moodle : <strong>Moodle 4.1+ (Build: 20221229)</strong>
    </div>
    <div class="image-details">
      Taille : <strong>{{< ghrelease user="moodlebox" repo="moodlebox" data="file_size" id=2 >}} Mo</strong>
    </div>
    <div class="image-details">
      Date : <strong>{{< ghrelease user="moodlebox" repo="moodlebox" data="file_date" id=2 >}}</strong>
    </div>
    <div class="image-details">
      Notes de mise à jour : <strong><a href="https://github.com/moodlebox/moodlebox/blob/main/CHANGELOG.md" target="_blank">sur Github</a></strong>
    </div>
    <div class="image-details">
      SHA-256 : <strong><a href="{{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" id=3 >}}" target="_blank">{{< ghrelease user="moodlebox" repo="moodlebox" data="file_name" id=3 >}}</a></strong>
    </div>
    <div class="image-download-links">
      <a class="btn dl-zip piwik_download" href="{{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" id=2 >}}"><i class="fa fa-download" aria-hidden="true"></i>Télécharger l'image</a>
      <a class="btn" href="{{< relref "/support-moodlebox" >}}"><i class="fa fa-heart" aria-hidden="true"></i>Faire un don</a>
    </div>
  </div>
</div>

Après avoir téléchargé l'image-disque, copiez-là manuellement sur la carte microSD, par exemple avec BalenaEtcher ou `dd` et [démarrez votre MoodleBox][2]. Consultez les [instructions d'installation][5] pour plus d'informations.

Si vous le souhaitez, vous pouvez [soutenir le développement][3] de la MoodleBox en [faisant un don][3].

### En cas de difficulté

En cas de difficulté de téléchargement, utilisez la ligne de commande pour télécharger l'image-disque, soit avec la commande

```bash
wget -c {{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" id=2 >}}
```

soit avec celle-ci

```bash
curl -C - {{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" id=2 >}}
```

### Anciennes versions de l'image disque

Les images disques des anciennes versions de MoodleBox [sont disponibles sur Github][releases].

 [copyimage]: {{< relref "help/copy-the-disk-image" >}}
 [2]: {{< relref "help/startup-shutdown-restart" >}}
 [3]: {{< relref "/support-moodlebox" >}}
 [4]: {{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" id=2 >}}
 [5]: {{< relref "help/install-the-moodlebox" >}}
 [rpios]: https://www.raspberrypi.org/downloads/raspberry-pi-os/
 [releases]: https://github.com/moodlebox/moodlebox/releases
