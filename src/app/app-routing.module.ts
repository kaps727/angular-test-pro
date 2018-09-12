import {Routes} from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'child1', pathMatch: 'full' },
    { path: 'child1', loadChildren: '@app/parent/child1/child1.module#Child1Module'}
];

