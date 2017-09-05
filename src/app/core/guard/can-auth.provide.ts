import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable()
export class CanAuthGuardProvide implements CanActivate {

    constructor(private userSer: UserService, private msg: NzMessageService) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return new Observable((observer) => {
            if (this.userSer.isLogin) {
                observer.next(true);
                observer.complete();
                return;
            }
            this.msg.error('您还没有登录');
            observer.next(false);
            observer.complete();
        });
    }
}
