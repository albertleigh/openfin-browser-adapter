import {BaseApiClass} from './Base';
import {Channel} from "./Channel";
import {OpenFinMock} from '../OpenFinMock'

declare const Reflect:any;

type SubscribeListener = (uuid:string,topic:string,name:string)=>void;
type TopicSubscribeListener = (message:string,uuid:string,name:string)=>void;

export class InterApplicationBus extends BaseApiClass{
    static staticMethods:string[]=[
        'addUnsubscribeListener',
        'removeSubscribeListener',
        'removeUnsubscribeListener',
        'send',
        'unsubscribe',
    ];

    static instanceMethods:string[]=[];

    static subscribeListeners:SubscribeListener[]=[];

    static listeners:{[key:string]:TopicSubscribeListener[]}={};

    // static connection:any=null;

    static Channel = OpenFinMock.generateMethods('InterApplicationBus.Channel',Channel);

    static publish(topic:string, message:string, callback?:Function,errCallback?:Function){

        if(InterApplicationBus.listeners[topic]){
            InterApplicationBus.listeners[topic].forEach((topicCb:TopicSubscribeListener)=>{
                topicCb(message,'','')
            })
        }
        InterApplicationBus.subscribeListeners.forEach((cb:SubscribeListener)=>{
            cb('',topic,'')
        });
        callback();

    }

    static addSubscribeListener(listener:SubscribeListener){
        InterApplicationBus.subscribeListeners.push(listener);
    }

    static subscribe(
        senderUuid:string,name:string,topic:string,
        listener:TopicSubscribeListener,
        callback?:Function,errCallback?:Function
    ){

        if (!InterApplicationBus.listeners[topic]){
            InterApplicationBus.listeners[topic]=[];
        }

        InterApplicationBus.listeners[topic].push(listener);

        callback();

    }

}