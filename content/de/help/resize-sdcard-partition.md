---
title: Partitionsgröße auf der SD-Karte ändern
authors:
  - Nicolas Martignoni
  - Ralf Krause
type: kb
date: 2018-07-09
lastmod: 2018-07-09
description: Mit Hilfe dieser Anleitung können Sie den nutzbaren Speicherplatz auf der SD-Karte vergrößern.
slug: sd-karte-partition-vergroessern
weight: 100
categories:
  - Maintenance
---

### Folgende Schritte sind notwendig

{{% notice warning %}}
Die Operation ist nicht erforderlich, wenn Sie das Disk-Image von dieser Website heruntergeladen haben. Die Ausführung kann jedoch sinnvoll sein, wenn Sie ein angepasstes Disk-Image haben, das den Platz auf der SD-Karte nicht vollständig belegt.
{{% /notice %}}

- [Kopieren Sie das Disk-Image][2] auf die microSD-Karte.
- [Starten Sie Ihre MoodleBox][3] wie gewohnt.
- [Verbinden Sie sich mit dem Moodle][4] auf der MoodleBox und melden Sie sich dabei als Administrator an. Wenn die Nutzerkonten auf der MoodleBox nicht verändert wurden, verwenden Sie die [standardmäßigen Anmeldedaten][5].
- Greifen Sie auf die [Administrationsoberfläche][6] der MoodleBox zu ([Website-Administration > Server > MoodleBox][6]).
- Klicken Sie auf die Taste _Partitionsgröße der SD-Karte ändern_.

{{< figure link="/img/media/resize-sdcard-en.png" caption="Partitionsgröße der SD-Karte ändern" caption-position="bottom" caption-effect="appear" width="800px" >}}

Die MoodleBox wird anschließend automatisch neu gestartet und ist einige Sekunden nach diesem Vorgang einsatzbereit.

{{% notice info %}}
Kein Problem ist es, wenn Sie auf die Taste _Partitionsgröße der SD-Karte ändern_ klicken und die Partitionsgröße bereits vorher geändert wurde. Als einzige Konsequenz erfolgt ein Neustart der MoodleBox.
{{% /notice %}}

 [1]: {{< relref "download-the-disk-image.md" >}}
 [2]: {{< relref "copy-the-disk-image.md" >}}
 [3]: {{< relref "startup-shutdown-restart.md" >}}
 [4]: {{< relref "access-to-moodle.md" >}}
 [5]: {{< relref "credentials.md" >}}
 [6]: http://moodlebox.home/admin/tool/moodlebox/index.php
