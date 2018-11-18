import {BaseApiClass} from './Base';

export class ChannelProvider extends BaseApiClass{
    static staticMethods:string[]=[
    ];

    static instanceMethods:string[]=[
        'register',
        'publish',
        'remove',
        'dispatch',
        'setDefaultAction',
        'onError',
        'beforeAction',
        'afterAction',
    ];

}