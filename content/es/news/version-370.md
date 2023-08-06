---
title: "MoodleBox 3.7.0 te trae Moodle 3.9"
description: MoodleBox 3.7.0 proporciona Moodle 3.9. Se basa en la versión Raspberry Pi OS publicada el 27 de mayo de 2020.
date: 2020-06-15
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
slug: version-3.7.0
---

La [versión 3.7.0][release] de la [imagen de disco de MoodleBox][disk] acaba de ser liberada.

&gt; [Descargar imagen de disco][disco]

{{< figure src="/img/media/moodle39.png" width="700" class="centered-image" alt="Moodle 3.9" >}}

  - Esta versión proporciona la versión 3.9 de [Moodle][moodle] y todas sus [nuevas características][moodle39], incluyendo la integración con H5P, un selector de actividades de nuevo diseño y la posibilidad de copiar cursos rápidamente.
  - Una nueva versión del [MoodleBox Plugin for Moodle][plugin] soporta la nueva Raspberry Pi 4B con 8GB de memoria, y ofrece una mejor gestión de la detección de fuentes de alimentación insuficientes.
  - Está basado en la última versión de [Raspberry Pi OS Lite][rpios], publicada el 27 de mayo de 2020.
  - El software de portal cautivo [Nodogsplash][nds] se actualiza a su última versión.
  - MathJax][mathjax] se actualiza a la versión 2.7.8.

Consulte las [notas de la versión en Github][versión] para obtener toda la información sobre esta versión.

 [disk]: {{< relref "help/download-the-disk-image" >}}
 [release]: https://github.com/moodlebox/moodlebox/releases/tag/v3.7.0
 [moodle]: https://moodle.org/
 [plugin]: https://moodle.org/plugins/tool_moodlebox
 [nds]: https://nodogsplashdocs.readthedocs.io/
 [mathjax]: https://mathjax.org/
 [rpios]: https://www.raspberrypi.org/downloads/raspberry-pi-os/
 [moodle39]: https://docs.moodle.org/39/en/New_features
