import {provideRoutes, ROUTER_CONFIGURATION} from '@angular/router';
import {SearchComponent} from './components/search/search.component';
import {AboutComponent} from './components/about/about.component';

const routes: ROUTER_CONFIGURATION = [
    {path:'', component:SearchComponent},
    {path:'about', component:AboutComponent}
];

export const appRouterProviders = [
    provideRoutes(routes);
];