---
title: Utilizar el portal cautivo Wi-Fi de MoodleBox
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
type: kb
date: 2019-05-20
lastmod: 2019-05-20
description: MoodleBox dispone de un portal cautivo para su red Wi-Fi, que permite dirigir a los clientes inalámbricos a la página de inicio de MoodleBox.
slug: portal-cautivo
categories_weight: 85
categories:
  - Utilización

---
{{< notice note >}}
Esta función está disponible a partir de la __versión 2.7.0__ de MoodleBox.
{{< /notice >}}

La MoodleBox contiene un [portal cautivo][1] totalmente configurado, basado en software libre [Nodogsplash][2], para dirigir a los usuarios que se conectan a su red inalámbrica a la página de inicio de la MoodleBox.

El portal cautivo __no está activado__ por defecto. Si desea activarlo, simplemente ejecute el siguiente comando después de [acceder a la interfaz de línea de comandos de MoodleBox][3].
```bash
sudo systemctl start nodogsplash
```
Para detener el portal cautivo, se debe utilizar el siguiente comando.
```bash
sudo systemctl stop nodogsplash
```
Cuando la MoodleBox se inicia de nuevo, el estado activo o inactivo del portal cautivo sigue siendo el que se seleccionó la última vez.

{{< notice info >}}
El portal cautivo sólo funciona __si la MoodleBox está conectada a Internet__. En caso contrario, los usuarios [que se conecten a la red Wi-Fi]({{< relref "help/wi-fi-connection" >}}) de la MoodleBox no serán interceptados por el portal cautivo.
{{< /notice >}}

 [1]: https://en.wikipedia.org/wiki/Captive_portal
 [2]: https://nodogsplashdocs.readthedocs.io/
 [3]: {{< relref "help/command-line-access" >}}
 [4]: {{< relref "help/wi-fi-connection" >}}
