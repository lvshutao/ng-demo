import { LayoutComponent } from '../views/frontend/layout/layout.component';
import { LayoutComponent as AdminLayoutComponent } from '../views/backend/layout/layout.component';

import { RegisterComponent } from '../views/public/register/register.component';

export const routes = [
    {
        path: '',
        component: LayoutComponent, // 默认使用
        children: [
            { path: '', redirectTo: 'f', pathMatch: 'full' },
            { path: 'f', loadChildren: '../views/frontend/frontend.module#FrontendModule' },
            // ... 其它模块
        ]
    },
    {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [
            { path: '', loadChildren: '../views/backend/backend.module#BackendModule' }
        ]
    },
    {
        path: 'register', component: RegisterComponent
    },
    { path: '**', redirectTo: 'f' }
];
// todo 使用 ngrouterootmodule 来创建根路由模块
