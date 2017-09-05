import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

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

export class RoutesModule { }
