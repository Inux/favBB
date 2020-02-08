import m from 'mithril';
import PageTitle from '../components/layout/pagetitle';

const Map: m.Component = {
    view: () => m('.page',
        m(PageTitle, { title: "Search Map", subtitle: "Select your start point and the destination" })
    )
};

export default Map;
