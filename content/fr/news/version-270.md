---
title: MoodleBox 2.7.0 a été publiée
description: La version 2.7.0 fournit Moodle 3.6.4+. Elle permet de placer les boutons de redémarrage et d'arrêt dans toutes les pages de Moodle.
date: 2019-05-20
authors:
  - Nicolas Martignoni
slug: version-2.7.0
---

La [version 2.7.0][2] de l'[image  de la MoodleBox][1] est publiée aujourd'hui. Elle apporte de nombreuses nouvelles fonctionnalités.

  - Cette version fournit [Moodle][3] version 3.6.4+.
  - Elle est basée sur l'[image Raspbian Stretch Lite][4] publiée 8 avril 2019.
  - Une nouvelle version du [plugin MoodleBox pour Moodle][5] permet de placer les [boutons de redémarrage et d'arrêt][7] dans le pied de toutes les pages de Moodle.
  - Un avertissement est affiché à l'administrateur de Moodle si l'alimentation de la MoodleBox délivre une tension insuffisante.
  - Un [portail captif][6] est intégré à la MoodleBox. Le portail captif est désactivé par défaut. [Lisez la documentation][6] pour en savoir plus.
  - Divers bogues ont été corrigés.

Cette version fournit également une version préliminaire du script de mise à jour de la MoodleBox. Le script est fonctionnel, mais aucune documentation n'est encore fournie.

Consultez les [notes de mise à jour sur Github][2] pour tous les détails de cette version.

 [1]: {{< relref "download-the-disk-image.md" >}}
 [2]: https://github.com/moodlebox/moodlebox/releases/tag/v2.7.0
 [3]: https://moodle.org/
 [4]: https://www.raspberrypi.org/downloads/raspbian/
 [5]: https://moodle.org/plugins/tool_moodlebox
 [6]: {{< relref "captive-portal" >}}
 [7]: {{< relref "buttons-in-footer" >}}
