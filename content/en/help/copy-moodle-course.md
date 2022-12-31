---
title: Copy a Moodle course to the MoodleBox
authors:
  - Nicolas Martignoni
type: kb
date: 2019-03-06
lastmod: 2019-03-06
description: It is easy to copy (move) a Moodle course from another Moodle server to a MoodleBox.
slug: copy-moodle-course
categories_weight: 6
categories:
  - Usage

---

It is easy to copy a Moodle course from another Moodle server to a MoodleBox, because MoodleBox is exactly like a regular Moodle server, just smaller and very portable. This page deals with the following two course copy scenarios.

Scenario 1
: You want to move a course located on the Moodle server of your school or company to a MoodleBox.

Scenario 2
: You want to move a course located on one MoodleBox to another MoodleBox.

{{< notice warning >}}
- It is not possible to copy a course from a newer version of Moodle to an older version of Moodle. Before starting the operations described below, it is therefore necessary to ensure that the Moodle version of the target MoodleBox is __equal or more recent__ than that of the source Moodle server (on another MoodleBox or on your school server).
- If your course exceeds a size of 50 MB, you must <a href="{{< relref "help/using-files-with-the-moodlebox" >}}">use a USB key or the SFTP server option</a> of the MoodleBox to restore it.
{{< /notice >}}

The process of copying a course from a Moodle to a MoodleBox is exactly the same as with any Moodle server. The first step is to make a [backup of the course you want to copy][backup] on the school's Moodle server or the first MoodleBox, save it on a suitable storage medium, and then [restore this backup][restore] on the target MoodleBox.

### How to proceed

#### Backup the course to be copied on the school's Moodle or on the first MoodleBox

1. On the Moodle server where the course is currently located, log in and enter the course, with at least a teacher's role.
1. In the course management menu (the cog wheel), choose the "Backup" option, then proceed as for any Moodle course backup.
1. At the end of the backup, download the backup file, for example `backup-maths-20190306-2020.mbz`, to your computer or other suitable media

For more help on this step, see the [official Moodle documentation on course backup][backup].

#### Restore the backup on the MoodleBox

1. Login to the MoodleBox with an administrator account.
1. Go to the MoodleBox Moodle administration, Course tab, and click on "[Restore course][restoreadmin]".
1. Drag the backup file of the previously backuped course `backup-maths-20190306-2020.mbz`, under "Import a backup file", and, if the course is very large, wait until the download is complete. If the file exceeds 50 MB, [use a USB key or the SFTP server option][bigfile] of the MoodleBox.
1. Click on "Restore", then complete the Moodle course restoration process, selecting the desired options. At the end of the restore, the course is ready to be used.

For more help on this step, see the [official Moodle documentation on course restoration][restore].

  [bigfile]: {{< relref "help/using-files-with-the-moodlebox" >}}
  [backup]: https://docs.moodle.org/en/Course_backup
  [restore]: https://docs.moodle.org/en/Course_restore
  [restoreadmin]: http://moodlebox.home/backup/restorefile.php?contextid=1
