import m from 'mithril';
import Nav from '../navigation/Nav';
import List from '../components/lists/list';

const state = {
  counter: 0
}

const Home: m.Component = {
  view: () => m('.page',
    m(Nav),
    m('h1', "Home"),
    m('p', "This is the home page."),
    m('p', state.counter),
    m('button', { class: "button is-pulled-right", onclick: () => { state.counter++ } }, "Press!"),
    m(List)
  )
};

export default Home;
