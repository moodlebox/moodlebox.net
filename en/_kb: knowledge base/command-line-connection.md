---
ID: 432
post_title: Command line connection (SSH)
author: nicolas.martignoni.admin
post_excerpt: ""
layout: epkb_post_type_1
permalink: >
  https://moodlebox.net/en/help/command-line-connection/
published: true
post_date: 2017-04-20 18:49:52
---
As a normal user, you should not need to connect into the command line interface of the MoodleBox. Anyway, you may access it if necessary via SSH, using the address <strong>moodlebox.home</strong>, using its default credentials:
<ul>
 	<li>username: <strong>moodlebox</strong></li>
 	<li>password: <strong>Moodlebox4$</strong></li>
</ul>
<h3>With PuTTY (under Windows)</h3>
Open a new connection, type the address <strong>moodlebox.home</strong> under <em>Host Name</em>, then click <em>Open</em>. Input the password <strong>Moodlebox4$</strong>.

<img class="alignnone size-full wp-image-444" src="https://moodlebox.net/fr/wp-content/uploads/sites/4/2017/04/PuTTY-moodlebox.png" alt="" width="516" height="498" />
<h3>In a classical terminal interface</h3>
In your favorite terminal interface, type

<code>ssh moodlebox@moodlebox.home</code>

then type the password <strong>Moodlebox4$</strong>.