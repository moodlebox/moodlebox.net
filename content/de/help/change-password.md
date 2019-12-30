---
title: Ändern des Hauptkennworts
authors:
  - Nicolas Martignoni
type: kb
date: 2018-11-02
lastmod: 2018-11-02
description: Sie können das Hauptpasswort der MoodleBox ändern, indem Sie das Dashboard in der Administration durchsuchen.
slug: change-main-password
weight: 5
categories:
  - Usage
---

{{< notice warning >}}
Es wird dringend empfohlen, das Hauptkennwort der MoodleBox __sofort zu ändern__, um zu verhindern, dass Unbefugte unerwünschte Änderungen vornehmen und es unbrauchbar machen.
{{< /notice >}}

Um das Hauptpasswort Ihrer MoodleBox zu ändern, besuchen Sie das Dashboard in der Administrationsoberfläche: [Website-Administration > Server > MoodleBox][1].

Dieses Passwort ist Teil der Hauptzugangsdaten Ihrer MoodleBox. Sie ermöglicht den [Zugang zum Betriebssystem][5] der MoodleBox, auf den [SFTP-Datei-Upload][6] sowie auf die [Datenbankverwaltung][7].

{{< figure src="/img/media/change-password-de.png" caption="Ändern des Hauptkennworts" caption-position="bottom" caption-effect="appear" width="600px"  >}}

Geben Sie im Abschnitt __MoodleBox-Kennwort__ Ihr neues Kennwort ein, in beiden Feldern gleich. Durch Klicken auf das Augensymbol können Sie sich die von Ihnen eingegebenen Zeichen anzeigen lassen. Wir empfehlen, ein sicheres Passwort zu wählen.

{{< notice info >}}
Das Kennwort für das Moodle-Administratorkonto __wird durch diesen Vorgang nicht geändert__. Um dieses Kennwort zu ändern, melden Sie sich bei Moodle an, besuchen Sie die <a href="http://moodlebox.home/user/preferences.php" target="_blank">Einstellungen für Ihr Profil</a> und <a href="http://moodlebox.home/login/change_password.php" target="_blank">ändern Sie das Kennwort</a>.
{{< /notice >}}

 [1]: http://moodlebox.home/admin/tool/moodlebox/index.php
 [2]: http://moodlebox.home/
 [3]: http://moodlebox.home/user/preferences.php
 [4]: http://moodlebox.home/login/change_password.php
 [5]: {{< relref "command-line-access" >}}
 [6]: {{< relref "using-files-with-the-moodlebox" >}}
 [7]: {{< relref "access-to-the-database" >}}
