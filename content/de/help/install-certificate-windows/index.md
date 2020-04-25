---
title: Installation des Root-Zertifikats auf Windows
authors:
  - Nicolas Martignoni
type: kb
date: 2019-11-17
lastmod: 2019-11-17
description: Um sich über HTTPS mit der MoodleBox zu verbinden, ohne ein Warnungsfenster anzuzeigen, ist es notwendig, das MoodleBox Root-Zertifikat (oder CA-Zertifikat) zu installieren.
slug: installer-certificat-racine-windows
categories_weight: 90
categories:
  - Nutzung
---
Um sich über HTTPS mit der MoodleBox zu verbinden, ohne ein Warnungsfenster anzuzeigen, ist es notwendig, das MoodleBox Root-Zertifikat (oder CA-Zertifikat) zu installieren. Dieses Zertifikat, das vom [MoodleBox-Projekt][project] als Zertifizierungsstelle ausgestellt wurde, ermöglicht es dem Browser, sicherzustellen, dass das Zertifikat auf der MoodleBox-Website gültig ist.

### MoodleBox Root-Zertifikat auf Windows installieren (Edge und Chrome)

1. Starten Sie Edge oder Chrome, rufen Sie die [MoodleBox-Startseite][moodlebox] auf und klicken Sie auf Link _Root CA Zertifikat installieren_, dann _Öffnen_.
  {{< figure src="download-CA-cert.png" caption="CA Zertifikat herunterladen" width="380px" >}}
2. In Fenster _Möchten Sie diese Datei öffnen?_, klicken Sie _Öffnen_.
3. In _Zertifikat_ Fenster, klicken Sie _Zertifikat installieren…_.
4. Es öffnet sich ein Zertifikatimport-Assistent. Wählen Sie _Local Computer_, dann klicken Sie _Weiter_.
5. Erlauben Sie dem Programm, Änderungen an Ihrer Computer vorzunehmen, indem Sie auf _Ja_ klicken.
6. In _Zertifikatspeicher_ Fenster, wählen Sie _Alle Zertifikate in folgendem Speicher speichern_, dann klicken Sie _Durchsuchen…_.
7. Wählen Sie den Zertifikatsspeicher _Vertrauenswürdige Stammzertifizierungsstellen_, dann klicken Sie _OK_.
8. Schließen Sie die Installation ab, indem Sie auf _Weiter_ und dann auf _Ende_ klicken.

#### Screencast der Installation des Root-Zertifikats auf Windows

{{< video src="windows-ca-cert-screencast" width="90%" >}}

### MoodleBox Root-Zertifikat auf Firefox (Windows)

1. Starten Sie Firefox, rufen Sie die [MoodleBox-Startseite][moodlebox] auf und klicken Sie auf Link _Root CA Zertifikat installieren_.
2. Aktivieren Sie in dem nun angezeigten Fenster das Kontrollkästchen _Dieser CA vertrauen, um Websites zu identifizieren_ und klicken Sie OK.
  {{< figure src="firefox-ca-cert.png" caption="CA Zertifikat Configuration für Firefox" width="650px" >}}

  [project]: {{< relref "/project" >}}
  [moodlebox]: http://moodlebox.home/
