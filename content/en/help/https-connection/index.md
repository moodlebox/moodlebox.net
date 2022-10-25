---
title: Switch MoodleBox to HTTPS
authors:
  - Nicolas Martignoni
type: kb
date: 2019-11-17
lastmod: 2022-10-25
description: MoodleBox can be configured to support secure connections via HTTPS. This configuration requires manual intervention by a technically savvy person.
slug: connexion-https
categories_weight: 90
categories:
  - Maintenance
---
The procedure below can be used to configure the MoodleBox to provide secure connections via HTTPS. Once this is done, __it will no longer be possible to connect via HTTP__.

1. Access [MoodleBox command line interface][ssh-connect] (via SSH).
2. Edit file `/var/www/moodle/config.php`, e.g. typing command `nano /var/www/moodle/config.php`. Change line beginning with `$CFG->wwwroot`, replacing `http://` by `https://` in address `http://moodlebox.home`, then save.
3. Edit file `/etc/nginx/sites-available/default`, e.g. typing command `sudo nano /etc/nginx/sites-available/default`. According to the instructions in this file, uncomment relevant lines, then save.
4. Reboot.
5. Test by loading URL https://moodlebox.home in your favorite browser.

{{< notice note >}}
Once the configuration is completed, devices connecting via HTTPS will see a warning window indicating that the MoodleBox certificate is not valid. To remove this warning, __each device__ must install the MoodleBox root certificate.

For more information on this topic, see [Installing the root certificate on client devices](#installing-the-root-certificate-on-client-devices) below.
{{< /notice >}}

### Installing the root certificate on client devices

To connect to the MoodleBox via HTTPS without displaying a warning window, it is necessary to install the MoodleBox root certificate (or CA certificate). This certificate, issued by the [MoodleBox project][project] as a certification authority, allows the browser to ensure that the certificate on the MoodleBox website is valid.

The installation of the CA certificate depends on the browser and operating system.

- [Installation on macOS]({{< relref "help/install-certificate-macos" >}})
- [Installation on Windows]({{< relref "help/install-certificate-windows" >}})

[project]: {{< relref "/project" >}}
[ssh-connect]: {{< relref "help/command-line-access" >}}
