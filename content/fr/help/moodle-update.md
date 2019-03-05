---
title: Comment mettre à jour Moodle
authors:
  - Nicolas Martignoni
  - Adrian Perez Rodriguez
type: kb
date: 2017-04-17
lastmod: 2018-12-05
description: Vous voulez mettre à jour Moodle sur la MoodleBox ? Suivez ces instructions !
slug: mise-a-jour-de-la-version-de-moodle
categories:
  - Maintenance

---
Pour mettre à jour Moodle, on effectuera les opérations suivantes, en ligne de commande.

Pour commencer, [connectez-vous à la MoodleBox via SSH][2] avec votre mot de passe administrateur. Si [vous ne l'avez pas encore changé][3], utilisez [le mot de passe  principal par défaut][4] __Moodlebox4$__.

```bash
ssh moodlebox@moodlebox.home
```

### Mise à jour vers une version _mineure_

Pour une mise à jour à une __version mineure__ de Moodle (3.6.1, 3.6.2, etc.), tapez les commandes suivantes dans le terminal[^1] :

```bash
cd /var/www/moodle/
sudo -u moodlebox -g www-data git pull
```

Chargez ensuite dans le navigateur l'URL http://moodlebox.home/admin, et suivez les instructions de mise à jour, comme avec un Moodle standard ([voir la documentation][1]).

### Mise à jour vers une version _majeure_

Pour une mise à jour à une __version majeure__ de Moodle (3.7, 3.8, etc.), tapez les commandes ci-dessus, puis __en plus__ les commandes suivantes :

```bash
sudo -u moodlebox -g www-data git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
sudo -u moodlebox -g www-data git fetch origin
sudo -u moodlebox -g www-data git checkout MOODLE_36_STABLE
```

Chargez ensuite dans le navigateur l'URL http://moodlebox.home/admin, et suivez les instructions de mise à jour, comme avec un Moodle standard ([voir la documentation][1]).

{{% notice warning %}}
Si vous possédez une version de MoodleBox version 2.5.0 ou antérieure, utilisez `sudo -u www-data git ...` au lieu de `sudo -u moodlebox -g www-data git ...` dans les commandes indiquées ci-dessus.
{{% /notice %}}

 [1]: https://docs.moodle.org/fr/Mise_à_jour
 [2]: {{< relref "command-line-access.md" >}}
 [3]: {{< relref "change-password.md" >}}
 [4]: {{< relref "credentials.md" >}}

 [^1]: Afin de permettre une mise à jour simplifiée de Moodle, son installation a été faite au moyen de Git.
