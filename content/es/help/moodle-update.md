---
title: Actualizar Moodle en la MoodleBox
authors:
  - Nicolas Martignoni
  - Adrian Perez Rodriguez
  - Steve Miley
  - Eric Efrain Solano-Uscanga
type: kb
date: 2017-04-20
lastmod: 2024-11-03
description: ¿Quieres actualizar Moodle en la MoodleBox? ¡Sigue estas instrucciones!
keywords:
  - shell
  - ssh
  - línea de comandos
  - sistema operativo
  - cli
slug: moodle-version-update
categories:
  - Mantenimiento
---
{{< notice info >}}
Antes de actualizar tu versión de Moodle, asegúrate de que se cumplen los requisitos del servidor en tu MoodleBox. Para ello, inicia sesión en Moodle, visita [Administración del sitio > Servidor > Entorno](http://moodlebox.home/admin/environment.php), haz clic en _Actualizar componente_, y comprueba que ninguna línea diga _Check_ en rojo.


La advertencia _site not https_ no es un problema y puede ignorarse.
{{< /notice >}}

Para actualizar Moodle, realiza las siguientes operaciones, utilizando la línea de comandos.

Primero [inicia sesión en la MoodleBox vía SSH][cli], con la contraseña principal, para acceder a la interfaz de línea de comandos. [Si no la has cambiado][change-pwd] todavía, usa [la contraseña principal por defecto][default-pwd] __Moodlebox4$__.

```bash
ssh moodlebox@moodlebox.home
```

### Actualizar a una versión menor

Para actualizar a la siguiente __versión menor__ de Moodle (4.5.1, 4.5.2, etc.), escribe los siguientes comandos en el terminal:[^git]

```bash
cd /var/www/moodle/
sudo -u www-data -g moodlebox git pull
```

Después, visita en tu navegador la URL http://moodlebox.home/admin y sigue las instrucciones de actualización, como en cualquier instalación de Moodle ( [lee la documentación][update] ).

### Actualizar a una versión __mayor

Para actualizar a la siguiente __versión mayor__ de Moodle (4.5, 4.6[^future], etc.), escriba los comandos anteriores, y a continuación los siguientes comandos __adicionales__, indicando la rama adecuada, por ejemplo `MOODLE_405_STABLE`, `MOODLE_406_STABLE`, etc.:

```bash
sudo -u www-data -g moodlebox git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
sudo -u www-data -g moodlebox git fetch origen
sudo -u www-data -g moodlebox git checkout MOODLE_405_STABLE
```

A continuación, visita la URL http://moodlebox.home/admin y sigue las instrucciones de actualización, como en cualquier instalación de Moodle ([lee la documentación][update]).

 [update]: https://docs.moodle.org/en/Upgrading
 [cli]: {{< relref "help/command-line-access" >}}
 [change-pwd]: {{< relref "help/change-password" >}}
 [default-pwd]: {{< relref "help/credentials" >}}

 [^git]: Para permitir una actualización simplificada de Moodle, su instalación se realizó utilizando Git.
 [^future]: Por supuesto, tendrás que elegir una rama existente y estable, así que espera a la [versión oficial](https://moodledev.io/general/releases) de la versión de Moodle deseada para hacerlo.

