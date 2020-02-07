// App entry point

import m from 'mithril';
import Home from './pages/Home';
import About from './pages/About';

// Set up routing by connecting components to routes
m.route(document.body, '/', {
  '/': Home,
  '/about': About
});