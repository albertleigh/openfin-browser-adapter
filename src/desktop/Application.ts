import {BaseApiClass} from './Base';

import windowRegistry from '../helper/windowRegistry';

export class Application extends BaseApiClass{


    static staticMethods:string[]=[
        'getCurrent',
        'wrap',
    ];

    static instanceMethods :string[]=[
        'getWindow',

        'addEventListener',
        'createFromManifest',
        'getGroups',
        'getInfo',
        'getManifest',
        'getParentUuid',
        'getShortcuts',
        'getTrayIconInfo',
        'getZoomLevel',
        'isRunning',
        'registerUser',
        'removeEventListener',
        'removeTrayIcon',
        'restart',
        'run',
        'scheduleRestart',
        'setShortcuts',
        'setTrayIcon',
        'setZoomLevel',
        'terminate',
    ];

    //http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#.getCurrent
    static getCurrent(){
        return new Application();
    }


    //http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#close
    close(force:boolean, callback:Function, errorCallback:Function){
        try{
            window.close();
            if(callback){
                callback();
            }
        }catch (e) {
            if (e){
                errorCallback(e);
            }
        }
    }

    //http://cdn.openfin.co/jsdocs/beta/fin.desktop.Application.html#getChildWindows
    getChildWindows(callback:Function, errorCallback:Function){
        if (callback){
            setTimeout(()=>{
                try{
                    callback(Object.keys(windowRegistry).map(key=>(windowRegistry[key])));
                }catch (e) {
                    if (e){
                        errorCallback(e);
                    }
                }
            },0);
        }
    }

}