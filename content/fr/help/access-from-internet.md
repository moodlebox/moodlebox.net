---
title: Rendre la MoodleBox accessible depuis Internet
authors:
  - Nicolas Martignoni
type: kb
date: 2018-09-30
lastmod: 2018-09-30
description: Il est possible de rendre une MoodleBox accessible directement depuis Internet. Ce guide explique la démarche à effectuer pour cela.
slug: acces-depuis-internet
weight: 95
categories:
  - Utilisation

---
{{< notice info >}}
La MoodleBox est constituée d'un ordinateur peu puissant. Elle pourrait être rapidement surchargée et __devenir très lente__, voire totalement paralysée en cas d'afflux massif de visiteurs.

La mise à disposition sur le web d'une MoodleBox __implique des risques de sécurité importants__. En particulier, le serveur peut être attaqué et rendu inopérant par divers moyens. __Changez tous les mots de passe__ de la MoodleBox avant d'effectuer ces modifications.

Les opérations décrites sur cette page sont susceptibles de __rendre votre MoodleBox inutilisable__, ce qui nécessiterait l'effacement complet de la carte SD et la __perte de toutes les données__ qui s'y trouvent (contenus de cours, plugins installés, configurations personnalisées, etc.). N'effectuez ces opérations que si vous savez exactement ce que vous faites. Dans tous les cas, __aucune assistance n'est assurée__ sur ce sujet.

Nous déclinons toute responsabilité pour tout dommage direct ou indirect lors de l'utilisation de la MoodleBox, notamment suite à une modification de configuration en vue d'exposer la MoodleBox sur Internet.
{{< /notice >}}

La MoodleBox n'a pas été conçue comme fournir une plateforme Moodle accessible depuis Internet de façon permanente, comme l'est habituellement un serveur Moodle. Néanmoins, pour des scénarios spécifiques, une telle fonctionnalité peut être utile.

Il est possible de configurer une MoodleBox pour la rendre accessible directement depuis Internet, moyennant de __bonnes connaissances en administration système__.

### Prérequis

Les éléments suivants sont nécessaires afin de rendre votre MoodleBox accessible depuis Internet:

1. un __nom de domaine__ valide, dont vous possédez les droits de gestion, par exemple `example.com` ;
1. une __adresse IP fixe__ ou une configuration de __[DNS dynamique][1]__ fonctionnelle ;
1. la MoodleBox doit être connectée à votre réseau ou votre routeur au moyen d'un câble Ethernet.

{{< notice info >}}
Cette documentation n'explique pas comment gérer un nom de domaine, ni comment obtenir une adresse IP fixe, ni comment configurer un DNS dynamique. Veuillez vous référer pour ce sujet à votre fournisseur d'accès Internet.
{{< /notice >}}

### Marche à suivre

#### Étape 1 : changer le nom de domaine de votre MoodleBox

Consulter la [page de la documentation y relative][2]. Indiquer le nom de domaine dont vous possédez les droits de gestion. Il est aussi possible d'utiliser un sous-domaine, par exemple : `learn.example.com`.

#### Étape 2 : autoriser le passage du trafic web vers la MoodleBox

Pour des raisons de sécurité, seul votre routeur est visible depuis Internet ; aucun appareil sur votre réseau local ne peut être atteint. Il est donc nécessaire de configurer votre routeur pour qu'il transfère vers votre MoodleBox le trafic web qui lui arrive.

Les opérations nécessaires doivent être faites sur votre routeur. Consulter la documentation fournie par votre fournisseur d'accès. En raison de la diversité du matériel installé chez les utilisateurs, aucune assistance ne peut être assurée pour la configuration de votre routeur.

1. Déterminer l'adresse IP publique de votre routeur, par exemple `182.83.142.233`.
1. Déterminer l'adresse IP privée donnée à votre MoodleBox par votre routeur, par exemple `192.168.1.226`, au moyen de la commande `hostname -I` sur votre MoodleBox.
1. Dans votre routeur, attribuer cette adresse de manière permanente à votre MoodleBox (pas obligatoire, mais conseillé).
1. Dans votre routeur, rediriger le trafic web du port 80 (http) vers la MoodleBox (redirection de port). Si vous voulez administrer votre MoodleBox depuis Internet, rediriger aussi le port 22 (ssh).

#### Étape 3 : configurer le nom de domaine

Chez votre fournisseur de noms de domaine, associer au nom de domaine désiré, par exemple `learn.example.com`, l'adresse publique de votre routeur, par exemple `182.83.142.233`. Consulter la documentation fournie par votre fournisseur de noms de domaine.

Si vous n'avez pas d'adresse IP fixe, configurer le DNS dynamique.

#### Étape 4 : renforcer la sécurité de la MoodleBox

Cette étape n'est pas nécessaire. Elle est cependant __très fortement recommandée__.

1. Changer tous les mots de passe de la MoodleBox, en privilégiant des mots de passe forts :
  - à l'aide du tableau de bord de la MoodleBox pour le mot de passe principal et pour le mot de passe du réseau Wi-Fi,
  - dans le profil du compte administrateur de Moodle.
2. Imposer des mots de passe forts pour tous les comptes utilisateurs de Moodle.
3. Installer le logiciel [fail2ban][3] sur votre MoodleBox. Ce logiciel permet de bloquer certaines attaques systématiques contre les serveurs exposés sur Internet.
4. [Activer le protocole HTTPS][4] sur le serveur web nginx de votre MoodleBox, en utilisant par exemple des certificats LetsEncrypt. Dans ce cas, n'oubliez pas de rediriger le trafic du port 443 (https) sur votre routeur (voir ci-dessus).

 [1]: https://en.wikipedia.org/wiki/Dynamic_DNS
 [2]: {{< relref "domain-name-change.md" >}}
 [3]: https://www.fail2ban.org/
 [4]: https://github.com/moodlebox/moodlebox/issues/27#issuecomment-326818647
