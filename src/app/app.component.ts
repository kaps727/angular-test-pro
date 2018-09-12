import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor( @Inject(TranslateService) private translate) {

        translate.addLangs(['EN', 'RU']);
        translate.setDefaultLang('EN');
       const browserLang = translate.getBrowserLang();
       translate.use(browserLang.match(/EN|RU/) ? browserLang : 'EN');
    }

    setTranslation(isoCode) {
        this.translate.use(isoCode);
    }

}
