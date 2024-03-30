---
title: Descargar la imagen de disco manualmente
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
type: kb
date: 2017-04-20
lastmod: 2024-03-30
description: La imagen de disco de MoodleBox puede descargarse gratuitamente desde esta página.
slug: descargar-la-imagen-disco
categories_weight: 3
categories:
  - Primeros pasos
---

{{< notice tip >}}
Para [copiar la imagen de disco de MoodleBox a su tarjeta microSD]({{< relref "help/copy-the-disk-image" >}}), recomendamos [usar la herramienta Raspberry Pi Imager]({{< relref "help/copy-the-disk-image" >}}) en lugar de descargar la imagen de abajo y copiarla manualmente.
{{< /notice >}}

<div class="downloads row gx-0">
  <div class="image-icon text-center col-sm-3">
    <a class="piwik_download" href="{{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" id=4 >}}"><img alt="Tarjeta SD MoodleBox" src="/img/media/moodlebox-sdcard.png" width="150" height="150"></a>
  </div>
  <div class="image-info col-sm-9">
    <div class="image-description">
      Imagen de disco de MoodleBox para tarjeta microSD
    </div>
    <div class="image-details">
      Versión: <strong>{{< ghrelease user="moodlebox" repo="moodlebox" data="version" id=4 >}}</strong>
    </div>
    <div class="image-details">
      Versión de Moodle: <strong>Moodle 4.3.3+ (Build: 20240326)</strong>
    </div>
    <div class="image-details">
      Talla: <strong>{{< ghrelease user="moodlebox" repo="moodlebox" data="file_size" id=4 >}} MB</strong>
    </div>
    <div class="image-details">
      Fecha: <strong>{{< ghrelease user="moodlebox" repo="moodlebox" data="file_date" id=4 >}}</strong>
    </div>
    <div class="image-details">
      Notas de publicación: <strong><a href="https://github.com/moodlebox/moodlebox/blob/main/CHANGELOG.md" target="_blank">en Github</a></strong>
    </div>
    <div class="image-details">
      SHA-256: <strong><a href="{{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" id=5 >}}" target="_blank">{{< ghrelease user="moodlebox" repo="moodlebox" data="file_name" id=5 >}}</a></strong>
    </div>
    <div class="image-download-links">
      <a class="btn dl-zip piwik_download" href="{{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" id=4 >}}"><i class="fa fa-download" aria-hidden="true"></i>Descargar imagen</a>
      <a class="btn" href="{{< relref "/support-moodlebox" >}}"><i class="fa fa-heart" aria-hidden="true"></i>Donar</a>
    </div>
  </div>
</div>

Después de haber descargado la imagen de disco, cópiala manualmente en la tarjeta microSD, por ejemplo con BalenaEtcher o `dd`, y sigue las instrucciones para [configurar tu MoodleBox][2] para el primer uso. Lee las [instrucciones de instalación][5] para más información.

Si lo desea, puede [apoyar el desarrollo][3] de MoodleBox [haciendo una donación][3].

### En caso de problemas

Si experimenta algún problema al descargar la imagen de disco, utilice su interfaz de línea de comandos, por ejemplo con este comando

```bash
wget -c {{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" id=4 >}}
```

o este otro

```bash
curl -C - {{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" id=4 >}}
```

### Versiones antiguas de la imagen de disco

Las imágenes de disco de versiones anteriores de MoodleBox [están disponibles en Github][releases].

 [copyimage]: {{< relref "help/copy-the-disk-image" >}}
 [2]: {{< relref "help/startup-shutdown-restart" >}}
 [3]: {{< relref "/support-moodlebox" >}}
 [4]: {{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" id=4 >}}
 [5]: {{< relref "help/install-the-moodlebox" >}}
 [rpios]: https://www.raspberrypi.org/downloads/raspberry-pi-os/
 [releases]: https://github.com/moodlebox/moodlebox/releases
