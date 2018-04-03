---
title: Comment mettre à jour la MoodleBox
author: Nicolas Martignoni
type: kb
date: 2017-12-22
description: Suivez les instructions ci-dessous pour mettre à jour régulièrement votre MoodleBox
slug: comment-mettre-a-jour-la-moodlebox
categories:
  - Maintenance

---
Comme mesure de sécurité régulière, il est recommandé de mettre à jour les logiciels serveur de la MoodleBox afin de combler les éventuelles failles trouvées dans la distribution Raspbian et de corriger d'autres bogues découverts.

Pour cette opération, la MoodleBox doit être connectée à Internet.

### Mise à jour des logiciels de la MoodleBox

  1. Se connecter à l'[interface en ligne de commande de la MoodleBox][1] via SSH, en utilisant les nom et mot de passe appropriés. Consulter au besoin les [noms d'utilisateur et des mots de passe par défaut][2].
  2. Brancher la MoodleBox à un réseau local ayant accès à Internet, au moyen d'un câble Ethernet.
  3. Taper la commande suivante dans l'interface du terminal :

    ```bash
    sudo apt-get update && sudo apt-get upgrade -y
    ```

    et confirmer avec la touche Retour.
  4. Cette opération durera quelques minutes. La durée dépend du nombre des logiciels à mettre à jour, de votre bande passante Internet et de la qualité de votre carte microSD.
  5. Lorsque la mise à jour se termine, tapez `exit`, et confirmer avec la touche Retour.

 [1]: {{< relref "command-line-access.fr.md" >}}
 [2]: {{< relref "credentials.fr.md" >}}
