---
title: Remote shell access to a MoodleBox
authors:
  - Nicolas Martignoni
type: kb
date: 2024-07-06
lastmod: 2024-07-06
description: Enable remote secure shell access (command line interface) to your MoodleBox from anywhere in the world, using Raspberry Pi Connect.
keywords:
  - shell
  - ssh
  - command line
  - cli
slug: remote-shell-access
categories_weight: 10
categories:
  - Usage
draft: true
---
It is possible to get a secure remote shell access to your MoodleBox from anywhere in the world using Raspberry Pi Connect.
Raspberry Pi Connect uses a secure, encrypted connection to communicate between your MoodleBox and your browser.

{{< notice info >}}
This feature makes use of Raspberry Pi Connect by [Raspberry Pi Ltd](https://www.raspberrypi.com/).
The software is installed and enabled by default as of MoodleBox image version 4.8.0.
{{< /notice >}}

#### Link the MoodleBox with a Raspberry Pi ID

You must associate your MoodleBox with a __Raspberry Pi ID__.
If you do not have a Raspberry Pi ID, you have to [create one][rpi-id].

To link your MoodleBox with your Raspberry Pi ID, generate a verification URL using the `rpi-connect` command:
```bash
rpi-connect signin
```
This command should output something like the following:
```output
Complete sign in by visiting https://connect.raspberrypi.com/verify/XXXX-XXXX
```
Visit the verification URL on any device and sign in to link your MoodleBox with your Raspberry Pi ID.

After authenticating, choose a name that will help you identify your device and assign it to your MoodleBox.
Click the __Create device and sign in__ button to continue.

You can now remotely connect to your MoodleBox.

{{< notice tip >}}
Raspberry Pi Connect signs communication with your MoodleBox serial number. Moving your SD card between MoodleBox's will sign you out.
{{< /notice >}}

Now that your MoodleBox appears on your Connect dashboard, you can access your Raspberry Pi from anywhere using only a browser.

#### Access your MoodleBox via remote shell

Visit [connect.raspberrypi.com][connect] on any computer to access a shell running on your MoodleBox in a browser window.
You're redirected you to the Raspberry Pi ID service to sign in.
After signing in, a list of linked devices is presented.
Devices available for remote shell access show a grey __Remote shell__ badge below the name of the device.

{{< figure src="/img/media/list-connect-devices.png" title="List of devices" class="centered-image" width="550" >}}

Click the __Connect__ button to the right of the device you would like to access, to open a shell session on your MoodleBox.

{{< figure src="/img/media/remote-shell-connecting.png" title="Remote shell connecting" class="centered-image" width="550" >}}

You can now use your MoodleBox as you would locally.

To close a remote shell session, run the `exit` command or close the window.

{{< notice tip >}}
For more info about the Raspberry Pi Connect feature, refer to the [Raspberry Pi Connect documentation](https://rptl.io/rpi-connect).
{{< /notice >}}

[connect]: https://connect.raspberrypi.com/
[rpi-id]: https://id.raspberrypi.com/
