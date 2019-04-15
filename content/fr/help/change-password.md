---
title: Comment changer le mot de passe principal
authors:
  - Nicolas Martignoni
type: kb
date: 2018-11-02
lastmod: 2018-11-02
description: On peut changer le mot de passe principal de la MoodleBox en visitant le tableau de bord dans l'interface d'administration
slug: changer-mot-de-passe-principal
weight: 5
categories:
  - Utilisation
---

{{< notice warning >}}
Il est vivement recommandé de __changer immédiatement__ le mot de passe principal de la MoodleBox, afin d'éviter que des personnes non autorisées y pratiquent des modifications non désirées et la rendent inutilisable.
{{< /notice >}}

Pour changer le mot de passe principal de votre MoodleBox, visitez le tableau de bord dans l'interface d'administration : [Administration du site > Serveur > MoodleBox][1].

Ce mot de passe fait partie des informations d'identification principales de la MoodleBox. Il donne accès à l'[interface en ligne de commande][5] de la MoodleBox, au [téléchargement de fichiers par SFTP][6] ainsi qu'à l'[administration de la base de données][7].

{{< figure src="/img/media/change-password-fr.png" caption="Changer le mot de passe principal" caption-position="bottom" caption-effect="appear" width="600px"  >}}

Dans la section __Mot de passe MoodleBox__, saisissez votre nouveau mot de passe, le même dans les deux champs. En cliquant sur l'icône d'œil, vous pouvez faire apparaître les caractères que vous avez tapés. Nous recommandons de choisir un mot de passe fort.

{{< notice info >}}
Le mot de passe du compte administrateur de Moodle __n'est pas modifié__ par cette opération. Pour changer ce mot de passe-là, connectez-vous à Moodle, visitez les <a href="http://moodlebox.home/user/preferences.php">préférences de votre profil</a> et <a href="http://moodlebox.home/login/change_password.php">changez le mot de passe</a>.
{{< /notice >}}

 [1]: http://moodlebox.home/admin/tool/moodlebox/index.php
 [2]: http://moodlebox.home/
 [3]: http://moodlebox.home/user/preferences.php
 [4]: http://moodlebox.home/login/change_password.php
 [5]: {{< relref "command-line-access" >}}
 [6]: {{< relref "using-files-with-the-moodlebox" >}}
 [7]: {{< relref "access-to-the-database" >}}
