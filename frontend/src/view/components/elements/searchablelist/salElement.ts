import m from "mithril";

interface SalElementAttr {
    name: string;
    isActive: boolean;
    onItemClicked: (ev: any) => any;
}

class SalElement implements m.ClassComponent<SalElementAttr> {
    view({ attrs }: m.CVnode<SalElementAttr>) {
        let isActive = "";
        if (attrs.isActive) isActive = " is-active";
        return m("a",
            {
                class: "panel-block" + isActive,
                onclick: (ev: any) => {
                    ev.stopPropagation();
                    attrs.onItemClicked(ev.target.innerText);
                }
            },
            m("span", { class: "panel-icon" },
                m("i", { class: "fas fa-book", "aria-hidden": "true" })
            ),
            attrs.name
        )
    }
}

export { SalElement, SalElementAttr };
