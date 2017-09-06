import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { TranslatorService } from '../core/translator/translator.service';

import { routes } from './routes';
import { PageModule } from '../views/public/page.module';

@NgModule({
    imports: [
        SharedModule,
        PageModule,
        RouterModule.forRoot(routes, { useHash: true })
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})

export class RoutesModule {
    constructor(tr: TranslatorService) {
        // 调整语言
        tr.use('en');
    }
}
