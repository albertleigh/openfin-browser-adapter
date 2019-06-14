import {root} from './root';
import {desktop} from './desktop';
import {OpenFinMock} from './OpenFinMock';
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

    desktop:{
        Application:any,
        GlobalHotkey:any,
        InterApplicationBus:any,
        Notification:any,
        System:any,
        Window:any,
    }

    main:(f:()=>any)=>any | null;

    constructor({
        finUuid,
        silentMode = false,
    }:BrowserAdapterConfig){

        window.name=finUuid;

        OpenFinMock.silentMode = silentMode;

        OpenFinMockV2.silentMode = silentMode;

        window.__openfin_browser_adapter__ = window.__openfin_browser_adapter__ || {};
        const result:any = {};

        const classes = Object.keys(desktop).reduce((acc, key)=>{
            const Klass:any = desktop[key];
            return {
                ...acc,[key]:OpenFinMock.generateMethods(key,Klass),
            };
        },{});


        this.desktop = {...result,...classes};

        const classesV2 = Object.keys(root).reduce((acc, key)=>{
            const Klass:any = root[key];
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

        for (let key in classesV2){
            // @ts-ignore
            this[key] = root[key];
        }

        for (let key in result){
            // @ts-ignore
            this[key] = result[key];
        }

    }
}