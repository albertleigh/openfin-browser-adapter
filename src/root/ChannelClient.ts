import {BaseApiClass} from './Base';

export class ChannelClient extends BaseApiClass{

    static staticMethods:string[]=[
    ];

    static staticSyncMethods:string[]=[
    ];

    static instanceMethods:string[]=[
        'dispatch',
    ];

    static instanceSyncMethods:string[]=[
        'disconnect',
        'register',
        'remove',
        'setDefaultAction',
        'onError',
        'beforeAction',
        'afterAction',
    ];

}