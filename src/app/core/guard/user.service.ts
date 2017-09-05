import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    private _isLogin: boolean;
    private _user: string;
    private _role: string[];
    private _token: string;

    get isLogin(): boolean {
        return this._isLogin;
    }

    get token(): string {
        return this._token;
    }

    hasRole(role: string): boolean {
        return this._role.includes(role);
    }

    login(user: string) {
        this._user = user;
        // mock
        if (user === 'admin') {
            this._role = ['admin'];
        } else {
            this._role = ['employee'];
        }
        this._isLogin = true;
        this._token = '123';
        console.log(user, this._isLogin, this._role);
    }

    logout() {
        this._user = '';
        this._isLogin = false;
        this._token = '';
    }
}
