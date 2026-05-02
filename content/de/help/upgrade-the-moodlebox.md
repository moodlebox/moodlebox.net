---
title: Aktualisierung des MoodleBox-Systems
authors:
  - Nicolas Martignoni
  - Ralf Krause
type: kb
date: 2017-12-22
lastmod: 2026-05-02
description: Folgen Sie den folgenden Anweisungen, um Ihr MoodleBox-System regelmäßig zu aktualisieren
keywords:
  - shell
  - ssh
  - kommandozeile
  - cli
  - betriebsystem
  - rpios
  - debian
slug: moodlebox-aktualisieren
categories:
  - Wartung

---
Als routinemäßige Sicherheitsmaßnahme wird empfohlen, das Betriebssystem Raspberry Pi OS auf der MoodleBox in regelmäßigen Abständen zu aktualisieren. Mit dieser Maßnahme können mögliche Schwachstellen im Betriebssystem gepatcht und andere entdeckte Fehler behoben werden.

Für diese Operation muss die MoodleBox über ein Ethernetkabel mit dem Internet verbunden sein.

### Vorgehensweise

  1. Melden Sie sich im Terminal über SSH für die [Eingabezeile der Moodlebox][1] an. Hier sind die [standardmäßigen Anmeldedaten][2].
  2. Verbinden Sie die MoodleBox über ein Ethernetkabel mit einem Internetrouter oder einem lokalen Netzwerk mit Internetzugang.
  3. Schreiben Sie die folgenden Anweisung ins Terminal und bestätigen Sie dies mit der Eingabetaste:

      ```bash
      sudo apt-get update && sudo apt-get full-upgrade -y
      ```

  4. Die Verarbeitung dieser Anweisung wird eine Weile dauern, wahrscheinlich mehrere Minuten. Die Dauer hängt vom Umfang der zu aktualisierenden Software, von der Bandbreite Ihrer Internetverbindung und von der Qualität Ihrer microSD-Karte ab.
  5. Am Ende des Update-Vorgangs geben Sie `exit` ein und bestätigen dies mit der Eingabetaste.

 [1]: {{< relref "help/command-line-access" >}}
 [2]: {{< relref "help/credentials" >}}
