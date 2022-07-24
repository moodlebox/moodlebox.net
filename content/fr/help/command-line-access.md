---
title: Comment accéder à l'interface en ligne de commande
authors:
  - Nicolas Martignoni
type: kb
date: 2017-04-17
lastmod: 2018-04-10
description: Si nécessaire, on peut se connecter au système d'exploitation de la MoodleBox en via SSH
slug: connexion-ssh-en-ligne-de-commande
categories_weight: 15
categories:
  - Maintenance
  - Utilisation

---
En tant qu'utilisateur, il n'est en principe pas nécessaire de vous connecter en ligne de commande à la MoodleBox. Cependant, vous pouvez y accéder au besoin via SSH en utilisant l'adresse __moodlebox.home__, avec les informations d'authentification par défaut :

  * nom d'utilisateur : __moodlebox__
  * mot de passe : __Moodlebox4$__

### Avec PuTTY (sous Windows)

Ouvrir une nouvelle connexion, saisissez l'adresse __moodlebox.home__ dans le champ adéquat (_host name_). Cliquer sur _Open_ et saisissez le mot de passe __Moodlebox4$__.

{{< figure src="/img/media/putty-moodlebox.png" title="Connexion avec PuTTY" caption-position="bottom" caption-effect="appear" width="516" >}}

### Dans une interface de terminal classique

Dans votre interface de terminal préférée, tapez

```bash
ssh moodlebox@moodlebox.home
```

et saisissez le mot de passe __Moodlebox4$__.

Le nom d'hôte (_hostname_) de la MoodleBox est __moodlebox__. Son nom de domaine complet (_FQDN_) est __moodlebox.home__.
