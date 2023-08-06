---
title: "MoodleBox 3.5.0: HTTPS disponible!"
description: La versión 3.5.0 de MoodleBox proporciona Moodle 3.8. Permite la activación de HTTPS y se basa en la última versión de Raspbian.
date: 2019-11-18
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
slug: version-3.5.0
---

Se acaba de publicar la [versión 3.5.0][2] de la [imagen de disco de MoodleBox][1].

{{< figure src="/img/media/moodle38.jpg" width="600" title="Moodle 3.8" class="centered-image" >}}

  - Esta versión proporciona la versión 3.8 de [Moodle][3].
  - Está basada en la última versión de [Raspbian Buster Lite][raspbian], publicada el 26 de septiembre de 2019.
  - Ahora es posible [habilitar HTTPS][https] para conexiones más seguras entre MoodleBox y los dispositivos cliente.
  - Una nueva versión del [Plugin de MoodleBox para Moodle][4] corrige algunos errores para mejorar la usabilidad.
  - El software de portal cautivo [Nodogsplash][6] se actualiza a su última versión.
  - MathJax][mathjax] se actualiza también a su última versión.

Ver las [notas de la versión en Github][2] para toda la información sobre esta versión.

 [1]: {{< relref "help/download-the-disk-image" >}}
 [2]: https://github.com/moodlebox/moodlebox/releases/tag/v3.5.0
 [3]: https://moodle.org/
 [4]: https://moodle.org/plugins/tool_moodlebox
 [6]: https://nodogsplashdocs.readthedocs.io/
 [https]:{{< relref "help/https-connection" >}}
 [mathjax]: https://mathjax.org/
 [raspbian]: https://www.raspberrypi.org/downloads/raspbian/
