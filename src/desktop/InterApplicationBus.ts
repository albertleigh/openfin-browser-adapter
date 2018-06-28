import {BaseApiClass} from './Base';

declare const Reflect:any;

export class InterApplicationBus extends BaseApiClass{
    static staticMethods:string[]=[
        'addUnsubscribeListener',
        'removeSubscribeListener',
        'removeUnsubscribeListener',
        'send',
        'unsubscribe',
    ];

    static instanceMethods:string[]=[];

    static subscribeListeners:Function[]=[];

    static listeners:{[key:string]:Function[]}={};

    static connection:any=null;

    static publish(topic:string, message:string, callback:Function){
        const {connection} = InterApplicationBus;

        if (!connection){
            console.log('no connection');
            return;
        }

        if (!Reflect.has(InterApplicationBus,'connection')){
            setTimeout(()=>{
                InterApplicationBus.publish(topic, message, callback);
            },10);
        }
    }

    static addSubscriberListener(listener:Function){
        if (!InterApplicationBus.connection){
            console.log('no conneciton');
            return;
        }

        InterApplicationBus.subscribeListeners.push(listener);
    }

    static subscribe(...args:any[]){
        if (!InterApplicationBus.connection){
            console.log('no connection');
            return;
        }

        let topic:string;
        let listener;

        if(args.length===4){
            [,,topic,listener] = args;
        }else{
            [,topic,listener] = args;
        }

        if (!Reflect.has(InterApplicationBus.listeners,topic)){
            InterApplicationBus.listeners[topic]=[];
        }

        InterApplicationBus.listeners[topic].push(listener);

        InterApplicationBus.subscribeListeners.forEach(lstnr=>(
           lstnr(null,topic,null)
        ));

    }

}