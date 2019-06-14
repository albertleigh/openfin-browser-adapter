import {BaseApiClass} from './Base';

export class GlobalHotkey extends BaseApiClass{

    static staticMethods:string[]=[
        'isRegistered',
        'register',
        'unregister',
        'unregisterAll',
    ];

    static instanceMethods :string[]=[
    ];

}