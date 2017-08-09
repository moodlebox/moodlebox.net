---
ID: 419
post_title: Download the disk image
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
<div class="image-icon"><a class="piwik_download" href="[download_data id='268' data='download_link']"><img class="alignnone wp-image-329 size-full" src="https://moodlebox.net/en/wp-content/uploads/sites/3/2017/01/MoodleBox-SD-150x150-orange.png" width="150" height="150" /></a></div>
<div class="image-info">
<div class="image-description">MoodleBox disk image for microSD card</div>
<div class="image-details">Version: <strong>[download_data id='268' data='version']</strong></div>
<div class="image-details">Size: <strong>[download_data id='268' data='filesize']</strong></div>
<div class="image-details">Date: <strong>[download_data id='268' data='file_date']</strong></div>
<div class="image-details">Release notes: <strong><a href="https://github.com/martignoni/make-moodlebox#release-notes" target="_blank" rel="noopener noreferrer">on Github</a></strong></div>
<div class="image-details sha1">SHA-1: <strong>[download_data id='268' data='sha1']</strong></div>
<div class="image-download-links"><a class="btn dl-zip piwik_download" href="[download_data id='268' data='download_link']">Download</a></div>
</div></li>
</ul>
After having downloaded the disk image, follow the instructions to <a href="https://moodlebox.net/en/help/copy-the-disk-image-on-a-sd-card/">copy it to the microSD card</a> and <a href="https://moodlebox.net/en/help/startup-shutdown-restart/">set up your MoodleBox</a> for the first use.

If you wish, you can <a href="https://moodlebox.net/en/give/">support the development of MoodleBox</a> by making an optional donation.

The <a class="piwik_download" href="https://moodlebox.net/en/download/268/">MoodleBox disk image</a> is built on <a href="https://www.raspberrypi.org/downloads/raspbian/" target="_blank" rel="noopener noreferrer">Raspbian Jessie Lite for Raspberry Pi</a> distribution.
<h3>In case of trouble</h3>
Some users have experienced troubles when trying to download the image. In this case, you may try to use your command line interface to download the disk-image, for example with this command

<code>wget -c https://moodlebox.net/en/download/268/ -O moodlebox.img.gz</code>

or this one

<code>curl -o moodlebox.img.gz -C - https://moodlebox.net/en/download/268/</code>