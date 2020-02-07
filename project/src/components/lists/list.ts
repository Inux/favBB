import m from 'mithril';
import {ListElement} from './listelement';

const data = [
    {
        id: 1,
        name: "One"
    },
    {
        id: 2,
        name: "Two"
    },
    {
        id: 3,
        name: "Three"
    },
    {
        id: 4,
        name: "Four"
    },
    {
        id: 5,
        name: "Five"
    }
]


class List implements m.Component {
    getChildren() {
        return data.map((entry) => {
            console.log(entry);
            return m(ListElement, entry);
        })
    }

    view() {
        return this.getChildren();
    }
}

export default List;
