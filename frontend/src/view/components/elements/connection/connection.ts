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
        return m("div", { class: "panel-block" },
            m("div", { class: "container columns has-text-centered" },
                [
                    m("span", { class: "column" },
                        m("span",
                            m("i", { class: "fas fa-map-marker-alt"}),
                            " "+attrs.from.station.name+" ("+this.getTime(attrs.from.departure)+")"
                        )
                    ),
                    m("span", { class: "column" },
                        m("i", { class: "fas fa-arrow-right"})
                    ),
                    m("span", { class: "column" },
                        m("span",
                            m("i", { class: "fas fa-map-marker-alt"}),
                            " "+attrs.to.station.name+" ("+this.getTime(attrs.to.arrival)+")"
                        )
                    ),
                ]
            )
        );
    }
}

export {Connection, Attr};
