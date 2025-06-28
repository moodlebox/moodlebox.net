---
title: "MoodleBox 3.9.0 te trae Moodle 3.10 y otras correcciones"
description: Moodle 3.10 se proporciona en la versión 3.9.0 de MoodleBox. Esta nueva imagen se basa en la versión Raspberry Pi OS publicada el 20 de agosto de 2020.
date: 2020-11-09
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
slug: version-3.9.0
---

La [versión 3.9.0][release] de la [imagen de disco de MoodleBox][disk] acaba de ser liberada.

&gt; [Descargar imagen de disco][disk]

{{< figure src="/img/media/moodle310.png" width="700" class="centered-image" alt="Moodle 3.10" >}}

  - Esta versión proporciona la versión 3.10.0 de [Moodle][moodle] y todas sus [nuevas características][moodle310], incluyendo la descarga de contenidos de cursos, mejoras en el banco de contenidos y la inscripción a cursos de pago.
  - Se proporciona una nueva versión del [Plugin MoodleBox para Moodle][plugin] compatible con Moodle 3.10.0.
  - Está basado en la última versión de [Raspberry Pi OS Lite][rpios], publicada el 20 de agosto de 2020.
  - MathJax][mathjax] se actualiza a la versión 2.7.9.
  - Se incluyen muchas otras pequeñas correcciones.

Consulte las [notas de la versión en Github][release] para obtener toda la información acerca de esta versión.

 [disk]: {{< relref "help/copy-the-disk-image" >}}
 [release]: https://github.com/moodlebox/moodlebox/releases/tag/v3.9.0
 [moodle]: https://moodle.org/
 [plugin]: https://moodle.org/plugins/tool_moodlebox
 [nds]: https://nodogsplashdocs.readthedocs.io/
 [mathjax]: https://mathjax.org/
 [rpios]: https://www.raspberrypi.org/downloads/raspberry-pi-os/
 [adminer]: https://www.adminer.org/
 [moodle310]: https://docs.moodle.org/310/en/New_features
