---
title: "MoodleBox 4.8.0: avec Raspberry Pi Connect"
description: MoodleBox version 4.8.0 offre l'accès à distance grâce à Raspberry Pi Connect et d'autres améliorations.
date: 2024-11-03
authors:
  - Nicolas Martignoni
slug: version-4.8.0
---
L'image [MoodleBox version 4.8.0][release] offre l'accès à distance grâce à [Raspberry Pi Connect][connect] et d'autres améliorations.

{{< figure src="/img/media/connect.webp" width="780" class="centered-image" alt="Raspberry Pi Connect" >}}

Voici le principales nouveautés de [MoodleBox 4.8.0][release]:
- [Moodle][moodle] [version 4.5+][moodle45] _Long Term Support_ !
- [Raspberry Pi Connect][connect] pré-installé, afin de permettre l'accès à distance et la maintenance de MoodleBox quand elle est connectée à Internet ; consultez [la documentation][remote-shell].
- Fondée sur la dernière version de [Raspberry Pi OS Lite][rpios] du 22 octobre 2024.
- Nouvelle version du [plugin MoodleBox pour Moodle][plugin].
- Plein d'autres améliorations et corrections, par exemple une nouvelle version de Adminer et de `rpi-clone`.

Pour installer MoodleBox, nous vous recommandons d'utiliser l'utilitaire [Raspberry Pi Imager][rpi-imager], qui télécharge automatiquement pour vous l'image disque MoodleBox.

&Gt; [Plus d'informations sur l'installation de MoodleBox][install]

Consultez les [notes de mise à jour sur Github][release] pour tous les détails de cette version.

[disk]: {{< relref "help/download-the-disk-image" >}}
[release]: https://github.com/moodlebox/moodlebox/releases/tag/v4.8.0
[connect]: https://connect.raspberrypi.com/
[remote-shell]: {{< relref "help/remote-shell" >}}
[plugin]: https://moodle.org/plugins/tool_moodlebox
[moodle]: https://moodle.org/
[rpios]: https://www.raspberrypi.com/software/operating-systems/
[rpi-imager]: https://www.raspberrypi.com/software/
[install]: {{< relref "help/install-the-moodlebox" >}}
[moodle45]: https://moodle.com/news/moodle-lms-45-unlock-the-power-of-ai-for-your-courses/
