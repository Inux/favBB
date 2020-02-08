// App entry point

import m from 'mithril';
import Home from './ui/pages/Home';
import About from './ui/pages/About';

// Set up routing by connecting components to routes
m.route(document.body, '/', {
  '/': Home,
  '/about': About
});