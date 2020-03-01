import m from 'mithril';
import debounce from '../../../../lib/debounce';
import { SalElement } from './salElement';

interface IdAndNameProvider {
    id: number;
    name: string;
}

interface Attrs {
    title: string;
    placeholder: string;
    searchItems: Array<IdAndNameProvider>;
    onTextChanged: (newText: string) => any;
    onItemChanged: (newItem: string) => any;
}

class SearchableList implements m.ClassComponent<Attrs> {
    text: string = "";
    areResultsHidden: boolean = false;
    onTextChanged: (newText: string) => any = (_: string) => { console.error("onTextChanged not defined!") };
    onItemChanged: (newItem: string) => any = (_: string) => { console.error("onItemClicked not defined!") };

    updateSearch(ev: any) {
        ev.stopPropagation();

        if (this.text !== ev.target.value) {
            this.text = ev.target.value;
            if (this.text.length > 2) {
                debounce(function(this: any) {
                    this.onTextChanged(this.text);
                }, 500).bind(this)();

                this.areResultsHidden = false;
            }
        }
    }

    itemClicked(newItem: string) {
        this.text = newItem;
        this.onItemChanged(this.text);

        this.areResultsHidden = true;
    }

    getSalElements(searchItems: Array<IdAndNameProvider>) {
        let pack = (entry: any) => {
            entry.onItemClicked = this.itemClicked.bind(this);
            return entry;
        }

        return searchItems.map((entry) => {
            return m(SalElement, pack(entry));
        })
    }

    oninit({ attrs }: m.CVnode<Attrs>) {
        this.onTextChanged = attrs.onTextChanged;
        this.onItemChanged = attrs.onItemChanged;
    }

    view({ attrs }: m.CVnode<Attrs>) {
        let hidden = "";
        if (this.areResultsHidden === true) hidden = "is-hidden";

        return m("div", { "class": "column is-half" },
            [
                m("p", { "class": "panel-heading" },
                    attrs.title
                ),
                m("div", { "class": "panel-block" },
                    m("p", { "class": "control has-icons-left" },
                        [
                            m("input", { "class": "input", "type": "text", "placeholder": attrs.placeholder, "value": this.text, oninput: (ev: any) => { this.updateSearch(ev) } }),
                            m("span", { "class": "icon is-left" },
                                m("i", { "class": "fas fa-search", "aria-hidden": "true" })
                            )
                        ]
                    )
                ),
                m("nav", { "class": "panel " + hidden },
                    this.getSalElements(attrs.searchItems)
                )
            ]
        )
    }
}

export { SearchableList, Attrs };
