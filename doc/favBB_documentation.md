# favBB Dokumentation
Die Idee hinter FavBB ist es ÖV Verbindungen zu suchen zu vereinfachen. Durch Speichern von Favoriten die in einem Dashboard angezeigt werden.
Ausserdem ist es das Ziel ein Tech Stack auszuprobieren der beim
Arbeitgeber zur Diskussion steht um eine interne Applikation zu
entwickeln.

## Tech Doku
Die Tech Doku beinhalted den Scope und die Dokumentation der Umsetzung des Frontend und Backend.

### Scope
Die Webseite soll drei Seiten beinhalten.
Zwei Seiten sind dafür da Verbindungen zu suchen, wobei die einte
eine textbasierte und die zweite eine kartenbasierte Suche anbietet. Die dritte Seite ist das Dashboard, wo gespeicherte
Verbindungen angezeigt werden und aktuelle Verbindungen auflistet.
Als Technologie wird Mithril verwendet. Mithril ist eine sehr schlanke UI Library die einen virtuellen DOM pflegt und
nur veränderte Teile neu zeichnet. Ausserdem ist eine Request API vorhanden die es einem erlaubt ein Backend einfach
anzusprechen.
Ausserdem wird für das definieren des HTML JavaScript verwendet, was aber gar nicht kompliziert ist, da es sehr an ein
HTML Dokument erinnert.

```javascript
m("span",
    m("i", { class: "fas fa-map-marker-alt" }),
    "  " + section.departure.station.name + "  "
)
```
*Beispiel eines 'span' welches ein Icon und dynamischer Text enthält*

Als Backend soll im Projekt Postgres mit PostgREST (eine automatische REST API für Postgres Datenbanken) eingesetzt werden.
Dies ist als kleines Proof-of-Concept gedacht um vorallem PostgREST einmal zu testen. Alternativ zum Backend ist eine
Client seitige Speicherung vorgesehen. Dies bringt den Vorteil, dass auf dem Backend nur ein kleiner Webserver notwendig
ist der das HTML, JavaScript und CSS ausliefert.

### Backend
Als Backend wird Postgres mit PostgREST verwendet.
Das Ganze läuft in zwei Docker Container. Zusätzlich dazu
läuft SwaggerUI um die REST API direkt zu visualisieren.
Das Ganze wurde ausgiebig lokal getestet und sieht vielversprechend aus. Die funktionalität von PostgREST überzeugen
vollumfänglich.

#### Datenbank Schema
Für den Anfang reicht ein simples Datenbankschema.
Es gibt User die eine gewisse Anzahl Verbindungen speichern können.
Nachdem das Schema in der Postgres Datenbank erstellt wurde (via PgAdmin 4), wurde ein Backup Script erstellt, dass von da an
dafür gebraucht werden konnte um die Datenbank zu sichern und
auch wiederherzustellen.

### Frontend
Die Frontend Toolchain besteht hauptsächlich aus NPM, Mithril, Bulma (CSS), TypeScript und browserify.
Mithril beinhaltet einen Router der es erlaubt alle Seiten an einem Ort zu definieren.

```javascript
m.route(appDiv as Element, '/', {
  '/': Dashboard,
  '/dashboard': Dashboard,
  '/search': Search,
  '/mapsearch': MapSearch
});
```

##### Dashboard
Das Dashboard zeigt pro gespeicherte Verbindung eine List der aktuell verfügbaren ÖV Verbindungen.

##### Search
Die Search Seite hat zwei Felder um Verbindungen zu suchen. Beim Tippen werden dynamisch nach Stationen gesucht. Sobald
diese ausgwählt sind werden auch schon Verbindungen angezeigt ohne dass diese gespeichert werden müssen.

##### MapSearch
Die MapSearch Seite ist noch nicht ganz fertig. Das Ziel ist es das man den Abfahrtsort und Ankunftsort in einer Map
auswählen kann und optional Speichern kann.
Momentan funktioniert dass noch nicht.

##### Components
Für das UI sind Komponenten notwendig. Für diese Projekt wurden zum Beispiel die "Searchable List" entwickelt.
Zusätzlich noch einige kleine Komponenten für die Darstellung von Details wie Verbindungen und der Sektionen (Search Seite).

###### Searchable List
Die Searchable List ist die grösste Komponente die entwickelt wurde. Es wurde versucht das UI und die Logik zu trennen.
Um das zu erreichen bietet die Searchable List Callback Funktionen an, die es erlauben den Inhalt anzupassen sobald
etwas eingetippt wird oder auf die Auswahl eines Elementes zu reagieren.

##### Services
Für die Anbindung an die TransportAPI und für das Speichern der Verbindungen auf dem Client wurden zwei Services implementiert.

###### Transport API
Die TransportAPI wird von "Opendata Schweiz" zur Verfügung gestellt und beinhaltet sämtliche ÖV Informationen.
Für diese Projekt sind vorallem die Verbindungen interessant und die möglichen Abfahrts- bzw. Ankunftsorte. Dafür
reichen zwei Requests, die noch mit Argumenten ausgeführt werden können.

###### Storage
Für das Speichern der Verbindungen auf dem Client wird "localforage" eingesetzt. Das ist eine Library die eine
Abstraktionen über all die Möglichen Speichermöglichkeiten auf dem Client bietet. Es kann ausgewählt werden wo
gespeichert werden soll, es kann aber auch ganz automatisch passieren je nach den verfügbaren Möglichkeiten.
Das Interface ist ziemlich simple. Es besteht aus einem Key / Value Store.

<div style="page-break-after: always;"></div>

## Fazit
Das Projekt war extrem spannend und es wurden wichtige Erkenntnisse bezüglich dem Tech Stack gesammelt.
Leider hat am Schluss einiges noch gefehlt für eine voll funktionsfähige Webseite. Die Backend Anbindung wurde nicht
gemacht und nur ein Client seitiger Storage implementiert. Auch die einzelnen Seiten müssen noch verbessert werden.
Jedoch wurde mit Mithril eine sehr interessante Bibliothek ausprobiert, die überblickbar, schnell und vielseitig ist.
Zusätzlich wurde mit der "Searchable List" eine sehr generische Komponente entwickelt die in anderen Projekten wieder
eingesetzt werden kann, was auch mal aufzeigt was in der Entwicklung von einfachen Komponenten steckt.
Durch den Einsatz der TransportAPI konnte zusätzlich eine REST API Anbindung realisiert werden, was eine gute Erfahrung
war und auch eine gewisse Architektur forderte um das UI und die REST API Anbindung gut zu trennen.

## Reflexion
Das Projekt war von Anfang an sehr ambitioniert und somit wurde ein gewisses Risiko eingegangen nicht alles zu erreichen
was geplant war. In Zukunft gilt es realistischer zu planen und lieber einige Features als Optionen offen zu lassen.
Trotzem wurde extrem viel gelernt und das ist wohl das wichtigste bei so einem Projekt. Im Backend mit Postgres &
PostgREST und im Frontend mit Mithril und der TransportAPI. Nicht zuvergessen mit der Toolchain rund um Bulma (CSS), NPM, browserify
und TypeScript.
Schlussendlich bleibt eine gewisse Verunsicherung was den Tech Stack angeht. Das Backend macht sicherlich Sinn wenn eine
Postgres Datenbank eine REST API Schnittstelle bekommen soll. Von Anfang an solch eine Lösung anzustreben ist
diskussionswürdig, wenn nicht zwingend eine relationale Datenbank im Hintergrund benötigt wird. Im Frontend ist die
Frage aber nicht so einfach zu beantworten. Es gibt so viele Frameworks. Im Unterricht wurde mit Angular ein recht
populäres Framework angeschaut und auch andere wie React und Vue sind sehr populär. Was aber aufällt ist, dass diese
Frameworks recht gross sind und einen in eine gewisse Abhängigkeit bringt. Um dies zu Umgehen wurde Mithril evaluiert.
Der Vorteil ist, dass der Source Code recht klein ist und somit auch selber verwaltet werden kann, falls das Projekt
eingestellt wird oder gravierende Änderungen passieren die nicht eingepflegt werden können. Dass bringt eine gewisse Sicherheit,
da die Abhängigkeit nicht mehr so gross ist. Als Entwickler sollte man sowieso aufpassen sich nicht zu Abhängig von
Frameworks und Libraries zu machen, die man im Notfall nicht selber verwalten kann.
Im Grossen und Ganzen ist das Projekt eher eine Studie als eine fix fertige Webseite, die aufzeigt, dass der gewählte
Tech Stack eine realisierbare Alternative ist für zukünftige Projekte.

<div style="page-break-after: always;"></div>

## Arbeitsjournal

* Setup Postgres, PostgREST and Swagger UI with Docker ~ 2h
* Create first DB Schema and Script to Backup/Restore ~ 1h
* [Mithril](https://mithril.js.org/) & [Bulma.io](https://bulma.io/) Learning ~ 3h
* Searchable List ~ 3h
* Transport API Service ~ 4h
* Sections ~ 2h
* Map ~ 4h
* Dashboard ~ 4h
* Backend Tests ~ 4h
* Doku & Präsentation ~ 3h

### Total
Im gesammten wurden rund 30 Stunden in das Projekt investiert.
Nicht eingerechnet sind einige zusätzliche Recherchen und
konsultieren der Dokumentation.

## Abschluss
Der Ganze Source Code und die Dokumention ist auf [Github](https://github.com/Inux/favBB) verfügbar.

### Author
Steve Ineichen, steve.ineichen@stud.hslu.ch

