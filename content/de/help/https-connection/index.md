---
title: MoodleBox auf HTTPS umstellen
authors:
  - Nicolas Martignoni
type: kb
date: 2019-11-17
lastmod: 2019-11-17
description: MoodleBox kann konfiguriert werden, um sichere Verbindungen über HTTPS zu unterstützen. Diese Konfiguration erfordert eine manuelle Änderung durch eine technisch kompetente Person.
slug: connexion-https
weight: 90
categories:
  - Wartung
---
Die folgende Vorgehensweise kann verwendet werden, um die MoodleBox so zu konfigurieren, dass sie sichere Verbindungen über HTTPS bereitstellt. Danach ist es __nicht mehr möglich, sich über HTTP__ zu verbinden.

1. Zugriff auf [MoodleBox Betriebssystem][ssh-connect] (über SSH).
2. Datei `/var/www/moodle/config.php` bearbeiten, z.B. durch Eingabe des Befehls `nano /var/www/moodle/config.php`.
3. Zeile ändern, die mit `$CFG->wwwroot` beginnt; `http://` durch `https://` in der Adresse `http://moodlebox.home` ersetzen.
4. Änderung speichern.
5. Testen durch Aufrufen der URL https://moodlebox.home in Ihrem bevorzugten Browser.

{{< notice warning >}}
Nach Abschluss der Konfiguration erhalten Geräte, die sich über HTTPS verbinden, ein Warnungsfenster, das anzeigt, dass das MoodleBox-Zertifikat nicht gültig ist. Um diese Warnung zu entfernen, muss __jedes Gerät__ das MoodleBox-Root-Zertifikat installieren.

Weitere Informationen zu diesem Thema finden Sie unter [Installation des Root-Zertifikats auf Client-Geräten](#installation-des-root-zertifikats-auf-client-geräten) weiter unten.
{{< /notice >}}

### Installation des Root-Zertifikats auf Client-Geräten

Um sich über HTTPS mit der MoodleBox zu verbinden, ohne ein Warnungsfenster anzuzeigen, ist es notwendig, das MoodleBox Root-Zertifikat (oder CA-Zertifikat) zu installieren. Dieses Zertifikat, das vom [MoodleBox-Projekt][project] als Zertifizierungsstelle ausgestellt wurde, ermöglicht es dem Browser, sicherzustellen, dass das Zertifikat auf der MoodleBox-Website gültig ist.

Die Installation des CA-Zertifikats ist abhängig vom Browser und Betriebssystem.

- [Installation auf macOS]({{< relref "help/install-certificate-macos" >}})
- [Installation auf Windows]({{< relref "help/install-certificate-windows" >}})

[project]: {{< relref "/project" >}}
[ssh-connect]: {{< relref "help/command-line-access" >}}
