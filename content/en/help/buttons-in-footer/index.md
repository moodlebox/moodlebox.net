---
title: Display restart and shutdown buttons in the footer
authors:
  - Nicolas Martignoni
type: kb
date: 2019-05-20
lastmod: 2022-08-14
description: For easier administration, it is possible to display the MoodleBox restart and stop buttons in the footer of all Moodle pages.
slug: buttons-in-footer
categories_weight: 30
categories:
  - Usage

---
Thanks to the display at the bottom of the page of the MoodleBox's restart and stop buttons, its administration is more intuitive and easier.

{{< figure src="buttons-footer.png" width="800" title="Restart and stop buttons in footer" class="centered-image" >}}

This feature is enabled by visiting the MoodleBox settings in the administration interface: [Site administration > Server > MoodleBox > MoodleBox settings][1], then checking the box "Show buttons in footer".

{{< figure src="buttons-settings.png" width="720" title="Show buttons in footer checkbox" class="centered-image" >}}

After saving the changes, the MoodleBox restart and stop buttons will be displayed for Moodle roles with the `tool/moodlebox:viewbuttonsinfooter` capability, which is granted by default to the manager role and of course to the administrators. They are not displayed for other users.

{{< notice tip >}}
In order to minimize the risk of data corruption on the microSD card, it is not recommended to unplug the power supply without care to shutdown the MoodleBox. It is preferable to manually control its shutdown beforehand.
{{< /notice >}}

 [1]: http://moodlebox.home/admin/settings.php?section=tool_moodlebox_settings
