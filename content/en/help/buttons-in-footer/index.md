---
title: Display restart and shutdown buttons in the footer
authors:
  - Nicolas Martignoni
type: kb
date: 2019-05-20
lastmod: 2019-07-15
description: For easier administration, it is possible to display the MoodleBox restart and stop buttons in the footer of all Moodle pages.
slug: buttons-in-footer
weight: 30
categories:
  - Usage

---
{{< notice note >}}
This feature is available from __version 2.7.0__ of MoodleBox. To benefit from this on a previous version, simply [update the MoodleBox plugin](http://moodlebox.home/admin/plugins.php?updatesonly=0&contribonly=1) in the Moodle administration interface.
{{< /notice >}}

Thanks to the display at the bottom of the page of the MoodleBox's restart and stop buttons, its administration is more intuitive and easier.

{{< figure src="buttons-footer.png" width="800" caption="Restart and stop buttons in footer" class="centered-image" >}}

This feature is enabled by visiting the MoodleBox settings in the administration interface: [Site administration > Server > MoodleBox > MoodleBox settings][1], then checking the box "Show buttons in footer".

{{< figure src="buttons-settings.png" width="720" caption="Show buttons in footer checkbox" class="centered-image" >}}

After saving the changes, the MoodleBox restart and stop buttons will be displayed for Moodle roles with the `tool/moodlebox:viewbuttonsinfooter` capability, which is granted by default to the manager role and of course to the administrators. They are not displayed for other users.

{{< notice warning >}}
In order to minimize the risk of data corruption on the microSD card, it is not recommended to unplug the power supply without care to shutdown the MoodleBox. It is preferable to manually control its shutdown beforehand.
{{< /notice >}}

 [1]: http://moodlebox.home/admin/settings.php?section=tool_moodlebox_settings
