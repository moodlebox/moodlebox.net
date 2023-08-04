---
title: Versión de MoodleBox 2.7.0
description: MoodleBox 2.7.0 está basado en Moodle 3.6.4+. Permite mostrar los botones de reinicio y parada en el pie de página de todas las páginas de Moodle.
date: 2019-05-20
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
slug: versión-2.7.0
---

La [versión 2.7.0][2] de la [imagen de disco de MoodleBox][1] ha sido lanzada hoy. Trae muchas nuevas características.

  - Esta versión proporciona [Moodle][3] versión 3.6.4+.
  - Se basa en la [imagen Raspbian Stretch Lite][4] publicada el 8 de abril de 2019.
  - Una nueva versión del [plugin MoodleBox para Moodle][5] permite colocar los [botones de reinicio y apagado][7] en el pie de página de todas las páginas de Moodle.
  - Se muestra una advertencia al administrador de Moodle si la fuente de alimentación de MoodleBox proporciona un voltaje insuficiente.
  - Un [portal cautivo][6] está integrado en la MoodleBox. El portal cautivo está desactivado por defecto. [Lea la documentación][6] para más información.
  - Se han corregido varios errores.

Esta versión también proporciona una versión preliminar del script de actualización de MoodleBox. El script es funcional, pero aún no se proporciona documentación.

Vea las [notas de la versión en Github][2] para toda la información sobre esta versión.

 [1]: {{< relref "help/download-the-disk-image" >}}
 [2]: https://github.com/moodlebox/moodlebox/releases/tag/v2.7.0
 [3]: https://moodle.org/
 [4]: https://www.raspberrypi.org/downloads/raspbian/
 [5]: https://moodle.org/plugins/tool_moodlebox
 [6]: {{< relref "help/captive-portal" >}}
 [7]: {{< relref "help/buttons-in-footer" >}}
