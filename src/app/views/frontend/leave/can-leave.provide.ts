import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LeaveComponent } from './leave.component';
import { NzModalService } from 'ng-zorro-antd';

@Injectable()
export class CanLeaveGuardProvide implements CanDeactivate<LeaveComponent> {

    constructor(private confirmSrv: NzModalService) { }

    canDeactivate(
        component: LeaveComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return new Observable((observer) => {
            this.confirmSrv.confirm({
                title: '确认要放弃修改吗?',
                content: '你确认要离开，放弃已经填写的内容。',
                okText: '离开',
                cancelText: '取消',
                onOk: () => {
                    observer.next(true);
                    observer.complete();
                },
                onCancel: () => {
                    observer.next(false);
                    observer.complete();
                }
            });
        });
    }
}
