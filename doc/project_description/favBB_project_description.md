# favBB

FavBB ist ein Tool welches die favorisierten Verbindungen eines Nutzers dynamisch anhand der [Transport API](https://transport.opendata.ch/) anzeigt.
Die favorisierten Verbindungen können angelegt, editiert und gelöscht werden. Jeder Nutzer inklusive der Einstellungen werden in einer Datenbank erfasst.

## Requirements

### Public

* Landing Page
  * Was ist FavBB
* User Erstellen / Login

### Privat

* Verbindungen erfassen, editieren & löschen
* Dashboard
  * Zeigt die nächsten Verbindungen an (Abfahrtsort, Dauer & Verkehrsmittel)
* Optional: Verkehrsmittel Auswahl
* Optional: Anzahl Verbindungen die angezeigt werden sollen
* Optional: GPS basierte Anzeige

## Team

* S. Ineichen
* D. Schafer

## Technolgy

* Persistez
  * Postgres Datebank
* REST API
  * PostgREST
* UI
  * Mithril.js (JavaScript Framework)
  * Bulma (CSS Framework)
