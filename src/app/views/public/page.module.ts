import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [SharedModule]
})
export class PageModule { }
