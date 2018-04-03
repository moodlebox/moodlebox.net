---
title: Comment se connecter à Moodle
author: Nicolas Martignoni
type: kb
date: 2017-04-17
description: Pour accéder à Moodle sur la MoodleBox, vous devez d'abord être connecté à son réseau Wi-Fi, puis visiter http://moodlebox.home/
slug: acces-a-moodle
weight: 6
categories:
  - Utilisation

---
Pour accéder à Moodle sur la MoodleBox, vous devez d'abord [être connecté à son réseau Wi-Fi][1]. Sur votre appareil, sélectionnez le réseau sans fil __MoodleBox__. Lorsque le mot de passe vous est demandé, tapez __moodlebox__ (attention, tout en minuscules) et confirmez votre connexion.

Vous pouvez maintenant accéder à Moodle au moyen de votre navigateur. Ouvrez votre navigateur et tapez dans la barre d'adresse [http://moodlebox.home/][2]. La page d'accueil de l'environnement Moodle s'affiche alors. Cliquez sur __Connexion__ et saisissez les informations de connexion suivantes :

  * nom d'utilisateur : __admin__
  * mot de passe : __Moodlebox4$__

{{< figure link="/img/media/moodle-login-fr.png" caption="Connexion à Moodle" caption-position="bottom" caption-effect="appear" width="601px" >}}

Vous êtes alors connecté au compte administrateur de Moodle sur la MoodleBox. Il est __fortement recommandé de modifier le mot de passe initial__ du compte administrateur de Moodle dès la première connexion.

L'installation initiale de Moodle ne comporte qu'un seul compte utilisateur (un administrateur) et aucun cours n'y a été créé. La configuration de l'environnement doit être effectuée par vous-même, tout comme la gestion de ses contenus (ressources, activités, etc.). Consultez la [documentation de Moodle][3] si vous ne savez pas comment le faire.

 [1]: {{< relref "wi-fi-connection.md" >}}
 [2]: http://moodlebox.home/
 [3]: https://docs.moodle.org/fr/Guide_rapide_d'administration
