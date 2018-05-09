---
date: 2018-02-04
title: MoodleBox a un nouveau site web
description: Le site MoodleBox a été récrit et a changé de technologie pour une meilleure performance et une sécurité accrue.
authors:
  - Nicolas Martignoni
slug: nouveau-site-web
---

Afin d'améliorer les performances de chargement et d'assurer une meilleure sécurité, le site web du projet MoodleBox a été entièrement récrit. Il utilise maintenant [Hugo][3], un [générateur de site statique][1], au lieu du [CMS WordPress][2]. L'utilisation d'un générateur de sites statiques a plusieurs avantages par rapport à l'utilisation d'un CMS, parmi lesquels

- le site web est plus performant et très rapide à afficher pour les visiteurs ;
- la maintenance du serveur web est beaucoup plus simple, puisqu'il n'y a pas de langage dynamique ou de base de données ; on gagne ainsi en robustesse et en résilience ;
- il n'y a pas de problème de sécurité lié aux langages dynamiques ou aux bases de données.

En terme de fonctionnalités, il n'y a pas de changement pour les utilisateurs du site, même si la disposition a été  adaptée.

 [1]: https://davidwalsh.name/introduction-static-site-generators
 [2]: https://wordpress.org
 [3]: https://gohugo.io
