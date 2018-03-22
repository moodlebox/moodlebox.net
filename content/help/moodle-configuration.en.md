---
title: What is the default Moodle configuration
author: Nicolas Martignoni
type: kb
date: 2017-04-20
description: Detailed information on the configuration of the MoodleBox Moodle installation is provided here
slug: moodle-configuration
categories:
  - Maintenance

---
The Moodle environment on the MoodleBox doesn't have any special configuration. Only the following settings were changed to facilitate its use or to enhance its performance.

Mobile App
:   The mobile service for the official [Moodle Mobile app][1] is enabled. The Moodle Mobile app can be download at https://download.moodle.org/mobile/.

File upload size
:   The maximal file upload size is set to __50MB__ (via the PHP settings _post\_max\_size_ and _upload\_max\_filesize_).

Cron
:   The _cron_ is configured to be run __every minute__ (every 3 minutes before version 2.2.0). Some scheduled tasks need an Internet access. It's recommended to connect the MoodleBox to the Internet with an Ethernet cable.

Multi-language filter
:   The Multi-Language Content filter is enabled.

Cache
:   The cache of Moodle is configured to __optimize the reactivity__ of the MoodleBox.

MoodleBox Plugin
:   The [MoodleBox Administration plugin][2] for Moodle is installed. This plugin enables a Moodle administrator to restart and shutdown, to set the date, to change some other settings and to monitor the hardware of the MoodleBox using a GUI.

MathJax library
:   As of version 2.0.0 and later, the MathJax library is installed locally, enabling the MathJax filter to work correctly even when the MoodleBox is not connected to Internet.

 [1]: https://download.moodle.org/mobile/
 [2]: https://moodle.org/plugins/tool_moodlebox
