# Informationsklassifikation nach dem VIVA-Schema

**Kompaktes Skriptum für Theorie und Praxis**

---

## Inhaltsverzeichnis

1. [Grundlagen der Informationsklassifikation](#1-grundlagen-der-informationsklassifikation)
2. [Verfügbarkeit (V)](#2-verfügbarkeit-v--ist-die-information-erreichbar)
3. [Integrität (I)](#3-integrität-i--ist-die-information-korrekt)
4. [Vertraulichkeit (V)](#4-vertraulichkeit-v--wer-darf-die-informationen-sehen)
5. [Authentizität (A)](#5-authentizität-a--ist-der-absender-echt)
6. [Non-Repudiation (NR)](#6-non-repudiation-nr--kann-eine-handlung-abgestritten-werden)
7. [Warum abgestufte Klassifikation?](#7-warum-abgestufte-klassifikation--begründung)
8. [Fazit und Handlungsempfehlungen](#8-fazit-und-handlungsempfehlungen)

---

## 1. Grundlagen der Informationsklassifikation

### 1.1 Warum Informationen schützen?

In der modernen Geschäftswelt sind **Informationen das wertvollste Gut**. Unternehmen treffen täglich Entscheidungen basierend auf Daten: Finanzberichte, Kundendaten, Produktentwicklungen, strategische Planungen. Doch nicht alle Informationen sind gleich wichtig oder schützenswert.

#### Beispiel aus der Praxis

Ein Unternehmen hat sowohl öffentliche Produktbroschüren als auch geheime Entwicklungspläne. Es wäre unwirtschaftlich, beides mit demselben Aufwand zu schützen. Die Produktbroschüre kann frei verfügbar sein, während Entwicklungspläne höchste Sicherheitsmaßnahmen erfordern.

#### Definition von Informationen

**Informationen sind Daten, die in einen Kontext gesetzt wurden.**

- Die Zahl „25" ist ein Datum
- Erst als „25°C Temperatur" wird es zur Information
- Als „25°C bei der Produktion von Medikament X" wird es zu geschäftskritischem Wissen

### 1.2 Das VIVA-Schema – Überblick

Das VIVA-Schema ist ein mehrdimensionales Modell zur Bewertung des Schutzbedarfs von Informationen. Es erweitert die klassische CIA-Triade um zwei weitere kritische Dimensionen:

| Dimension | Beschreibung |
|-----------|--------------|
| **V** - Verfügbarkeit | Informationen sind abrufbar |
| **I** - Integrität (Integrity) | Informationen sind korrekt |
| **V** - Vertraulichkeit | Nur berechtigte Personen haben Zugriff |
| **A** - Authentizität | Identitäten sind echt |
| **NR** - Non-Repudiation | Handlungen sind nachweisbar |

> **Kernprinzip:** Diese fünf Dimensionen sind weitgehend unabhängig. Ein System kann in einer Dimension hochsicher sein, in einer anderen völlig ungeschützt.

### 1.3 Rechtliche Grundlagen

#### DSGVO (Datenschutz-Grundverordnung)

- **Artikel 32 DSGVO** fordert „angemessene technische und organisatorische Maßnahmen"
- **Bußgelder** bis zu 20 Millionen Euro oder 4% des weltweiten Jahresumsatzes
- **Meldepflicht** bei Datenschutzverletzungen innerhalb von 72 Stunden

#### ISO/IEC 27001

- Internationaler Standard für Informationssicherheitsmanagementsysteme
- Fordert systematische Risikoanalyse und Klassifikation
- Zertifizierbar und weltweit anerkannt

---

## 2. Verfügbarkeit (V) – „Ist die Information erreichbar?"

### 2.1 Was bedeutet Verfügbarkeit?

Verfügbarkeit beschreibt, ob eine Information zum richtigen Zeitpunkt abrufbar und nutzbar ist. Eine Information, die existiert, aber nicht rechtzeitig verfügbar ist, ist praktisch wertlos.

#### Mathematische Definition

```
Verfügbarkeit = MTBF / (MTBF + MTTR)
```

- **MTBF** = Mean Time Between Failures (Zeit zwischen Ausfällen)
- **MTTR** = Mean Time To Repair (Mittlere Reparaturzeit)

### 2.2 Subklassifikationen der Verfügbarkeit

#### 🟢 NIEDRIGE VERFÜGBARKEIT (90-95%)

**Charakteristika:**
- Ausfallzeiten von mehreren Tagen pro Jahr sind akzeptabel
- Einsatzbereich: Interne Testsysteme, Archivdaten

**Betriebliche Auswirkung:**
- Kein direkter Geschäftsausfall
- Geringe Produktivitätseinbußen

**Beispiele:**
- Firmenblog: Kann einige Stunden offline sein
- Testumgebung: Entwickler können an anderem arbeiten

---

#### 🟡 MITTLERE VERFÜGBARKEIT (99-99,9%)

**Charakteristika:**
- Ausfallzeiten: 8-87 Stunden pro Jahr
- Einsatzbereich: E-Mail, interne Datenbanken

**Betriebliche Auswirkung:**
- Spürbare Produktivitätsverluste
- Geschätzter Schaden: **1.000-10.000 EUR/Stunde**

**Beispiele:**
- **CRM-System:** Der Vertrieb kann nicht auf Kundendaten zugreifen
- **E-Mail-Server:** Kommunikation verzögert sich

---

#### 🔴 HOHE VERFÜGBARKEIT (99,9-99,999%)

**Charakteristika:**
- Ausfallzeiten: 5 Minuten bis 8 Stunden pro Jahr
- Einsatzbereich: E-Commerce, Produktionssysteme

**Betriebliche Auswirkung:**
- Direkter Umsatzausfall
- Geschätzter Schaden: **10.000-100.000+ EUR/Stunde**

**Beispiele:**
- **Online-Shop:** Amazon verliert ca. 220.000 USD pro Minute
- **Produktionssteuerung:** ~20.000 EUR/Minute Ausfall

### 2.3 Maßnahmen zur Sicherstellung der Verfügbarkeit

#### ⚙️ Maßnahme 1: Redundanz und Hochverfügbarkeits-Cluster

**Funktionsweise:** Kritische Systeme werden mehrfach ausgelegt. Bei Ausfall übernimmt automatisch ein anderes System.

**Technische Umsetzung:**

| Typ | Beschreibung | Failover-Zeit |
|-----|--------------|---------------|
| Aktiv-Passiv-Cluster | Ein Server aktiv, einer in Bereitschaft | 10-60 Sekunden |
| Aktiv-Aktiv-Cluster | Beide Server aktiv, Last wird verteilt | Nahezu sofort |
| Geografische Redundanz | Server an verschiedenen Standorten (z.B. Frankfurt + Dublin) | Regional unabhängig |

**Wirksamkeit:**
- ✅ Verfügbarkeitssteigerung: Von 99% auf 99,9-99,99%
- ✅ Schutz gegen Hardware-Ausfälle und lokale Katastrophen

**Kosten:**
- 💰 Verdopplung der Hardware-Kosten
- 💰 Typische Investition: 50.000-500.000 EUR

---

#### 💾 Maßnahme 2: Backup und Disaster Recovery

**3-2-1-Regel:**
1. **3** Kopien der Daten (1 Original + 2 Backups)
2. **2** verschiedene Medientypen (z.B. Festplatte + Cloud)
3. **1** Kopie extern/offsite

**Recovery-Zeitziele:**

| Ziel | Bedeutung | Beispiel |
|------|-----------|----------|
| **RPO** (Recovery Point Objective) | Maximaler tolerierbarer Datenverlust | 1 Stunde = Max. 1h Daten verloren |
| **RTO** (Recovery Time Objective) | Maximale Wiederherstellungszeit | 4 Stunden = System in 4h wieder online |

**Wirksamkeit:**
- ✅ Schutz gegen Datenverlust, Ransomware, Katastrophen

---

#### 📊 Maßnahme 3: Überwachung und Alarmierung

**Überwachte Metriken:**
- CPU-Auslastung, RAM-Nutzung, Festplattenplatz
- Antwortzeiten, Fehlerraten
- Transaktionen pro Minute

**Eskalationsstufen:**

| Stufe | Aktion | Beispiel |
|-------|--------|----------|
| 1️⃣ Info | Protokollierung, kein Alarm | CPU-Last bei 60% |
| 2️⃣ Warnung | E-Mail an Team | CPU-Last bei 80% |
| 3️⃣ Wichtig | SMS/Push-Benachrichtigung | CPU-Last bei 95% |
| 4️⃣ Notfall | Anruf mehrerer Personen | System nicht erreichbar |

**Wirksamkeit:**
- ✅ MTTR-Reduktion um 50-80%
- ✅ Frühzeitiges Erkennen von Problemen

### 2.4 Betriebliche Auswirkungen bei Versagen

#### 💸 Finanzielle Auswirkungen
- Direkter Umsatzausfall
- Produktionsstopp: **20.000 EUR/Minute**
- Vertragsstrafen bei SLA-Verletzungen

#### ⚖️ Rechtliche Auswirkungen
- Vertragsbruch
- Schadensersatzforderungen

#### 📉 Reputationsschäden
- 30% der Kunden wechseln nach mehreren Ausfällen

> **Reales Beispiel:** AWS-Ausfall 2017: **150 Millionen USD Schaden in 4 Stunden**

---

## 3. Integrität (I) – „Ist die Information korrekt?"

### 3.1 Was bedeutet Integrität?

Integrität beschreibt die **Korrektheit, Vollständigkeit und Unverändertheit** von Informationen. Eine Information hat Integrität, wenn sie:

- ✅ **Korrekt** ist (keine Fehler)
- ✅ **Vollständig** ist (nichts fehlt)
- ✅ **Unverändert** ist (keine unbefugte Manipulation)

### 3.2 Subklassifikationen der Integrität

#### 🟢 NIEDRIGE INTEGRITÄT

**Charakteristika:**
- Kleine Fehler sind akzeptabel
- Einsatzbereich: Interne Notizen, Entwurfsdokumente

**Betriebliche Auswirkung:**
- Geringe Mehrarbeit zur Korrektur
- Keine finanziellen Verluste

---

#### 🟡 MITTLERE INTEGRITÄT

**Charakteristika:**
- Fehler verursachen spürbaren Mehraufwand
- Einsatzbereich: Geschäftsdokumente, Kundenkommunikation

**Betriebliche Auswirkung:**
- Verzögerungen in Prozessen
- Geschätzter Schaden: **1.000-10.000 EUR**

**Beispiele:**
- ❌ Falsche Adresse → Brief geht zurück
- ❌ Falsche Artikelnummer → Fehllieferung

---

#### 🔴 HOHE INTEGRITÄT

**Charakteristika:**
- Fehler haben schwerwiegende Folgen
- Einsatzbereich: Finanzdaten, medizinische Daten, Verträge

**Betriebliche Auswirkung:**
- Massive finanzielle Verluste
- Rechtsstreitigkeiten
- Geschätzter Schaden: **100.000+ EUR**

**Beispiele:**
- ⚠️ Falsche Finanzbuchhaltung → Steuerbetrug → Strafen
- ⚠️ Falsche Medikamentendosis → Gesundheitsgefahr

### 3.3 Maßnahmen zur Sicherstellung der Integrität

#### 🔐 Maßnahme 1: Kryptografische Hash-Funktionen

**Funktionsweise:** Ein Hash ist ein digitaler Fingerabdruck einer Datei.

**Eigenschaften:**
- **Eindeutig:** Verschiedene Daten → verschiedene Hashes
- **Deterministisch:** Gleiche Daten → immer gleicher Hash
- **Avalanche-Effekt:** Ein Bit Änderung → komplett anderer Hash

**Praktisches Beispiel:**

```
Original: "Rechnung_Januar_2026.pdf"
SHA-256 Hash: 3a7b2c8d9e1f4g5h...

Datei manipuliert (Betrag geändert)
Neuer Hash: 9z8y7x6w5v4u3t2s...
→ Manipulation erkannt!
```

**Wirksamkeit:**
- ✅ Erkennt jede Änderung (auch einzelne Bits)
- ✅ Schutz gegen unbeabsichtigte Fehler und absichtliche Manipulation

---

#### ✍️ Maßnahme 2: Digitale Signaturen

**Funktionsweise:** Kombination aus Hash und asymmetrischer Verschlüsselung.

**Prozess:**
1. Dokument wird gehasht
2. Hash wird mit privatem Schlüssel verschlüsselt = **Signatur**
3. Empfänger verifiziert mit öffentlichem Schlüssel

**Was garantiert wird:**
- ✅ **Integrität:** Dokument wurde nicht verändert
- ✅ **Authentizität:** Der Absender ist echt
- ✅ **Nichtabstreitbarkeit:** Absender kann nicht abstreiten

> **Rechtliche Anerkennung:** Qualifizierte elektronische Signaturen = handschriftliche Unterschriften (eIDAS-Verordnung)

---

#### 🗄️ Maßnahme 3: Datenbank-Constraints und ACID-Transaktionen

**ACID-Eigenschaften:**

| Eigenschaft | Bedeutung |
|-------------|-----------|
| **A**tomicity | Transaktionen sind „alles oder nichts" |
| **C**onsistency | Datenbank geht von validem zu validem Zustand |
| **I**solation | Parallele Transaktionen beeinflussen sich nicht |
| **D**urability | Abgeschlossene Transaktionen bleiben erhalten |

**Wirksamkeit:**
- ✅ Verhindert inkonsistente Daten automatisch
- ✅ Schutz gegen Programmierfehler

### 3.4 Betriebliche Auswirkungen bei Versagen

#### 💸 Finanzielle Auswirkungen
- Fehlerhafte Rechnungen → Umsatzverluste
- Fehlinvestitionen → Millionenverluste

#### ⚖️ Rechtliche Auswirkungen
- Vertragsstreitigkeiten
- Produkthaftung → Rückrufaktionen

> **Reales Beispiel:** VW-Abgasskandal (2015): Manipulierte Messdaten, **über 30 Milliarden USD Kosten**

---

## 4. Vertraulichkeit (V) – „Wer darf die Informationen sehen?"

### 4.1 Was bedeutet Vertraulichkeit?

Vertraulichkeit bedeutet, dass **Informationen nur autorisierten Personen zugänglich** sind.

**Rechtlicher Hintergrund:**
- **DSGVO:** Schutz personenbezogener Daten
- **GeschGehG:** Schutz von Geschäftsgeheimnissen
- **Berufsgeheimnis:** Ärzte, Anwälte, Steuerberater

### 4.2 Subklassifikationen der Vertraulichkeit

#### 🌐 ÖFFENTLICH / NIEDRIGE VERTRAULICHKEIT

**Charakteristika:**
- Für Öffentlichkeit bestimmt
- Keine Zugriffsbeschränkungen

**Beispiele:**
- Produktbroschüren
- Pressemitteilungen

---

#### 🏢 INTERN / MITTLERE VERTRAULICHKEIT

**Charakteristika:**
- Nur für Organisationsangehörige
- Geschätzter Schaden bei Veröffentlichung: **10.000-50.000 EUR**

**Beispiele:**
- Interne Prozesshandbücher
- Projektpläne

---

#### 🔒 VERTRAULICH / HOHE VERTRAULICHKEIT

**Charakteristika:**
- Nur für bestimmte Personen/Abteilungen
- Geschätzter Schaden: **100.000-1.000.000 EUR**

**Beispiele:**
- Kundendatenbank (DSGVO-Verstoß bei Leak)
- Verträge
- Finanzdaten

---

#### 🔐 GEHEIM / SEHR HOHE VERTRAULICHKEIT

**Charakteristika:**
- Höchste Schutzstufe
- Existenzbedrohend bei Offenlegung

**Beispiele:**
- Unangemeldete Patente
- M&A-Verhandlungen
- Zero-Day-Sicherheitslücken

### 4.3 Maßnahmen zur Sicherstellung der Vertraulichkeit

#### 🔐 Maßnahme 1: Verschlüsselung

**Symmetrische Verschlüsselung (AES):**
- Ein Schlüssel zum Ver- und Entschlüsseln
- Sehr schnell (Hardware-Beschleunigung)

**Asymmetrische Verschlüsselung (RSA):**
- Zwei Schlüssel: Öffentlich (verschlüsseln) und Privat (entschlüsseln)
- Löst Schlüsselaustausch-Problem

**Einsatzbereiche:**

| Technologie | Verwendung |
|-------------|------------|
| BitLocker / FileVault | Festplattenverschlüsselung |
| S/MIME / PGP | E-Mail-Verschlüsselung |
| HTTPS/TLS | Sichere Websites |
| VPN | Sichere Verbindung über öffentliche Netze |

**Wirksamkeit:**
- ✅ AES-256 gilt als unknackbar
- ✅ Schutz bei Übertragung und Speicherung

---

#### 👤 Maßnahme 2: Zugriffskontrolle (RBAC)

**Funktionsweise:** Rechte werden Rollen zugewiesen, nicht einzelnen Personen.

**Beispiel:**

```
Rolle: "Vertriebsmitarbeiter"
Rechte:
  ✅ Kunden anzeigen: JA
  ✅ Kunden bearbeiten: JA
  ❌ Preise ändern: NEIN
```

**Prinzipien:**
- **Least Privilege:** Nur minimal notwendige Rechte
- **Need-to-Know:** Zugriff nur bei konkreter Aufgabe

**Wirksamkeit:**
- ✅ Verhindert unautorisierten Zugriff
- ✅ Reduziert Schaden bei kompromittierten Accounts

---

#### 🛡️ Maßnahme 3: Data Loss Prevention (DLP)

**Funktionsweise:** Automatische Systeme überwachen Datenflüsse und verhindern unbefugte Weitergabe.

**Erkennungsmethoden:**
- Mustervergleich: Kreditkartennummern, IBANs
- Inhaltsanalyse: Dokument-Klassifizierung durch maschinelles Lernen

**Aktionen:**

| Priorität | Aktion | Beschreibung |
|-----------|--------|--------------|
| 1 | Blockieren | E-Mail/Upload wird verhindert |
| 2 | Warnen | Nutzer erhält Warnung |
| 3 | Quarantäne | Zur manuellen Prüfung |
| 4 | Protokollieren | Vorfall wird dokumentiert |

**Wirksamkeit:**
- ✅ Verhindert 90% der unbeabsichtigten Datenlecks
- ✅ Erkennt auch absichtliche Exfiltration

### 4.4 Betriebliche Auswirkungen bei Versagen

#### 💸 Finanzielle Auswirkungen
- **DSGVO-Bußgelder:** Bis 20 Mio. EUR oder 4% Jahresumsatz
- **British Airways:** 22 Mio. EUR für Datenleck 2018

#### 🏆 Wettbewerbsschäden
- Verlust von Geschäftsgeheimnissen
- Kopie von Innovationen

#### 📉 Reputationsschäden
- 65% der Kunden verlieren Vertrauen nach Datenleck

> **Reales Beispiel:** Facebook/Cambridge Analytica (2018): 87 Millionen Nutzer, **5 Milliarden USD Strafe**

---

## 5. Authentizität (A) – „Ist der Absender echt?"

### 5.1 Was bedeutet Authentizität?

Authentizität stellt sicher, dass **Identitäten und Informationen echt sind**. Es muss verifizierbar sein:

- ✅ Wer hat eine Nachricht gesendet?
- ✅ Woher stammt eine Information?
- ✅ Ist eine Identität tatsächlich die behauptete Person?

### 5.2 Subklassifikationen der Authentizität

#### 🟢 NIEDRIGE AUTHENTIZITÄT
- Minimale oder keine Authentifizierung
- **Einsatzbereich:** Öffentliche Foren, anonyme Umfragen

#### 🟡 MITTLERE AUTHENTIZITÄT
- Benutzername + Passwort
- **Einsatzbereich:** Interne Systeme
- **Geschätzter Schaden:** 10.000-50.000 EUR

#### 🔴 HOHE AUTHENTIZITÄT
- Multi-Faktor-Authentifizierung erforderlich
- **Einsatzbereich:** Finanzsysteme, Admin-Zugriffe
- **Geschätzter Schaden:** 100.000+ EUR

### 5.3 Maßnahmen zur Sicherstellung der Authentizität

#### 🔑 Maßnahme 1: Multi-Faktor-Authentifizierung (MFA)

**Drei Faktoren:**

| Faktor | Typ | Beispiele |
|--------|-----|-----------|
| 1️⃣ Wissen | Etwas, das Sie wissen | Passwort, PIN |
| 2️⃣ Besitz | Etwas, das Sie haben | Smartphone, Hardware-Token |
| 3️⃣ Biometrie | Etwas, das Sie sind | Fingerabdruck, Gesichtserkennung |

**Praktisches Beispiel Online-Banking:**

```
1. Benutzername + Passwort (Wissen) ✅
2. SMS-Code an registrierte Nummer (Besitz) ✅
3. Zugriff gewährt ✅
```

**TOTP (zeitbasiertes Einmalpasswort):**
- App generiert alle 30 Sekunden neuen 6-stelligen Code
- Funktioniert offline, sicherer als SMS

**Wirksamkeit:**
- ✅ **99,9% Reduzierung** von Account-Übernahmen (Microsoft-Studie)
- ✅ Schutz gegen Phishing und Passwort-Diebstahl

---

#### 📜 Maßnahme 2: Digitale Zertifikate und PKI

**Funktionsweise:** Eine Zertifizierungsstelle (CA) bestätigt Identitäten.

**Vertrauenskette:**

```
1. CA prüft Identität (z.B. Handelsregisterauszug)
2. CA stellt Zertifikat aus und signiert es
3. Browser vertraut CA
4. Browser vertraut Zertifikat
5. Identität bestätigt ✅
```

**Einsatzbereiche:**
- 🔒 **HTTPS/TLS:** Grünes Schloss im Browser
- 📧 **E-Mail-Signatur** (S/MIME)
- 💻 **Code-Signierung:** Vertrauenswürdige Software

**Wirksamkeit:**
- ✅ Mathematisch beweisbare Authentizität
- ✅ Schutz gegen Phishing und Man-in-the-Middle

---

#### 👁️ Maßnahme 3: Biometrische Verfahren

**Vergleich biometrischer Verfahren:**

| Verfahren | FAR (Falschakzeptanzrate) | Einsatzbereich |
|-----------|---------------------------|----------------|
| Fingerabdruck | 1:50.000 | Smartphones, Laptops |
| Gesichtserkennung (3D) | 1:1.000.000 | Face ID, Hochsicherheit |
| Iris-Scan | 1:1.200.000 | Hochsicherheitsbereiche |

**Wirksamkeit:**
- ✅ Bequem (kein Passwort merken)
- ✅ Schwer zu fälschen (3D-Verfahren)

**Grenzen:**
- ⚠️ Bei Kompromittierung nicht änderbar
- ⚠️ Datenschutzbedenken

### 5.4 Betriebliche Auswirkungen bei Versagen

#### 💸 Finanzielle Auswirkungen
- Account-Übernahmen → betrügerische Transaktionen
- Finanzbetrug bei Banken

#### ⚙️ Operative Auswirkungen
- Systemkompromittierung durch falsche Admin-Accounts
- Datenexfiltration

> **Reales Beispiel:** Twitter-Hack 2020: Prominente Accounts übernommen, Bitcoin-Scam, massiver Imageschaden

---

## 6. Non-Repudiation (NR) – „Kann eine Handlung abgestritten werden?"

### 6.1 Was bedeutet Nichtabstreitbarkeit?

Non-Repudiation stellt sicher, dass eine **Handlung einer Person eindeutig zugeordnet werden kann** und diese Person die Handlung **nicht abstreiten kann**.

**Warum wichtig:**
- ⚖️ Rechtliche Beweisführung
- 📊 Audit-Compliance
- 📝 Verbindliche Vertragsschlüsse

### 6.2 Subklassifikationen von Non-Repudiation

#### 🟢 NIEDRIGE NON-REPUDIATION
- Einfaches Logging
- Leicht manipulierbar

#### 🟡 MITTLERE NON-REPUDIATION
- Geschützte Logs (Nur-Schreiben)
- Manipulation erkennbar
- **Geschätzter Schaden:** 10.000-50.000 EUR

#### 🔴 HOHE NON-REPUDIATION
- Digitale Signaturen
- Qualifizierter Zeitstempel
- Rechtlich beweiskräftig
- **Geschätzter Schaden:** 100.000+ EUR

### 6.3 Maßnahmen zur Sicherstellung von Non-Repudiation

#### ✍️ Maßnahme 1: Qualifizierte elektronische Signaturen

**Anforderungen (eIDAS-Verordnung):**

1. ✅ Eindeutige Zuordnung zur Person
2. ✅ Erkennung von Änderungen
3. ✅ Zertifiziertes Gerät (Smartcard)
4. ✅ Qualifizierter Vertrauensdiensteanbieter

**Prozess:**

```
1. Schlüsselpaar auf Smartcard erstellen
2. Trust Service Provider prüft Identität
3. Qualifiziertes Zertifikat wird ausgestellt
4. Dokument mit Smartcard signieren
5. Signatur = handschriftliche Unterschrift
```

> **Rechtliche Gleichstellung:** Qualifizierte elektronische Signatur = handschriftliche Unterschrift (§ 126a BGB)

**Wirksamkeit:**
- ✅ In der gesamten EU anerkannt
- ✅ Gerichtsfest (volle Beweiskraft)

---

#### ⏰ Maßnahme 2: Qualifizierter Zeitstempel

**Funktionsweise:** Die Time Stamping Authority (TSA) bestätigt die Existenz eines Dokuments zu einem bestimmten Zeitpunkt.

**Prozess:**

```
1. Dokument hashen
2. Hash an TSA senden
3. TSA fügt Zeit hinzu
4. TSA signiert (Hash + Zeit)
5. Zeitstempel = Beweis der Existenz
```

**Warum wichtig:**
- ✅ Verhindert Rückdatierung
- ✅ Notwendig für Langzeitarchivierung

**Einsatzbereiche:**
- 💡 Patentanmeldungen
- 📄 Verträge
- 📧 E-Mails

---

#### 📊 Maßnahme 3: Unveränderliche Audit-Logs / Blockchain

**Was wird protokolliert:**

| Information | Beispiel |
|-------------|----------|
| **Wer** | Benutzer-ID: user_12345 |
| **Was** | Aktion: Datei gelöscht |
| **Wann** | Zeitstempel: 2026-01-28 14:32:15 |
| **Wo** | System: Production-DB |
| **Ergebnis** | Status: Erfolg |

**Schutz vor Manipulation:**
- WORM-Medien (Write Once, Read Many)
- Kryptografische Verkettung

**Blockchain-Ansatz:**

```
Block 1: [Transaktion A | Hash von Block 0]
         ↓
Block 2: [Transaktion B | Hash von Block 1]

Manipulation von Block 1 → Hash ändert sich
→ Manipulation sofort erkennbar!
```

**Wirksamkeit:**
- ✅ Nachträgliche Manipulation praktisch unmöglich
- ✅ Vollständige Nachvollziehbarkeit

### 6.4 Betriebliche Auswirkungen bei Versagen

#### 💸 Finanzielle Auswirkungen
- Verträge nicht durchsetzbar
- Betrug ohne Konsequenzen

#### ⚙️ Operative Auswirkungen
- Fehlersuche unmöglich ohne Logs
- Keine Verantwortlichkeit

#### ⚖️ Rechtliche Auswirkungen
- Compliance-Verstöße (SOX, MaRisk)
- Fehlendes Beweismittel vor Gericht

> **Reales Beispiel:** Enron-Skandal (2001): Fehlende/gelöschte Audit-Trails, Zusammenbruch mit 20.000 Mitarbeitern

---

## 7. Warum abgestufte Klassifikation? – Begründung

### 7.1 Wirtschaftliche Gründe

#### Kosten-Nutzen-Verhältnis

Maximale Sicherheit für alles wäre unbezahlbar:

| Maßnahme | Zusätzliche Kosten |
|----------|-------------------|
| Hochverfügbarkeitscluster | +100-200% |
| HSMs | 10.000-50.000 EUR pro Stück |
| MFA für alles | Zeitaufwand + Lizenzkosten |

#### Praktisches Beispiel

**Unternehmen mit 1.000 Mitarbeitern und 100 TB Daten:**

| Ansatz | Kosten/Jahr | Einsparung |
|--------|-------------|------------|
| Ohne Klassifikation | ~5 Mio. EUR | - |
| Mit Klassifikation | ~1,5 Mio. EUR | 3,5 Mio. EUR (70%) |

**Risikobasierter Ansatz:** Ressourcen werden dort eingesetzt, wo der potenzielle Schaden am größten ist.

### 7.2 Praktikabilität

#### Überlastung vermeiden

> **Wenn alles „kritisch" ist, ist nichts kritisch.**

**Beispiel ohne Klassifikation:**
- ❌ Jede Datei muss per Secure Mail verschlüsselt werden
- ❌ Zeitverlust: 5 Minuten pro E-Mail
- ❌ Frustration → Workarounds → Sicherheitsrisiko!

**Mit Klassifikation:**
- ✅ Öffentlich: Normale E-Mail
- ✅ Intern: Firmen-E-Mail
- ✅ Vertraulich: Verschlüsselt
- ✅ Ergebnis: Effizienz + Akzeptanz

### 7.3 Compliance und Audits

#### Nachweispflicht

Regulierungen fordern „angemessene" Maßnahmen. Angemessenheit erfordert:

1. ✅ Bewertung des Schutzbedarfs (Klassifikation)
2. ✅ Risikoangemessene Maßnahmen
3. ✅ Dokumentation

**Audit-Vorteile:**
- 📋 Klare Dokumentation
- 🔍 Nachvollziehbare Entscheidungen
- ✅ Compliance-Nachweis

### 7.4 Fokussierung

#### Aufmerksamkeit auf das Wesentliche

IT-Security-Teams haben begrenzte Zeit. Klassifikation hilft:

- 🎯 **Priorisierung:** Kritische Systeme zuerst patchen
- 🚨 **Incident Response:** Hochklassifizierte Daten zuerst schützen
- 💰 **Investitionen:** Budget für das Wichtigste

**Psychologischer Effekt:** Mitarbeiter verstehen, warum bestimmte Daten besonders geschützt werden müssen → höheres Bewusstsein

### 7.5 Flexibilität und Skalierbarkeit

#### Anpassung an Veränderungen

- 🆕 Neues Projekt → Daten klassifizieren → Passende Maßnahmen automatisch
- 📜 Gesetzesänderung → Nur hochklassifizierte Daten betroffen

#### Skalierung

Unternehmen wächst von 10 auf 1.000 Mitarbeiter:

- ✅ Neue Mitarbeiter erhalten automatisch rollenbasierte Zugriffe
- ✅ Klare Richtlinien
- ✅ Keine Ad-hoc-Entscheidungen

### 7.6 Zusammenfassung der Begründung

Abgestufte Klassifikation ist zweckmäßig, weil:

1. **💰 Wirtschaftlich:** Kostenreduktion um 50-70%
2. **⚖️ Risikogerecht:** Schutz orientiert sich am Schadenspotenzial
3. **✅ Praktikabel:** Akzeptanz bei Mitarbeitern
4. **📋 Compliance:** Erfüllt regulatorische Anforderungen
5. **🎯 Fokussiert:** Aufmerksamkeit für das Wesentliche
6. **📈 Skalierbar:** Wächst mit dem Unternehmen
7. **🔍 Nachvollziehbar:** Entscheidungen dokumentiert
8. **🔄 Flexibel:** Anpassung an Veränderungen

> **Fazit:** „Einheitsgröße" funktioniert nicht. Nur durch differenzierte Betrachtung kann ein Unternehmen gleichzeitig sicher, effizient und konform sein.

---

## 8. Fazit und Handlungsempfehlungen

### 8.1 Zusammenfassung VIVA-Schema

Das VIVA-Schema bietet einen umfassenden, mehrdimensionalen Ansatz zur Informationsklassifikation:

| Dimension | Fragestellung |
|-----------|---------------|
| **V** - Verfügbarkeit | Sind Informationen verfügbar? |
| **I** - Integrität | Sind Informationen korrekt? |
| **V** - Vertraulichkeit | Nur berechtigte Personen haben Zugriff? |
| **A** - Authentizität | Sind Identitäten echt? |
| **NR** - Non-Repudiation | Sind Handlungen nachweisbar? |

> **Kernprinzip:** Diese Dimensionen sind unabhängig und müssen individuell bewertet werden.

### 8.2 Praktisches Vorgehen

#### Schritt 1: Inventarisierung
- 📋 Welche Informationsassets existieren?
- 📋 Datenbanken, Dateien, Anwendungen, Geschäftsprozesse

#### Schritt 2: Klassifikation
- 🔍 Für jedes Asset alle fünf VIVA-Dimensionen bewerten
- 🔍 Schutzstufe festlegen (niedrig/mittel/hoch)

#### Schritt 3: Maßnahmenkatalog
- 📝 Für jede Schutzstufe definierte Maßnahmen
- 📝 Technisch, organisatorisch, personell

#### Schritt 4: Umsetzung
- ⚙️ Maßnahmen implementieren
- 👥 Mitarbeiter schulen
- 📋 Richtlinien verabschieden

#### Schritt 5: Überwachung
- 🔄 Regelmäßige Audits
- 📊 Kennzahlen messen (KPIs)
- 📈 Kontinuierliche Verbesserung

### 8.3 Erfolgsfaktoren

1. **👔 Management-Unterstützung:** Informationssicherheit ist Chefsache
2. **🧠 Mitarbeiter-Bewusstsein:** Technik allein reicht nicht
3. **📋 Dokumentation:** Entscheidungen nachvollziehbar machen
4. **⚖️ Pragmatismus:** Perfekt ist der Feind von gut
5. **🔄 Kontinuität:** Sicherheit ist kein Projekt, sondern ein Prozess

---

## Anhang

### Glossar

| Begriff | Definition |
|---------|------------|
| **AES** | Advanced Encryption Standard - Symmetrischer Verschlüsselungsalgorithmus |
| **CA** | Certificate Authority - Zertifizierungsstelle |
| **DLP** | Data Loss Prevention - Datenverlust-Prävention |
| **DSGVO** | Datenschutz-Grundverordnung |
| **HSM** | Hardware Security Module - Hardwaresicherheitsmodul |
| **MFA** | Multi-Factor Authentication - Mehr-Faktor-Authentifizierung |
| **MTBF** | Mean Time Between Failures - Mittlere Zeit zwischen Ausfällen |
| **MTTR** | Mean Time To Repair - Mittlere Reparaturzeit |
| **PKI** | Public Key Infrastructure - Public-Key-Infrastruktur |
| **RBAC** | Role-Based Access Control - Rollenbasierte Zugriffskontrolle |
| **RPO** | Recovery Point Objective - Wiederherstellungspunktziel |
| **RTO** | Recovery Time Objective - Wiederherstellungszeitziel |
| **SLA** | Service Level Agreement - Dienstgütevereinbarung |
| **TOTP** | Time-based One-Time Password - Zeitbasiertes Einmalpasswort |
| **TSA** | Time Stamping Authority - Zeitstempel-Dienst |

---

**Stand:** Januar 2026  
**Version:** 1.0

---

*Dieses Skriptum dient ausschließlich Bildungszwecken und stellt keine Rechtsberatung dar.*
