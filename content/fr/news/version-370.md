---
title: "MoodleBox 3.7.0 vous offre Moodle 3.9"
description: MoodleBox version 3.7.0 fournit Moodle 3.9. Elle est basée sur la version de Raspberry Pi OS du 27 mai 2020.
date: 2020-06-15
authors:
  - Nicolas Martignoni
slug: version-3.7.0
---

La [version 3.7.0][release] de l'[image  de la MoodleBox][disk] vient d'être publiée.

&gt; [Télécharger l'image disque][disk]

{{< figure src="/img/media/moodle39.png" width="700" class="centered-image" >}}

  - Cette version fournit [Moodle][moodle] version 3.9.0 et toutes ses [nouvelles fonctionnalités][moodle39], y compris l'intégration H5P, un sélecteur d'activités complètement repensé et la possibilité de copier des cours.
  - Une nouvelle version du [Plugin MoodleBox pour Moodle][plugin] supporte la nouvelle Raspberry Pi 4B avec 8 Go de mémoire, et une meilleure gestion de la détection des alimentations insuffisantes.
  - Elle est basée sur la dernière version de [Raspberry Pi OS Lite][rpios], publiée le 27 mai 2020.
  - Le logiciel du portail captif [Nodogsplash][nds] a été mis à jour à sa dernière version.
  - [MathJax][mathjax] a été mis à jour à la version 2.7.8.

Consultez les [notes de mise à jour sur Github][release] pour tous les détails de cette version.

 [disk]: {{< relref "help/download-the-disk-image" >}}
 [release]: https://github.com/moodlebox/moodlebox/releases/tag/v3.7.0
 [moodle]: https://moodle.org/
 [plugin]: https://moodle.org/plugins/tool_moodlebox
 [nds]: https://nodogsplashdocs.readthedocs.io/
 [mathjax]: https://mathjax.org/
 [rpios]: https://www.raspberrypi.org/downloads/raspberry-pi-os/
 [moodle39]: https://docs.moodle.org/39/en/New_features
