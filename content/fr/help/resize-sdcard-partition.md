---
title: Comment redimensionner la partition de la carte SD
authors:
  - Nicolas Martignoni
type: kb
date: 2018-07-09
lastmod: 2018-07-09
description: Pour redimensionner la partition de votre carte SD, suivez ces instructions.
slug: redimensionner-partition-carte-sd
weight: 100
categories:
  - Maintenance
---

### Marche à suivre

{{% notice warning %}}
L'opération décrite ci-dessous n'est pas requise si vous avez téléchargé l'image-disque sur ce site web. Toutefois, il peut être nécessaire de l'exécuter si vous avez reçu une image-disque personnalisée.
{{% /notice %}}

- [Copier votre image-disque personnalisée][2] sur la carte microSD ;
- [démarrez votre MoodleBox][3] de la manière habituelle ;
- [connectez-vous au Moodle][4] de la MoodleBox en utilisant un compte administrateur. Si les comptes utilisateurs de la MoodleBox n'ont pas été modifiés, utilisez les [informations de connexion par défaut][5] ;
- [accédez à l'interface d'administration][6] de la MoodleBox ([Administration du site > Serveur > MoodleBox][6] dans le bloc d'administration) ;
- cliquez sur le bouton _Redimensionner la partition de la carte SD_.

{{< figure link="/img/media/resize-sdcard-fr.png" caption="Redimensionner la carte SD" caption-position="bottom" caption-effect="appear" width="800px" >}}

La MoodleBox redémarre immédiatement et est prête à l'emploi quelques secondes après cette opération.

{{% notice info %}}
Il n'y a aucune conséquence problématique à cliquer sur le bouton _Redimensionner la partition de la carte SD_ alors que la carte SD est déjà redimensionnée. La seule conséquence sera le redémarrage de la MoodleBox.
{{% /notice %}}

 [1]: {{< relref "download-the-disk-image.md" >}}
 [2]: {{< relref "copy-the-disk-image.md" >}}
 [3]: {{< relref "startup-shutdown-restart.md" >}}
 [4]: {{< relref "access-to-moodle.md" >}}
 [5]: {{< relref "credentials.md" >}}
 [6]: http://moodlebox.home/admin/tool/moodlebox/index.php

