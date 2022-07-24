---
title: Root certificate installation on macOS
authors:
  - Nicolas Martignoni
type: kb
date: 2019-11-17
lastmod: 2019-11-17
description: To connect to the MoodleBox via HTTPS without displaying a warning window, it is necessary to install MoodleBox root certificate.
slug: root-certificate-install-macos
categories_weight: 90
categories:
  - Usage
---
To connect to the MoodleBox via HTTPS without displaying a warning window, it is necessary to install the MoodleBox root certificate (or CA certificate). This certificate, issued by the [MoodleBox project][project] as a certification authority, allows the browser to ensure that the certificate on the MoodleBox website is valid.

### Root certificate installation on macOS (Safari et Chrome)

1. Download the CA certificate from the [MoodleBox homepage][moodlebox] by clicking link _Install root CA certificate_. The file `moodleboxCA.crt` is saved in _Downloads_ folder of your computer.
  {{< figure src="download-CA-cert.png" title="Download CA certificate" width="380" >}}
2. Open folder _Downloads_ and double-click on file `moodleboxCA.crt` to save it in _Keychain Access_, either in the _session_ keychain or in the _System_ keychain. To make the certificate available to all computer users, choose the _System_ keychain.
4. In _Keychain Access_, select the keychain where you saved the certificate, then double-click certificate _MoodleBox Root CA_.
5. Expand section _Trust_.
6. Set option _When using this certificate_ to __Always trust__.
  {{< figure src="trust-CA-cert-fr.png" title="CA certificate trust setting" width="650" >}}
7. Close the window and type your password.

#### Screencast of root certificate installation on macOS

{{< video src="macos-ca-cert-screencast" width="90%" >}}

### Root certificate installation on Firefox (macOS)

1. Launch Firefox, access [MoodleBox home page][moodlebox] and click link _Install root CA certificate_.
2. In the window that is now displayed, check the box _Trust this CA to identify websites_ and click OK.
  {{< figure src="firefox-ca-cert.png" title="CA certificate configuration for Firefox" width="650" >}}

  [project]: {{< relref "/project" >}}
  [moodlebox]: http://moodlebox.home/
