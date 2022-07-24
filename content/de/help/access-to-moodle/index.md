---
title: Anmelden in Moodle
authors:
  - Nicolas Martignoni
  - Visvanath Ratnaweera
  - Ralf Krause
type: kb
date: 2018-02-01
lastmod: 2019-07-13
description: Für die Anmeldung in der Moodle-Plattform auf der MoodleBox müssen Sie sich zunächst in deren drahtlosem WLAN-Netzwerk verbinden, dann http://moodlebox.home/ öffnen
slug: anmelden-in-moodle
categories_weight: 6
categories:
  - Nutzung

---
Für die Anmeldung in der Moodle-Plattform auf der MoodleBox müssen Sie sich zunächst in deren drahtlosem [WLAN-Netzwerk verbinden][1]. Wählen Sie auf Ihrem Gerät das drahtlose Netzwerk __MoodleBox__ aus. Wenn Sie zur Eingabe des Kennworts aufgefordert werden, geben Sie __moodlebox__ (alles Kleinbuchstaben) ein und bestätigen Sie die Eingabe.

Nachdem Sie mit dem WLAN der MoodleBox verbunden sind, können Sie über Ihren Browser auf Moodle zugreifen. Öffnen Sie mit Ihren Browser die Adresse [http://moodlebox.home/][2]. Die Startseite der Moodle-Plattform wird angezeigt. Klicken Sie auf __Anmelden__ und geben Sie die folgenden Zugangsdaten ein:

  * Anmeldename: __moodlebox__
  * Kennwort: __Moodlebox4$__

{{< figure src="moodle-login-de.png" title="Anmelden in Moodle" caption-position="bottom" caption-effect="appear" width="610" >}}

Sie sind jetzt mit dem Administratorkonto im Moodle auf der MoodleBox verbunden. __Es wird dringend empfohlen, das Initialkennwort__ des Administratorkontos bei der ersten Anmeldung zu ändern.

Die Moodle-Plattform hat genau ein Nutzerkonto (Administrator), wenn es bereit gestellt wird. Alle weiteren Nutzerkonten müssen Sie selber hinzufügen. Beim Start ist die Moodle-Plattform leer und es sind keine Kurse angelegt. Die Moodle-Plattform muss von Ihnen selber angepasst werden, genauso wie Sie auch alle Kursinhalte (Materialien, Aktivitäten, etc.) erstellen müssen. Falls Sie nicht genau wissen wie das geht, finden Sie alle notwendigen Infos in der [Moodle-Dokumentation][3].

{{< notice info >}}
Der seit Version 2.5.2 deprecated Benutzername __admin__ wird ab Version 3.0.0 der MoodleBox nicht mehr installiert.
{{< /notice >}}

 [1]: {{< relref "help/wi-fi-connection" >}}
 [2]: http://moodlebox.home/
 [3]: https://docs.moodle.org/de/Kurzanleitung_für_Administrator/innen
