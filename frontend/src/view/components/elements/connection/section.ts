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
        let caretRight = {};
        if(!attrs.isFirst) {
            caretRight = m("i", {class: "fas fa-caret-right"});
        }
        return m("span",
            [
                caretRight,
                "  ",
                m("i", { class: "fas fa-map-marker-alt" }),
                "  "+section.departure.station.name+"  ",
                m("i", { class: "fas fa-clock" }),
                "  " + ConnHelper.getTime(section.arrival.arrival) + "  ",
                m("i", { class: "fas" + ConnHelper.getPlatformIcon(section.arrival.platform) }),
                ConnHelper.getPlatformText(section.arrival.platform)
            ]
        );
    }
}

export {Section, Attr};
