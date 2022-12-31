---
title: Copier un cours Moodle vers la MoodleBox
authors:
  - Nicolas Martignoni
type: kb
date: 2019-03-06
lastmod: 2019-04-01
description: Il est facile de copier (déplacer) un cours Moodle situé sur un autre serveur Moodle vers une MoodleBox.
slug: copier-un-cours-moodle
categories_weight: 6
categories:
  - Utilisation

---

Il est facile de copier un cours Moodle situé sur un autre serveur Moodle vers une MoodleBox, car MoodleBox est exactement comme un serveur Moodle habituel, juste en plus petit et très portable. Cette page traite des deux scénarios de déplacement de cours suivants.

Scénario 1
: On souhaite déplacer un cours situé sur le serveur Moodle de son école ou de son entreprise vers une MoodleBox.

Scénario 2
: On souhaite déplacer un cours situé sur une MoodleBox vers une autre MoodleBox.

{{< notice warning >}}
- Il n'est pas possible de copier un cours d'une version plus récente de Moodle vers une version plus ancienne de Moodle. Avant de commencer les opérations décrites ci-dessous, il faut donc s'assurer que la version du Moodle de la MoodleBox cible soit __égale ou plus récente__ que celle du serveur Moodle source (sur une autre MoodleBox ou sur le serveur de votre école).
- Si votre cours dépasse une taille de 50 Mo, il faut <a href="{{< relref "help/using-files-with-the-moodlebox" >}}">utiliser une clef USB ou l'option de serveur SFTP</a> de la MoodleBox pour pouvoir le restaurer.
{{< /notice >}}

Le processus de copie d'un cours d'un Moodle vers une MoodleBox est exactement le même qu'avec n'importe quel serveur Moodle. Il s'agit dans un premier temps d'effectuer sur le serveur Moodle de l'école ou de la première MoodleBox une [sauvegarde du cours (backup)][backup] que l'on veut copier, de l'enregistrer sur un support adéquat, puis de [restaurer cette sauvegarde][restore] sur la MoodleBox cible.

### Marche à suivre

#### Effectuer la sauvegarde (backup) du cours à copier sur le Moodle de l'école ou de la première MoodleBox

1. Sur le serveur Moodle où le cours est actuellement placé, se connecter et entrer dans le cours, avec au minimum un rôle d'enseignant.
1. Dans le menu de gestion du cours (la roue dentée), choisir l'option « Sauvegarde », puis procéder comme pour n'importe quelle sauvegarde de cours Moodle.
1. Au terme de la sauvegarde, télécharger le fichier de sauvegarde produit, par exemple `sauvegarde-maths-20190306-2020.mbz` sur votre ordinateur ou un autre support adéquat

Pour plus d'aide sur cette étape, consultez la [documentation officielle Moodle sur la sauvegarde de cours][backup].

#### Restaurer la sauvegarde sur la MoodleBox

1. Se connecter à la MoodleBox avec un compte administrateur.
1. Aller dans l'administration du Moodle de la MoodleBox, onglet Cours, et cliquer sur « [Restaurer un cours][restoreadmin] ».
1. Glisser le fichier du cours sauvegardé précédemment `sauvegarde-maths-20190306-2020.mbz`, sous « Importer un fichier de sauvegarde », et, si le cours est volumineux, attendez la fin du téléchargement. Si le fichier dépasse 50 Mo, [utiliser une clef USB ou l'option de serveur SFTP][bigfile] de la MoodleBox.
1. Cliquer sur « Restauration », puis terminer le processus de restauration de cours habituel de Moodle, en sélectionnant les options désirées. Au terme de la restauration, le cours est prêt à être utilisé.

Pour plus d'aide sur cette étape, consultez la [documentation officielle Moodle sur la restauration de cours][restore].

  [bigfile]: {{< relref "help/using-files-with-the-moodlebox" >}}
  [backup]: https://docs.moodle.org/fr/Sauvegarde_de_cours
  [restore]: https://docs.moodle.org/fr/Restauration_de_cours
  [restoreadmin]: http://moodlebox.home/backup/restorefile.php?contextid=1
