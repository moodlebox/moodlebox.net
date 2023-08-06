---
title: Redimensionar la partición de la tarjeta SD
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
type: kb
date: 2018-07-09
lastmod: 2022-08-14
description: Sigue estas instrucciones para redimensionar la partición de tu tarjeta SD.
slug: redimensionar-particion-tarjeta-sd
categories_weight: 100
categories:
  - Mantenimiento
---

### Pasos a seguir

{{< notice note >}}
Esta operación no es necesaria si ha descargado la imagen de disco de este sitio web. Sin embargo, puede ser necesario ejecutarla si ha recibido una imagen de disco personalizada.
{{< /notice >}}


- [Copia tu imagen de disco personalizada][2] en la tarjeta microSD.
- [Inicia tu MoodleBox][3] de la forma habitual.
- [Conéctate al Moodle][4] de la MoodleBox utilizando una cuenta de administrador. Si no se han modificado las cuentas de usuario de MoodleBox, utilice los [datos de acceso por defecto][5].
- Accede a la [interfaz de administración][6] de la MoodleBox ([Administración del Sitio > Servidor > MoodleBox][6] en el bloque de administración).
- Haz clic en el botón _Redimensionar partición de tarjeta SD_.

{{< figure src="resize-sdcard-en.png" title="Redimensionar la partición de la tarjeta SD" class="centered-image" width="700" >}}

La MoodleBox se reinicia inmediatamente y está lista para su uso segundos después de esta operación.

{{< notice tip >}}
No hay ningún problema en hacer clic en el botón _Redimensionar la partición de la tarjeta SD_ cuando la tarjeta SD ya ha sido redimensionada. La única consecuencia será el reinicio de MoodleBox.
{{< /notice >}}

 [1]: {{< relref "help/download-the-disk-image" >}}
 [2]: {{< relref "help/copy-the-disk-image" >}}
 [3]: {{< relref "help/startup-shutdown-restart" >}}
 [4]: {{< relref "help/access-to-moodle" >}}
 [5]: {{< relref "help/credentials" >}}
 [6]: http://moodlebox.home/admin/tool/moodlebox/index.php
