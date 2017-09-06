import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { CanAuthGuardProvide } from '../../core/guard/can-auth.provide';
import { CanAdminGuardProvide } from '../../core/guard/can-admin.provide';

import { ManageComponent } from './manage/manage.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    {
        // 需要用户登录才能访问
        path: '', component: ManageComponent, canActivate: [CanAuthGuardProvide]
    }, {
        // 需要管理员权限才能访问
        path: 'admin', component: AdminComponent, canActivate: [CanAdminGuardProvide]
    }
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
export class BackendRoutingModule { }

// 子路由是给 ngrouterootmodule 使用的
// 子路由通常搭配 ngfeaturemodule 一起使用
