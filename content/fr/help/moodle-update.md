---
title: Comment mettre à jour Moodle
authors:
  - Nicolas Martignoni
type: kb
date: 2017-04-17
lastmod: 2018-10-13
description: Vous voulez mettre à jour Moodle sur la MoodleBox ? Suivez ces instructions
slug: mise-a-jour-de-la-version-de-moodle
categories:
  - Maintenance

---
Afin de permettre une mise à jour simplifiée de Moodle, son installation a été faite au moyen de Git. Pour mettre à jour Moodle, on effectuera donc les opérations suivantes, en ligne de commande.

{{% notice info %}}
À partir de la version 2.5.1 de MoodleBox, utilisez `sudo -u moodlebox -g www-data git pull` au lieu de `sudo -u www-data git pull` dans les commandes indiquées ci-dessous.
{{% /notice %}}

[Connectez-vous à la MoodleBox via SSH][2], avec le mot de passe habituel __Moodlebox4$__.

```bash
ssh moodlebox@moodlebox.home
```

### Mise à jour vers une __version mineure__

Pour une mise à jour à une __version mineure__ de Moodle (3.5.1, 3.5.2, etc.), tapez les commandes suivantes dans le terminal :

```bash
cd /var/www/moodle/
sudo -u www-data git pull
```

Chargez ensuite dans le navigateur l'URL http://moodlebox.home/admin, et suivez les instructions de mise à jour, comme avec un Moodle standard ([voir la documentation][1]).

### Mise à jour vers une __version majeure__

Pour une mise à jour à une __version majeure__ de Moodle (3.6, 3.7, etc.), tapez __en plus__ les commandes suivantes :

```bash
sudo -u www-data git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
sudo -u www-data git fetch origin
sudo -u www-data git pull
sudo -u www-data git checkout MOODLE_35_STABLE
```

Chargez ensuite dans le navigateur l'URL http://moodlebox.home/admin, et continuez comme ci-dessus.

 [1]: https://docs.moodle.org/fr/Mise_à_jour
 [2]: {{< relref "command-line-access.md" >}}
