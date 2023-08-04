---
title: Proporcionar archivos en el Moodlebox
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
type: kb
date: 2017-04-20
lastmod: 2022-08-14
description: MoodleBox facilita la puesta a disposición de archivos a sus usuarios, utilizando los métodos que se describen a continuación
slug: usando-archivos-con-la-moodlebox
categories_weight: 7
categories:
  - Utilización

---
### Archivos en una memoria USB

Cuando se inserta una memoria USB en uno de los puertos USB de MoodleBox, todos los archivos de la memoria están automáticamente disponibles para los administradores y profesores en el selector de archivos de Moodle, a través de un repositorio llamado __USB Drive__.

{{< figure src="usb-drive.png" title="repositorio USB Drive" class="centered-image" width="650" >}}

Si se insertan varias memorias USB en la MoodleBox, sólo estarán disponibles los archivos de la primera insertada.

La MoodleBox maneja los siguientes formatos: FAT32, VFAT, ext2, ext3, ext4, NTFS, exFAT y HFS+.

{{< notice tip >}}
En lugar de una memoria USB, también se puede conectar un disco duro USB (o SSD) a la MoodleBox y ponerlo a disposición a través del repositorio __USB Drive__. Tenga en cuenta que un disco duro USB puede necesitar más energía de la que proporciona el puerto USB de la MoodleBox y requerir una fuente de alimentación externa.
{{< /notice >}}

### Archivos vía SFTP

Los archivos subidos a la MoodleBox vía SFTP, en la carpeta llamada __files__, también están disponibles para administradores y profesores en el selector de archivos de Moodle, a través de un repositorio llamado __SFTP Documents__.

{{< figure src="sftp-documents.png" title="Repositorio de Documentos SFTP" class="centered-image" width="650" >}}

Para subir los archivos, utilice un software como [FileZilla][1], [Cyberduck][2], [WinSCP][3] o [Documents][4] y utilice las siguientes credenciales:

  * nombre de usuario: __moodlebox__
  * Contraseña: __Moodlebox4$__

{{< notice note >}}
Por razones de seguridad, no es posible la conexión a través de FTP. Debe utilizarse el protocolo SFTP (FTP seguro, puerto 22).
{{< /notice >}}

 [1]: https://filezilla-project.org/
 [2]: https://cyberduck.io/
 [3]: http://winscp.net/
 [4]: https://readdle.com/products/documents/
