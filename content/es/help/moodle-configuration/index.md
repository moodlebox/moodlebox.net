---
title: Configuración por defecto de Moodle
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
type: kb
date: 2017-04-20
lastmod: 2021-03-10
description: Información detallada sobre la configuración de la instalación de MoodleBox Moodle
slug: moodle-configuracion
categories:
  - Mantenimiento

---
El ambiente de Moodle en la Moodlebox es completamente estándard.

Los siguientes ajustes fueron configurados para facilitar el uso o desempeño de la MoodleBox.

### Configuración de Moodle

[Aplicación móvil](http://moodlebox.home/admin/category.php?category=mobileapp)
:   El servicio móvil para la aplicación oficial [Moodle Mobile app][1] está activado. La aplicación Moodle Mobile se puede descargar en https://download.moodle.org/mobile/.

[Tamaño de subida de archivos](http://moodlebox.home/admin/settings.php?section=sitepolicies#admin-maxbytes)
:   El tamaño máximo de subida de archivos está fijado en __50MB__ (a través de los ajustes de PHP `post_max_size` y `upload_max_filesize`).

[Cron](http://moodlebox.home/admin/tool/task/scheduledtasks.php)
:   El _cron_ está configurado para ejecutarse __cada minuto__. Algunas tareas programadas necesitan un acceso a Internet. Se recomienda conectar la MoodleBox a Internet con un cable Ethernet.

[Filtro multilenguaje](http://moodlebox.home/admin/settings.php?section=filtersettingmultilang)
:   El filtro de contenido multi-idioma está activado.

[Caché](http://moodlebox.home/cache/admin.php)
:   La caché de Moodle está configurada para __optimizar la reactividad__ de la MoodleBox.

[Plugin de MoodleBox](http://moodlebox.home/admin/category.php?category=moodlebox)
:   El [MoodleBox Administration plugin][2] para Moodle está instalado. Este plugin permite a un administrador de Moodle reiniciar y apagar, fijar la fecha, cambiar algunas otras configuraciones y monitorizar el hardware de la MoodleBox usando una GUI.

[Biblioteca MathJax](http://moodlebox.home/admin/settings.php?section=filtersettingmathjaxloader)
:   La librería MathJax se instala localmente, permitiendo que el filtro MathJax funcione correctamente incluso cuando la MoodleBox no está conectada a Internet.

[Rutas del sistema](http://moodlebox.home/admin/settings.php?section=systempaths)
:   Las rutas del sistema a los ejecutables `php`, `du`, `ghostscript` y `python` están correctamente configuradas.

[Débogage](http://moodlebox.home/admin/settings.php?section=debugging)
:   La visualización de mensajes de depuración está desactivada.

 [1]: https://download.moodle.org/mobile/
 [2]: https://moodle.org/plugins/tool_moodlebox
