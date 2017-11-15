---
ID: 451
post_title: 'What&#8217;s the default Moodle configuration?'
author: nicolas.martignoni.admin
post_excerpt: ""
layout: epkb_post_type_1
permalink: >
  https://moodlebox.net/en/help/moodle-configuration/
published: true
post_date: 2017-04-20 21:41:38
---
The Moodle environment on the MoodleBox doesn't have any special configuration. Only the following settings were changed to facilitate its use or to enhance its performance.
<dl>
 	<dt>Mobile App</dt>
 	<dd>The mobile service for the official <a href="https://download.moodle.org/mobile/" target="_blank" rel="noopener">Moodle Mobile app</a> is enabled. The Moodle Mobile app can be download at <a href="https://download.moodle.org/mobile/" target="_blank" rel="noopener">https://download.moodle.org/mobile/</a>.</dd>
 	<dt>File upload size</dt>
 	<dd>The maximal file upload size is set to <strong>50MB</strong> (via the PHP settings <em>post_max_size</em> and <em>upload_max_filesize</em>).</dd>
 	<dt>Cron</dt>
 	<dd>The <em>cron</em> is configured to be run <strong>every 3 minutes</strong>. Some scheduled tasks need an Internet access. It's recommended to connect the MoodleBox to the Internet with an Ethernet cable.</dd>
 	<dt>Multi-language filter</dt>
 	<dd>The Multi-Language Content filter is enabled.</dd>
 	<dt>Cache</dt>
 	<dd>The cache of Moodle is configured to <strong>optimize the reactivity</strong> of the MoodleBox.</dd>
 	<dt>MoodleBox Plugin</dt>
 	<dd>The <a href="https://moodle.org/plugins/tool_moodlebox" target="_blank" rel="noopener">MoodleBox Administration plugin</a> for Moodle is installed. This plugin enables a Moodle administrator to restart and shutdown, to set the date, to change some other settings and to monitor the hardware of the MoodleBox using a GUI.</dd>
 	<dt>MathJax library</dt>
 	<dd>As of version 2.0 and later, the MathJax library is installed locally, enabling the MathJax filter to work correctly even when the MoodleBox is not connected to Internet.</dd>
</dl>