---
title: Comment copier l'image-disque sur une carte SD
authors:
  - Nicolas Martignoni
type: kb
date: 2017-04-17
lastmod: 2022-12-27
description: Pour copier l'image-disque MoodleBox sur une carte SD, suivez ces instructions.
slug: copier-limage-disque-sur-une-carte-sd
categories_weight: 4
categories:
  - Premiers pas
---
Vous avez déjà téléchargé l'[image-disque][1] ?

Poursuivez en [téléchargeant balenaEtcher][2] (anciennement appelé _Etcher_), puis suivez les instructions dans balenaEtcher pour copier sur votre carte microSD le fichier __{{< ghrelease user="moodlebox" repo="moodlebox" data="file_name" id=3 >}}__ que [vous avez téléchargé][1].

{{< figure src="/img/media/etcher-copy.png" title="Copie avec balenaEtcher" class="centered-image" width="700" >}}

<!--
### Pour les geeks

Si vous préférez utiliser la ligne de commande pour copier l'image-disque sur votre carte, décompressez le fichier __{{< ghrelease user="moodlebox" repo="moodlebox" data="file_name" id=3 >}}__ que [vous avez téléchargé][1] et suivez les [instructions][3] pour copier l'image-disque __moodlebox-{{< ghrelease user="moodlebox" repo="moodlebox" data="version" >}}.img__ sur la carte microSD.

  * [Instructions pour Mac OS][4]
  * [Instructions pour Windows][5]
  * [Instructions pour Linux][6]
 -->

 [1]: {{< relref "help/download-the-disk-image" >}}
 [2]: https://www.balena.io/etcher/
 [3]: https://www.raspberrypi.org/documentation/installation/installing-images/README.md
 [4]: https://www.raspberrypi.org/documentation/installation/installing-images/mac.md
 [5]: https://www.raspberrypi.org/documentation/installation/installing-images/windows.md
 [6]: https://www.raspberrypi.org/documentation/installation/installing-images/linux.md
