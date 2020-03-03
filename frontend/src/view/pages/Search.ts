import m from 'mithril';
import PageTitle from '../components/layout/pagetitle';
import TransportAPI from '../../controller/services/transportApiService';
import { SearchableList } from '../components/elements/searchablelist/searchablelist';
import ConnectionList from '../components/elements/connection/connList';
import Storage from '../../controller/services/storageService';

const state = {
    search: {
        from: "Luzern",
        to: "Basel"
    },
    fromSearch: {
        title: "From:",
        placeholder: "Where to you start?",
        searchItems: [],
        onTextChanged: onFromTextUpdated,
        onItemChanged: onFromItemUpdated
    },
    toSearch: {
        title: "To:",
        placeholder: "Where you arrive?",
        searchItems: [],
        onTextChanged: onToTextUpdated,
        onItemChanged: onToItemUpdated
    },
    connectionList: {
        connections: []
    }
}

function onFromTextUpdated(newText: string) {
    updateSearchItems(state.fromSearch.searchItems, newText);
    console.log(`New From Text: ${newText}`);
}

function onFromItemUpdated(newItem: string) {
    state.search.from = newItem;
    console.log(`New From Item: ${newItem}`);
}

function onToTextUpdated(newText: string) {
    updateSearchItems(state.toSearch.searchItems, newText);
    console.log(`New To: ${newText}`);
    updateConnections();
}

function onToItemUpdated(newItem: string) {
    state.search.to = newItem;
    console.log(`New To Item: ${newItem}`);
    updateConnections();
}

async function updateConnections() {
    if(state.search.from.length < 3 || state.search.to.length < 3) {
        return;
    }

    await TransportAPI.fetchConnections(state.search.from, state.search.to).then(
        (result) => {
            state.connectionList = result;
        }
    );
}

async function updateSearchItems(searchItems: Array<any>, query: string) {
    await TransportAPI.fetchLocations(query).then(
        (result) => {
            searchItems.length = 0;
            for(let station of result.stations) {
                station.isActive = false;
                searchItems.push(station);
            }
        }
    );
}

function onSaveConnection() {
    console.log(`Save: ${state.search.from} -> ${state.search.to}`)
    Storage.addConnection({id: 0, from: state.search.from, to: state.search.to});
}

const Search: m.Component = {
    view: () => m('.page',
        m(PageTitle, { title: "Search", subtitle: "Simply search your connection" }),
        m("div", { class: "box" },
            m("div", { class: "columns" },
                [
                    m(SearchableList, state.fromSearch),
                    m(SearchableList, state.toSearch),
                ]
            )
        ),
        m("div", { class: "box"},
            m(ConnectionList, state.connectionList)
        ),
        m("div", { class: "box is-centered" },
            m("button", { class: "button is-success is-large is-fullwidth is-light", onclick: onSaveConnection }, "Save")
        )
    )
};

export default Search;

updateConnections();
