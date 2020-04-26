---
title: Where to download the disk image
authors:
  - Nicolas Martignoni
type: kb
date: 2017-04-20
lastmod: 2020-02-28
description: The MoodleBox disk image can be freely downloaded from this page.
slug: download-the-disk-image
categories_weight: 3
categories:
  - First steps
aliases:
  - /download
  - ../dl

---
### MoodleBox Disk Image

<div class="downloads">
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
      Moodle version: <strong>3.8.1+ (Build: 20200207)</strong>
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
    <div class="image-details">
      SHA-256: <strong><a href="{{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" id=1 >}}" target="_blank">{{< ghrelease user="moodlebox" repo="moodlebox" data="file_name" id=1 >}}</a></strong>
    </div>
    <div class="image-download-links">
      <a class="btn dl-zip piwik_download" href="{{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" >}}"><i class="fa fa-download" aria-hidden="true"></i>Download image</a>
      &nbsp;&nbsp;&nbsp;
      <a class="btn" href="{{< relref "/support-moodlebox" >}}"><i class="fa fa-heart" aria-hidden="true"></i>Donate</a>
    </div>
  </div>
</div>

After having downloaded the disk image, follow the instructions to [copy it to the microSD card][1] and [set up your MoodleBox][2] for the first use. Read the [installation instructions][5] for more information.

If you wish, you can [support the development][3] of MoodleBox by [making an donation][3].

The MoodleBox disk image is built on [Raspbian Lite for Raspberry Pi][raspbian] distribution.

### In case of trouble

If you experience any trouble when downloading the disk image, use your command line interface, for example with this command

```bash
wget -c {{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" >}}
```

or this one

```bash
curl -C - {{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" >}}
```

### Older versions of the disk image

The disk images of older versions of MoodleBox [are available on Github][releases].

 [1]: {{< relref "help/copy-the-disk-image" >}}
 [2]: {{< relref "help/startup-shutdown-restart" >}}
 [3]: {{< relref "/support-moodlebox" >}}
 [4]: {{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" >}}
 [5]: {{< relref "help/install-the-moodlebox" >}}
 [raspbian]: https://www.raspberrypi.org/downloads/raspbian/
 [releases]: https://github.com/moodlebox/moodlebox/releases
