---
title: Acceder a la interfaz de línea de comandos de MoodleBox
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
type: kb
date: 2017-04-20
lastmod: 2018-04-10
description: Si es necesario, puede conectarse al sistema operativo MoodleBox a través de SSH
slug: interfaz-de-linea-de-comandos
categories_weight: 15
categories:
  - Mantenimiento
  - Utilización
---
Como usuario normal, no debería necesitar conectarse a la interfaz de línea de comandos de MoodleBox. De todas formas, puedes acceder a ella si es necesario vía SSH, usando la dirección __moodlebox.home__, usando sus credenciales por defecto:

  * nombre de usuario: __moodlebox__
  * contraseña: __Moodlebox4$__

### Con PuTTY (bajo Windows)

Abra una nueva conexión, escriba la dirección __moodlebox.home__ en _Nombre de host_ y haga clic en _Abrir_. Introduce la contraseña __Moodlebox4$__.

{{< figure src="/img/media/putty-moodlebox.png" title="Conexión con PuTTY" class="centered-image" width="516" >}}

### En una interfaz de terminal clásica

En su interfaz de terminal favorita, escriba

```bash
ssh moodlebox@moodlebox.home
```

y escribe la contraseña __Moodlebox4$__.

El nombre de host de MoodleBox es __moodlebox__. Su nombre de dominio completo (_FQDN_) es __moodlebox.home__.
