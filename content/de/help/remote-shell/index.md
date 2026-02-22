---
title: Remote-Shell-Zugriff auf eine MoodleBox
authors:
  - Nicolas Martignoni
type: kb
date: 2024-11-03
lastmod: 2026-02-22
description: Enable remote secure shell access (command line interface) to your MoodleBox from anywhere in the world, using Raspberry Pi Connect.
keywords:
  - shell
  - ssh
  - Kommandozeilen-Schnittstelle
  - cli
slug: remote-shell-access
categories_weight: 10
categories:
  - Nutzung
---
Mit Raspberry Pi Connect ist es möglich, von überall auf der Welt einen sicheren Remote-Shell-Zugriff auf Ihre MoodleBox zu erhalten.
Raspberry Pi Connect verwendet eine sichere, verschlüsselte Verbindung, um zwischen Ihrer MoodleBox und Ihrem Browser zu kommunizieren.

{{< notice info >}}
Diese Funktionalität nutzt Raspberry Pi Connect von [Raspberry Pi Ltd](https://www.raspberrypi.com/).
Die Software ist standardmässig ab der MoodleBox-Image-Version 4.8.0 installiert.
{{< /notice >}}

Aktivieren Sie zunächst Raspberry Pi Connect mit dem Befehl `rpi-connect`:
```bash
rpi-connect on
```

#### Verbinden Sie die MoodleBox mit einer Raspberry Pi ID

Sie müssen dann Ihre MoodleBox mit einer __Raspberry Pi ID__ verknüpfen.
Wenn Sie noch keine Raspberry Pi ID haben, müssen Sie [eine erstellen][rpi-id].

Um Ihre MoodleBox mit Ihrer Raspberry Pi ID zu verbinden, erzeugen Sie eine Verifizierungs-URL mit dem Befehl `rpi-connect`:
```bash
rpi-connect signin
```
Dieser Befehl sollte etwa die folgende Ausgabe liefern:
```output
Complete sign in by visiting https://connect.raspberrypi.com/verify/XXXX-XXXX
```
Besuchen Sie die Verifizierungs-URL auf einem beliebigen Gerät und melden Sie sich an, um Ihre MoodleBox mit Ihrer Raspberry Pi ID zu verbinden.

Nach der Authentifizierung wählen Sie einen Namen, mit dem Sie Ihr Gerät identifizieren können, und weisen es Ihrer MoodleBox zu.
Klicken Sie auf die Schaltfläche __Create device and sign in__ um fortzufahren.

Sie können sich nun mit Ihrer MoodleBox aus der Ferne verbinden.

{{< notice tip >}}
Raspberry Pi Connect registriert die Kommunikation mit Ihrer MoodleBox-Seriennummer.
Wenn Sie Ihre SD-Karte zwischen MoodleBoxen verschieben, werden Sie sich abmelden.
{{< /notice >}}

Nun, da Ihre MoodleBox auf Ihrem Connect-Dashboard erscheint, können Sie von überall aus darauf zugreifen, indem Sie nur einen Browser benutzen.

#### Zugriff auf Ihre MoodleBox über die Remote-Shell

Besuchen Sie [connect.raspberrypi.com][connect] auf einem beliebigen Computer, um in einem Browserfenster auf eine Shell zuzugreifen, die auf Ihrer MoodleBox läuft.
Sie werden zum Raspberry Pi ID-Dienst weitergeleitet, um sich anzumelden.
Nach der Anmeldung wird eine Liste der verknüpften Geräte angezeigt.
Geräte, die für den Remote-Shell-Zugriff verfügbar sind, zeigen ein graues __Remote shell__-Abzeichen unter dem Namen des Geräts.

{{< figure src="/img/media/list-connect-devices.png" title="List of devices" class="centered-image" width="700" >}}

Klicken Sie auf die Schaltfläche __Connect__ rechts neben dem Gerät, auf das Sie zugreifen möchten, um eine Shell-Sitzung auf Ihrer MoodleBox zu öffnen.

{{< figure src="/img/media/remote-shell-connecting.png" title="Remote shell connecting" class="centered-image" width="550" >}}

Sie können Ihre MoodleBox nun wie eine lokale Version verwenden.

Um eine Remote-Shell-Sitzung zu beenden, führen Sie den Befehl `exit` aus oder schliessen Sie das Fenster.

{{< notice tip >}}
Weitere Informationen über die Raspberry Pi Connect-Funktion finden Sie in der [Raspberry Pi Connect Dokumentation](https://www.raspberrypi.com/documentation/services/connect.html).
{{< /notice >}}

[connect]: https://connect.raspberrypi.com/
[rpi-id]: https://id.raspberrypi.com/
