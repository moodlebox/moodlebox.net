---
title: ¡MoodleBox 3.0.0 ya está aquí!
description: La versión 3.0.0 de MoodleBox es compatible con la nueva Raspberry Pi 4B. Se basa en Raspbian Buster y proporciona Moodle 3.7.1.
date: 2019-07-13
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
slug: version-3.0.0
---

La [versión 3.0.0][2] de la [imagen de disco de MoodleBox][1] ha sido lanzada hoy. Trae muchas características nuevas.

{{< figure src="/img/media/pi4-labelled.png" width="583" title="Raspberry Pi model 4B" class="centered-image" >}}

  - Esta versión es compatible con el nuevo [Raspberry Pi modelo 4B][8] (1GB, 2GB o 4GB de RAM), lo que supone un aumento significativo del rendimiento.
  - Proporciona [Moodle][3] versión 3.7.1 y una nueva versión del [plugin MoodleBox para Moodle][5].
  - Está basado en Raspbian Buster, gracias a la [Raspbian Buster Lite image][4] publicada el 10 de julio de 2019.
  - PHP se actualizó a la versión 7.3.
  - Por motivos de mantenimiento, el script phpMyAdmin para gestionar la base de datos de Moodle [ha sido sustituido][6] por Adminer, una herramienta más ligera [con las mismas características][7].
  - La obsoleta [cuenta de administrador de Moodle][9] _admin_ ya no está instalada por defecto.
  - Se han corregido varios errores.

Esta versión también proporciona una versión preliminar del script de actualización de MoodleBox. El script es funcional, pero aún no se proporciona documentación.

Vea las [notas de la versión en Github][2] para toda la información sobre esta versión.

 [1]: {{< relref "help/copy-the-disk-image" >}}
 [2]: https://github.com/moodlebox/moodlebox/releases/tag/v3.0.0
 [3]: https://moodle.org/
 [4]: https://www.raspberrypi.org/downloads/raspbian/
 [5]: https://moodle.org/plugins/tool_moodlebox
 [6]: {{< relref "help/access-to-the-database" >}}
 [7]: https://www.adminer.org/
 [8]: https://www.raspberrypi.org/products/raspberry-pi-4-model-b/
 [9]: {{< relref "help/access-to-moodle" >}}
