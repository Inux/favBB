import m from "mithril";
import ConnHelper from "./connHelper";

interface Attr {
    section: {
        departure: {
            station: {
                name: string
            },
            departure: string,
            platform: string
        };
        arrival: {
            station: {
                name: string
            },
            arrival: string,
            platform: string
        }
    },
    isFirst: boolean
}

class Section implements m.ClassComponent<Attr> {
    //fa-caret-right
    view({ attrs }: m.CVnode<Attr>) {
        let section = attrs.section;

        let sectionElement = [
            m("span", { class: "is-size-7"},
                m("i", { class: "fas fa-map-marker-alt" }),
                "  " + section.departure.station.name + "  "
            ),
            m("span", { class: "is-size-7"},
                m("i", { class: "fas fa-clock" }),
                "  " + ConnHelper.getTime(section.departure.departure) + "  "
            ),
            m("span", { class: "is-size-7"},
                m("i", { class: "fas" + ConnHelper.getPlatformIcon(section.arrival.platform) }),
                ConnHelper.getPlatformText(section.arrival.platform)
            )

        ];

        if (!attrs.isFirst) {
            let caretRight = m("span", m("i", { class: "fas fa-caret-right" }), "  ");
            sectionElement.unshift(caretRight);
        }

        return m("span",
            sectionElement
        );
    }
}

export { Section, Attr };
