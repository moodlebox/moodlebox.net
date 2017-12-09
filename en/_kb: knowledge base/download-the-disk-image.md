---
ID: 419
post_title: Where can I download the disk image?
author: nicolas.martignoni.admin
post_excerpt: ""
layout: epkb_post_type_1
permalink: >
  https://moodlebox.net/en/help/download-the-disk-image/
published: true
post_date: 2017-04-20 18:32:11
---
<h3>MoodleBox Disk Image</h3>
<ul class="downloads">
 	<li>
<div class="image-icon"><a class="piwik_download" href="[github_download_data data='download_link']"><img class="alignnone wp-image-329 size-full" src="https://moodlebox.net/en/wp-content/uploads/sites/3/2017/01/MoodleBox-SD-150x150-orange.png" width="150" height="150" /></a></div>
<div class="image-info">
<div class="image-description">MoodleBox disk image for microSD card</div>
<div class="image-details">Version: <strong>[github_download_data data='version']</strong></div>
<div class="image-details">Moodle version : <strong>3.4+ (Build: 20171123)</strong></div>
<div class="image-details">Size: <strong>[github_download_data data='file_size']</strong></div>
<div class="image-details">Date: <strong>[github_download_data data='file_date']</strong></div>
<div class="image-details">Release notes: <strong><a href="https://github.com/martignoni/make-moodlebox/blob/master/CHANGELOG.md" target="_blank" rel="noopener noreferrer">on Github</a></strong></div>
<div class="image-download-links"><a class="btn dl-zip piwik_download" href="[github_download_data data='download_link']">Download</a></div>
</div></li>
</ul>
After having downloaded the disk image, follow the instructions to <a href="https://moodlebox.net/en/help/copy-the-disk-image-on-a-sd-card/">copy it to the microSD card</a> and <a href="https://moodlebox.net/en/help/startup-shutdown-restart/">set up your MoodleBox</a> for the first use.

If you wish, you can <a href="https://moodlebox.net/en/give/">support the development of MoodleBox</a> by making an optional donation.

The <a class="piwik_download" href="[github_download_data data='download_link']">MoodleBox disk image</a> is built on <a href="https://www.raspberrypi.org/downloads/raspbian/" target="_blank" rel="noopener noreferrer">Raspbian Stretch Lite for Raspberry Pi</a> distribution.
<h3>In case of trouble</h3>
Some users have experienced troubles when trying to download the image. In this case, you may try to use your command line interface to download the disk-image, for example with this command

<code>wget -c [github_download_data data='download_link']</code>

or this one

<code>curl -C - [github_download_data data='download_link']</code>