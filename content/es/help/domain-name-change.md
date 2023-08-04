---
title: Cambiar el nombre de dominio de MoodleBox
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
type: kb
date: 2018-09-27
lastmod: 2021-10-21
description:  Esta guía explica cómo cambiar el nombre de dominio de tu MoodleBox para que coincida mejor con tu propia situación local.
slug: cambio-nombre-dominio
categories_weight: 90
categories:
  - Utilización

---
{{< notice warning >}}
Las operaciones descritas en esta página pueden __dejar su MoodleBox inutilizable__, requiriendo el borrado completo de la tarjeta SD y la __pérdida de todos los datos__ (contenidos de los cursos, plug-ins instalados, configuraciones personalizadas, etc.). Haga esto sólo si sabe exactamente lo que está haciendo. En cualquier caso, __no se proporciona soporte__ sobre este tema.

No nos hacemos responsables de los daños directos o indirectos causados por el uso de la MoodleBox, en particular tras un cambio de nombre de dominio.
{{< /notice >}}

### Cómo proceder

El siguiente ejemplo muestra cómo cambiar el nombre de dominio de una MoodleBox, lo que permitirá a un dispositivo local alcanzarla con una nueva URL. El ejemplo muestra cómo dar a la MoodleBox el nombre de dominio __aprender.ejemplo.com__.

{{< notice info >}}
Esta operación no influye en el acceso a la MoodleBox desde una red Ethernet o desde Internet: la MoodleBox __seguirá siendo accesible únicamente desde la red Wi-Fi que proporciona__, desde los dispositivos que se hayan conectado a ella.
{{< /notice >}}

#### Paso 1: Cambiar el nombre del host (_hostname_)

En la última línea del fichero `/etc/hosts`, sustituye `moodlebox` por __learn.example.com__.

En el archivo `/etc/hostname`, sustituye `moodlebox` por __learn.example.com__ (esta modificación no es necesaria, pero sí muy recomendable).

#### Paso 2: Adaptar la configuración del servidor web nginx

Modifica el archivo `/etc/nginx/sites-available/default`, sustituyendo `moodlebox` por el nombre de dominio completo (_FQDN_) __learn.example.com__ en la directiva `server_name`.

#### Paso 3: Adaptar la configuración de enmascaramiento del servidor DNS

Modifique el archivo `/etc/dnsmasq.conf`, sustituyendo `home` por __learn.example.com__ en las dos líneas que empiezan por `domain` y `local`.

Si tu nombre de dominio es público, comenta o borra completamente la línea que empieza por `address`. De lo contrario, si su nuevo nombre de dominio seguirá siendo local y terminará con `.home`, puede mantener esta línea intacta.

#### Paso 4: Adaptar la configuración de Moodle (URL de Moodle)

En el archivo `/var/www/moodle/config.php`, en la línea que empieza por `$CFG->wwwroot`, sustituya la URL `http://moodlebox.home` por `http://learn.example.com`. No añada una barra al final de la URL.

#### Paso 5: Reinicie MoodleBox

Para aplicar estos cambios, reinicie su MoodleBox.

#### Paso 6: Reemplazar las URLs de Moodle

Acceda a su MoodleBox a través de su navegador utilizando la nueva dirección `http://learn.example.com/` y utilice la herramienta de reemplazo de URLs en `http://learn.example.com/admin/tool/replace/index.php` para reemplazar las URLs en la base de datos de Moodle.

#### Paso 7: Sustituir certificados SSL (opcional)

Si desea [utilizar HTTPS][3], tendrá que obtener sus propios certificados SSL, ya que los proporcionados por MoodleBox no funcionarán con su nombre de dominio personalizado __learn.example.com__. No olvide cambiar también la URL.

### Opciones relacionadas

- [Cambiar el nombre de la red Wi-Fi][1] de la MoodleBox.
- Hacer accesible la MoodleBox [desde una red cableada Ethernet][2].

 [1]: {{< relref "help/wi-fi-configuration" >}}
 [2]: {{< relref "help/access-via-ethernet" >}}
 [3]: {{< relref "help/https-connection" >}}
