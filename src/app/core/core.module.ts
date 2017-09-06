import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { UserService } from './guard/user.service';
import { CanAuthGuardProvide } from './guard/can-auth.provide';
import { CanAdminGuardProvide } from './guard/can-admin.provide';

import { SettingsService } from './settings/settings.service';

@NgModule({
    imports: [
        SharedModule
    ],
    providers: [
        UserService, CanAuthGuardProvide, SettingsService, CanAdminGuardProvide
    ],
    declarations: [],
    exports: []
})

export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    }
}
