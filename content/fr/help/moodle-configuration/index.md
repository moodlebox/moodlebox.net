---
title: Quelle est la configuration par défaut de Moodle
authors:
  - Nicolas Martignoni
type: kb
date: 2017-04-17
lastmod: 2021-03-10
description: Informations détaillées sur la configuration de l'installation de Moodle de la MoodleBox
slug: configuration-moodle
categories:
  - Maintenance

---
L'environnement Moodle installé sur la MoodleBox est totalement standard.

Les réglages de Moodle ci-dessous ont été configurés pour faciliter son utilisation ou améliorer les performances de la MoodleBox.

### Réglages Moodle configurés

[App Mobile](http://moodlebox.home/admin/category.php?category=mobileapp)
:   Le service mobile permettant l'accès au moyen de l'[app mobile Moodle][1] officielle est activé. Vous pouvez télécharger l'app mobile Moodle à l'adresse https://download.moodle.org/mobile/.

[Taille des fichiers déposés](http://moodlebox.home/admin/settings.php?section=sitepolicies#admin-maxbytes)
:   La taille maximale des fichiers déposés est fixée à __50 Mo__ (au moyen des variables `post_max_size` et `upload_max_filesize` de PHP).

[Cron](http://moodlebox.home/admin/tool/task/scheduledtasks.php)
:   Le _cron_ est configuré de sorte à être lancé __toutes les minutes__. Certaines tâches programmées nécessitent un accès à Internet. Il est recommandé de connecter la MoodleBox à Internet au moyen d'un câble Ethernet.

[Filtre multilingue](http://moodlebox.home/admin/settings.php?section=filtersettingmultilang)
:   Le filtre Contenu multilingue est activé.

[Cache](http://moodlebox.home/cache/admin.php)
:   Les mécanismes de cache de Moodle sont configurés pour __optimiser la réactivité__ de la MoodleBox.

[Plugin MoodleBox](http://moodlebox.home/admin/category.php?category=moodlebox)
:   Le [plugin d'administration MoodleBox][2] pour Moodle est installé. Ce plugin permet à un administrateur Moodle de redémarrer et d'arrêter la MoodleBox, de changer ses date et heure, d'en modifier certains paramètres et de surveiller son fonctionnement au moyen d'une interface graphique simple.

[Bibliothèque MathJax](http://moodlebox.home/admin/settings.php?section=filtersettingmathjaxloader)
:   La bibliothèque MathJax est installée en local, permettant au filtre MathJax de fonctionner correctement même si la MoodleBox n'est pas connectée à Internet.

[Chemins système](http://moodlebox.home/admin/settings.php?section=systempaths)
:   Les chemins d'accès vers les exécutables `php`, `du`, `ghostscript` et `python` sont adéquatement définis.

[Débogage](http://moodlebox.home/admin/settings.php?section=debugging)
:   L'affichage des informations de débogage est désactivé.

 [1]: https://download.moodle.org/mobile/
 [2]: https://moodle.org/plugins/tool_moodlebox
