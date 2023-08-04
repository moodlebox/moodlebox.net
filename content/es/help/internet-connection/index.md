---
title: Conectar el Moodlebox a Internet
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
type: kb
date: 2017-04-20
lastmod: 2022-08-14
description: Esta guía explica cómo proporcionar una conexión a Internet a los usuarios conectados vía Wi-Fi a una MoodleBox.
slug: conexión a internet
categories_weight: 9
categories:
  - Utilización

---
Es muy fácil proporcionar una conexión a Internet a los usuarios conectados de forma inalámbrica a una MoodleBox.

Basta con conectar la MoodleBox con un cable Ethernet a una red que tenga acceso a Internet. Tan pronto como la conexión esté disponible, los dispositivos conectados vía Wi-Fi a la MoodleBox tendrán acceso a Internet.

Sin embargo, si desea utilizar la MoodleBox __sin conexión a Internet__, por ejemplo para actividades como un juego de escape o evaluaciones en las que no se desea que los estudiantes tengan acceso a Internet, simplemente desconecte el cable Ethernet de la MoodleBox. Sin una conexión de cable Ethernet, los dispositivos conectados vía Wi-Fi sólo pueden acceder a los recursos disponibles en la MoodleBox.

{{< notice tip >}}
A partir de la versión 3.5.2 de la imagen de MoodleBox, la información sobre si un cable Ethernet está conectado se muestra en el [panel de control de MoodleBox]({{< relref "help/info-moodlebox" >}}).

También se muestra el nombre de la interfaz, normalmente `eth0`, así como la dirección IP de la MoodleBox, obtenida mediante DHCP, y la dirección de la puerta de enlace predeterminada.
{{< /notice >}}

{{< figure src="ethernet-connexion.png" title="Cable Ethernet conectado" class="centered-image" width="710" >}}

Echa un vistazo a la [topología de red de MoodleBox][1] para más información sobre esto.

 [1]: {{< relref "help/network-topology" >}}
 [2]: {{< relref "help/info-moodlebox" >}}
