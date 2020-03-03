import m from 'mithril';
import PageTitle from '../components/layout/pagetitle';
import ConnOverviewList from '../components/elements/dashboard/connOverviewList';

const Dashboard: m.Component = {
    view: () => m('.page',
        m(PageTitle, { title: "Dashboard", subtitle: "Everything in one place" }),
        m("div", { class: "box" },
            m(ConnOverviewList)
        )
    )
};

export default Dashboard;
