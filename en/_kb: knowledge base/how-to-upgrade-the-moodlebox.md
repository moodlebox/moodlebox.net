---
ID: 655
post_title: How to upgrade the MoodleBox?
author: nicolas.martignoni.admin
post_excerpt: ""
layout: epkb_post_type_1
permalink: >
  https://moodlebox.net/en/help/how-to-upgrade-the-moodlebox/
published: true
post_date: 2017-12-22 11:27:10
---
As a routine security measure, it is recommended to update regularly the server software on the MoodleBox to patch vulnerabilities found in the Raspbian distribution and to fix other discovered bugs.

For this operation, the MoodleBox must be connected to the Internet.
<h3>Updating the MoodleBox software</h3>
<ol>
 	<li>Connect to <a href="https://moodlebox.net/en/help/command-line-connection/">the command line interface of the MoodleBox</a> via SSH, using your credentials. Here are the <a href="https://moodlebox.net/en/help/moodlebox-credentials/">defaults credentials</a>.</li>
 	<li>Branch the MoodleBox with an Ethernet cable to a local network with Internet access.</li>
 	<li>Type the following command in the terminal interface:
<code>sudo apt-get update &amp;&amp; sudo apt-get upgrade -y</code>
and confirm with Return.</li>
 	<li>This operation will take a couple of minutes. The duration depends on your Internet bandwidth and on the quality of your microSD card.</li>
 	<li>When the update end, type <code>exit</code>, and confirm with Return.</li>
</ol>