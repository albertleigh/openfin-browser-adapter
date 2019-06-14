import {BaseApiClass} from './Base';

export class ChannelProvider extends BaseApiClass{

    static staticMethods:string[]=[
    ];

    static staticSyncMethods:string[]=[
    ];


    static instanceMethods:string[]=[
        'dispatch',
    ];

    static instanceSyncMethods:string[]=[
        'destroy',
        'publish',
        'register',
        'remove',
        'setDefaultAction',
        'onError',
        'beforeAction',
        'afterAction',
    ];

}