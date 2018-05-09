---
title: Wie wird die MoodleBox aktualisiert
authors:
  - Nicolas Martignoni
  - Ralf Krause
type: kb
date: 2017-12-22
description: Folgen Sie den Anweisungen unten, um Ihre MoodleBox regelmäßig zu aktualisieren
slug: moodlebox-aktualisieren
categories:
  - Maintenance

---
Als routinemäßige Sicherheitsmaßnahme wird empfohlen, die Serversoftware auf der MoodleBox regelmäßig zu aktualisieren. Mit dieser Maßnahme können mögliche Schwachstellen in der Raspbian-Distribution gepatcht und andere entdeckte Fehler behoben werden.

Für diese Operation muss die MoodleBox über ein Ethernetkabel mit dem Internet verbunden sein.

### MoodleBox-Software aktualisieren

  1. Melden Sie sich im Terminal über SSH für die [Eingabezeile der Moodlebox][1] an. Hier sind die [standardmäßigen Anmeldedaten][2].
  2. Verbinden Sie die MoodleBox über ein Ethernetkabel mit einem Internetrouter oder einem lokalen Netzwerk mit Internetzugang.
  3. Schreiben Sie die folgenden Anweisung ins Terminal und bestätigen Sie dies mit der Eingabetaste:

    ```bash
    sudo apt-get update && sudo apt-get upgrade -y
    ```

  4. Die Verarbeitung dieser Anweisung wird wohl eine Weile dauern, wahrscheinlich mehrere Minuten. Die Dauer hängt vom Umfang der zu aktualisierenden Software, von der Bandbreite Ihrer Internetverbindung und von der Qualität Ihrer MicroSD-Karte ab.
  5. Am Ende des Update-Vorgangs geben Sie `exit` ein und bestätigen dies mit der Eingabetaste.

 [1]: {{< relref "command-line-access.md" >}}
 [2]: {{< relref "credentials.md" >}}
