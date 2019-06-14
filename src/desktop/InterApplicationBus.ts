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

    static async publish(topic:string, message:string){

        if(InterApplicationBus.listeners[topic]){
            InterApplicationBus.listeners[topic].forEach((topicCb:TopicSubscribeListener)=>{
                topicCb(message,'','')
            })
        }
        InterApplicationBus.subscribeListeners.forEach((cb:SubscribeListener)=>{
            cb('',topic,'')
        });

        return;

    }

    static async addSubscribeListener(listener:SubscribeListener){
        InterApplicationBus.subscribeListeners.push(listener);
        return;
    }

    static async subscribe(
        senderUuid:string,name:string,topic:string,
        listener:TopicSubscribeListener
    ){

        if (!InterApplicationBus.listeners[topic]){
            InterApplicationBus.listeners[topic]=[];
        }

        InterApplicationBus.listeners[topic].push(listener);
        return;
    }

}