import m from 'mithril';

const Nav: m.Component = {
  view: () => m('div', {class: "container"},
    m("h1", "Mithril Demo!"),
    m(m.route.Link, {href: '/'}, "Home"),
    m('span', " | "),
    m(m.route.Link, {href: '/about'}, "About")
  )
};

export default Nav;
