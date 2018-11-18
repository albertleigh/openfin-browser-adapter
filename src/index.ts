import {desktop} from './desktop';
import {OpenFinMock} from './OpenFinMock';

declare const window:any;

export interface BrowserAdapterConfig {
    silentMode:boolean
}

export class BrowserAdapter{

    desktop:{
        InterApplicationBus:any,
        Notification:any,
        main:(f:()=>any)=>any | null;
    }

    constructor({
        silentMode = false,
    }:BrowserAdapterConfig){

        OpenFinMock.silentMode = silentMode;

        window.__openfin_browser_adapter__ = window.__openfin_browser_adapter__ || {};
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
    }
}