// App entry point

import m from 'mithril';
import Dashboard from './view/pages/Dashboard';
import Connections from './view/pages/Connections';
import Serach from './view/pages/Search';
import MapSearch from './view/pages/MapSearch';

const pages = [
    {
        id: "dashboard",
        name: "Dashboard"
    },
    {
        id: "connections",
        name: "Connections"
    },
    {
        id: "search",
        name: "Search"
    },
    {
        id: "mapsearch",
        name: "Map Search"
    }
];

for(let page of pages) {
    const pageElement = document.getElementById("page-"+page.id+"-link") as Element;
    m.mount(pageElement, {view: () => {return m(m.route.Link, {class: "navbar-item", href: '/'+page.id }, page.name)}});
}

//container where the pages are rendered (header and footer are common)
const appDiv = document.getElementById("app-div");

// Set up routing by connecting components to routes
m.route(appDiv as Element, '/', {
  '/': Dashboard,
  '/dashboard': Dashboard,
  '/connections': Connections,
  '/search': Serach,
  '/mapsearch': MapSearch
});
