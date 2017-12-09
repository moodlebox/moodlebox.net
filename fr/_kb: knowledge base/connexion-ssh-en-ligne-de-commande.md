---
ID: 389
post_title: 'Comment accéder à l&rsquo;interface en ligne de commande ?'
author: nicolas.martignoni.admin
post_excerpt: ""
layout: epkb_post_type_1
permalink: >
  https://moodlebox.net/fr/help/connexion-ssh-en-ligne-de-commande/
published: true
post_date: 2017-04-17 21:12:14
---
En tant qu’utilisateur, il n'est en principe pas nécessaire de vous connecter en ligne de commande à la MoodleBox. Cependant, vous pouvez y accéder au besoin via SSH en utilisant l’adresse <strong>moodlebox.home</strong>, avec les informations d’authentification par défaut :
<ul>
 	<li>nom d’utilisateur : <strong>moodlebox</strong></li>
 	<li>mot de passe : <strong>Moodlebox4$</strong></li>
</ul>
<h3>Avec PuTTY (sous Windows)</h3>
Ouvrir une nouvelle connexion, saisissez l'adresse <strong>moodlebox.home</strong> dans le champ adéquat (<em>host name)</em>. Cliquer sur <em>Open</em> et saisissez le mot de passe <strong>Moodlebox4$</strong>.

<img class="alignnone size-full wp-image-444" src="https://moodlebox.net/fr/wp-content/uploads/sites/4/2017/04/PuTTY-moodlebox.png" alt="" width="516" height="498" />
<h3>Dans une interface de terminal classique</h3>
Dans votre interface de terminal préférée, tapez

<code>ssh moodlebox@moodlebox.home</code>

et saisissez le mot de passe <strong>Moodlebox4$</strong>.

&nbsp;