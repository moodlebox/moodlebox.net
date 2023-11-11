---
title: "MoodleBox 4.6.0: Muchos cambios con Moodle 4.3 e idioma español"
description: La versión 4.6.0 de MoodleBox viene con la versión 4.3 de Moodle. Está basado en Bookworm, la versión 12 de Debian.
date: 2023-11-10
authors:
  - Nicolas Martignoni
slug: version-4.6.0
---
La tan esperada versión [MoodleBox 4.6.0][release] presenta una serie de cambios largamente esperados, en particular la [versión 4.3][moodle43] de [Moodle][moodle]. Está basado en _Bookworm_, la versión [Debian 12][debian].

{{< figure src="/img/media/moodlebox-460.png" width="780" class="centered-image" alt="MoodleBox versión 4.6.0" >}}

Gracias a una nueva versión del [plugin de MoodleBox para Moodle][plugin], se puede acceder más fácilmente al panel de control de MoodleBox en el menú de administración de nivel superior.

Estas son las principales novedades de la versión [MoodleBox 4.6.0][release]:
- [Moodle][moodle] [versión 4.3][moodle43]!
- Basado en la última versión de [Raspberry Pi OS Lite][rpios] del 10 de octubre de 2023, con la versión 12 de Debian, _Bookworm_.
- Paquete de idioma español (internacional) instalado por defecto
- Soporte preliminar (¡no probado!) de la novísima [Raspberry Pi Modelo 5][rpi5]
- Una nueva versión del [plugin MoodleBox para Moodle][plugin]
- Muchas otras mejoras y correcciones, incluyendo Redis para el almacenamiento en caché de Moodle y el montaje de múltiples llaves USB.

Para instalar MoodleBox le recomendamos que utilice la utilidad [Raspberry Pi Imager][rpi-imager], que descargará automáticamente la imagen de disco de MoodleBox por usted.

&Gt; [Más información sobre la instalación de MoodleBox][install]

Echa un vistazo a las [notas de la versión en Github][release] para obtener toda la información sobre esta versión.

[disk]: {{< relref "help/download-the-disk-image" >}}
[release]: https://github.com/moodlebox/moodlebox/releases/tag/v4.6.0
[plugin]: https://moodle.org/plugins/tool_moodlebox
[moodle]: https://moodle.org/
[rpios]: https://www.raspberrypi.com/software/operating-systems/
[rpi5]: https://www.raspberrypi.com/products/raspberry-pi-5/
[moodle43]: https://moodle.com/news/moodle-lms-4-3-a-leap-forward-in-user-experience-and-efficiency/
[rpi-imager]: https://www.raspberrypi.com/software/
[debian]: https://www.debian.org/News/2023/20230610
[install]: {{< relref "help/install-the-moodlebox" >}}
