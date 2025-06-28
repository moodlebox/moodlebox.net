---
title: "Pleins de nouveautés avec MoodleBox 4.0.0"
description: Avec sa version 4.0.0, MoodleBox entre dans une nouvelle ère !
date: 2021-11-09
authors:
  - Nicolas Martignoni
slug: version-4.0.0
---

Avec sa [version 4.0.0][release], MoodleBox entre dans une nouvelle ère !

[MoodleBox 4.0.0][release] apporte de nombreuses nouveautés, parmi lesquelles le mode _AP+STA_, qui permet à la MoodleBox de se connecter à un réseau Wi-Fi existant et de servir __en même temps__ de point d'accès sans fil pour d'autres appareils. Ce mode permet une fonctionnalité complète de MoodleBox avec les modèles Raspberry Pi 3A+, Zero W, ainsi que la toute nouvelle Raspberry Pi Zero 2 W.

Et grâce à un nouveau microcode optimisé, [MoodleBox 4.0.0][release] supporte désormais à coup sûr 20 clients Wi-Fi.

[MoodleBox 4.0.0][release] est désormais basé sur _Bullseye_, la version 11 de Debian.

{{< figure src="/img/media/debian-bullseye.jpg" width="800" class="centered-image" alt="Debian Bullseye" >}}

&gt; [Télécharger l'image disque][disk]

Voici les nouveautés principales de [MoodleBox version 4.0.0][release].
  - Mode _AP+STA_.
  - Support complet de  Raspberry Pi 3A+, Zero W et Zero 2 W ; il n'est pas recommandé d'utiliser la RPi Zero W, trop lente pour une MoodleBox.
  - Basée sur la dernière version de [Raspberry Pi OS Lite][rpios] du 10 octobre 2021, avec la version 11 de Debian, _Bullseye_.
  - [Moodle][moodle] version 3.11.4.
  - Une nouvelle version du [Plugin MoodleBox pour Moodle][plugin] permet de changer l'adresse IP du réseau Wi-Fi de la MoodleBox.
  - Beaucoup d'autres améliorations de performance et de nombreux correctifs.

Consultez les [notes de mise à jour sur Github][release] pour tous les détails de cette version.

[disk]: {{< relref "help/copy-the-disk-image" >}}
[release]: https://github.com/moodlebox/moodlebox/releases/tag/v4.0.0
[moodle]: https://moodle.org/
[plugin]: https://moodle.org/plugins/tool_moodlebox
[rpios]: https://www.raspberrypi.com/software/operating-systems/
