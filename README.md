# Fit-Me

Persönliche Web-App für rund 10 Minuten Morgentraining – Nacken, Haltung, Fitness. **Version 1.1.0** vom 8. November 2026.

## Dateien

| Datei | Inhalt |
| --- | --- |
| `index.html` | Gesamte App: Oberfläche, Logik, Übungen, 24 Wochenroutinen, 35 Tipps, Ton-Synthesizer, SVG-Figuren, Diagramm |
| `manifest.json` | App-Name, Icons, Vollbildmodus, Farben |
| `sw.js` | Service Worker für Offline-Betrieb und automatische Updates |
| `icon-180.png`, `icon-512.png` | App-Icons |
| `README.md` | Diese Anleitung (optional) |

## Neu in Version 1.1.0

1. **Blocksystem:** 4 Kernübungen, je 2 Runden – Warm-up (60 s, Stehen) → 10 s Übergang → Steh-Block **A B A B** → Boden-Block **C D C D**. Nur ein Wechsel vom Stehen zum Boden. A = Beine/Kreislauf, B = Nacken/Schulter/Haltung (kräftigend), C = Liegestütz, oberer Rücken oder Mobilität (R1–R3), D = Rumpfspannung.
2. **Takt für rund 10 Minuten:**

   | Wochen | Übung / Pause | Gesamtdauer |
   | --- | --- | --- |
   | 1–4 | 40 s / 30 s | 10:00 |
   | 5–8 | 50 s / 20 s | 10:15 |
   | 9–12 und Level 2 | 55 s / 15 s | 10:25 |

   Ab Woche 5 dauert die Pause beim Wechsel zum Boden 25 s. Anzeige „Übung X von 9“ plus „Runde 1/2“ bzw. „2/2“. Eine Einheit zählt ab 6 von 8 Hauptintervallen (höchstens 2 Übersprünge).
3. **Rumpf:** neue Übung **Dead Bug (Käfer)**. Platz D wechselt zwischen Unterarmstütz, Seitstütz und Dead Bug – Plank-Varianten in 18 von 24 Wochen, Dead Bug in 6.
4. **Power ohne Sprünge:** Ab Woche 5 laufen beide Durchgänge von Übung A auf Vollgas, nur mit leisen, beinbetonten Übungen (Knieheben, Kniebeuge mit Armstrecken, Skater-Schritt, Fersen zum Po). Sprungübungen kommen nicht mehr vor, bleiben aber im Übungspool.
5. **Schulterfreundliches Warm-up:** „Marschieren mit Armschwung“, ab Halbzeit kleine Ellbogenkreise mit den Fingerspitzen auf den Schultern – keine gestreckten Armkreise über Kopf mehr.
6. **Lebendigere Figuren:** Becken federt mit, der Rumpf neigt sich leicht, Bewegungen laufen ohne Stocken durch Zwischenpositionen (weiche Kurven statt Abbremsen an jedem Keyframe).
7. **Bedienung:** Pausieren nur über den Pause-Button oder durch Tippen auf die Uhr; ein Tipp auf die freie Fläche setzt ein pausiertes Training nur fort. 2 Sekunden vor jedem Seitenwechsel kommen ein Vorab-Ton und „Gleich Seite wechseln“. Auf „Heute“ öffnet ein Tipp auf eine Übung eine große, animierte Vorschau.
8. **Automatische Updates:** Liegt eine neue Version auf GitHub, lädt die App sie beim Öffnen und startet automatisch neu – aber nur, wenn gerade kein Training, keine Abfrage und kein Dialog offen ist. Sonst erscheint nur ein Hinweis.

Fortschritt, Bewertungen, Profile und Backups aus Version 1.0 bleiben vollständig erhalten.

## Auf GitHub Pages veröffentlichen

**Erstmalig:**

1. Auf github.com anmelden, oben rechts **+ › New repository**.
2. Name `fit-me`, Sichtbarkeit **Public**, **Create repository**.
3. Auf der leeren Seite **uploading an existing file** wählen, alle Dateien hineinziehen, **Commit changes**.
4. **Settings › Pages**: bei *Source* **Deploy from a branch**, Branch **main**, Ordner **/ (root)**, **Save**.
5. Nach 1–2 Minuten läuft die App unter `https://binojsebastian.github.io/fit-me/`.

**Update auf eine neue Version:**

1. Zur Sicherheit in der App **Einstellungen › Als JSON speichern**.
2. Im Repository **Add file › Upload files**, alle neuen Dateien hineinziehen (gleiche Namen werden ersetzt), **Commit changes**.
3. Nach 1–2 Minuten die App einmal mit Internet öffnen – sie lädt sich selbst neu. Erscheint stattdessen der Hinweis „Neue Version geladen“, ist sie beim nächsten Öffnen aktiv.

## Auf iPhone und iPad installieren

1. Den Link in **Safari** öffnen.
2. **Teilen › Zum Home-Bildschirm**.
3. Den Schalter **„Als Web-App öffnen“ eingeschaltet lassen** und **Hinzufügen** – dann startet Fit-Me im Vollbild ohne Adressleiste.
4. Einmal mit Internet öffnen. Danach funktioniert die App komplett offline.

Daten liegen nur auf dem jeweiligen Gerät. Zum Übertragen vom iPhone aufs iPad: **Einstellungen › Als JSON speichern** (oder **Backup kopieren**) und auf dem anderen Gerät **Backup einspielen**.

## Gut zu wissen

- **Töne** folgen dem Lautlos-Schalter des iPhones: Ist das iPhone lautlos, bleibt Fit-Me still, der Screen-Flash zeigt alle Wechsel trotzdem. Laufende Musik oder Podcasts werden nicht unterbrochen.
- **Bildschirm bleibt an**: über die Wake-Lock-Schnittstelle und zusätzlich ein unsichtbares, stummes Video (für ältere iOS-Versionen).
- **Inhalte ändern**: In `index.html` stehen die Datenblöcke getrennt von der Logik – `FM.EX` (Übungen und Hinweiszeilen), `FM.PROGRAM` (Wochenroutinen, eine Zeile „A B C D“ pro Woche), `FM.TIPPS` (Tipps des Tages), `FM.takt` (Übungs- und Pausenzeiten), `FM.UEBERGANG_SEK` und `FM.BODEN_PAUSE_SEK` (Übergänge).

## Entscheidungen und Annahmen

- **Kinn-Rückzug** steht in allen Phasen in der Variante im Stehen zur Verfügung, weil Platz B ein Steh-Platz ist. Die Varianten im Vierfüßler und in Rückenlage bleiben im Pool, haben im Blocksystem aber keinen festen Platz.
- **R1–S5-Regel:** Jede Woche enthält mindestens eine Übung aus R1–R3/S1–S5 (durch die zwei Runden also mindestens 2 Intervalle) – entweder S2/S5 auf Platz B oder R1–R3 auf Platz C.
- **Liegestütz** gibt es ab Woche 5 (Knie), ab Woche 9 voll. In Woche 1–4 liegt der Schwerpunkt auf oberem Rücken und Brustwirbelsäule, weil die leichteste Variante (an der Wand) im Stehen ist.
- **Level 2:** durchgehend 55/15 s, Power ab Woche 1, Tempo-Variante „Liegestütz langsam“ ab Stufe 2. Nach Level 2 lässt es sich wiederholen.
- **Streak** zählt Trainingstage; ein einzelner Ruhetag und – nach 5 Einheiten in 7 Tagen – ein freies Wochenende unterbrechen sie nicht.
- **Zweites Training am selben Tag** wird mit Abfrage im Verlauf gespeichert, zählt aber nicht für Woche und Streak.

## Hinweis zur Spezifikation

Quelle 3 (Andersen et al. 2012, BJSM 46(14)) hat im Lastenheft einen vermischten Titel. Der korrekte Titel lautet „Influence of frequency and duration of strength training for effective management of neck and shoulder pain: a randomised controlled trial“; so steht er auch in der App.

## Geprüft (Version 1.1.0)

- Regelprüfung aller 24 Wochenroutinen: Plätze A–D, Positions-Blockung, keine Sprünge, Power nur auf Platz A ab Woche 5, kräftigende Nackenübung auf Platz B, mindestens eine Übung aus R1–S5, Varianten je Phase, Reihenfolge A B A B C D C D und Dauer – 0 Fehler.
- 172 automatische Tests der Logik: Blockablauf, Dauer je Phase, max. 2 Übersprünge, Wochen- und Levelfortschritt, max. 1 Einheit pro Kalendertag, Streak inkl. Wochenend-Puffer, Tipp-Rotation, Backup.
- Browser-Tests in iPhone- und iPad-Größe: kompletter Durchlauf, Pause-Schutz, Vorwarnung vor dem Seitenwechsel, Übungsvorschau inkl. sauberem Stopp der Animation, Überspringen, Abbruch, Level-Wechsel, Profile, Backup, Offline-Start, Pause im Hintergrund, automatisches Update im Leerlauf und nur Hinweis während eines Trainings.
- Nur auf echten Geräten prüfbar: Töne, Wake Lock und der Start vom Home-Bildschirm unter iOS.
