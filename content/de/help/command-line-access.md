---
title: Zugang zum Betriebssystem
authors:
  - Nicolas Martignoni
  - Ralf Krause
type: kb
date: 2017-04-20
lastmod: 2018-04-10
description: Bei Bedarf können Sie über SSH auf das Betriebssystem der MoodleBox zugreifen
slug: zugang-zum-betriebssystem
weight: 15
categories:
  - Maintenance
  - Usage

---
Für normale Nutzer besteht keinerlei Notwendigkeit, auf das Betriebssystem der MoodleBox zuzugreifen. Als Administrator können Sie aber bei Bedarf über SSH eine Verbindung zum Betriebssystem herstellen, indem Sie die Adresse __moodlebox.home__ und die folgenden Anmeldedaten verwenden:

  * Anmeldename: __moodlebox__
  * Kennwort: __Moodlebox4$__

### Mit PuTTY (bei Windows)

Öffnen Sie eine neue Verbindung, schreiben Sie die Adresse __moodlebox.home__ in das Feld _Host Name_, klicken Sie dann auf _Öffnen_ und geben Sie das Kennwort __Moodlebox4$__ ein.

{{< figure src="/img/media/putty-moodlebox.png" caption="Verbindung mit PuTTY" caption-position="bottom" caption-effect="appear" width="516px" >}}

### Im klassischen Terminal (Linux, macOS)

In Ihrem bevorzugten Terminal-Programm schreiben Sie die Anweisung

```bash
ssh moodlebox@moodlebox.home
```

und dann tippen Sie unsichtbar das notwendige Kennwort __Moodlebox4$__.

Der Hostname der MoodleBox ist __moodlebox__. Ihr fully qualified Domain Name (_FQDN_) ist __moodlebox.home__.
