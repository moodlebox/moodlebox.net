---
title: Switch MoodleBox to HTTPS
authors:
  - Nicolas Martignoni
type: kb
date: 2019-11-17
lastmod: 2019-11-17
description: MoodleBox can be configured to support secure connections via HTTPS. This configuration requires manual intervention by a technically savvy person.
slug: connexion-https
weight: 90
categories:
  - Maintenance
---
The procedure below can be used to configure the MoodleBox to provide secure connections via HTTPS. Once this is done, __it will no longer be possible to connect via HTTP__.

1. Access [MoodleBox command line interface][ssh-connect] (via SSH).
2. Edit file `/var/www/moodle/config.php`, e.g. typing command `nano /var/www/moodle/config.php`.
3. Change line beginning with `$CFG->wwwroot`, replacing `http://` by `https://` in address `http://moodlebox.home`.
4. Save the modification.
5. Test by loading URL https://moodlebox.home in your favorite browser.

{{< notice warning >}}
Once the configuration is completed, devices connecting via HTTPS will see a warning window indicating that the MoodleBox certificate is not valid. To remove this warning, __each device__ must install the MoodleBox root certificate.

For more information on this topic, see [Installing the root certificate on client devices](#installing-the-root-certificate-on-client-devices) below.
{{< /notice >}}

### Installing the root certificate on client devices

To connect to the MoodleBox via HTTPS without displaying a warning window, it is necessary to install the MoodleBox root certificate (or CA certificate). This certificate, issued by the [MoodleBox project][project] as a certification authority, allows the browser to ensure that the certificate on the MoodleBox website is valid.

The installation of the CA certificate depends on the browser and operating system.

- [Installation on macOS]({{< relref "install-certificate-macos" >}})
- [Installation on Windows]({{< relref "install-certificate-windows" >}})

[project]: {{< relref "/project" >}}
[ssh-connect]: {{< relref "command-line-access" >}}
