import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BackendRoutingModule } from './backend-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ManageComponent } from './manage/manage.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BackendRoutingModule
    ],
    declarations: [
        AdminComponent,
        ManageComponent
    ],
    providers: []
})

export class BackendModule { }
