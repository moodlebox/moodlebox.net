---
title: Wie funktioniert der Zugriff auf das Betriebssystem?
author: Nicolas Martignoni, Ralf Krause
type: kb
date: 2017-04-20T16:49:52+00:00
slug: zugriff-auf-das-betriebssytem
weight: 15
categories:
  - Maintenance
  - Usage

---
Für normale Nutzer besteht keine Notwendigkeit, auf das Betriebssystem der MoodleBox zuzugreifen. Bei Bedarf können Sie aber mit dem Kommandozeilen-Interface eine Verbindung über SSH herstellen, indem Sie die Adresse __moodlebox.home__ und standardmäßig die  Anmeldedaten verwenden:

  * username: __moodlebox__
  * passwort: __Moodlebox4$__


### Mit PuTTY (bei Windows)

Öffnen Sie eine neue Verbindung, geben Sie die Adresse __moodlebox.home__ bei _Host Name_ ein, klicken Sie dann auf _Öffnen_ und geben Sie das Kennwort __Moodlebox4$__ ein.

{{< figure link="/img/media/putty-moodlebox.png" caption="Verbindung mit PuTTY" caption-position="bottom" caption-effect="appear" width="516px" >}}


### Im klassischen Terminal

In Ihrem bevorzugten Kommandozeilen-Interface schreiben Sie die Anweisung

```bash
ssh moodlebox@moodlebox.home
```

und dann tippen Sie unsichtbar das Kennwort __Moodlebox4$__.
