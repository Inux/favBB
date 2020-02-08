import m from 'mithril';
import PageTitle from '../components/layout/pagetitle';

const Connections: m.Component = {
    view: () => m('.page',
        m(PageTitle, { title: "Connections", subtitle: "Gives you an overview about the connections" })
    )
};

export default Connections;
