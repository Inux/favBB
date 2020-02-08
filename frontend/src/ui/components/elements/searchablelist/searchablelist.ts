import m from 'mithril';
import { SalElement, SalElementAttr } from './salElement';

interface SearchableListAttr {
    title: string;
    placeholder: string;
    searchItems: Array<SalElementAttr>;
}

class SearchableList implements m.ClassComponent<SearchableListAttr> {
    getSalElements(searchItems: Array<SalElementAttr>) {
        return searchItems.map((entry) => {
            return m(SalElement, entry);
        })
    }

    view({ attrs }: m.CVnode<SearchableListAttr>) {
        return m("div", { "class": "column is-half" },
            [
                m("p", { "class": "panel-heading" },
                    attrs.title
                ),
                m("div", { "class": "panel-block" },
                    m("p", { "class": "control has-icons-left" },
                        [
                            m("input", { "class": "input", "type": "text", "placeholder": attrs.placeholder }),
                            m("span", { "class": "icon is-left" },
                                m("i", { "class": "fas fa-search", "aria-hidden": "true" })
                            )
                        ]
                    )
                ),
                m("nav", { "class": "panel" },
                    this.getSalElements(attrs.searchItems)
                )
            ]
        )
    }
}

export { SearchableList, SearchableListAttr};
