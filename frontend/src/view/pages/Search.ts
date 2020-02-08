import m from 'mithril';
import PageTitle from '../components/layout/pagetitle';
import TransportAPI from '../../api/services/transportAPI';
import { SearchableList } from '../components/elements/searchablelist/searchablelist';

const result = TransportAPI.fetchLocations("Basel").then((result) => { console.log(result) });
console.log(result);

const state = {
    fromSearch: {
        title: "From:",
        placeholder: "Where to you start?",
        searchItems: [
            {
                name: "Basel",
                isActive: false
            }
        ]
    },
    toSearch: {
        title: "To:",
        placeholder: "Where you arrive?",
        searchItems: [
            {
                name: "Luzern",
                isActive: false
            }
        ]
    }
}

const Search: m.Component = {
    view: () => m('.page',
        m(PageTitle, { title: "Search", subtitle: "Simply search your connection" }),
        m("div", { class: "box" },
            m("div", { class: "columns" },
                [
                    m(SearchableList, state.fromSearch),
                    m(SearchableList, state.toSearch)
                ]
            )
        )
    )
};

export default Search;
