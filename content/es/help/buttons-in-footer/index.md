---
title: Mostrar botones de reinicio y apagado en el pie de página
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
type: kb
date: 2019-05-20
lastmod: 2022-08-14
description: Para facilitar la administración, es posible mostrar los botones de reinicio y parada de MoodleBox en el pie de página de todas las páginas de Moodle.
slug: botones-en-pie
categories_weight: 30
categories:
  - Utilización

---
Gracias a la visualización en la parte inferior de la página de los botones de reinicio y parada de MoodleBox, su administración es más intuitiva y sencilla.

{{< figure src="buttons-footer.png" width="800" title="Botones de reinicio y parada en el pie de página" class="centered-image" >}}

Esta característica se activa visitando la configuración de MoodleBox en la interfaz de administración: [Administración del sitio > Servidor > MoodleBox > Configuración de MoodleBox][1], y marcando la casilla "Mostrar botones en el pie de página".

{{< figure src="buttons-settings.png" width="720" title="Casilla Mostrar botones en pie de página" class="centered-image" >}}

Después de guardar los cambios, los botones de reinicio y parada de MoodleBox se mostrarán para los roles de Moodle con la capacidad `tool/moodlebox:viewbuttonsinfooter`, que se concede por defecto al rol manager y por supuesto a los administradores. No se muestran para otros usuarios.

{{< notice tip >}}
Para minimizar el riesgo de corrupción de datos en la tarjeta microSD, no se recomienda desenchufar la fuente de alimentación sin tener cuidado de apagar la MoodleBox. Es preferible controlar manualmente su apagado de antemano.
{{< /notice >}}

 [1]: http://moodlebox.home/admin/settings.php?section=tool_moodlebox_settings
