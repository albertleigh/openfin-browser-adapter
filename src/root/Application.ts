import {BaseApiClass} from './Base';

import windowRegistry from '../helper/windowRegistry';

export class Application extends BaseApiClass{


    static staticMethods:string[]=[
        // 'getCurrent',
        'start',
        'startFromManifest',
        'wrap',
    ];

    static staticSyncMethods:string[]=[
        'getCurrentSync',
        'wrapSync',
    ];

    static instanceMethods :string[]=[
        'addListener',
        // 'getChildWindows',
        'getGroups',
        'getInfo',
        'getManifest',
        'getParentUuid',
        'getShortcuts',
        'getTrayIconInfo',
        'getWindow',
        'getZoomLevel',
        'isRunning',
        'on',
        'once',
        'prependListener',
        'prependOnceListener',
        'quit',
        'registerUser',
        'removeAllListeners',
        'removeListener',
        'removeTrayIcon',
        'restart',
        'run',
        'scheduleRestart',
        'sendApplicationLog',
        'setAppLogUsername',
        'setShortcuts',
        'setTrayIcon',
        'setZoomLevel',
        'terminate',
    ];

    static async getCurrent():Promise<Application>{
        return new Application();
    }

    static getCurrentSync(){
        return new Application();
    }


    async terminate(force:boolean){
        return new Promise<void>((resolve)=>{
            window.close();
            resolve();
        })
    }

    async getChildWindows(){
        return new Promise<any>((resolve)=>{
            resolve(Object.keys(windowRegistry).map(key=>(windowRegistry[key])))
        })
    }

}