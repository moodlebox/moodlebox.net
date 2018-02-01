---
ID: 462
post_title: How to update Moodle?
author: nicolas.martignoni.admin
post_excerpt: ""
layout: epkb_post_type_1
permalink: >
  https://moodlebox.net/en/help/moodle-version-update/
published: true
post_date: 2017-04-20 22:03:31
---
In order to allow a simplified update of Moodle, its installation was done using Git. To update Moodle, perform the following operations, using the command line.

Log in the MoodleBox via SSH, with the usual password <strong>Moodlebox4$</strong>.

<code>ssh moodlebox@moodlebox.home</code>
<h3>Update to a <strong>minor version</strong></h3>
To update to the next <strong>minor version</strong> of Moodle (3.4.1, 3.4.2, etc.), type the following commands in the terminal:

<code>cd /var/www/moodle/</code>
<code>sudo -u www-data git pull</code>

Visit then in your browser the URL <a class="_blanktarget" href="http://moodlebox.home/admin">http://moodlebox.home/admin</a> and follow the update instructions, like any Moodle installation (see the documentation here: <a class="_blanktarget" href="https://docs.moodle.org/en/Upgrading" target="_blank" rel="noopener noreferrer">https://docs.moodle.org/en/Upgrading</a>).
<h3>Update to a major version</h3>
To update to the next <strong>major version</strong> of Moodle (3.5, 3.6, etc.), type the <strong>additional</strong> following commands:

<code>sudo -u www-data git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"</code>
<code>sudo -u www-data git fetch origin</code>
<code>sudo -u www-data git pull</code>
<code>sudo -u www-data git checkout MOODLE_35_STABLE</code>

Then visit the URL <a class="_blanktarget" href="http://moodlebox.home/admin">http://moodlebox.home/admin</a> and follow the update instructions, just like above.