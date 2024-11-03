---
title: Mettre à jour Moodle sur la MoodleBox
authors:
  - Nicolas Martignoni
  - Adrian Perez Rodriguez
type: kb
date: 2017-04-17
lastmod: 2024-11-03
description: Vous voulez mettre à jour Moodle sur la MoodleBox ? Suivez ces instructions !
keywords:
  - shell
  - ssh
  - ligne de commande
  - cli
slug: mise-a-jour-de-la-version-de-moodle
categories:
  - Maintenance
---
{{< notice info >}}
Avant de mettre à jour votre version de Moodle, vérifiez que les prérequis serveur sont bien présents sur votre MoodleBox. Pour ce faire, connectez-vous à Moodle, visitez la page [Administration du site > Serveur > Environnement](http://moodlebox.home/admin/environment.php), cliquez sur _Mettre à jour le composant_, puis contrôlez qu'aucune des lignes ne comporte un statut _Vérifier_ en rouge.

L'avertissement _site not https_ n'est pas problématique et peut être ignoré.
{{< /notice >}}

Pour mettre à jour Moodle, on effectuera les opérations suivantes, en ligne de commande.

[Connectez-vous à la MoodleBox via SSH][cli] avec le mot de passe principal pour obtenir un accès en ligne de commande. Si [vous ne l'avez pas encore changé][change-pwd], utilisez [le mot de passe principal par défaut][default-pwd] __Moodlebox4$__.

```bash
ssh moodlebox@moodlebox.home
```

### Mise à jour vers une version _mineure_

Pour une mise à jour à une __version mineure__ de Moodle (4.5.1, 4.5.2, etc.), tapez les commandes suivantes dans le terminal[^git] :

```bash
cd /var/www/moodle/
sudo -u www-data -g moodlebox git pull
```

Chargez ensuite dans le navigateur l'URL http://moodlebox.home/admin, et suivez les instructions de mise à jour, comme avec un Moodle standard ([voir la documentation][update]).

### Mise à jour vers une version _majeure_

Pour une mise à jour à une __version majeure__ de Moodle (4.5, 4.6[^future], etc.), tapez les commandes ci-dessus, puis __en plus__ les commandes suivantes, en indiquant la branche adéquate, par exemple `MOODLE_405_STABLE`, `MOODLE_406_STABLE`, etc. :

```bash
sudo -u www-data -g moodlebox git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
sudo -u www-data -g moodlebox git fetch origin
sudo -u www-data -g moodlebox git checkout MOODLE_405_STABLE
```

Chargez ensuite dans le navigateur l'URL http://moodlebox.home/admin, et suivez les instructions de mise à jour, comme avec un Moodle standard ([voir la documentation][update]).

 [update]: https://docs.moodle.org/fr/Mise_à_jour
 [cli]: {{< relref "help/command-line-access" >}}
 [change-pwd]: {{< relref "help/change-password" >}}
 [default-pwd]: {{< relref "help/credentials" >}}

 [^git]: Afin de permettre une mise à jour simplifiée de Moodle, son installation a été faite au moyen de Git.
 [^future]: On ne choisira bien sûr qu'une branche existante et stable, et il faut attendre pour cela la [publication officielle](https://moodledev.io/general/releases) de la version concernée de Moodle.
