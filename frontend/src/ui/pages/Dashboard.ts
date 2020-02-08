import m from 'mithril';
import PageTitle from '../components/layout/pagetitle';

const Dashboard: m.Component = {
    view: () => m('.page',
        m(PageTitle, { title: "Dashboard", subtitle: "Everything in one place" })
    )
};

export default Dashboard;
