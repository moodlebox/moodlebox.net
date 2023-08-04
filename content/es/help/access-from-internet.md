---
title: Hacer accesible MoodleBox desde Internet
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
type: kb
date: 2018-09-30
lastmod: 2020-01-06
description: Esta guía explica cómo hacer una MoodleBox directamente accesible desde Internet. Tenga en cuenta que esto implica importantes riesgos de seguridad.
slug: acceso-desde-internet
categories_weight: 95
categories:
  - Utilización

---
Es posible configurar una MoodleBox para hacerla accesible directamente desde Internet, siempre que se tengan __muy buenos conocimientos__ en administración de sistemas.

La MoodleBox no fue diseñada para proporcionar una plataforma Moodle permanentemente accesible desde Internet, como suele ser el caso de un servidor Moodle. Sin embargo, para casos de uso específicos, esta característica puede ser útil.

{{< notice warning >}}
La MoodleBox está construida en un ordenador de bajo rendimiento. Podría sobrecargarse rápidamente y __volverse muy lenta__, o incluso congelarse totalmente en caso de una cantidad masiva de visitantes.

La disponibilidad de una MoodleBox en la web __implica importantes riesgos de seguridad__. En particular, el servidor puede ser atacado e inutilizado por diversos medios. Cambie todas las contraseñas de MoodleBox antes de realizar estas modificaciones.

Las operaciones descritas en esta página pueden __dejar su MoodleBox inutilizable__, requiriendo el borrado completo de la tarjeta SD y la __pérdida de todos los datos__ (contenidos de los cursos, plug-ins instalados, configuraciones personalizadas, etc.). Haga esto sólo si sabe exactamente lo que está haciendo. En cualquier caso, __no se proporciona soporte__ sobre este tema.

No aceptamos ninguna responsabilidad por cualquier daño directo o indirecto causado por el uso de la MoodleBox, en particular después de un cambio en la configuración con el fin de exponer la MoodleBox en Internet.
{{< /notice >}}

### Requisitos

Los siguientes elementos son necesarios para que su MoodleBox sea accesible desde Internet:

1. Un __nombre de dominio__ válido, para el que tenga derechos administrativos, por ejemplo `ejemplo.com`;
1. Una __dirección IP fija__ o una configuración __[DNS dinámico][1]__ funcional;
1. La MoodleBox debe estar conectada a su red o router mediante un cable Ethernet.

{{< notice info >}}
Esta documentación no explica cómo gestionar un nombre de dominio, cómo obtener una dirección IP fija o cómo configurar un DNS dinámico. Consulte a su proveedor de servicios de Internet para obtener más información.
{{< /notice >}}

### Cómo proceder

#### Paso 1 - Cambie el nombre de dominio de su MoodleBox

Lea la [página de documentación relacionada][2]. Especifique el nombre de dominio para el que tiene derechos administrativos. También es posible utilizar un subdominio, por ejemplo: `aprender.ejemplo.com`.

{{< notice tip >}}
Este paso es crucial, ya que configura [domain name masquerading](https://docs.moodle.org/en/Masquerading), necesario para que Moodle funcione correctamente.
{{< /notice >}}

#### Paso 2 - Permitir el tráfico web a la MoodleBox

Como medida de seguridad, sólo tu router es visible desde Internet; ningún dispositivo de tu red local puede ser alcanzado. Por lo tanto, es necesario configurar su router para que transmita a su MoodleBox el tráfico web que le llega.

Debe realizar las acciones necesarias en su router. Consulte la documentación proporcionada por su proveedor de servicios. Debido a la diversidad de hardware instalado entre los usuarios, no se puede proporcionar soporte para la configuración de su router. Realice estos cambios sólo si realmente sabe lo que está haciendo.

1. Identifique la dirección IP pública de su router, por ejemplo `182.83.142.233`.
1. Identifique la dirección IP privada dada a su MoodleBox por su router, por ejemplo `192.168.1.226`, usando el comando `hostname -I` en su MoodleBox.
1. En su router, asigne permanentemente esta dirección a su MoodleBox (no es obligatorio, pero se recomienda).
1. En su router, redirija el tráfico web del puerto 80 (http) a la MoodleBox (redireccionamiento de puertos). Si quieres administrar tu MoodleBox desde Internet, redirecciona también el puerto 22 (ssh).

#### Paso 3 - Configurar el servidor de nombres de dominio

En su proveedor de nombres de dominio, asocie la dirección pública de su router, por ejemplo `182.83.142.233`, con el nombre de dominio deseado, por ejemplo `aprender.ejemplo.com`. Consulte la documentación facilitada por su proveedor de nombres de dominio.

Si no dispone de una dirección IP fija, configure el DNS dinámico.

#### Paso 4 - Reforzar la seguridad

Este paso no es obligatorio. Sin embargo, es __muy recomendable__.

1. Cambie todas las contraseñas de MoodleBox, utilizando contraseñas seguras:
    - utilizando el panel de control de MoodleBox para la contraseña principal y la contraseña Wi-Fi,
    - a través del perfil de la cuenta de usuario administrador en Moodle.
2. Imponga contraseñas seguras para todas las cuentas de usuario de Moodle.
3. Instala [fail2ban][3] en tu MoodleBox. Este software permite bloquear algunos ataques sistemáticos contra servidores expuestos en Internet.
4. [Habilitar HTTPS][4] en el servidor web nginx de la MoodleBox, utilizando por ejemplo certificados LetsEncrypt.  En este caso, no olvides redirigir el tráfico del puerto 443 (https) a tu router (ver más arriba).

 [1]: https://en.wikipedia.org/wiki/Dynamic_DNS
 [2]: {{< relref "help/domain-name-change" >}}
 [3]: https://www.fail2ban.org/
 [4]: https://github.com/moodlebox/moodlebox/issues/27#issuecomment-326818647
 [5]: https://docs.moodle.org/en/Masquerading
