import {BaseApiClass} from './Base';

export class Frame extends BaseApiClass{


    static staticMethods:string[]=[
        'getCurrent',
        'wrap',
    ];

    static staticSyncMethods:string[]=[
        'getCurrentSync',
        'wrapSync',
    ];

    static instanceMethods :string[]=[
        'addListener',
        'getInfo',
        'getParentWindow',
        'on',
        'once',
        'prependListener',
        'prependOnceListener',
        'removeAllListeners',
        'removeListener',
    ];

}