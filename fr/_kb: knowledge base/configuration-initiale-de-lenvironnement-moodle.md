---
ID: 414
post_title: >
  Quelle est la configuration par défaut
  de Moodle ?
author: nicolas.martignoni.admin
post_excerpt: ""
layout: epkb_post_type_1
permalink: >
  https://moodlebox.net/fr/help/configuration-initiale-de-lenvironnement-moodle/
published: true
post_date: 2017-04-17 22:03:51
---
L'environnement Moodle installé sur la MoodleBox n'a aucune configuration particulière, hormis quelques réglages. Les réglages décrits ci-dessous ont été modifiés pour faciliter son utilisation ou améliorer ses performances.
<dl>
 	<dt>App Mobile</dt>
 	<dd>Le service mobile permettant l'accès au moyen de l'<a href="https://download.moodle.org/mobile/" target="_blank" rel="noopener">app mobile Moodle</a> officielle est activé. Vous pouvez télécharger l'app mobile Moodle à l'adresse <a href="https://download.moodle.org/mobile/" target="_blank" rel="noopener">https://download.moodle.org/mobile/</a>.</dd>
 	<dt>Taille des fichiers déposés</dt>
 	<dd>La taille maximale des fichiers déposés est fixée à <strong>50 Mo</strong> (au moyen des variables <em>post_max_size</em> et <em>upload_max_filesize</em> de PHP).</dd>
 	<dt>Cron</dt>
 	<dd>Le <em>cron</em> est configuré de sorte à être lancé <strong>toutes les 3 minutes</strong>. Certaines tâches programmées nécessitent un accès à Internet. Il est recommandé de connecter la MoodleBox à Internet au moyen d'un câble Ethernet.</dd>
 	<dt>Filtre multilingue</dt>
 	<dd>Le filtre Contenu multilingue est activé.</dd>
 	<dt>Cache</dt>
 	<dd>Les mécanismes de cache de Moodle sont configurés pour <strong>optimiser la réactivité</strong> de la MoodleBox.</dd>
 	<dt>Plugin MoodleBox</dt>
 	<dd>Le <a href="https://moodle.org/plugins/tool_moodlebox" target="_blank" rel="noopener">plugin d'administration MoodleBox</a> pour Moodle est installé. Ce plugin permet à un administrateur Moodle de redémarrer et d'arrêter la MoodleBox, de changer ses date et heure, d'en modifier certains paramètres et de surveiller son fonctionnement au moyen d'une interface graphique simple.</dd>
 	<dt>Bibliothèque MathJax library</dt>
 	<dd>Dès la version 2.0 et ultérieures, la bibliothèque MathJax est installée en local, permettant au filtre MathJax de fonctionner correctement même is la MoodleBox n'est pas connectée à Internet.</dd>
</dl>