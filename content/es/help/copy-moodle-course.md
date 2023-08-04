---
title: Copiar un curso Moodle a MoodleBox
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
type: kb
date: 2019-03-06
lastmod: 2019-03-06
description: Es fácil copiar (mover) un curso Moodle desde otro servidor Moodle a una MoodleBox.
slug: copiar-curso-moodle
categories_weight: 6
categories:
  - Utilización

---

Es fácil copiar un curso Moodle de otro servidor Moodle a una MoodleBox, porque MoodleBox es exactamente como un servidor Moodle normal, sólo que más pequeño y muy portable. Esta página trata los siguientes dos escenarios de copia de cursos.

Escenario 1
: Quieres mover un curso localizado en el servidor Moodle de tu escuela o empresa a una MoodleBox.

Escenario 2
: Quiere mover un curso localizado en una MoodleBox a otra MoodleBox.

{{< notice warning >}}
- No es posible copiar un curso de una versión más reciente de Moodle a una versión más antigua de Moodle. Por lo tanto, antes de iniciar las operaciones descritas a continuación, es necesario asegurarse de que la versión de Moodle de la MoodleBox de destino es __igual o más reciente__ que la del servidor Moodle de origen (en otra MoodleBox o en el servidor de su escuela).
- Si su curso supera un tamaño de 50 MB, deberá <a href="{{< relref "help/using-files-with-the-moodlebox" >}}">utilizar una memoria USB o la opción de servidor SFTP</a> de la MoodleBox para restaurarlo.
{{< /notice >}}

El proceso de copiar un curso de un Moodle a una MoodleBox es exactamente el mismo que con cualquier servidor Moodle. El primer paso es hacer una [copia de seguridad del curso que desea copiar][backup] en el servidor Moodle de la escuela o en la primera MoodleBox, guardarla en un medio de almacenamiento adecuado, y luego [restaurar esta copia de seguridad][restore] en la MoodleBox de destino.

### Cómo proceder

#### Haga una copia de seguridad del curso a copiar en el Moodle de la escuela o en la primera MoodleBox

1. En el servidor Moodle donde se encuentra actualmente el curso, inicie sesión y entre en el curso, con al menos un rol de profesor.
1. En el menú de administración del curso (El engrane), elija la opción "Copia de seguridad" y proceda como para cualquier copia de seguridad de un curso Moodle.
1. Al final de la copia de seguridad, descargue el archivo de copia de seguridad, por ejemplo `backup-maths-20190306-2020.mbz`, a su ordenador u otro medio adecuado.

Para más ayuda sobre este paso, consulte la [documentación oficial de Moodle sobre copias de seguridad de cursos][backup].

#### Restaurar la copia de seguridad en la MoodleBox

1. Inicie sesión en la MoodleBox con una cuenta de administrador.
1. Vaya a la administración de MoodleBox Moodle, pestaña Curso, y haga clic en "[Restaurar curso][restoreadmin]".
1. Arrastre el archivo de copia de seguridad del curso previamente respaldado `backup-maths-20190306-2020.mbz`, bajo "Importar un archivo de copia de seguridad", y, si el curso es muy grande, espere hasta que se complete la descarga. Si el archivo supera los 50 MB, [utilice una memoria USB o la opción del servidor SFTP][bigfile] de MoodleBox.
1. Haga clic en "Restaurar", luego complete el proceso de restauración del curso Moodle, seleccionando las opciones deseadas. Al final de la restauración, el curso estará listo para ser utilizado.

Para más ayuda sobre este paso, consulte la [documentación oficial de Moodle sobre restauración de cursos][restore].

  [bigfile]: {{< relref "help/using-files-with-the-moodlebox" >}}
  [backup]: https://docs.moodle.org/en/Course_backup
  [restore]: https://docs.moodle.org/en/Course_restore
  [restoreadmin]: http://moodlebox.home/backup/restorefile.php?contextid=1
