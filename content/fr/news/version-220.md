---
title: Version 2.2.0 de l'image disque
description: MoodleBox 2.2.0 est basée sur la version 3.4.1 de Moodle. Diverses améliorations sont également présentes.
date: 2018-03-02
authors:
  - Nicolas Martignoni
slug: version-2.2.0
---

La [version 2.2.0][2] de l'[image of the MoodleBox][1] est publiée aujourd'hui.

Les principaux changement apportés par [cette version][2] pour les utilisateurs finals sont
  - la mise à jour à Moodle 3.4.1+, et
  - la prise en charge des clefs USB et disque durs formatés en NTFS et en exFAT. Merci à Ralf Krause pour la suggestion de cette nouvelle fonctionnalité.

Le `cron` de Moodle est désormais effectué toutes les minutes, suivant la [recommandation officielle][3], puisque la charge processeur occasionnée n'impacte pas les performances de la MoodleBox.

Consultez les [notes de mise à jour sur Github][2] pour plus de détails sur la totalité des modifications de cette version.

 [1]: {{< relref "download-the-disk-image.md" >}}
 [2]: https://github.com/moodlebox/moodlebox/releases/tag/v2.2.0
 [3]: https://docs.moodle.org/fr/Cron#Cron_depuis_Moodle_2.7
