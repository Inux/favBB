import m from 'mithril';
import Nav from '../navigation/Nav';

const App: m.Component = {
  view: () => m('.page',
    m(Nav),
    m('h1', "About"),
    m('p', "This is the about page.")
  )
};

export default App;
