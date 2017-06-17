---
ID: 462
post_title: Moodle version update
author: nicolas.martignoni.admin
post_date: 2017-04-20 22:03:31
post_excerpt: ""
layout: epkb_post_type_1
permalink: >
  https://moodlebox.net/en/help/moodle-version-update/
published: true
---
In order to allow a simplified update of Moodle, its installation was done using Git. To update Moodle, perform the following operations, using the command line.

Log in the MoodleBox via SSH, with the usual password <strong>Moodlebox4$</strong>.

<code>ssh moodlebox@moodlebox.home</code>

Type the following commands in the terminal:

<code>cd /var/www/html/</code>
<code>sudo git pull</code>

Visit then in your browser the URL <a class="_blanktarget" href="http://moodlebox.home/admin">http://moodlebox.home/admin</a> and follow the update instructions, like any Moodle installation (see the documentation here: <a class="_blanktarget" href="https://docs.moodle.org/en/Upgrading" target="_blank" rel="noopener noreferrer">https://docs.moodle.org/en/Upgrading</a>).

To update to the next <strong>major version</strong> of Moodle (3.4, 3.5, etc.), type the <strong>additional</strong> following commands:

<code>sudo git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"</code>
<code>sudo git fetch origin</code>
<code>sudo git pull</code>
<code>sudo git checkout MOODLE_34_STABLE</code>