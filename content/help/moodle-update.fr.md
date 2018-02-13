---
title: Comment mettre à jour Moodle
author:
  - Nicolas Martignoni
type: kb
date: 2017-04-17T19:33:38+00:00
slug: mise-a-jour-de-la-version-de-moodle
categories:
  - Maintenance

---
Afin de permettre une mise à jour simplifiée de Moodle, son installation a été faite au moyen de Git. Pour mettre à jour Moodle, on effectuera donc les opérations suivantes, en ligne de commande.

[Connectez-vous à la MoodleBox via SSH][2], avec le mot de passe habituel __Moodlebox4$__.

```bash
ssh moodlebox@moodlebox.home
```

### Mise à jour vers une __version mineure__

Pour une mise à jour à une __version mineure__ de Moodle (3.4.1, 3.4.2, etc.), tapez les commandes suivantes dans le terminal :

```bash
cd /var/www/moodle/
sudo -u www-data git pull
```

Chargez ensuite dans le navigateur l'URL http://moodlebox.home/admin, et suivez les instructions de mise à jour, comme avec un Moodle standard ([voir la documentation][1]).

### Mise à jour vers une __version majeure__

Pour une mise à jour à une __version majeure__ de Moodle (3.5, 3.6, etc.), tapez __en plus__ les commandes suivantes :

```bash
sudo -u www-data git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
sudo -u www-data git fetch origin
sudo -u www-data git pull
sudo -u www-data git checkout MOODLE_35_STABLE
```

Chargez ensuite dans le navigateur l'URL http://moodlebox.home/admin, et continuez comme ci-dessus.

 [1]: https://docs.moodle.org/fr/Mise_à_jour
 [2]: {{< relref "command-line-access.fr.md" >}}
