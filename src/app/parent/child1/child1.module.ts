import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1RoutingModule } from '@app/parent/child1/child1-routing.module';
import { Child2Component } from './child2/child2.component';
import { Child1Component } from '@app/parent/child1/child1.component';
import { TestComponentComponent } from '@app/shared/components/test-component/test-component.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        Child1RoutingModule
    ],
    providers: [],
    declarations: [Child1Component , Child2Component, TestComponentComponent],
    exports: []
})
export class Child1Module {
}
