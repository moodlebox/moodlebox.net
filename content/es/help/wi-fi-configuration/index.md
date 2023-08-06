---
title: Actualizar la configuración de la red Wi-Fi de MoodleBox
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
type: kb
date: 2017-08-12
lastmod: 2022-08-15
description: Es posible cambiar varios ajustes de la configuración WiFi del punto de acceso de la MoodleBox.
slug: actualizar-configuracion-wifi
categories_weight: 6
categories:
  - Primeros pasos
  - Mantenimiento
---
Cuando la MoodleBox está encendida, funciona como un punto de acceso inalámbrico. Un administrador o gestor puede cambiar varios ajustes de la configuración Wi-Fi del punto de acceso de la MoodleBox. Para ello, visite el panel de control de MoodleBox en [Administración del sitio > Servidor > MoodleBox][1] en la interfaz de administración.

{{< figure src="wifi-settings.png" title="Ajustes Wi-Fi" width="750" class="centered-image" >}}

### Cambiar el nombre de la red Wi-Fi (SSID)

Puede cambiar el nombre de la red (SSID). Escriba un nuevo SSID en el campo adecuado y pulse el botón __Cambiar configuración Wi-Fi__. Es posible introducir SSIDs con caracteres especiales como emojis, incluyendo espacios.

{{< notice info >}}
SSID debe ser una cadena de al menos 1 byte y como máximo 32 bytes. Recuerda que algunos caracteres, como los emojis, utilizan más de un byte.
{{< /notice >}}

### Hide the Wi-Fi network

It is possible to hide the MoodleBox's Wi-Fi network by checking the __Hidden Wi-Fi Network__ box.

{{< notice tip >}}
Cuando la red Wi-Fi está oculta, es difícil saber que hay una MoodleBox activa en la zona. Habilite esta opción solo si está seguro de lo que hace, ya que los usuarios probablemente tendrán más problemas para encontrar la MoodleBox.
{{< /notice >}}

### Cambiar el canal del punto de acceso Wi-Fi

Para cambiar el canal Wi-Fi del punto de acceso inalámbrico de la MoodleBox, seleccione un número de canal y haga clic en el botón __Cambiar configuración Wi-Fi__.

### Cambiar el país regulador Wi-Fi del punto de acceso

Para cambiar el país regulador Wi-Fi del punto de acceso inalámbrico de la MoodleBox, seleccione un país de la lista desplegable y haga clic en el botón __Cambiar configuración Wi-Fi__.

{{< notice info >}}
Los canales Wi-Fi autorizados dependen del país de regulación. En función del país seleccionado, algunos canales dejarán de estar disponibles.
{{< /notice >}}

### Eliminar o cambiar la contraseña de la red Wi-Fi

Para facilitar el acceso al punto de acceso Wi-Fi de la MoodleBox, es posible permitir su acceso sin contraseña. Para ello, desmarque la casilla __Contraseña de red Wi-Fi protegida__. Puede volver a marcarla en cualquier momento.

También es posible cambiar la contraseña del punto de acceso Wi-Fi de la MoodleBox. Para ello, escriba una nueva contraseña en el campo adecuado. La contraseña debe tener entre 8 y 63 caracteres. Si no introduce una contraseña válida, se restablecerá la contraseña por defecto __moodlebox__.

### Cambiar la dirección IP estática de la red Wi-Fi

Para evitar colisiones con la red LAN existente, es posible cambiar la dirección IP estática de la red Wi-Fi de MoodleBox, actualizando el campo correspondiente.

Sólo se permiten [direcciones IP privadas][private], y MoodleBox utilizará siempre una dirección terminada en `.1`, por ejemplo `192.168.100.1`, aunque la dirección introducida sea `192.168.100.100`.

Las direcciones IP entregadas por DHCP a los clientes Wi-Fi estarán en el rango de la red privada especificada. Por ejemplo, si la dirección introducida es `172.28.10.1`, las direcciones asignadas estarán en el rango `172.28.10.10-172.28.10.254`.

 [1]: http://moodlebox.home/admin/tool/moodlebox/index.php
 [private]: https://en.wikipedia.org/wiki/Private_network
