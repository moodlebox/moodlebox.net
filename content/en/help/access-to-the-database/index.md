---
title: How to manage the Moodle database
authors:
  - Nicolas Martignoni
type: kb
date: 2017-04-20
lastmod: 2022-08-14
description: To access the MoodleBox Moodle database using Adminer, see the information below.
slug: access-to-the-database-management-interface
categories:
  - Maintenance

---
The MoodleBox allows access to the Moodle database for administration purpose, via the [Adminer][3] software. To access to login interface, type the following URL [http://moodlebox.home/adminer.php][1] in the address bar of your browser, and type the credentials below. Of course the password is different if you have changed it.

  * Username: __moodlebox__
  * Password: __Moodlebox4$__

{{< figure src="adminer.png" width="560" title="Database access with Adminer" class="centered-image" >}}

{{< notice info >}}
It is strongly advised not to manually change the Moodle database unless you know exactly what you are doing. In any case, __no support is provided__ on this subject and we take no responsability for any loss of data.
{{< /notice >}}

 [1]: http://moodlebox.home/adminer.php
 [2]: http://moodlebox.home/phpmyadmin
 [3]: https://www.adminer.org/
