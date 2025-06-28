---
title: MoodleBox 2.6.0 a été publiée
description: MoodleBox 2.6.0 offre dès maintenant Moodle 3.6. L'image-disque est basée sur Raspbian Stretch Lite du 13 novembre 2018.
date: 2018-12-03
authors:
  - Nicolas Martignoni
slug: version-2.6.0
---

{{< notice warning >}}
Cette version __ne peut pas être mise à jour automatiquement__ avec le script de mise à jour en développement. Nous vous recommandons d'utiliser plutôt la version 2.6.1.
{{< /notice >}}

La [version 2.6.0][2] de l'[image de la MoodleBox][2] est publiée aujourd'hui.

  - Cette version fournit [Moodle][6] version 3.6, publiée également aujourd'hui.
  - Elle est basée sur l'[image Raspbian Stretch Lite][4] publiée 13 novembre 2018.
  - Elle utilise PHP version 7.1.
  - Une nouvelle version du [plugin MoodleBox pour Moodle][3] permet de cacher si nécessaire le réseau Wi-Fi.
  - Le nom d'utilisateur par défaut est désormais _moodlebox_, au lieu de _admin_.
  - Ghostscript est installé par défaut, permettant ainsi d'utiliser directement les annotations PDF, sans nécessiter d'intervention supplémentaire.

Consultez les [notes de mise à jour sur Github][2] pour plus de détails sur la totalité des modifications de cette version.

 [1]: {{< relref "help/copy-the-disk-image" >}}
 [2]: https://github.com/moodlebox/moodlebox/releases/tag/v2.6.0
 [3]: https://moodle.org/plugins/tool_moodlebox
 [4]: https://www.raspberrypi.org/downloads/raspbian/
 [5]: {{< relref "help/moodle-update" >}}
 [6]: https://moodle.org/
