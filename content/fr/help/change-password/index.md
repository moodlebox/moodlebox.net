---
title: Comment changer le mot de passe principal
authors:
  - Nicolas Martignoni
type: kb
date: 2018-11-02
lastmod: 2022-08-14
description: On peut changer le mot de passe principal de la MoodleBox en visitant le tableau de bord dans l'interface d'administration
slug: changer-mot-de-passe-principal
categories_weight: 5
categories:
  - Utilisation
---

{{< notice info >}}
Il est vivement recommandé de __changer immédiatement__ le mot de passe principal de la MoodleBox, afin d'éviter que des personnes non autorisées y pratiquent des modifications non désirées et la rendent inutilisable.
{{< /notice >}}

Pour changer le mot de passe principal de votre MoodleBox, visitez le tableau de bord dans l'interface d'administration : [Administration du site > Serveur > MoodleBox][1].

Ce mot de passe fait partie des informations d'identification principales de la MoodleBox. Il donne accès à l'[interface en ligne de commande][5] de la MoodleBox, au [téléchargement de fichiers par SFTP][6] ainsi qu'à l'[administration de la base de données][7].

{{< figure src="change-password-fr.png" title="Changer le mot de passe principal" class="centered-image" width="490" >}}

Dans la section __Mot de passe MoodleBox__, saisissez votre nouveau mot de passe, le même dans les deux champs. En cliquant sur l'icône d'œil, vous pouvez faire apparaître les caractères que vous avez tapés. Nous recommandons de choisir un mot de passe fort.

{{< notice tip >}}
Le mot de passe du compte administrateur de Moodle __n'est pas modifié__ par cette opération. Pour changer ce mot de passe-là, connectez-vous à Moodle, visitez les <a href="http://moodlebox.home/user/preferences.php" target="_blank">préférences de votre profil</a> et <a href="http://moodlebox.home/login/change_password.php" target="_blank">changez le mot de passe</a>.
{{< /notice >}}

 [1]: http://moodlebox.home/admin/tool/moodlebox/index.php
 [2]: http://moodlebox.home/
 [3]: http://moodlebox.home/user/preferences.php
 [4]: http://moodlebox.home/login/change_password.php
 [5]: {{< relref "help/command-line-access" >}}
 [6]: {{< relref "help/using-files-with-the-moodlebox" >}}
 [7]: {{< relref "help/access-to-the-database" >}}
