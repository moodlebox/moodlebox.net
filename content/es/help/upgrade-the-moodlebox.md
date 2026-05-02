---
title: Actualización del sistema MoodleBox
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
type: kb
date: 2017-12-22
lastmod: 2026-05-02
description: Siga las siguientes instrucciones para actualizar regularmente su sistema MoodleBox mediante vía acceso a la línea de comandos
keywords:
  - shell
  - ssh
  - línea de comandos
  - sistema operativo
  - cli
  - debian
  - rpios
slug: actualizacion
categories:
  - Mantenimiento
aliases:
  - actualizar-la-moodlebox
---
Como medida de seguridad rutinaria, se recomienda actualizar regularmente el software del servidor y el sistema operativo Raspberry Pi OS en la MoodleBox para parchear vulnerabilidades encontradas en la distribución del SO y para corregir otros bugs descubiertos.

Para esta operación, la MoodleBox debe estar conectada a Internet mediante un cable Ethernet.

### Cómo proceder

  1. Conéctate a [la interfaz de línea de comandos de la MoodleBox][1] vía SSH, usando tus credenciales. Aquí están las [credenciales por defecto][2].
  2. Conecta la MoodleBox con un cable Ethernet a una red local con acceso a Internet.
  3. Escriba el siguiente comando en la interfaz de terminal:

      ```bash
      sudo apt-get update && sudo apt-get full-upgrade -y
      ```
      y confirma con Retorno.
  4. Esta operación tardará un par de minutos. La duración depende del número de softwares a actualizar, de tu ancho de banda de Internet y de la calidad de tu tarjeta microSD.
  5. Al final del proceso de actualización, escriba `exit` y confirme con "Return".

 [1]: {{< relref "help/command-line-access" >}}
 [2]: {{< relref "help/credentials" >}}
