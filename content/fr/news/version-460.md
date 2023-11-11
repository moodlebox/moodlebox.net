---
title: "MoodleBox 4.6.0: nombreuses améliorations, Moodle 4.3 et l'espagnol"
description: La version 4.6.0 de MoodleBox se fonde sur Bookworm, la version 12 de la distribution Debian. Elle contient la version 4.3 de Moodle.
date: 2023-11-10
authors:
  - Nicolas Martignoni
slug: version-4.6.0
---
L'image [MoodleBox version 4.6.0][release], attendue depuis longtemps, propose de nombreux changements, en particulier la [version 4.3][moodle43] de [Moodle][moodle]. Elle se fonde sur _Bookworm_, la [version 12 de Debian][debian].

{{< figure src="/img/media/moodlebox-460.png" width="780" class="centered-image" alt="MoodleBox version 4.6.0" >}}

Grâce à une nouvelle version du [plugin MoodleBox pour Moodle][plugin], le tableau de bord MoodleBox est plus facilement accessible, dans le niveau supérieur du menu d'administration.

Voici le principales nouveautés de [MoodleBox 4.6.0][release]:
- [Moodle][moodle] [version 4.3][moodle43] !
- Fondée sur la dernière version de [Raspberry Pi OS Lite][rpios] du 10 octobre 2023, avec Debian version 12, _Bookworm_.
- Paquetage de langue Espagnol (international) installé par défaut.
- Prise en charge préliminaire (non testée !) de la toute nouvelle [Raspberry Pi Modèle 5][rpi5].
- Nouvelle version du [plugin MoodleBox pour Moodle][plugin].
- Plein d'autres améliorations et corrections, y compris Redis pour le cache de Moodle et le montage simultané de plusieurs clefs USB.

Pour installer MoodleBox, nous vous recommandons d'utiliser l'utilitaire [Raspberry Pi Imager][rpi-imager], qui télécharge automatiquement pour vous l'image disque MoodleBox.

&Gt; [Plus d'informations sur l'installation de MoodleBox][install]

Consultez les [notes de mise à jour sur Github][release] pour tous les détails de cette version.

[disk]: {{< relref "help/download-the-disk-image" >}}
[release]: https://github.com/moodlebox/moodlebox/releases/tag/v4.6.0
[plugin]: https://moodle.org/plugins/tool_moodlebox
[moodle]: https://moodle.org/
[rpios]: https://www.raspberrypi.com/software/operating-systems/
[rpi5]: https://www.raspberrypi.com/products/raspberry-pi-5/
[moodle43]: https://moodle.com/news/moodle-lms-4-3-a-leap-forward-in-user-experience-and-efficiency/
[rpi-imager]: https://www.raspberrypi.com/software/
[debian]: https://www.debian.org/News/2023/20230610
[install]: {{< relref "help/install-the-moodlebox" >}}
