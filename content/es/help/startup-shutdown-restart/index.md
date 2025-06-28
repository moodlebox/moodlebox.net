---
title: Encendido, apagado y reinicio de MoodleBox
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
type: kb
date: 2017-04-20
lastmod: 2025-06-28
description: Si quieres saber cómo iniciar, apagar o reiniciar correctamente tu MoodleBox, aquí tienes la información deseada
slug: inicio-apagado-reinicio
categories_weight: 1
categories:
  - Mantenimiento
  - Utilización

---
#### Encendido

Inserta tu tarjeta microSD en la ranura de la Raspberry Pi, enciéndela y conéctala a la red mediante un cable Ethernet. El LED rojo se enciende, y después de unos segundos el LED verde se enciende de forma intermitente.

{{< figure src="/img/media/pi-plug-in.gif" title="Startup" class="centered-image" width="600" >}}

No hay ninguna otra manipulación que hacer: tras el arranque, tu MoodleBox está lista y totalmente funcional.

Si es posible, se recomienda conectar la MoodleBox vía Ethernet a la red en cada arranque. Así, las tareas de mantenimiento que requieran una conexión a Internet (por ejemplo la sincronización del reloj interno) se realizarán correctamente.

#### Apagado

La interfaz gráfica de la MoodleBox le permite parar y reiniciar la MoodleBox de forma segura.

Inicie sesión en la instancia Moodle de la MoodleBox y visite [Administración del sitio > Servidor > MoodleBox][1] en la interfaz de administración.

{{< figure src="restart-shutdown-en.png" title="Apagar y reiniciar" class="centered-image" width="735" >}}

En la sección __Reiniciar y apagar__, la interfaz muestra dos botones que permiten reiniciar y apagar MoodleBox. Pulsa sobre el botón __Apagar MoodleBox__, espera unos segundos y comprueba que el LED verde ya esté encendido. Ya puede desenchufar la fuente de alimentación de forma segura.

{{< notice tip >}}
Para minimizar el riesgo de corrupción de datos en la tarjeta microSD, no se recomienda desenchufar la fuente de alimentación sin tener cuidado de apagar la MoodleBox. Es preferible controlar manualmente su apagado de antemano.
{{< /notice >}}

#### Reiniciar

Inicie sesión en la instancia Moodle de la MoodleBox y visite [Administración del sitio > Servidor > MoodleBox][1] en la interfaz de administración.

Haga clic en el botón __Reiniciar MoodleBox__. Espere unos segundos y la MoodleBox volverá a estar disponible.

### Instalar un botón hardware de encendido y apagado

Es posible instalar un botón hardware para apagar e iniciar la MoodleBox. La MoodleBox permite el uso de dicho botón sin ningún cambio en la configuración.

La instalación de un botón hardware es muy sencilla: basta con comprar un botón, por ejemplo [este botón capacitivo][3], y conectarlo a los pines del puerto GPIO de la MoodleBox (pines 5 y 6) mediante [jumpers][4] (ver la imagen de abajo, gracias a Laurent Fleron), luego reiniciar la MoodleBox.

{{< figure src="/img/media/hardware-button.jpg" title="Botón hardware" class="centered-image" width="400" >}}

 [1]: http://moodlebox.home/admin/tool/moodlebox/index.php
 [3]: https://www.aliexpress.com/item/32713062171.html
 [4]: https://www.aliexpress.com/item/32800215149.html
