---
title: Root certificate installation on Windows
authors:
  - Nicolas Martignoni
type: kb
date: 2019-11-17
lastmod: 2019-11-17
description: To connect to the MoodleBox via HTTPS without displaying a warning window, it is necessary to install MoodleBox root certificate.
slug: root-certificate-install-windows
categories_weight: 90
categories:
  - Usage
---
To connect to the MoodleBox via HTTPS without displaying a warning window, it is necessary to install the MoodleBox root certificate (or CA certificate). This certificate, issued by the [MoodleBox project][project] as a certification authority, allows the browser to ensure that the certificate on the MoodleBox website is valid.

### Root certificate installation on Windows (Edge and Chrome)

1. Launch Edge or Chrome, access [MoodleBox home page][moodlebox], click link _Install root CA certificate_, then _Open_.
  {{< figure src="download-CA-cert.png" title="Download CA certificate" width="380" >}}
2. In window _Do you want to open this file?_, click _Open_.
3. In _Certificate_ window, click _Install Certificate…_.
4. This will bring up the Certificate Import Wizard. Select _Local Machine_, then click _Next_.
5. Allow the program to make changes to your machine, clicking _Yes_.
6. In _Certificate store_ window, select _Place all certificates in the following store_, then click _Browse…_.
7. Select the _Trusted Root Certification Authorities_, then click _OK_.
8. Complete installation by clicking _Next_, then click _Finish_.

#### Screencast of root certificate installation on Windows

{{< video src="windows-ca-cert-screencast" width="90%" >}}

### Root certificate installation on Firefox (Windows)

1. Launch Firefox, access [MoodleBox home page][moodlebox] and click link _Install root CA certificate_.
2. In the window that is now displayed, check the box _Trust this CA to identify websites_ and click OK.
  {{< figure src="firefox-ca-cert.png" title="CA certificate configuration for Firefox" width="650" >}}

  [project]: {{< relref "/project" >}}
  [moodlebox]: http://moodlebox.home/
