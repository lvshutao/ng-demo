import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslatorService } from '../translator/translator.service';
import { SettingsService } from '../settings/settings.service';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

/**
 * 用于应用启动时，获取应用所需要的基础数据等
 */
@Injectable()
export class StartupService {

    constructor(
        private ts: TranslatorService,
        private settingServ: SettingsService,
        private httpClient: HttpClient,
        private injector: Injector
    ) { }

    load(): Promise<any> {
        // only works with promises
        // https://github.com/angular/angular/issues/15088
        return this.httpClient
            .get('./asserts/app-data.json')
            .toPromise()
            .then((res: any) => {
                // just only injector way if you need navigate to login page.
                // this.injector.get(Router).navigate([ '/login' ]);

                this.settingServ.setApp(res.app);
                this.settingServ.setUser(res.user);
                // 调整语言
                this.ts.use('en');
            })
            .catch((err: any) => {
                console.log('startup.service:preload data failed.');
                return Promise.resolve(null);
            });
    }
}
