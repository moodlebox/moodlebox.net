---
title: What is the default Moodle configuration
authors:
  - Nicolas Martignoni
type: kb
date: 2017-04-20
lastmod: 2021-03-10
description: Detailed information on the configuration of the MoodleBox Moodle installation
slug: moodle-configuration
categories:
  - Maintenance

---
The Moodle environment on the MoodleBox is completely standard.

Following settings were configured to facilitate Moodlebox' use or to enhance its performance.

### Configured Moodle settings

[Mobile App](http://moodlebox.home/admin/category.php?category=mobileapp)
:   The mobile service for the official [Moodle Mobile app][1] is enabled. The Moodle Mobile app can be download at https://download.moodle.org/mobile/.

[File upload size](http://moodlebox.home/admin/settings.php?section=sitepolicies#admin-maxbytes)
:   The maximal file upload size is set to __50MB__ (via the PHP settings `post_max_size` and `upload_max_filesize`).

[Cron](http://moodlebox.home/admin/tool/task/scheduledtasks.php)
:   The _cron_ is configured to be run __every minute__. Some scheduled tasks need an Internet access. It's recommended to connect the MoodleBox to the Internet with an Ethernet cable.

[Multi-language filter](http://moodlebox.home/admin/settings.php?section=filtersettingmultilang)
:   The Multi-Language Content filter is enabled.

[Cache](http://moodlebox.home/cache/admin.php)
:   The cache of Moodle is configured to __optimize the reactivity__ of the MoodleBox.

[MoodleBox Plugin](http://moodlebox.home/admin/category.php?category=moodlebox)
:   The [MoodleBox Administration plugin][2] for Moodle is installed. This plugin enables a Moodle administrator to restart and shutdown, to set the date, to change some other settings and to monitor the hardware of the MoodleBox using a GUI.

[MathJax library](http://moodlebox.home/admin/settings.php?section=filtersettingmathjaxloader)
:   The MathJax library is installed locally, enabling the MathJax filter to work correctly even when the MoodleBox is not connected to Internet.

[System paths](http://moodlebox.home/admin/settings.php?section=systempaths)
:   System paths to `php`, `du`, `ghostscript` and `python` executables are appropriately set.

[Débogage](http://moodlebox.home/admin/settings.php?section=debugging)
:   Debug message display is disabled.

 [1]: https://download.moodle.org/mobile/
 [2]: https://moodle.org/plugins/tool_moodlebox
