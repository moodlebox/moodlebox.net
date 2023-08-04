---
title: Gestionar la base de datos de Moodle
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
type: kb
date: 2017-04-20
lastmod: 2022-08-14
description: Para acceder a la base de datos de MoodleBox Moodle utilizando Adminer, consulte la siguiente información.
slug: acceso-a-la-base-de-datos-manager-interface
categories:
  - Mantenimiento

---
MoodleBox permite el acceso a la base de datos de Moodle con fines de administración, a través del software [Adminer][3]. Para acceder a la interfaz de inicio de sesión, escriba la siguiente URL [http://moodlebox.home/adminer.php][1] en la barra de direcciones de su navegador, y escriba las credenciales que aparecen a continuación. Por supuesto, la contraseña es diferente si la ha cambiado.

  * Nombre de usuario: __moodlebox__
  * Contraseña: __Moodlebox4$__

{{< figure src="adminer.png" width="560" title="Acceso a la base de datos con Adminer" class="centered-image" >}}

{{< notice info >}}
Se recomienda encarecidamente no cambiar manualmente la base de datos de Moodle a menos que sepa exactamente lo que está haciendo. En cualquier caso, __no se proporciona soporte__ sobre este tema y no nos hacemos responsables de ninguna pérdida de datos.
{{< /notice >}}

 [1]: http://moodlebox.home/adminer.php
 [2]: http://moodlebox.home/phpmyadmin
 [3]: https://www.adminer.org/
