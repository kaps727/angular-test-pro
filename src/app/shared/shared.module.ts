import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {MatInputModule, MatExpansionModule, MatChipsModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule.forChild(),
        MatInputModule,
        MatExpansionModule,
        MatChipsModule
    ],
    declarations: [],
    providers: [],
    exports: [
        TranslateModule,
        MatInputModule,
        MatExpansionModule,
        MatChipsModule
    ]
})
export class SharedModule {
}


