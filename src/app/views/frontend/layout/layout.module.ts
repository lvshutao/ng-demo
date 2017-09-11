import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { LayoutComponent } from './layout.component';

// import components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const COMPONENTS = [
    LayoutComponent, HeaderComponent, FooterComponent
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
