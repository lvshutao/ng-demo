import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

// import { AngularWebStorageModule } from 'angular-web-storage';
// import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// import { TranslateModule } from "@ngx-translate/core";
// import { ChartsModule } from 'ng2-charts/ng2-charts';
// other service, pipe, directive

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        // AngularWebStorageModule,
        NgZorroAntdModule.forRoot({ extraFontName: 'anticon', extraFontUrl: './assets/fonts/iconfont' })
        // PerfectScrollbarModule,
        // ChartsModule
    ],
    providers: [], // any service
    declarations: [], // directives, pipes
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        RouterModule,
        // AngularWebStorageModule,
        // PerfectScrollbarModule,
        // TranslateModule,
        // ChartsModule,
        // other directives, pipes
    ]
})
// 将此模块添加到 app.module.ts @NgModule imports 中
export class SharedModule {
}
