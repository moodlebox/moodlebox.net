---
title: "Muchas novedades en MoodleBox 4.0.0"
description: Con la versión 4.0.0, MoodleBox entra en una nueva era.
date: 2021-11-09
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
slug: version-4.0.0
---

Con la [versión 4.0.0][release], ¡MoodleBox entra en una nueva era!

[MoodleBox 4.0.0][release] trae una serie de nuevas características, incluyendo el modo _AP+STA_, que permite a MoodleBox conectarse a una red Wi-Fi existente y actuar como punto de acceso inalámbrico para otros dispositivos al mismo tiempo. Este modo permite la funcionalidad completa de MoodleBox con la Raspberry Pi 3A+, Zero W, y la recientemente lanzada Raspberry Pi Zero 2 W.

Y gracias al nuevo firmware optimizado, [MoodleBox 4.0.0][release] ahora soporta de forma fiable 20 clientes Wi-Fi.

[MoodleBox 4.0.0][release] se basa ahora en _Bullseye_, la versión 11 de Debian.

{{< figure src="/img/media/debian-bullseye.jpg" width="800" class="centered-image" alt="Debian Bullseye" >}}

&gt; [Descargar imagen de disco][disk]

Estas son las principales novedades de [MoodleBox versión 4.0.0][release].
  - Modo _AP+STA
  - Soporte completo para Raspberry Pi 3A+, Zero W y Zero 2 W; no se recomienda usar la RPi Zero W, que es demasiado lenta para un MoodleBox
  - Basado en la última versión de [Raspberry Pi OS Lite][rpios] del 10 de octubre de 2021, con Debian versión 11, _Bullseye_
  - [Moodle][moodle] versión 3.11.4
  - Una nueva versión del [MoodleBox plugin for Moodle][plugin] permite cambiar la dirección IP de la red Wi-Fi de MoodleBox
  - Muchas otras mejoras de rendimiento y correcciones

Echa un vistazo a las [notas de la versión en Github][release] para obtener toda la información sobre esta versión.

[disk]: {{< relref "help/copy-the-disk-image" >}}
[release]: https://github.com/moodlebox/moodlebox/releases/tag/v4.0.0
[moodle]: https://moodle.org/
[plugin]: https://moodle.org/plugins/tool_moodlebox
[rpios]: https://www.raspberrypi.com/software/operating-systems/
