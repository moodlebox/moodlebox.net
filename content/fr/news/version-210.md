---
date: 2018-01-02
title: Version 2.1.0 de l'image disque
description: MoodleBox 2.1.0 est basée sur l'image Raspbian Stretch Lite du 29-11-2017. Le processus de création de l'image a été repensé.
authors:
  - Nicolas Martignoni
slug: version-2.1.0
---

La version 2.1.0 de l'[image of the MoodleBox][4] est publiée aujourd'hui. [Cette version][4] ne change pas grand chose pour les utilisateurs finals. Cependant il y a de gros changements sous le capot.

  - Le processus de création de l'image a été complètement revu. Au lieu d'utiliser un script bash, on utilise maintenant [Ansible][3], qui permet une génération plus robuste de l'image. Ansible est un outil libre et gratuit pour automatiser l'installation et la maintenance de serveurs.
  - Cette version est basée sur l'[image Raspbian Stretch Lite][2] publiée le 2017-11-29.
  - D'autres petites modifications et additions ont été faites. Consultez les [notes de mise à jour sur Github][4] pour plus de détails.

 [1]: {{< relref "download-the-disk-image.md" >}}
 [2]: https://www.raspberrypi.org/downloads/raspbian/
 [3]: https://www.ansible.com
 [4]: https://github.com/moodlebox/moodlebox/releases/tag/v2.1.0
