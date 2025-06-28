---
title: Versión de MoodleBox 2.6.0
description: MoodleBox 2.6.0 proporciona Moodle 3.6. La imagen de disco se basa en Raspbian Stretch Lite del 13 de noviembre de 2018.
date: 2018-12-03
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
slug: version-2.6.0
---

{{< notice warning >}}
Esta versión __no puede actualizarse automáticamente con el script de actualización__ en desarrollo. Le recomendamos que utilice en su lugar la versión 2.6.1.
{{< /notice >}}

La [versión 2.6.0][2] de la [imagen de disco de MoodleBox][2] se publica hoy.

  - Esta versión proporciona la versión 3.6 de [Moodle][6], que se publica hoy.
  - Se basa en la [imagen Raspbian Stretch Lite][4] publicada el 13 de noviembre de 2018.
  - Utiliza ahora la versión 7.1 de PHP.
  - Una nueva versión del [MoodleBox plugin for Moodle][3] permite ocultar el nombre de la red Wi-Fi, si es necesario.
  - El nombre de usuario administrador por defecto es ahora _moodlebox_, en lugar de _admin_.
  - Ghostscript está instalado por defecto, lo que permite usar directamente anotaciones PDF sin más manipulaciones.

Vea las [notas de la versión en Github][2] para más información sobre todos los cambios de esta versión.

 [1]: {{< relref "help/copy-the-disk-image" >}}
 [2]: https://github.com/moodlebox/moodlebox/releases/tag/v2.6.0
 [3]: https://moodle.org/plugins/tool_moodlebox
 [4]: https://www.raspberrypi.org/downloads/raspbian/
 [5]: {{< relref "help/moodle-update" >}}
 [6]: https://moodle.org/
