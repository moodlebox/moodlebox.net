---
title: Zugriff auf die Datenbank
authors:
  - Nicolas Martignoni
  - Visvanath Ratnaweera
  - Ralf Krause
type: kb
date: 2018-02-02
lastmod: 2019-07-12
description: Um mit Adminer auf die Moodle-Datenbank von MoodleBox zuzugreifen, lesen Sie die folgende Informationen
slug: zugrif-auf-die-datenbank
categories:
  - Maintenance

---
{{< notice warning >}}
Es wird dringend davon abgeraten, die Moodle-Datenbank direkt zu manipulieren. Tun Sie dies nur, wenn Sie genau wissen, was Sie tun. In jedem Fall wird __keine Unterstützung__ zu diesem Thema geleistet und der Autor übernimmt keinerlei Verantwortung für Datenverluste.
{{< /notice >}}

Die MoodleBox erlaubt den direkten Zugriff auf die Moodle-Datenbank mit der Software [Adminer][1]. Um sich über PhpMyAdmin einzuloggen, rufen Sie im Browser die URL [http://moodlebox.home/adminer.php][1] auf. Die Zugangsdaten sind wie folgt. Natürlich lauten die Zugänge anders, wenn Sie etwas geändert haben.

  * Username: __moodlebox__
  * Password: __Moodlebox4$__

{{< figure src="adminer.png" width="782" caption="Datenbank Zugriff mit Adminer" class="centered-image" >}}

{{< notice info >}}
In MoodleBox-Versionen vor Version 3.0.0 wurde das Tool phpMyAdmin verwendet, um über die URL [http://moodlebox.home/phpmyadmin](http://moodlebox.home/phpmyadmin) auf die Datenbank zuzugreifen.
{{< /notice >}}

 [1]: http://moodlebox.home/adminer.php
 [2]: http://moodlebox.home/phpmyadmin
 [3]: https://www.adminer.org/
