---
title: Accès à distance à MoodleBox
authors:
  - Nicolas Martignoni
type: kb
date: 2024-11-03
lastmod: 2026-02-22
description: Enable remote secure shell access (command line interface) to your MoodleBox from anywhere in the world, using Raspberry Pi Connect.
keywords:
  - ligne de commande
  - ssh
  - shell
  - cli
slug: acces-distance
categories_weight: 10
categories:
  - Utilisation
---
Il est possible de se connecter à distance à votre MoodleBox depuis n'importe où dans le monde en utilisant Raspberry Pi Connect.
Raspberry Pi Connect utilise une connexion sécurisée et chiffrée pour établir une communication entre votre MoodleBox et votre navigateur.

{{< notice info >}}
Cette fonctionnalité utilise Raspberry Pi Connect de [Raspberry Pi Ltd](https://www.raspberrypi.com/). Le logiciel est installé par défaut dès la version 4.8.0 de l'image MoodleBox.
{{< /notice >}}

On commence par activer Raspberry Pi Connect à l'aide de la commande `rpi-connect`:
```bash
rpi-connect on
```

#### Relier la MoodleBox à un Raspberry Pi ID

Il faut ensuite associer votre MoodleBox à un identifiant Raspberry Pi (__Raspberry Pi ID__).
Si vous n'avez pas d'identifiant Raspberry Pi, [vous devez en créer un][rpi-id].

Pour relier votre MoodleBox à votre Raspberry Pi ID, générez une URL de vérification en utilisant la commande `rpi-connect` :
```bash
rpi-connect signin
```
Cette commande devrait produire quelque chose comme ceci :
```output
Complete sign in by visiting https://connect.raspberrypi.com/verify/XXXX-XXXX
```
Visitez l'URL de vérification depuis n'importe quel appareil et connectez-vous pour relier votre MoodleBox à votre identifiant Raspberry Pi.

Après l'authentification, choisissez un nom qui vous permettra d'identifier votre appareil et attribuez-le à votre MoodleBox.
Cliquer sur le bouton __Create device and sign in__ pour continuer.

Vous pouvez maintenant vous connecter à distance à votre MoodleBox.

{{< notice tip >}}
Raspberry Pi Connect identifie la communication au moyen du numéro de série de votre MoodleBox. En déplaçant votre carte SD d'une MoodleBox à une autre, vous vous déconnecterez.
{{< /notice >}}

Maintenant que votre MoodleBox apparaît sur votre tableau de bord Connect, vous pouvez y accéder de n'importe où avec seulement un navigateur.

#### Accéder à votre MoodleBox via un shell distant

Visitez [connect.raspberrypi.com][connect] depuis n'importe quel ordinateur pour accéder à un shell fonctionnant sur votre MoodleBox dans une fenêtre de navigateur.
Vous êtes redirigé vers le service Raspberry Pi ID pour vous connecter.
Après avoir procédé à la connexion, une liste d'appareils reliés est présentée.
Les appareils disponibles pour l'accès à distance affichent un badge gris __Remote shell__ sous le nom de l'appareil.

{{< figure src="/img/media/list-connect-devices.png" title="Liste des appareils" class="centered-image" width="700" >}}

Cliquez sur le bouton __Connect__ à droite de l'appareil auquel vous souhaitez accéder pour ouvrir une session shell sur votre MoodleBox.

{{< figure src="/img/media/remote-shell-connecting.png" title="Connexion à distance" class="centered-image" width="550" >}}

Vous pouvez maintenant utiliser votre MoodleBox comme vous le feriez localement.

Pour fermer une session shell à distance, tapez la commande `exit` ou fermez la fenêtre.

{{< notice tip >}}
Pour plus d'informations sur la fonction Raspberry Pi Connect, consultez la [documentation Raspberry Pi Connect](https://www.raspberrypi.com/documentation/services/connect.html).
{{< /notice >}}

[connect]: https://connect.raspberrypi.com/
[rpi-id]: https://id.raspberrypi.com/
