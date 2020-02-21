---
title: Comment mettre à jour Moodle
authors:
  - Nicolas Martignoni
  - Adrian Perez Rodriguez
type: kb
date: 2017-04-17
lastmod: 2020-02-18
description: Vous voulez mettre à jour Moodle sur la MoodleBox ? Suivez ces instructions !
slug: mise-a-jour-de-la-version-de-moodle
categories:
  - Maintenance
---
{{< notice warning >}}
Avant de mettre à jour votre version de Moodle, vérifiez que les prérequis serveur sont bien présents sur votre MoodleBox. Pour ce faire, connectez-vous à Moodle, visitez la page [Administration du site > Serveur > Environnement](http://moodlebox.home/admin/environment.php), cliquez sur _Mettre à jour le composant_, puis contrôlez qu'aucune des lignes ne comporte un statut _Vérifier_ en rouge.

Les avertissements _site not https_ et _php not 64 bits_ ne sont pas problématiques et peuvent être ignorés.
{{< /notice >}}

Pour mettre à jour Moodle, on effectuera les opérations suivantes, en ligne de commande.

[Connectez-vous à la MoodleBox via SSH][2] avec le mot de passe principal. Si [vous ne l'avez pas encore changé][3], utilisez [le mot de passe principal par défaut][4] __Moodlebox4$__.

```bash
ssh moodlebox@moodlebox.home
```

### Mise à jour vers une version _mineure_

Pour une mise à jour à une __version mineure__ de Moodle (3.8.1, 3.8.2, etc.), tapez les commandes suivantes dans le terminal[^1] :

```bash
cd /var/www/moodle/
sudo -u moodlebox -g www-data git pull
```

Chargez ensuite dans le navigateur l'URL http://moodlebox.home/admin, et suivez les instructions de mise à jour, comme avec un Moodle standard ([voir la documentation][update]).

### Mise à jour vers une version _majeure_

Pour une mise à jour à une __version majeure__ de Moodle (3.9, 4.0, etc.), tapez les commandes ci-dessus, puis __en plus__ les commandes suivantes :

```bash
sudo -u moodlebox -g www-data git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
sudo -u moodlebox -g www-data git fetch origin
sudo -u moodlebox -g www-data git checkout MOODLE_38_STABLE
```

Chargez ensuite dans le navigateur l'URL http://moodlebox.home/admin, et suivez les instructions de mise à jour, comme avec un Moodle standard ([voir la documentation][update]).

{{< notice tip >}}
Si vous possédez une version de MoodleBox version 2.5.0 ou antérieure, utilisez `sudo -u www-data git ...` au lieu de `sudo -u moodlebox -g www-data git ...` dans les commandes indiquées ci-dessus.
{{< /notice >}}

 [update]: https://docs.moodle.org/fr/Mise_à_jour
 [2]: {{< relref "help/command-line-access" >}}
 [3]: {{< relref "help/change-password" >}}
 [4]: {{< relref "help/credentials" >}}

 [^1]: Afin de permettre une mise à jour simplifiée de Moodle, son installation a été faite au moyen de Git.
