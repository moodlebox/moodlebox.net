---
title: Acceso a MoodleBox a través de Ethernet
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
type: kb
date: 2017-12-23
lastmod: 2023-01-20
description: Es posible configurar su red local para acceder a la MoodleBox a través de una conexión Ethernet
slug: acceso-moodlebox-via-ethernet
categories_weight: 80
categories:
  - Utilización
aliases:
  - cómo-acceder-al-moodlebox-vía-ethernet

---
La MoodleBox no está pensada para servir a dispositivos cliente a través de Ethernet. Sin embargo, es posible acceder a ella a través de Ethernet con un poco de trabajo extra.

La plataforma Moodle sólo funciona correctamente si es llamada a través de su nombre de dominio __moodlebox.home__. Por defecto, sin embargo, este nombre de dominio no es conocido en la red Ethernet, ¡y aquí es donde radica la dificultad!

{{< notice info >}}
Debido a la diversidad de hardware instalado en los hogares de los usuarios, __no se puede proporcionar soporte__ para la configuración de su router o dispositivo. Realice dichos cambios sólo si realmente sabe lo que está haciendo.
{{< /notice >}}

### Configure el servidor DNS de su router.

Es necesario que en su red Ethernet, el nombre de dominio __moodlebox.home__ esté asignado a la MoodleBox. Esto requiere un servidor DNS en su red Ethernet (por ejemplo, en su router). Este servidor DNS asignará el nombre de dominio a la dirección IP numérica de su MoodleBox. La dirección IP numérica es a su vez distribuida por el servidor DHCP del router (normalmente es algo como 192.168.1.143).

Una vez realizado este cambio, los dispositivos cliente de la red cableada pueden acceder fácilmente a la MoodleBox (sin necesidad de recordar su dirección IP numérica) usando http://moodlebox.home/, y la instancia Moodle de la MoodleBox responderá correctamente. Los dispositivos que se conectan vía Wi-Fi también pueden seguir haciéndolo.

Si sólo necesitas acceder a la MoodleBox a través de Ethernet vía SSH, puedes hacerlo usando su dirección IP numérica, sin requerir ninguna modificación.

El nombre de host de la MoodleBox es __moodlebox__. Su nombre de dominio completo (_FQDN_) es __moodlebox.home__.

### Actualizando el fichero de configuración `hosts` en tu ordenador

Otra forma de asignar el nombre de dominio a la dirección IP numérica de MoodleBox es usar el archivo de configuración `hosts`, que está disponible en algún lugar del sistema operativo de tu ordenador. No debes __cambiar__ la parte superior del fichero bajo ningún concepto, pero puedes añadir unas líneas más abajo.

Después de haber añadido la sección de abajo, con la dirección IP real de tu MoodleBox, deberías poder acceder a la página de inicio de Moodlebox __moodlebox.home__ en el navegador de tu ordenador.

```bash
##
# Host Base de datos
#
# localhost se usa para configurar la interfaz loopback
# cuando el sistema esta arrancando.  No cambie esta entrada.
##
127.0.0.1 localhost
255.255.255.255 broadcasthost
::1 localhost
##
# Conexión de MoodleBox vía Ethernet
# MoodleBox debe obtener una dirección ip vía dhcp
192.168.1.143 moodlebox.home moodlebox
```
