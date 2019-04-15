---
title: MoodleBox über das Internet zugänglich machen
authors:
  - Nicolas Martignoni
type: kb
date: 2018-09-30
lastmod: 2018-09-30
description: Es ist möglich, eine MoodleBox direkt aus dem Internet zugänglich zu machen. In diesem Handbuch wird erklärt, wie dies zu bewerkstelligen ist.
slug: access-from-internet
weight: 95
categories:
  - Usage

---
{{< notice warning >}}
Die MoodleBox basiert auf einem leistungsschwachen Computer. Sie könnte schnell überlastet sein und __sehr langsam__ werden, oder sogar völlig blockiert bei einer massiven Besucherzahl.

Die Verfügbarkeit einer MoodleBox im Web __beinhaltet erhebliche Sicherheitsrisiken__. Insbesondere kann der Server mit verschiedenen Methoden angegriffen und unbrauchbar gemacht werden. Verändern Sie alle MoodleBox-Passwörter, bevor Sie diese Modifikationen vornehmen.

Die auf dieser Seite beschriebenen Vorgänge können __Ihre MoodleBox unbrauchbar machen__, was ein vollständiges Löschen der SD-Karte und den __Verlust aller Daten__ (Kursinhalte, installierte Plugins, benutzerdefinierte Konfigurationen, etc.) erfordert. Tun Sie dies nur, wenn Sie genau wissen, was Sie tun. In jedem Fall wird __keine Unterstützung__ zu diesem Thema geleistet.

Wir übernehmen keine Verantwortung für direkte oder indirekte Schäden, die durch die Nutzung der MoodleBox, insbesondere nach einer Konfigurationsänderung zur Veröffentlichung der MoodleBox im Internet, entstehen.
{{< /notice >}}

Die MoodleBox wurde nicht so konzipiert, dass sie eine Moodle-Plattform zur Verfügung stellt, die dauerhaft über das Internet zugänglich ist, wie es normalerweise bei einem Moodle-Server der Fall ist. Für spezielle Anwendungsfälle kann diese Funktion jedoch nützlich sein.

Es ist möglich, eine MoodleBox so zu konfigurieren, dass sie direkt aus dem Internet zugänglich ist, vorausgesetzt, Sie verfügen über __gute Kenntnisse in der Systemadministration__.

### Voraussetzungen

Die folgenden Elemente sind Voraussetzung dafür, dass Ihre MoodleBox über das Internet zugänglich ist:

1. einen validen __Domainnamen__, für den Sie die Administratorrechte haben, z.B. `example.com`;
1. eine __fixierte IP-Adresse__ oder eine funktionierende __[dynamische DNS][1]__ Konfiguration;
1. die MoodleBox muss über ein Ethernet-Kabel mit Ihrem Netzwerk oder Router verbunden sein.

{{< notice info >}}
Diese Dokumentation beschreibt nicht, wie man einen Domänennamen verwaltet, wie man eine fixierte IP-Adresse erhält oder wie man einen dynamischen DNS konfiguriert. Weitere Informationen erhalten Sie von Ihrem Internet-Provider.
{{< /notice >}}

### Vorgehensweise

#### Schritt 1: Domain-Name der MoodleBox ändern

Beachten Sie die [entsprechende Dokumentationsseite][2]. Spezifizieren Sie den Domänennamen, für den Sie Administratorrechte haben. Es ist auch möglich, eine Subdomain zu verwenden, z.B.: `learn.example.com`.

#### Schritt 2: Web-Traffic zur MoodleBox zulassen

Aus Sicherheitsgründen ist aus dem Internet nur Ihr Router sichtbar, kein Gerät in Ihrem lokalen Netzwerk ist erreichbar. Es ist daher notwendig, Ihren Router so zu konfigurieren, dass er den eingehenden Webverkehr an Ihre MoodleBox überträgt.

Die notwendigen Einstellungen müssen an Ihrem Router vorgenommen werden. Konsultieren Sie die Dokumentation Ihres Dienstanbieters. Aufgrund der Vielfalt der Hardware kann keine Unterstützung für die Konfiguration Ihres Routers geleistet werden. Nehmen Sie solche Änderungen nur dann vor, wenn Sie wirklich wissen, was Sie tun.

1. Identifizieren Sie die öffentliche IP-Adresse Ihres Routers, z.B. `182.83.142.233`.
1. Identifizieren Sie die private IP-Adresse, die der Router Ihrer MoodleBox gegeben hat, z.B. `192.168.1.226`, mit dem Befehl `Hostname -I` auf Ihrer MoodleBox.
1. Zuweisen Sie diese Adresse in Ihrem Router permanent Ihrer MoodleBox (nicht obligatorisch, aber empfohlen).
1. Umleiten Sie in Ihrem Router den Webverkehr von Port 80 (http) auf die MoodleBox (Port-Forwarding). Wenn Sie Ihre MoodleBox über das Internet verwalten möchten, leiten Sie auch Port 22 (ssh) um.

#### Schritt 3: Konfiguration des Domain Name Servers

Verknüpfen Sie bei Ihrem Domain-Namen-Provider die öffentliche Adresse Ihres Routers, z.B. `182.83.142.233`, mit dem gewünschten Domain-Namen, z.B. `learn.example.com`. Beachten Sie die Dokumentation Ihres Domainnamen-Providers.

Wenn Sie keine fixierte IP-Adresse haben, konfigurieren Sie das dynamische DNS.

#### Schritt 4: Verstärkung der Sicherheit

Dieser Schritt ist nicht erforderlich. Es wird jedoch __sehr dringend empfohlen__.

1. Ändern Sie alle MoodleBox-Passwörter mit starken Passwörtern:
  - verwenden Sie das MoodleBox Dashboard für das Hauptpasswort und das WLAN-Kennwort,
  - über das Administrator-Benutzerkonto-Profil in Moodle.
2. Erzwingen Sie strenge Passwörter für alle Moodle-Benutzerkonten.
3. Installieren Sie [fail2ban][3] auf Ihrer MoodleBox. Diese Software ermöglicht es, bestimmte systematische Angriffe auf Server im Internet zu blockieren.
4. [HTTPS aktivieren][4] auf dem nginx-Webserver der MoodleBox, z.B. mit LetsEncrypt-Zertifikaten. Vergessen Sie in diesem Fall nicht, den Port 443 (https) Datenverkehr auf Ihren Router umzuleiten (siehe oben).

 [1]: https://en.wikipedia.org/wiki/Dynamic_DNS
 [2]: {{< relref "domain-name-change.md" >}}
 [3]: https://www.fail2ban.org/
 [4]: https://github.com/moodlebox/moodlebox/issues/27#issuecomment-326818647
