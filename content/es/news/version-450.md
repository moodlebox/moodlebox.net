---
title: "MoodleBox 4.5.0: Con soporte para Moodle 4.1 y Raspberry Pi Imager"
description: La versión 4.5.0 de MoodleBox viene con Moodle 4.1 y soporta de forma nativa la herramienta Raspberry Pi Imager.
date: 2022-11-28
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
slug: version-4.5.0
---

La [versión 4.5.0][release] de MoodleBox, con el nuevo [Moodle 4.1][moodle41], funciona de forma nativa con la herramienta [Raspberry Pi Imager][rpi-imager], permitiendo una forma más fácil de copiar la imagen en tu tarjeta microSD, a la vez que mejora la seguridad.

{{< figure src="/img/media/rpi-imager.png" width="800" class="centered-image" alt="Raspberry Pi Imager" >}}

Estos son algunos de los cambios introducidos en [MoodleBox 4.5.0][release]:

- [Moodle][moodle] [versión 4.1][moodle41].
- Las librerías H5P están incluidas.
- Se basa en [Raspberry Pi OS Lite][rpios] versión de 64 bits lanzada el 22 de septiembre de 2022.
- Soporte nativo de la herramienta [Raspberry Pi Imager][rpi-imager] para una copia más fácil y segura de la imagen.
- Una nueva versión del [MoodleBox plugin para Moodle][plugin].
- Muchas mejoras y correcciones.

Para instalar MoodleBox te recomendamos que utilices la utilidad [Raspberry Pi Imager][rpi-imager], que descargará automáticamente la imagen de disco de MoodleBox por ti.

&Gt; [Más información sobre la instalación de MoodleBox][install]

Echa un vistazo a las [notas de la versión en Github][release] para obtener toda la información sobre esta versión.

[disk]: {{< relref "help/download-the-disk-image" >}}
[release]: https://github.com/moodlebox/moodlebox/releases/tag/v4.5.0
[plugin]: https://moodle.org/plugins/tool_moodlebox
[moodle]: https://moodle.org/
[rpios]: https://www.raspberrypi.com/software/operating-systems/
[moodle41]: https://moodle.com/news/announcing-moodle-lms-4-1/
[rpi-imager]: https://www.raspberrypi.com/software/
[install]: {{< relref "help/install-the-moodlebox" >}}
