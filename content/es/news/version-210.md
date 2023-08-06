---
date: 2018-01-02
title: Imagen de disco versión 2.1.0
description: MoodleBox 2.1.0 se basa en la imagen Raspbian Stretch Lite publicada el 2017-11-29. El proceso de construcción de la imagen fue refactorizado.
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
slug: version-2.1.0
---

Hoy se publica la versión 2.1.0 de la [imagen de la MoodleBox][4]. [Esta versión][4] no es muy grande para el usuario final. Sin embargo, se han hecho grandes cosas bajo el capó.

  - El proceso de construcción de la imagen ha sido completamente revisado. En lugar de usar un script bash, ahora usamos [Ansible][3], que permite una construcción más robusta. Ansible es una herramienta de código abierto para automatizar la instalación y el mantenimiento de servidores.
  - Esta versión se basa en la [Raspbian Stretch Lite image][2] publicada el 2017-11-29.
  - Se hicieron otros pequeños cambios y adiciones. Ver las [notas de la versión en Github][4] para más información.

 [1]: {{< relref "help/download-the-disk-image" >}}
 [2]: https://www.raspberrypi.org/downloads/raspbian/
 [3]: https://www.ansible.com
 [4]: https://github.com/moodlebox/moodlebox/releases/tag/v2.1.0
