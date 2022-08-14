---
title: Afficher les boutons de redémarrage et d'arrêt dans le pied de page
authors:
  - Nicolas Martignoni
type: kb
date: 2019-05-20
lastmod: 2022-08-14
description: Pour une administration plus simple, il est possible d'afficher les boutons de redémarrage et d'arrêt de la MoodleBox dans le pied de toutes les pages de Moodle.
slug: boutons-dans-le-pied-de-page
categories_weight: 30
categories:
  - Utilisation

---
Grâce à l'affichage en pied de page des boutons de redémarrage et d'arrêt de la MoodleBox, son administration est plus intuitive et plus simple.

{{< figure src="buttons-footer.png" width="800" title="Boutons de redémarrage et d'arrêt en pied de page" class="centered-image" >}}

L'activation de cette fonctionnalité s'effectue en visitant les options de la MoodleBox, dans l'interface d'administration : [Administration du site > Serveur > MoodleBox > Options MoodleBox][1], puis en cochant la case « Afficher les boutons dans le pied de page ».

{{< figure src="buttons-settings.png" width="720" title="Case à cocher Afficher les boutons dans le pied de page" class="centered-image" >}}

Après avoir enregistré les modifications, les boutons de redémarrage et d'arrêt de la MoodleBox seront affichés pour les rôles Moodle avec la capacité `tool/moodlebox:viewbuttonsinfooter`, accordée par défaut au rôle de gestionnaire et bien entendu aux administrateurs. Ils ne sont pas affichés pour les autres utilisateurs.

{{< notice tip >}}
Afin de limiter au maximum les risques de corruption de données sur la carte microSD, pour éteindre la MoodleBox, il n'est pas recommandé de débrancher l'alimentation sans précaution. Il est préférable de commander manuellement son arrêt au préalable.
{{< /notice >}}

 [1]: http://moodlebox.home/admin/settings.php?section=tool_moodlebox_settings
