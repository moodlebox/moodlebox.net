---
title: Anzeigen von Neustart- und Ausschalten-Schaltflächen in der Fußzeile
authors:
  - Nicolas Martignoni
type: kb
date: 2019-05-20
lastmod: 2022-08-14
description: Für eine einfachere Administration ist es möglich, die MoodleBox Neustart- und Ausschalten-Schaltflächen in der Fußzeile aller Moodle-Seiten anzuzeigen.
slug: schaltflaechen-in-fusszeile
categories_weight: 30
categories:
  - Nutzung

---
Dank der Anzeige am unteren Ende der Seite der Neustart- und Ausschalten-Schaltflächen der MoodleBox ist die Verwaltung intuitiver und einfacher.

{{< figure src="buttons-footer.png" width="800" title="Neustart- und Ausschalten-Schaltflächen in der Fußzeile" class="centered-image" >}}

Diese Funktion wird aktiviert, indem Sie die MoodleBox-Einstellungen in der Administrationsoberfläche aufrufen: [Website-Administration > Server > MoodleBox > MoodleBox settings][1], dann das Ankreuzfeld "Show buttons in footer" aktivieren.

{{< figure src="buttons-settings.png" width="720" title="Show buttons in footer Ankreuzfeld" class="centered-image" >}}

Nach dem Speichern der Änderungen werden die MoodleBox Neustart- und Ausschalten-Schaltflächen für Moodle-Rollen mit dem `tool/moodlebox:viewbuttonsinfooter` Recht angezeigt, das standardmäßig der Managerrolle und natürlich den Administratoren gewährt wird. Sie werden für andere Benutzer nicht angezeigt.

{{< notice tip >}}
Um das Risiko von Datenverlusten auf der microSD-Karte zu minimieren, fahren Sie bitte zuerst die MoodleBox manuell herunter, bevor Sie die Stromversorgung ausschalten.
{{< /notice >}}

 [1]: http://moodlebox.home/admin/settings.php?section=tool_moodlebox_settings
