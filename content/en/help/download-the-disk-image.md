---
title: Where to download the disk image
author: Nicolas Martignoni
type: kb
date: 2017-04-20
description: The MoodleBox disk image is available on this page.
slug: download-the-disk-image
weight: 3
categories:
  - First steps
aliases:
  - en/dl

---
### MoodleBox Disk Image

<ul class="downloads">
  <li>
  <div class="image-icon">
    <a class="piwik_download" href="{{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" >}}"><img alt="MoodleBox SD card" src="/img/media/moodlebox-sdcard.png" width="150" height="150"></a>
  </div>
  <div class="image-info">
    <div class="image-description">
      MoodleBox disk image for microSD card
    </div>
    <div class="image-details">
      Version: <strong>{{< ghrelease user="moodlebox" repo="moodlebox" data="version" >}}</strong>
    </div>
    <div class="image-details">
      Moodle version: <strong>3.4.2 (Build: 20180319)</strong>
    </div>
    <div class="image-details">
      Size: <strong>{{< ghrelease user="moodlebox" repo="moodlebox" data="file_size" >}} MB</strong>
    </div>
    <div class="image-details">
      Date: <strong>{{< ghrelease user="moodlebox" repo="moodlebox" data="file_date" >}}</strong>
    </div>
    <div class="image-details">
      Release notes: <strong><a href="https://github.com/moodlebox/moodlebox/blob/master/CHANGELOG.md" target="_blank">on Github</a></strong>
    </div>
    <div class="image-download-links">
      <a class="btn dl-zip piwik_download" href="{{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" >}}"><i class="fa fa-download"></i>Download image</a>
    </div>
 </div>
 </li>
</ul>

After having downloaded the disk image, follow the instructions to [copy it to the microSD card][1] and [set up your MoodleBox][2] for the first use. Read the [installation instructions][5] for more information.

If you wish, you can [support the development][3] of MoodleBox by [making an donation][3].

The MoodleBox disk image is built on [Raspbian Lite for Raspberry Pi][6] distribution.

### In case of trouble

If you experience any trouble when downloading the disk image, use your command line interface, for example with this command

```bash
wget -c {{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" >}}
```

or this one

```bash
curl -C - {{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" >}}
```

 [1]: {{< relref "copy-the-disk-image.md" >}}
 [2]: {{< relref "startup-shutdown-restart.md" >}}
 [3]: {{< relref "support-the-moodlebox-project.md" >}}
 [4]: {{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" >}}
 [5]: {{< relref "install-the-moodlebox.md" >}}
 [6]: https://www.raspberrypi.org/downloads/raspbian/
