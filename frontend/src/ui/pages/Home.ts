import m from 'mithril';
import PageTitle from '../components/layout/pagetitle';

const Home: m.Component = {
    view: () => m('.page',
        m(PageTitle, {title: "Home", subtitle: "Wecome to favBB"}),
    )
};

export default Home;
