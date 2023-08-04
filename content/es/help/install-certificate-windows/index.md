---
title: Instalación del certificado raíz en Windows
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
type: kb
date: 2019-11-17
lastmod: 2022-08-14
description: Para conectarse a MoodleBox a través de HTTPS sin que aparezca una ventana de advertencia, es necesario instalar el certificado raíz de MoodleBox.
slug: root-certificate-install-windows
categories_weight: 90
categories:
  - Utilización
---
Para conectarse a MoodleBox a través de HTTPS sin que aparezca una ventana de advertencia, es necesario instalar el certificado raíz de MoodleBox (o certificado CA). Este certificado, emitido por el [proyecto MoodleBox][project] como autoridad de certificación, permite al navegador asegurarse de que el certificado del sitio web de MoodleBox es válido.

### Instalación del certificado raíz en Windows (Edge y Chrome)

1. Inicie Edge o Chrome, acceda a la [página de inicio de MoodleBox][moodlebox], haga clic en el enlace _Instalar certificado CA raíz_ y, a continuación, _Abrir_.
  {{< figure src="download-CA-cert.png" title="Descargar certificado CA" width="313" class="centered-image" >}}
2. En la ventana _¿Desea abrir este archivo?_, haga clic en _Abrir_.
3. En la ventana _Certificado_, haga clic en _Instalar certificado.._.
4. Aparecerá el Asistente para la importación de certificados. Seleccione _Máquina local_ y haga clic en _Siguiente_.
5. Permita que el programa realice cambios en su máquina, haciendo clic en _Sí_.
6. En la ventana _Almacén de certificados_, seleccione _Colocar todos los certificados en el siguiente almacén_ y, a continuación, haga clic en _Buscar..._.
7. Seleccione _Autoridades de certificación raíz de confianza_ y haga clic en _Aceptar_.
8. Complete la instalación haciendo clic en _Siguiente_ y, a continuación, en _Finalizar_.

#### Screencast de la instalación del certificado raíz en Windows

{{< video src="windows-ca-cert-screencast" width="90%" >}}

### Root certificate installation on Firefox (Windows)

1. Inicie Firefox, acceda a la [página de inicio de MoodleBox][moodlebox] y haga clic en el enlace _Instalar certificado CA raíz_.
2. En la ventana que se muestra ahora, marca la casilla _Confiar en esta CA para identificar sitios web_ y haz clic en Aceptar.
  {{< figure src="firefox-ca-cert.png" title="Configuración del certificado CA para Firefox" width="650" class="centered-image" >}}

  [project]: {{< relref "/project" >}}
  [moodlebox]: http://moodlebox.home/
