// 参考 ng-alain
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';

// todo 应用程序配置

export interface User {
    name: string;
    avatar: string;
    email: string;
    [key: string]: any; // User 可以追加其它属性
}

export interface App {
    name: string;
    description: string;
    [key: string]: any; // App 可以追加其它属性
}

// 自已添加其它属性，才能保存下面的 setLayout 能够设置成功
export interface Layout {
    // 当前主题
    theme: string;
    // 语言
    lang: string;
}

const KEY = 'layout';

@Injectable()
export class SettingsService {
    app: App = {
        name: 'Quick Demo',
        description: 'Just a demo, mock from ng-alain'
    };
    user: User = {
        name: 'Php',
        avatar: './assets/img/zorro.svg',
        email: 'abc@qq.com'
    };

    private _layout: Layout = null;

    get layout(): Layout {
        if (!this._layout) {
            this._layout = Object.assign(<Layout>{
                theme: 'default',
                lang: ''
            }, this.local.get(KEY));
            this.local.set(KEY, this._layout);
        }
        return this._layout;
    }

    setLayout(name: string, value: any): boolean {
        if (typeof this.layout[name] !== 'undefined') {
            this.layout[name] = value;
            this.local.set(KEY, this._layout);
            return true;
        }
        return false;
    }
    constructor(private local: LocalStorageService) { }

}
