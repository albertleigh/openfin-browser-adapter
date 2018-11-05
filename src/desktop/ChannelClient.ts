import {BaseApiClass} from './Base';

export class ChannelClient extends BaseApiClass{
    static staticMethods:string[]=[
    ];

    static instanceMethods:string[]=[
        'register',
        'remove',
        'dispatch',
        'setDefaultAction',
        'onError',
        'beforeAction',
        'afterAction',
    ];

}