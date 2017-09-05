import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { LayoutComponent } from './layout.component';

// import components

const COMPONENTS = [
    LayoutComponent
];

@NgModule({
    imports: [SharedModule], // 公共模块填写在这里
    exports: [
        ...COMPONENTS
    ],
    declarations: [
        ...COMPONENTS
    ],
    providers: [],
})
export class LayoutModule { }
