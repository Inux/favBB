import m from "mithril";

interface SalElementAttr {
    name: string;
    isActive: boolean;
}

class SalElement implements m.ClassComponent<SalElementAttr> {
    view({ attrs }: m.CVnode<SalElementAttr>) {
        let isActive = "";
        if (attrs.isActive) isActive = " is-active";
        return m("a", { class: "panel-block" + isActive },
            m("span", { class: "panel-icon" },
                m("i", { class: "fas fa-book", "aria-hidden": "true" })
            ),
            attrs.name
        )
    }
}

export { SalElement, SalElementAttr };
