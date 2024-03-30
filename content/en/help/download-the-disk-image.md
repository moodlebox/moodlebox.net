---
title: Download the disk image manually
authors:
  - Nicolas Martignoni
type: kb
date: 2017-04-20
lastmod: 2024-03-30
description: The MoodleBox disk image can be freely downloaded from this page.
slug: download-the-disk-image
categories_weight: 3
categories:
  - First steps
aliases:
  - /download
  - ../dl
---

{{< notice tip >}}
To [copy the MoodleBox disk image to your microSD card]({{< relref "help/copy-the-disk-image" >}}), we recommend [using the Raspberry Pi Imager tool]({{< relref "help/copy-the-disk-image" >}}) instead of downloading the image below and copying it manually.
{{< /notice >}}

<div class="downloads row gx-0">
  <div class="image-icon text-center col-sm-3">
    <a class="piwik_download" href="{{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" id=4 >}}"><img alt="MoodleBox SD card" src="/img/media/moodlebox-sdcard.png" width="150" height="150"></a>
  </div>
  <div class="image-info col-sm-9">
    <div class="image-description">
      MoodleBox disk image for microSD card
    </div>
    <div class="image-details">
      Version: <strong>{{< ghrelease user="moodlebox" repo="moodlebox" data="version" id=4 >}}</strong>
    </div>
    <div class="image-details">
      Moodle version: <strong>Moodle 4.3.3+ (Build: 20240326)</strong>
    </div>
    <div class="image-details">
      Size: <strong>{{< ghrelease user="moodlebox" repo="moodlebox" data="file_size" id=4 >}} MB</strong>
    </div>
    <div class="image-details">
      Date: <strong>{{< ghrelease user="moodlebox" repo="moodlebox" data="file_date" id=4 >}}</strong>
    </div>
    <div class="image-details">
      Release notes: <strong><a href="https://github.com/moodlebox/moodlebox/blob/main/CHANGELOG.md" target="_blank">on Github</a></strong>
    </div>
    <div class="image-details">
      SHA-256: <strong><a href="{{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" id=5 >}}" target="_blank">{{< ghrelease user="moodlebox" repo="moodlebox" data="file_name" id=5 >}}</a></strong>
    </div>
    <div class="image-download-links">
      <a class="btn dl-zip piwik_download" href="{{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" id=4 >}}"><i class="fa fa-download" aria-hidden="true"></i>Download image</a>
      <a class="btn" href="{{< relref "/support-moodlebox" >}}"><i class="fa fa-heart" aria-hidden="true"></i>Donate</a>
    </div>
  </div>
</div>

After having downloaded the disk image, copy it manually to the microSD card, e.g. with BalenaEtcher or `dd`, and follow the instructions to [set up your MoodleBox][2] for the first use. Read the [installation instructions][5] for more information.

If you wish, you can [support the development][3] of MoodleBox by [making an donation][3].

### In case of trouble

If you experience any trouble when downloading the disk image, use your command line interface, for example with this command

```bash
wget -c {{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" id=4 >}}
```

or this one

```bash
curl -C - {{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" id=4 >}}
```

### Older versions of the disk image

The disk images of older versions of MoodleBox [are available on Github][releases].

 [copyimage]: {{< relref "help/copy-the-disk-image" >}}
 [2]: {{< relref "help/startup-shutdown-restart" >}}
 [3]: {{< relref "/support-moodlebox" >}}
 [4]: {{< ghrelease user="moodlebox" repo="moodlebox" data="download_link" id=4 >}}
 [5]: {{< relref "help/install-the-moodlebox" >}}
 [rpios]: https://www.raspberrypi.org/downloads/raspberry-pi-os/
 [releases]: https://github.com/moodlebox/moodlebox/releases
