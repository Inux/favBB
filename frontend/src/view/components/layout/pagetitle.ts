import m from 'mithril';

interface Attr {
    title: string,
    subtitle: string
}

class PageTitle implements m.ClassComponent<Attr> {
    view({ attrs }: m.CVnode<Attr>) {
        return m("div", { "class": "box" },
            [
                m("h1", { "class": "title" },
                    attrs.title
                ),
                m("h2", { "class": "subtitle" },
                    attrs.subtitle
                )
            ]
        );
    }
}

export default PageTitle;
