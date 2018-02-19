---
title: Comment mettre à disposition des fichiers sur la MoodleBox
author: Nicolas Martignoni
type: kb
date: 2017-04-20
slug: utilisation-de-fichiers-avec-la-moodlebox
weight: 7
categories:
  - Utilisation

---
### Fichiers sur une clef USB

Quand une clef USB est insérée dans l'un des ports USB de la MoodleBox, tous les fichiers sur la clef sont automatiquement disponibles pour les administrateurs et les enseignants définis dans Moodle, au moyen du sélecteur de fichiers, via un dépôt dont le nom est __USB Drive__.

{{< figure link="/img/media/usb-drive.png" thumb="-small" caption="Dépôt USB Drive" caption-position="bottom" caption-effect="appear" width="550px" >}}

Si plusieurs clefs USB sont insérées dans la MoodleBox, seuls les fichiers de la première à avoir été insérée sont disponibles.

Au lieu d'une clef USB, un disque dur (ou SSD) USB peut également être connecté à la MoodleBox et rendu disponible via le dépôt __USB Drive__. Veuillez noter qu'un disque dur USB peut nécessiter plus de courant que le port USB de la MoodleBox peut en fournir, et nécessitera donc une alimentation externe.

Le MoodleBox prend en charge les formats suivants : fat32, vfat, ext2, ext3, ext4 et hfs+. Le formatage ntfs sera ajouté dans une prochaine version de la MoodleBox.

### Fichiers via SFTP

Les fichiers déposés dans la MoodleBox par SFTP, dans le dossier dénommé __files__, sont aussi disponibles les administrateurs et les enseignants définis dans Moodle, au moyen du sélecteur de fichiers, via un dépôt dont le nom est __SFTP Documents__.

{{< figure link="/img/media/sftp-documents.png" thumb="-small" caption="Dépôt SFTP Documents" caption-position="bottom" caption-effect="appear" width="550px" >}}

Pour déposer des fichiers, utiliser un logiciel comme [FileZilla][1], [Cyberduck][2], [WinSCP][3] ou [Documents][4], avec les informations suivantes d'authentification :

  * nom d'utilisateur : __moodlebox__
  * mot de passe : __Moodlebox4$__

{{% notice note %}}
Pour des raisons de sécurité, la connexion via FTP n'est pas possible. L'utilisation du protocole SFTP (Secure FTP, port 22) est nécessaire.
{{% /notice %}}

 [1]: https://filezilla-project.org/
 [2]: https://cyberduck.io/
 [3]: http://winscp.net/
 [4]: https://readdle.com/fr/products/documents/
