---
title: How to access to the command line interface
author: Nicolas Martignoni
type: kb
date: 2017-04-20
slug: command-line-connection
weight: 15
categories:
  - Maintenance
  - Usage

---
As a normal user, you should not need to connect into the command line interface of the MoodleBox. Anyway, you may access it if necessary via SSH, using the address __moodlebox.home__, using its default credentials:

  * username: __moodlebox__
  * password: __Moodlebox4$__

### With PuTTY (under Windows)

Open a new connection, type the address __moodlebox.home__ under _Host Name_, then click _Open_. Input the password __Moodlebox4$__.

{{< figure link="/img/media/putty-moodlebox.png" caption="Connection with PuTTY" caption-position="bottom" caption-effect="appear" width="516px" >}}

### In a classical terminal interface

In your favorite terminal interface, type

```bash
ssh moodlebox@moodlebox.home
```

then type the password __Moodlebox4$__.
