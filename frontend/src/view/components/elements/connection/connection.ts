import m from "mithril";

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
    getTime(date: string): string {
        let toTwoDigits = (value: number) => {
            let retVal = ""+value;
            return ( retVal.length > 1 ? "" : "0" ) + value;
        }

        let d = new Date(date);
        return ""+toTwoDigits(d.getHours())+":"+toTwoDigits(d.getMinutes());
    }

    view({ attrs }: m.CVnode<Attr>) {
        return m("div", { class: "panel-block is-block" },
            [
                m("div", { class: "container columns has-text-centered" },
                    [
                        m("span", { class: "column is-two-fifths" },
                            [
                                m("span",
                                    m("i", { class: "fas fa-map-marker-alt"}),
                                    " "+attrs.from.station.name+" ("+this.getTime(attrs.from.departure)+")"
                                ),
                                m("span",
                                    ", "
                                ),
                                m("span",
                                    m("i", { class: "fas fa-train"}),
                                    " "+attrs.from.station.name+" ("+this.getTime(attrs.from.departure)+")"
                                )
                            ]
                        ),
                        m("span", { class: "column" },
                            m("i", { class: "fas fa-arrow-right"})
                        ),
                        m("span", { class: "column is-two-fifths" },
                            [
                                m("span",
                                    m("i", { class: "fas fa-map-marker-alt"}),
                                    " "+attrs.to.station.name+" ("+this.getTime(attrs.to.arrival)+")"
                                ),
                                m("span",
                                    ", "
                                ),
                                m("span",
                                    m("i", { class: "fas fa-train"}),
                                    " "+attrs.from.station.name+" ("+this.getTime(attrs.from.departure)+")"
                                )
                            ]
                        ),
                    ]
                ),
                m("div", { class: "container columns is-centered has-text-centered" },
                    [
                        m("span", { class: "column is-half no-padding-top" },
                            [
                                m("span",
                                    m("i", { class: "fas fa-map-marker-alt"}),
                                    " "+attrs.from.station.name+" ("+this.getTime(attrs.from.departure)+")"
                                ),
                                m("span",
                                    ", "
                                ),
                                m("span",
                                    m("i", { class: "fas fa-train"}),
                                    " "+attrs.from.station.name+" ("+this.getTime(attrs.from.departure)+")"
                                )
                            ]
                        )
                    ]
                )
            ]
        );
    }
}

export {Connection, Attr};
