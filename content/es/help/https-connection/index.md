---
title: Cambiar MoodleBox a HTTPS
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
type: kb
date: 2019-11-17
lastmod: 2022-10-25
description: MoodleBox puede ser configurado para soportar conexiones seguras vía HTTPS. Esta configuración requiere la intervención manual de una persona con conocimientos técnicos.
slug: conexion-https
categories_weight: 90
categories:
  - Mantenimiento
aliases:
  - connexion-https
---
El siguiente procedimiento se puede utilizar para configurar la MoodleBox para proporcionar conexiones seguras a través de HTTPS. Una vez hecho esto, __ya no será posible conectarse a través de HTTP__.

1. Acceda a la [interfaz de línea de comandos de MoodleBox][ssh-connect] (a través de SSH).
2. Edite el archivo `/var/www/moodle/config.php`, por ejemplo escribiendo el comando `nano /var/www/moodle/config.php`. Cambia la línea que empieza por `$CFG->wwwroot`, sustituyendo `http://` por `https://` en la dirección `http://moodlebox.home`, y guarda.
3. Edite el archivo `/etc/nginx/sites-available/default`, por ejemplo, escribiendo el comando `sudo nano /etc/nginx/sites-available/default`. De acuerdo con las instrucciones de este archivo, descomente las líneas relevantes y, a continuación, guárdelas.
4. Reinicie.
5. Prueba cargando la URL https://moodlebox.home en tu navegador favorito.

{{< notice note >}}
Una vez completada la configuración, los dispositivos que se conecten a través de HTTPS verán una ventana de advertencia indicando que el certificado de MoodleBox no es válido. Para eliminar esta advertencia, __cada dispositivo__ debe instalar el certificado raíz de MoodleBox.

Para más información sobre este tema, consulte [Instalar el certificado raíz en dispositivos cliente](#instalar-el-certificado-raíz-en-dispositivos-cliente) más abajo.
{{< /notice >}}

### Instalación del certificado raíz en los dispositivos cliente

Para conectarse a MoodleBox a través de HTTPS sin que aparezca una ventana de advertencia, es necesario instalar el certificado raíz de MoodleBox (o certificado CA). Este certificado, emitido por el [proyecto MoodleBox][project] como autoridad de certificación, permite al navegador asegurarse de que el certificado del sitio web de MoodleBox es válido.

La instalación del certificado CA depende del navegador y del sistema operativo.

- [Instalación en macOS]({{< relref "help/install-certificate-macos" >}})
- [Instalación en Windows]({{< relref "help/install-certificate-windows" >}})

[project]: {{< relref "/project" >}}
[ssh-connect]: {{< relref "help/command-line-access" >}}
