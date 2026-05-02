---
title: Mise à jour du système MoodleBox
authors:
  - Nicolas Martignoni
type: kb
date: 2017-12-22
lastmod: 2026-05-02
description: Les instructions ci-dessous permettent de mettre à jour régulièrement le système d'exploitation de votre MoodleBox
keywords:
  - shell
  - ssh
  - ligne de commande
  - cli
  - rpios
  - debian
  - os
slug: mise-a-jour
categories:
  - Maintenance
aliases:
  - mettre-a-jour-la-moodlebox

---
Comme mesure de sécurité régulière, il est recommandé de mettre à jour les logiciels serveur et le système d'exploitation Raspberry Pi OS de la MoodleBox afin de combler les éventuelles failles de sécurité trouvées et de corriger les éventuels bogues.

Pour cette opération, la MoodleBox doit être connectée à Internet au moyen d'un câble Ethernet.

### Marche à suivre

1. Se connecter à l'[interface en ligne de commande de la MoodleBox][1] via SSH, en utilisant les nom et mot de passe appropriés. Consulter au besoin les [noms d'utilisateur et des mots de passe par défaut][2].
2. Brancher la MoodleBox à un réseau local ayant accès à Internet, au moyen d'un câble Ethernet.
3. Taper la commande suivante dans l'interface du terminal :

    ```bash
    sudo apt-get update && sudo apt-get full-upgrade -y
    ```
    et confirmer avec la touche Retour.
4. Cette opération dure quelques minutes. La durée dépend du nombre des logiciels à mettre à jour, de votre bande passante Internet et de la qualité de votre carte microSD.
5. Au terme de la mise à jour, tapez `exit` et confirmer avec la touche Retour.

 [1]: {{< relref "help/command-line-access" >}}
 [2]: {{< relref "help/credentials" >}}
