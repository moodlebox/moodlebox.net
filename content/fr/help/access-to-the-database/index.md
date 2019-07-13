---
title: Comment gérer la base de données
authors:
  - Nicolas Martignoni
type: kb
date: 2017-04-20
lastmod: 2019-07-12
description: Pour accéder à la base de données de Moodle de la MoodleBox au moyen de Adminer, consultez les informations ci-dessous.
slug: acces-base-de-donnees
categories:
  - Maintenance

---
{{< notice warning >}}
Il est fortement déconseillé de modifier manuellement la base de données de Moodle. N’effectuez de telles opérations que si vous savez exactement ce que vous faites. Dans tous les cas, __aucune assistance n'est assurée__ sur ce sujet et nous déclinons toute responsabilité pour des pertes de données.
{{< /notice >}}

La MoodleBox permet à des fins d'administration un accès direct à la base de données de Moodle, au moyen du logiciel [Adminer][3]. Pour accéder à l'interface de connexion, on charge l'URL [http://moodlebox.home/adminer.php][1] dans un navigateur. Les données de connexion sont indiquées ci-dessous. Bien entendu le mot de passe sera différent si vous l'avez changé d'une façon ou d'une autre.

  * Nom d'utilisateur : __moodlebox__
  * Mot de passe : __Moodlebox4$__

{{< figure src="adminer.png" width="782" caption="Accès base de données avec Adminer" class="centered-image" >}}

{{< notice info >}}
Dans les versions de la MoodleBox antérieure à la version 3.0.0, l'outil phpMyAdmin était utilisé pour accéder à la base de données, via l'URL [http://moodlebox.home/phpmyadmin](http://moodlebox.home/phpmyadmin).
{{< /notice >}}

 [1]: http://moodlebox.home/adminer.php
 [2]: http://moodlebox.home/phpmyadmin
 [3]: https://www.adminer.org/
