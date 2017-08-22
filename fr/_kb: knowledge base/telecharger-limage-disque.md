---
ID: 391
post_title: Télécharger l’image-disque
author: nicolas.martignoni.admin
post_excerpt: ""
layout: epkb_post_type_1
permalink: >
  https://moodlebox.net/fr/help/telecharger-limage-disque/
published: true
post_date: 2017-04-17 21:19:44
---
<h3>Image disque MoodleBox</h3>
<ul class="downloads">
 	<li>
<div class="image-icon"><a class="piwik_download" href="[download_data id='90' data='download_link']"><img class="alignnone wp-image-308 size-full" src="https://moodlebox.net/fr/wp-content/uploads/sites/4/2016/09/MoodleBox-SD-150x150-orange-1.png" width="150" height="150" /></a></div>
<div class="image-info">
<div class="image-description">Image disque MoodleBox pour carte microSD</div>
<div class="image-details">Version : <strong>[download_data id='90' data='version']</strong></div>
<div class="image-details">Version de Moodle : <strong>3.3.1+ (Build: 20170817)</strong></div>
<div class="image-details">Taille : <strong>[download_data id='90' data='filesize']</strong></div>
<div class="image-details">Date : <strong>[download_data id='90' data='file_date']</strong></div>
<div class="image-details">Notes de mise à jour : <strong><a href="https://github.com/martignoni/make-moodlebox/blob/master/CHANGELOG.md" target="_blank" rel="noopener noreferrer">sur Github</a></strong></div>
<div class="image-details sha1">SHA-1: <strong>[download_data id='90' data='sha1']</strong></div>
<div class="image-download-links"><a class="btn dl-zip piwik_download" href="[download_data id='90' data='download_link']">Télécharger</a></div>
</div></li>
</ul>
Après avoir téléchargé l’image-disque, suivez les <a href="https://moodlebox.net/fr/help/copier-limage-disque-sur-une-carte-sd/">instructions pour la copier sur la carte microSD</a> et <a href="https://moodlebox.net/fr/help/demarrer-arreter-redemarrer/">configurez votre MoodleBox</a> pour la première utilisation.

Si vous le souhaitez, vous pouvez <a href="http://moodlebox.net/fr/give/">soutenir le développement de la MoodleBox</a> en faisant un don, tout à fait facultatif.

L’<a class="piwik_download" href="[download_data id='90' data='download_link']">image-disque MoodleBox</a> est construite sur la base de la distribution <a href="https://www.raspberrypi.org/downloads/raspbian/" target="_blank" rel="noopener noreferrer">Raspbian Jessie Lite pour Raspberry Pi</a>.
<h3>En cas de difficulté</h3>
Quelques utilisateurs ont annoncé des difficultés lors du téléchargement. Dans ce cas, on peut utiliser la ligne de commande pour télécharger l'image-disque, soit au moyen de cette commande

<code>wget -c http://moodlebox.net/fr/download/image-disque/ -O moodlebox.img.gz</code>

soit avec celle-ci :

<code>curl -o moodlebox.img.gz -C - http://moodlebox.net/fr/download/image-disque/</code>