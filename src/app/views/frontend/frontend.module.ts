import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FrontendRoutingModule } from './frontend-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FrontendRoutingModule
    ],
    declarations: [HomeComponent],
    providers: []
})

export class FrontendModule { }
