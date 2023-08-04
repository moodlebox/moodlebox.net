---
title: Instalación del certificado raíz en macOS
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
type: kb
date: 2019-11-17
lastmod: 2022-08-14
description: Para conectarse a MoodleBox a través de HTTPS sin que aparezca una ventana de advertencia, es necesario instalar el certificado raíz de MoodleBox.
slug: certificado-raiz-instalar-macos
categories_weight: 90
categories:
  - Utilización
---
Para conectarse a MoodleBox a través de HTTPS sin que aparezca una ventana de advertencia, es necesario instalar el certificado raíz de MoodleBox (o certificado CA). Este certificado, emitido por el [proyecto MoodleBox][project] como autoridad de certificación, permite al navegador asegurarse de que el certificado del sitio web de MoodleBox es válido.

### Instalación del certificado raíz en macOS (Safari y Chrome)

1. Descargue el certificado CA desde la [página de inicio de MoodleBox][moodlebox] haciendo clic en el enlace _Instalar certificado CA raíz_. El archivo `moodleboxCA.crt` se guarda en la carpeta _Descargas_ de tu ordenador.
  {{< figure src="download-CA-cert.png" title="Descargar certificado CA" width="313" class="centered-image" >}}
2. Abra la carpeta _Descargas_ y haga doble clic en el archivo `moodleboxCA.crt` para guardarlo en _Keychain Access_, ya sea en el llavero _sesión_ o en el llavero _sistema_. Para que el certificado esté disponible para todos los usuarios del ordenador, elige el llavero _Sistema_.
4. En _Acceso a Llaveros_, seleccione el llavero donde guardó el certificado y, a continuación, haga doble clic en el certificado _MoodleBox Root CA_.
5. Expanda la sección _Confianza_.
6. Establezca la opción _Al utilizar este certificado_ en __Confiar siempre__.
  {{< figure src="trust-CA-cert-fr.png" title="Configuración de confianza del certificado CA" width="650" class="centered-image" >}}
7. Cierre la ventana y escriba su contraseña.

#### Screencast de la instalación del certificado raíz en macOS

{{< video src="macos-ca-cert-screencast" width="90%" >}}

### Instalación del certificado raíz en Firefox (macOS)

1. Inicie Firefox, acceda a la [página de inicio de MoodleBox][moodlebox] y haga clic en el enlace _Instalar certificado CA raíz_.
2. En la ventana que se muestra ahora, marque la casilla _Confiar en esta CA para identificar sitios web_ y haga clic en Aceptar.
  {{< figure src="firefox-ca-cert.png" title="Configuración del certificado CA para Firefox" width="650" class="centered-image" >}}

  [project]: {{< relref "/project" >}}
  [moodlebox]: http://moodlebox.home/
