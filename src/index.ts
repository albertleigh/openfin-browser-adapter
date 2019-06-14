import {desktop} from './root';
import {OpenFinMockV2} from './OpenFinMockV2';

declare const window:any;

export interface BrowserAdapterConfig {
    finUuid:string,
    silentMode:boolean
}

export class BrowserAdapter{

    Application:any;
    ExternalApplication:any;
    Frame:any;
    Notification:any;
    Window:any;
    Clipboard:any;
    GlobalHotkey:any;
    InterApplicationBus:any;
    System:any;
    main:(f:()=>any)=>any | null;

    constructor({
        finUuid,
        silentMode = false,
    }:BrowserAdapterConfig){

        window.name=finUuid;

        OpenFinMockV2.silentMode = silentMode;

        window.__openfin_browser_adapter__ = window.__openfin_browser_adapter__ || {};
        const result:any = {};
        const classes = Object.keys(desktop).reduce((acc,key)=>{
            const Klass:any = desktop[key];
            return {
                ...acc,[key]:OpenFinMockV2.generateMethods(key,Klass),
            };
        },{});

        result.main = (f:any) => {
            if (typeof f === 'function'){
                return f();
            }
            return null;
        };

        for (let key in desktop){
            // @ts-ignore
            this[key] = desktop[key];
        }

        for (let key in result){
            // @ts-ignore
            this[key] = result[key];
        }
    }
}