import m from "mithril";
import SectionList from "../../elements/connection/sectionList";
import ConnHelper from "./connHelper";

interface Attr {
    from: {
        station: {
            name: string
        },
        departure: string,
        platform: string,
    };
    to: {
        station: {
            name: string
        },
        arrival: string,
        platform: string,
    };
    sections: []
}

class Connection implements m.ClassComponent<Attr> {
    view({ attrs }: m.CVnode<Attr>) {
        return m("div", { class: "panel-block is-block" },
            [
                m("div", { class: "container columns has-text-centered" },
                    [
                        m("span", { class: "column is-two-fifths has-text-right" },
                            [
                                m("span",
                                    m("i", { class: "fas fa-map-marker-alt" }),
                                    "  " + attrs.from.station.name + "  "
                                ),
                                m("span",
                                    m("i", { class: "fas fa-clock" }),
                                    "  " + ConnHelper.getTime(attrs.from.departure) + "  "
                                ),
                                m("span",
                                    m("i", { class: "fas" + ConnHelper.getPlatformIcon(attrs.from.platform) }),
                                    ConnHelper.getPlatformText(attrs.from.platform)
                                )
                            ]
                        ),
                        m("span", { class: "column is-one-fifth" },
                            m("i", { class: "fas fa-arrow-right" })
                        ),
                        m("span", { class: "column is-two-fifths has-text-left" },
                            [
                                m("span",
                                    m("i", { class: "fas fa-map-marker-alt" }),
                                    "  " + attrs.to.station.name + "  "
                                ),
                                m("span",
                                    m("i", { class: "fas fa-clock" }),
                                    "  " + ConnHelper.getTime(attrs.to.arrival) + "  "
                                ),
                                m("span",
                                    m("i", { class: "fas" + ConnHelper.getPlatformIcon(attrs.to.platform) }),
                                    ConnHelper.getPlatformText(attrs.to.platform)
                                )
                            ]
                        )
                    ]
                ),
                m("div", { class: "container columns is-centered has-text-centered" },
                    m(SectionList, attrs)
                )
            ]
        );
    }
}

export { Connection, Attr };
