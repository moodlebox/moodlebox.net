---
title: How to provide files on the Moodlebox
authors:
  - Nicolas Martignoni
type: kb
date: 2017-04-20
lastmod: 2018-03-01
description: The MoodleBox makes it easy to make files available to its users, using the methods described below
slug: using-files-with-the-moodlebox
weight: 7
categories:
  - Usage

---
### Files on a USB stick

When a USB stick is inserted into one of the MoodleBox USB ports, all the files on the stick are automatically available to administrators and teachers in the file picker of Moodle, via a repository called __USB Drive__.

{{< figure src="/img/media/usb-drive.png" thumb="-small" caption="USB Drive repository" caption-position="bottom" caption-effect="appear" width="550px" >}}

If several USB sticks are inserted into the MoodleBox, only the files of the first inserted one are available.

Instead of a USB stick, a USB hard disk (or SSD) can also be connected to the MoodleBox and made available via the repository __USB Drive__. Please note that a USB hard disk may need more power than the USB port of the MoodleBox provides and require an external power supply.

The MoodleBox handles the following formats: FAT32, VFAT, ext2, ext3, ext4 and HFS+. Version 2.2.0 and later of the MoodleBox supports also NTFS and exFAT formatted drives.

### Files via SFTP

Files uploaded to the MoodleBox via SFTP, in the folder called __files__, are also available to administrators and teachers in the file picker of Moodle, via a repository called __SFTP Documents__.

{{< figure src="/img/media/sftp-documents.png" thumb="-small" caption="SFTP Documents repository" caption-position="bottom" caption-effect="appear" width="550px" >}}

To upload the files, use a software such as [FileZilla][1], [Cyberduck][2], [WinSCP][3] or [Documents][4] and use the following credentials:

  * username: __moodlebox__
  * password: __Moodlebox4$__

{{% notice note %}}
For security reasons, connection via FTP is not possible. The SFTP protocol (Secure FTP, port 22) must be used.
{{% /notice %}}

 [1]: https://filezilla-project.org/
 [2]: https://cyberduck.io/
 [3]: http://winscp.net/
 [4]: https://readdle.com/products/documents/

