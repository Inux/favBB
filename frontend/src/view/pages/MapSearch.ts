import m from 'mithril';
import PageTitle from '../components/layout/pagetitle';
import LeafletMap from '../components/elements/map/leafletMap'

const MapSearch: m.Component = {
    view: () => m('.page',
        m(PageTitle, { title: "Search Map", subtitle: "Select your start point and the destination" }),
        m(LeafletMap)
    )
};

export default MapSearch;
