import * as io from 'socket.io-client';

import {desktop} from './desktop';
import {debug as log} from './helper/log';
import {OpenFinMock} from './OpenFinMock';

declare const window:any;
declare const Reflect:any;

export interface BrowserAdapterConfig {
    userSocket:boolean,
    socketUrl?:string,
}

const connect = (ns:any, connection:any)=>{
    log('Connected to websocket echo server.', connection.id);

    ns.InterApplicationBus.connection = connection;

    ns.InterApplicationBus.connection.on('message',(msg:any) => {
        const {topic, message} = msg;

        log(`Received message on topic "${topic}":`,message);

        if (topic === 'onNotificationMessage' && window.onNotificationMessage){
            window.onNotificationMessage(message);
            return;
        }

        if (Reflect.has(ns.InterApplicationBus.listeners,topic)){
            ns.InterApplicationBus.listeners[topic].forEach((listener:Function)=>{
                listener(message);
            });
        }
    });
    ns.Notification.connection = connection;
};

export class BrowserAdapter{

    desktop:{
        InterApplicationBus:any,
        Notification:any,
        main:(f:()=>any)=>any | null;
    }

    constructor({
        userSocket = true, socketUrl = '//socket-io-echo-server.herokuapp.com'
                }:BrowserAdapterConfig){

        window.__openfin_browser_adapter__ = window.__openfin_browser_adapter__ || {};
        const { opener } = window;
        const result:any = {};
        const classes = Object.keys(desktop).reduce((acc,key)=>{
            const Klass:any = desktop[key];
            return {
                ...acc,[Klass.name]:OpenFinMock.generateMethods(key,Klass),
            };
        },{});

        result.main = (f:any) => {
            if (typeof f === 'function'){
                return f();
            }
            return null;
        };

        this.desktop = {...result,...classes};

        if (!userSocket){
            return;
        }

        let connection:any;

        if (!opener){
            connection = io(socketUrl);
            window.__openfin_browser_adapter__.iab = connection;
            connection.on('connect',()=> {
                connect(this.desktop,connection);
            });
        }else{
            connection = opener.__openfin_browser_adapter__.iab;
            connect(this.desktop,connection);
        }
    }
}