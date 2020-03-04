import m from "mithril";
import TransportAPI from '../../../../controller/services/transportApiService';
import ConnectionList from "../../elements/connection/connList";

interface Attr {
    from: string,
    to: string,
}

let state = {
    connectionList: {
        connections: []
    }
}

class ConnOverview implements m.ClassComponent<Attr> {
    async updateConnections(from: string, to: string) {
        await TransportAPI.fetchConnections(from, to).then(
            (result) => {
                state.connectionList = result;
                console.log(state);
            }
        );
        m.redraw();
    }

    oninit({ attrs }: m.CVnode<Attr>) {
        this.updateConnections(attrs.from, attrs.to);
    }

    view({ attrs }: m.CVnode<Attr>) {
        return m("div", { class: "column is-half" },
            m("div", { class: "container columns has-text-centered" },
                [
                    m("span", { class: "column is-two-fifths has-text-right" },
                        m("span",
                            m("i", { class: "fas fa-map-marker-alt" }),
                            "  " + attrs.from + "  "
                        )
                    ),
                    m("span", { class: "column is-one-fifth" },
                        m("i", { class: "fas fa-arrow-right" })
                    ),
                    m("span", { class: "column is-two-fifths has-text-left" },
                        m("span",
                            m("i", { class: "fas fa-map-marker-alt" }),
                            "  " + attrs.to + "  "
                        )
                    )
                ]
            ),
            m("div", { class: "container" },
                m(ConnectionList, state.connectionList)
            )
        );
    }
}

export { ConnOverview, Attr };
