import m from "mithril";

interface Attr {
    id: number;
    name: string;
}

class ListElement implements m.ClassComponent<Attr> {
    view({attrs}: m.CVnode<Attr>) {
        console.log(attrs);
        return m("div", attrs.id + "=" + attrs.name);
    }
}

export {ListElement, Attr};
