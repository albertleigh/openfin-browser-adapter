import {BaseApiClass} from './Base';

export class ExternalApplication extends BaseApiClass{


    static staticMethods:string[]=[
        'wrap',
    ];

    static staticSyncMethods:string[]=[
        'wrapSync',
    ];

    static instanceMethods :string[]=[
        'addListener',
        'getInfo',
        'on',
        'once',
        'prependListener',
        'prependOnceListener',
        'quit',
        'registerUser',
        'removeAllListeners',
        'removeListener',
    ];

}