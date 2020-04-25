---
title: Comment copier l'image-disque sur une carte SD
authors:
  - Nicolas Martignoni
type: kb
date: 2017-04-17
lastmod: 2018-12-15
description: Pour copier l'image-disque MoodleBox sur une carte SD, suivez ces instructions.
slug: copier-limage-disque-sur-une-carte-sd
categories_weight: 4
categories:
  - Premiers pas
---

Commencez par [télécharger balenaEtcher][2] (anciennement appelé _Etcher_), puis suivez les instructions dans balenaEtcher pour copier sur votre carte microSD le fichier __{{< ghrelease user="moodlebox" repo="moodlebox" data="file_name" >}}__ que [vous avez téléchargé][1].

{{< figure src="/img/media/etcher-copy.png" caption="Copie avec balenaEtcher" caption-position="bottom" caption-effect="appear" width="800px" >}}

### Pour les geeks

Si vous préférez utiliser la ligne de commande pour copier l'image-disque sur votre carte, décompressez le fichier __{{< ghrelease user="moodlebox" repo="moodlebox" data="file_name" >}}__ que [vous avez téléchargé][1] et suivez les [instructions][3] pour copier l'image-disque __moodlebox-{{< ghrelease user="moodlebox" repo="moodlebox" data="version" >}}.img__ sur la carte microSD.

  * [Instructions pour Mac OS][4]
  * [Instructions pour Windows][5]
  * [Instructions pour Linux][6]

 [1]: {{< relref "help/download-the-disk-image" >}}
 [2]: https://www.balena.io/etcher/
 [3]: https://www.raspberrypi.org/documentation/installation/installing-images/README.md
 [4]: https://www.raspberrypi.org/documentation/installation/installing-images/mac.md
 [5]: https://www.raspberrypi.org/documentation/installation/installing-images/windows.md
 [6]: https://www.raspberrypi.org/documentation/installation/installing-images/linux.md
