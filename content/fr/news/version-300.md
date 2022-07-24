---
title: MoodleBox 3.0.0 est arrivée !
description: La version 3.0.0 supporte la nouvelle Raspberry Pi 4B. Elle est basée sur Raspbian Buster et fournit Moodle 3.7.1.
date: 2019-07-13
authors:
  - Nicolas Martignoni
slug: version-3.0.0
---

La [version 3.0.0][2] de l'[image  de la MoodleBox][1] est publiée aujourd'hui. Elle apporte de nombreuses nouvelles fonctionnalités.

{{< figure src="/img/media/pi4-labelled.png" width="583" title="Raspberry Pi modèle 4B" class="centered-image" >}}

  - Cette version supporte la nouvelle [Raspberry Pi modèle 4B][8] (1 Go, 2 Go ou 4 Go de mémoire vive), offrant des gains de performance importants.
  - Elle fournit [Moodle][3] version 3.7.1, ainsi qu'une nouvelle version du [plugin MoodleBox pour Moodle][5].
  - Elle est basée sur Raspbian Buster, grâce à l'[image Raspbian Buster Lite][4] publiée le 10 juillet 2019.
  - PHP a été mis à jour à la version 7.3.
  - Pour des raisons de maintenance, le script phpMyAdmin permettant de gérer la base de données de Moodle [a été remplacé][6] par Adminer, un outil plus léger [offrant les mêmes fonctionnalités][7].
  - Le [compte administrateur Moodle][9] obsolète _admin_ n'est plus installé par défaut.
  - Divers bogues ont été corrigés.

Cette version fournit également une version préliminaire du script de mise à jour de la MoodleBox. Le script est fonctionnel, mais aucune documentation n'est encore fournie.

Consultez les [notes de mise à jour sur Github][2] pour tous les détails de cette version.

 [1]: {{< relref "help/download-the-disk-image" >}}
 [2]: https://github.com/moodlebox/moodlebox/releases/tag/v3.0.0
 [3]: https://moodle.org/
 [4]: https://www.raspberrypi.org/downloads/raspbian/
 [5]: https://moodle.org/plugins/tool_moodlebox
 [6]: {{< relref "help/access-to-the-database" >}}
 [7]: https://www.adminer.org/
 [8]: https://www.raspberrypi.org/products/raspberry-pi-4-model-b/
 [9]: {{< relref "help/access-to-moodle" >}}
