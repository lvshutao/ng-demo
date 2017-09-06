// 通常命名为 xxx-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { LeaveComponent } from './leave/leave.component';
import { CanLeaveGuardProvide } from './leave/can-leave.provide';

const routes: Routes = [
    { path: '', component: HomeComponent },
    // todo 离开确认页示例
    { path: 'leave', component: LeaveComponent, canDeactivate: [CanLeaveGuardProvide] }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [ // 其它组件；需要在 特性模块中再次声明组件，否则会重复

    ]
})
export class FrontendRoutingModule { }

// 子路由是给 ngrouterootmodule 使用的
// 子路由通常搭配 ngfeaturemodule 一起使用
