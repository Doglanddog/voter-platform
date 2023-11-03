import {HomePage, VoterData, ExamplePage} from './pages';
import { withNavigationWatcher } from './contexts/navigation';

const routes = [
    {
        path: '/home',
        element: HomePage
    },
    {
        path: '/voterData',
        element: VoterData
    },
    {
        path: '/examplePage',
        element: ExamplePage
    }

];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
