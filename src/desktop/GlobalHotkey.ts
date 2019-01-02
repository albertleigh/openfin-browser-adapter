import {BaseApiClass} from './Base';

export class GlobalHotkey extends BaseApiClass{

    static staticMethods:string[]=[
        'addEventListener',
        'isRegistered',
        'register',
        'removeEventListener',
        'unregister',
        'unregisterAll',
    ];

    static instanceMethods :string[]=[
    ];

}