import m from "mithril";

interface Attr {
    from: string,
    to: string,
}

class ConnOverview implements m.ClassComponent<Attr> {
    view({ attrs }: m.CVnode<Attr>) {
        return m("div", { class: "panel-block is-block" },
            [
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
                )
            ]
        );
    }
}

export { ConnOverview, Attr };
