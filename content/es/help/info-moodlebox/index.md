---
title: Panel de control de MoodleBox
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
type: kb
date: 2017-11-12
lastmod: 2022-08-14
description: MoodleBox viene con un dashboard para mostrar diferente información sobre el hardware y el software instalado.
slug: moodlebox-dashboard
categories_weight: 10
categories:
  - Primeros pasos
  - Mantenimiento
---
El panel de control de MoodleBox se encuentra en la interfaz de administración, en [Administración del sitio > Servidor > MoodleBox][1]. Sólo es accesible para los administradores de la plataforma.

El panel de control proporciona acceso a información importante sobre el funcionamiento de MoodleBox.
{{< figure src="info-moodlebox.png" width="700" title="Información sobre MoodleBox" class="centered-image" >}}

El panel de control también le permite realizar las siguientes operaciones.

- Cambiar la fecha y la hora de la MoodleBox, cuando no está conectada a Internet.
- [Cambiar la contraseña principal][3] de la MoodleBox.
- [Cambiar la configuración de la red Wi-Fi][4] proporcionada por la MoodleBox.
- [Reiniciar o apagar][5] la MoodleBox.


{{< notice note >}}
Cuando la fuente de alimentación de MoodleBox no es adecuada, se muestra un __aviso en la parte superior de cada página__. Este aviso sólo es visible para el administrador. Los demás usuarios de MoodleBox no lo ven.
{{< figure src="undervoltage.png" title="Aviso de baja tensión" class="centered-image" width="700" >}}
{{< /notice >}}

 [1]: http://moodlebox.home/admin/tool/moodlebox/index.php
 [3]: {{< relref "help/change-password" >}}
 [4]: {{< relref "help/wi-fi-configuration" >}}
 [5]: {{< relref "help/startup-shutdown-restart" >}}
