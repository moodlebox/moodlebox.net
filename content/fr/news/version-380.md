---
title: "MoodleBox 3.8.0 : version corrective"
description: MoodleBox version 3.8.0 corrige plusieurs problèmes ennuyeux et met à jour plusieurs composants, dont Moodle 3.9.1+.
date: 2020-07-25
authors:
  - Nicolas Martignoni
slug: version-3.8.0
---

La [version 3.8.0][release] de l'[image de la MoodleBox][disk] vient d'être publiée.

&gt; [Télécharger l'image disque][disk]

### Nouveautés et corrections

{{< figure src="/img/media/pi4-8gb-labelled.png" width="500" class="centered-image" alt="Raspberry Pi 4 8Go" >}}

  - Une nouvelle version du [Plugin MoodleBox pour Moodle][plugin] corrige un bogue qui empêchait son utilisation correcte avec la Raspberry Pi 4B avec 8 Go de mémoire.
  - Cette version fournit [Moodle][moodle] version 3.9.1+.
  - Le logiciel du portail captif [Nodogsplash][nds] a été mis à jour à sa dernière version 5.0.0, en corrigeant un bogue qui bloquait la redirection vers la page d'accueil de la MoodleBox.
  - [Adminer][adminer] a été mis à jour à sa dernière version 4.7.7.
  - Le WiFi est désormais correctement activé sur tous les modèles supportés.
  - Les erreurs 502 qui apparaissent rarement sont maintenant gérées et le serveur redémarre immédiatement en cas de problème.

Consultez les [notes de mise à jour sur Github][release] pour tous les détails de cette version.

 [disk]: {{< relref "help/copy-the-disk-image" >}}
 [release]: https://github.com/moodlebox/moodlebox/releases/tag/v3.8.0
 [moodle]: https://moodle.org/
 [plugin]: https://moodle.org/plugins/tool_moodlebox
 [nds]: https://nodogsplashdocs.readthedocs.io/
 [adminer]: https://www.adminer.org/
