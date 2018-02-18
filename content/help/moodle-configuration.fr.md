---
title: Quelle est la configuration par défaut de Moodle
author:
  - Nicolas Martignoni
type: kb
date: 2017-04-17T20:03:51+00:00
slug: configuration-initiale-de-lenvironnement-moodle
categories:
  - Maintenance

---
L'environnement Moodle installé sur la MoodleBox n'a aucune configuration particulière, hormis quelques réglages. Les réglages décrits ci-dessous ont été modifiés pour faciliter son utilisation ou améliorer ses performances.

App Mobile
:   Le service mobile permettant l'accès au moyen de l'[app mobile Moodle][1] officielle est activé. Vous pouvez télécharger l'app mobile Moodle à l'adresse https://download.moodle.org/mobile/.

Taille des fichiers déposés
:   La taille maximale des fichiers déposés est fixée à __50 Mo__ (au moyen des variables _post\_max\_size_ et _upload\_max\_filesize_ de PHP).

Cron
:   Le _cron_ est configuré de sorte à être lancé __toutes les minutes__ (toutes les 3 minutes avant la version 2.2.0). Certaines tâches programmées nécessitent un accès à Internet. Il est recommandé de connecter la MoodleBox à Internet au moyen d'un câble Ethernet.

Filtre multilingue
:   Le filtre Contenu multilingue est activé.

Cache
:   Les mécanismes de cache de Moodle sont configurés pour __optimiser la réactivité__ de la MoodleBox.

Plugin MoodleBox
:   Le [plugin d'administration MoodleBox][2] pour Moodle est installé. Ce plugin permet à un administrateur Moodle de redémarrer et d'arrêter la MoodleBox, de changer ses date et heure, d'en modifier certains paramètres et de surveiller son fonctionnement au moyen d'une interface graphique simple.

Bibliothèque MathJax
:   Dès la version 2.0 et ultérieures, la bibliothèque MathJax est installée en local, permettant au filtre MathJax de fonctionner correctement même is la MoodleBox n'est pas connectée à Internet.

 [1]: https://download.moodle.org/mobile/
 [2]: https://moodle.org/plugins/tool_moodlebox
