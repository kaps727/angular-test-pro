import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Child1Component} from '@app/parent/child1/child1.component';

const routes: Routes = [
    {path: '', redirectTo: 'child2', pathMatch: 'full'},
    {
        path: ':subCat', component: Child1Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Child1RoutingModule { }
