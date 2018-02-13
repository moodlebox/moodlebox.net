---
title: How to provide files on the Moodlebox
author: Nicolas Martignoni
type: kb
date: 2017-04-20
slug: using-files-with-the-moodlebox
weight: 7
categories:
  - Usage

---
### Files on a USB stick

When a USB stick is inserted into one of the MoodleBox USB ports, all the files on the stick are automatically available to administrators and teachers in the file picker of Moodle, via a repository called __USB Drive__.

{{< figure link="/img/media/usb-drive.png" thumb="-small" caption="USB Drive repository" caption-position="bottom" caption-effect="appear" width="550px" >}}

If several USB sticks are inserted into the MoodleBox, only the files of the first inserted one are available.

### Files via SFTP

Files uploaded to the MoodleBox via SFTP, in the folder called __files__, are also available to administrators and teachers in the file picker of Moodle, via a repository called __SFTP Documents__.

{{< figure link="/img/media/sftp-documents.png" thumb="-small" caption="SFTP Documents repository" caption-position="bottom" caption-effect="appear" width="550px" >}}

To upload the files, use a software such as [FileZilla][1], [Cyberduck][2] or [WinSCP][3] and use the following credentials:

  * username: __moodlebox__
  * password: __Moodlebox4$__

{{% notice note %}}
For security reasons, connection via FTP is not possible. The SFTP protocol (Secure FTP, port 22) must be used.
{{% /notice %}}

 [1]: https://filezilla-project.org/
 [2]: https://cyberduck.io/
 [3]: http://winscp.net/
