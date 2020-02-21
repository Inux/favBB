import m from 'mithril';
import {Connection} from './connection';

interface Attrs {
    connections: Array<any>;
}

class ConnectionList implements m.ClassComponent<Attrs> {
    getListElements(connections: Array<any>) {
        return connections.map((conn) => {
            return m(Connection, conn);
        })
    }

    view({ attrs }: m.CVnode<Attrs>) {
        return m("nav", { class: "panel" },
            this.getListElements(attrs.connections)
        )
    }
}

export default ConnectionList;
