import {HomePage, VoterData, FederalRaceData, StateRaceData, AsmRaceData, SenRaceData, MemberData} from './pages';
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
        path: '/federalraceData',
        element: FederalRaceData
    },
    {
        path: '/stateraceData',
        element: StateRaceData
    },
    {
        path: '/senraceData',
        element: SenRaceData
    },
    {
        path: '/asmraceData',
        element: AsmRaceData
    },
    {
        path: '/memberData',
        element: MemberData
    },
    
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
