import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FrontendRoutingModule } from './frontend-routing.module';
import { HomeComponent } from './home/home.component';
import { LeaveComponent } from './leave/leave.component';

import { CanLeaveGuardProvide } from './leave/can-leave.provide';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FrontendRoutingModule
    ],
    declarations: [
        HomeComponent,
        LeaveComponent
    ],
    providers: [CanLeaveGuardProvide]
})

export class FrontendModule { }
