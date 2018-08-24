import {BaseApiClass} from './Base';

export interface NotificationOptions {
    url?:string,
    message?:string,
}

export class Notification extends BaseApiClass{

    static staticMethods:string[]=[
        'getCurrent',
    ];

    static instanceMethods:string[]=[
        'close',
        'sendMessage',
        'sendMessageToApplication',
    ];

    static connection:any=null;


    constructor(options:NotificationOptions,callback?:Function) {
        super();
        if(options && options.url){
            window.open(options.url,'_blank');
        }

        setTimeout(()=>{
            if (Notification.connection){
                Notification.connection.send({topic:'onNotificationMessage',message:options.message});
            }
        },500);

        if (callback){
            setTimeout(callback,0);
        }
    }
}