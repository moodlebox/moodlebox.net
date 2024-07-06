---
title: Actualizar MoodleBox
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
type: kb
date: 2017-12-22
lastmod: 2024-07-06
description: Siga las siguientes instrucciones para actualizar regularmente su MoodleBox
keywords:
  - shell
  - ssh
  - línea de comandos
  - sistema operativo
  - cli
slug: actualizar-la-moodlebox
categories:
  - Mantenimiento
---
Como medida de seguridad rutinaria, se recomienda actualizar regularmente el software del servidor en la MoodleBox para parchear vulnerabilidades encontradas en la distribución del SO Raspberry Pi y para corregir otros bugs descubiertos.

Para esta operación, la MoodleBox debe estar conectada a Internet mediante un cable Ethernet.

### Actualización del software de la MoodleBox

  1. Conéctate a [la interfaz de línea de comandos de la MoodleBox][1] vía SSH, usando tus credenciales. Aquí están las [credenciales por defecto][2].
  2. Conecta la MoodleBox con un cable Ethernet a una red local con acceso a Internet.
  3. Escriba el siguiente comando en la interfaz de terminal:

      ```bash
      sudo apt-get update && sudo apt-get dist-upgrade -y
      ```
      y confirma con Retorno.
  4. Esta operación tardará un par de minutos. La duración depende del número de softwares a actualizar, de tu ancho de banda de Internet y de la calidad de tu tarjeta microSD.
  5. Al final del proceso de actualización, escriba "exit" y confirme con "Return".

 [1]: {{< relref "help/command-line-access" >}}
 [2]: {{< relref "help/credentials" >}}
