import m from 'mithril';
import {Section} from './section';

interface Attrs {
    sections: Array<any>;
}

class SectionList implements m.ClassComponent<Attrs> {
    getListElements(sections: Array<any>) {
        if (sections.length < 1) return;

        //remove first because it's the same as start location
        let trimmed = sections.slice(1, sections.length);
        return trimmed.map((section, index) => {
            const attr = {
                section: section,
                isFirst: (index === 0)
            }
            return m(Section, attr);
        })
    }

    view({ attrs }: m.CVnode<Attrs>) {
        return m("span", { class: "column is-half no-padding-top" },
            this.getListElements(attrs.sections)
        )
    }
}

export default SectionList;
