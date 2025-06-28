---
title: Imagen de disco versión 2.2.0
description: MoodleBox 2.2.0 está basado en la versión 3.4.1 de Moodle. También se han realizado varias mejoras.
date: 2018-03-02
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
slug: version-2.2.0
---

Hoy se publica la [versión 2.2.0][2] de la [imagen de MoodleBox][2].

Los principales cambios proporcionados por [esta versión][2] para los usuarios finales son
  - Moodle versión 3.4.1+, y
  - Soporte para unidades USB con formato NTFS y exFAT. Gracias a Ralf Krause por sugerir esta nueva característica.

Moodle `cron` se realiza ahora cada minuto, siguiendo la [recomendación oficial][3], ya que la carga de CPU resultante no afecta al rendimiento de la MoodleBox.

Vea las [notas de la versión en Github][2] para más información sobre todos los cambios de esta versión.

 [1]: {{< relref "help/copy-the-disk-image" >}}
 [2]: https://github.com/moodlebox/moodlebox/releases/tag/v2.2.0
 [3]: https://docs.moodle.org/en/Cron
