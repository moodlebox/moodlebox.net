---
title: Installation des Root-Zertifikats auf macOS
authors:
  - Nicolas Martignoni
type: kb
date: 2019-11-17
lastmod: 2022-08-14
description: Um sich über HTTPS mit der MoodleBox zu verbinden, ohne ein Warnungsfenster anzuzeigen, ist es notwendig, das MoodleBox Root-Zertifikat (oder CA-Zertifikat) zu installieren.
slug: root-zertifikat-installieren-macos
categories_weight: 90
categories:
  - Nutzung
---
Um sich über HTTPS mit der MoodleBox zu verbinden, ohne ein Warnungsfenster anzuzeigen, ist es notwendig, das MoodleBox Root-Zertifikat (oder CA-Zertifikat) zu installieren. Dieses Zertifikat, das vom [MoodleBox-Projekt][project] als Zertifizierungsstelle ausgestellt wurde, ermöglicht es dem Browser, sicherzustellen, dass das Zertifikat auf der MoodleBox-Website gültig ist.

### MoodleBox Root-Zertifikat auf macOS installieren (Safari und Chrome)

1. Laden Sie das CA-Zertifikat von der [MoodleBox-Homepage][moodlebox] herunter, indem Sie auf den Link _Root CA Zertifikat installieren_ klicken. Die Datei `moodleboxCA.crt` wird in der Regel im Ordner _Downloads_ gespeichert.
  {{< figure src="download-CA-cert.png" title="CA Zertifikat herunterladen" width="313" class="centered-image" >}}
2. Öffnen Sie Ordner _Downloads_ und doppelklicken Sie auf Datei `moodleboxCA.crt`, um Zertifikat in _Schlüsselbundverwaltung_ zu speichern, entweder im _Anmeldung_ oder im _System_ Schlüsselbund. Um das Zertifikat allen Computerbenutzern zur Verfügung zu stellen, wählen Sie den Schlüsselbund _System_.
4. In __Schlüsselbundverwaltung__, Wählen Sie den Schlüsselbund, in dem Sie das Zertifikat gespeichert haben, und doppelklicken Sie dann auf das Zertifikat _MoodleBox Root CA_.
5. Aufklappen Sie den Abschnitt _Vertrauen_.
6. Stellen das Vertrauen Option _Bei Verwendung dieses Zertifikats_ zu __Immer vertrauen__.
  {{< figure src="trust-CA-cert-fr.png" title="CA Zertifikat Vertrauen Konfiguration" width="650" class="centered-image" >}}
7. Schließen Sie das Fenster und geben Sie Ihr Passwort ein.

#### Screencast der Installation des Root-Zertifikats auf macOS

{{< video src="macos-ca-cert-screencast" width="90%" >}}

### MoodleBox Root-Zertifikat auf Firefox (macOS)

1. Starten Sie Firefox, rufen Sie die [MoodleBox-Startseite][moodlebox] auf und klicken Sie auf Link _Root CA Zertifikat installieren_.
2. Aktivieren Sie in dem nun angezeigten Fenster das Kontrollkästchen _Dieser CA vertrauen, um Websites zu identifizieren_ und klicken Sie OK.
  {{< figure src="firefox-ca-cert.png" title="CA Zertifikat Configuration für Firefox" width="650" class="centered-image" >}}

  [project]: {{< relref "/project" >}}
  [moodlebox]: http://moodlebox.home/
