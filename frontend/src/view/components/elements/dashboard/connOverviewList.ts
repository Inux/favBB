import m from 'mithril';
import { ConnOverview } from './connOverview';
import Storage from '../../../../controller/services/storageService';

let state = {
    connections: Array<any>()
}

class ConnOverviewList implements m.ClassComponent {
    getListElements() {
        if(state.connections) {
            return state.connections.map((conn) => {
                return m(ConnOverview, conn);
            })
        }
        return;
    }

    oninit() {
        Storage.getConnections()
            .then((value: Array<any>) => state.connections = value)
            .catch(err => console.error(err));
    }

    view() {
        return m("nav", { class: "panel" },
            this.getListElements()
        )
    }
}

export default ConnOverviewList;
