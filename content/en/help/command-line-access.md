---
title: Access MoodleBox command line interface
authors:
  - Nicolas Martignoni
type: kb
date: 2017-04-20
lastmod: 2018-04-10
description: If necessary, you can connect to the MoodleBox operating system via SSH
slug: command-line-interface
categories_weight: 15
categories:
  - Maintenance
  - Usage
aliases:
  - command-line-connection
  - cli

---
As a normal user, you should not need to connect into the command line interface of the MoodleBox. Anyway, you may access it if necessary via SSH, using the address __moodlebox.home__, using its default credentials:

  * username: __moodlebox__
  * password: __Moodlebox4$__

### With PuTTY (under Windows)

Open a new connection, type the address __moodlebox.home__ under _Host Name_, then click _Open_. Input the password __Moodlebox4$__.

{{< figure src="/img/media/putty-moodlebox.png" title="Connection with PuTTY" class="centered-image" width="516" >}}

### In a classical terminal interface

In your favorite terminal interface, type

```bash
ssh moodlebox@moodlebox.home
```

then type the password __Moodlebox4$__.

The hostname of the MoodleBox is __moodlebox__. Its fully qualified domain name (_FQDN_) is __moodlebox.home__.
