import { Routes } from '@angular/router';

import { AboutComponent, AboutContainerComponent, AboutItemComponent } from './about.component';
import { HomeComponent } from './home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'about', component: AboutComponent,
        children: [
            { path: '', component: AboutContainerComponent },
            { path: 'item/:id', component: AboutItemComponent }
        ]
    }
];