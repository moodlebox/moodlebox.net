---
title: "MoodleBox 3.8.0: corrección de errores"
description: MoodleBox 3.8.0 corrige varios problemas molestos y actualiza varios componentes, incluyendo Moodle 3.9.1+.
date: 2020-07-25
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
slug: version-3.8.0
---

Se acaba de publicar la [versión 3.8.0][release] de la [imagen de disco de MoodleBox][disk].

&gt; [Descargar imagen de disco][disk]

### Novedades y correcciones

{{< figure src="/img/media/pi4-8gb-labelled.png" width="500" class="centered-image" alt="Raspberry Pi 4 8GB" >}}

  - Una nueva versión del [MoodleBox Plugin for Moodle][plugin] corrige un error que impedía su correcto uso con la Raspberry Pi 4B con 8 GB de RAM.
  - Esta versión proporciona la versión 3.9.1+ de [Moodle][moodle].
  - El software de portal cautivo [Nodogsplash][nds] se actualiza a su última versión 5.0.0, y corrige un error que bloqueaba la redirección a la página de inicio de MoodleBox.
  - Adminer][adminer] ha sido actualizado a la última versión 4.7.7.
  - WiFi está ahora correctamente habilitado en todos los modelos soportados.
  - Los raros errores 502 son ahora gestionados y el servidor se reinicia inmediatamente en caso de problema.

Consulte las [notas de la versión en Github][release] para obtener toda la información sobre esta versión.

 [disk]: {{< relref "help/copy-the-disk-image" >}}
 [release]: https://github.com/moodlebox/moodlebox/releases/tag/v3.8.0
 [moodle]: https://moodle.org/
 [plugin]: https://moodle.org/plugins/tool_moodlebox
 [nds]: https://nodogsplashdocs.readthedocs.io/
 [adminer]: https://www.adminer.org/
