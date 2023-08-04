---
title: Cambiar la contraseña principal de MoodleBox
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
type: kb
date: 2018-11-02
lastmod: 2022-08-14
description: Puede cambiar la contraseña principal de la MoodleBox navegando por el panel de control en la interfaz de administración
slug: cambiar-contraseña-principal
categories_weight: 5
categories:
  - Utilización
---

{{< notice info >}}
Se recomienda encarecidamente __cambiar inmediatamente__ la contraseña principal de la MoodleBox, para evitar que personas no autorizadas realicen cambios no deseados y la inutilicen.
{{< /notice >}}

Para cambiar la contraseña principal de su MoodleBox, visite el panel de control en la interfaz de administración: [Administración del Sitio > Servidor > MoodleBox][1].

Esta contraseña es parte de las credenciales principales de tu MoodleBox. Da acceso a la [interfaz de línea de comandos][5] de MoodleBox, a la [carga de archivos SFTP][6] así como a la [administración de la base de datos][7].

{{< figure src="change-password-en.png" title="Cambiar la contraseña principal" class="centered-image" width="425" >}}

En la sección _Contraseña de MoodleBox_, introduce tu nueva contraseña, igual en ambos campos. Podrás visualizar los caracteres que has escrito haciendo clic en el icono del ojo. Te recomendamos que elijas una contraseña segura

{{< notice tip >}}
La contraseña de la cuenta de administrador de Moodle __no se modifica__ con esta operación. Para cambiar esa contraseña, inicie sesión en Moodle, visite la sección <a href="http://moodlebox.home/user/preferences.php" target="_blank">preferencias para su perfil</a> y <a href="http://moodlebox.home/login/change_password.php" target="_blank">cambiar la contraseña</a>.
{{< /notice >}}

 [1]: http://moodlebox.home/admin/tool/moodlebox/index.php
 [2]: http://moodlebox.home/
 [3]: http://moodlebox.home/user/preferences.php
 [4]: http://moodlebox.home/login/change_password.php
 [5]: {{< relref "help/command-line-access" >}}
 [6]: {{< relref "help/using-files-with-the-moodlebox" >}}
 [7]: {{< relref "help/access-to-the-database" >}}
