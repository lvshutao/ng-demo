import { Injectable } from '@angular/core';

// todo 应用程序配置

export interface User {
    name: string;
    avatar: string;
    email: string;
}

export interface App {
    name: string;
    description: string;
}

export interface Layout {
    // 当前主题
    theme: '';
    // 语言
    lang: string;
}

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
    constructor() { }

}
