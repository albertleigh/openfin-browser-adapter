import {BaseApiClass} from './Base';

import windowRegistry from '../helper/windowRegistry';

declare const window:any;

export interface WindowOptions {
    url?:string,
    name?:string,
}

export interface WindowBounds {
    width:number,
    height:number,
    top:number,
    left:number,
}

export class Window extends BaseApiClass{

    static _name:string = null;

    contentWindow:any;
    name:string;

    static staticMethods:string[]=[
        // 'wrap'
    ];

    static instanceMethods:string[]=[
        'getNativeWindow',
        'getParentApplication',

        'addEventListener',
        'animate',
        'authenticate',
        'blur',
        'bringToFront',
        'disableFrame',
        'enableFrame',
        'executeJavaScript',
        'flash',
        'focus',
        'getAllFrames',
        'getGroup',
        'getInfo',
        'getOptions',
        'getSnapshot',
        'getState',
        'getZoomLevel',
        'hide',
        'isShowing',
        'joinGroup',
        'leaveGroup',
        'maximize',
        'mergeGroups',
        'minimize',
        'moveBy',
        'moveTo',
        'navigate',
        'navigateBack',
        'navigateForward',
        'reload',
        'removeEventListener',
        'resizeBy',
        'resizeTo',
        'restore',
        'setAsForeground',
        'setBounds',
        'setZoomLevel',
        'show',
        'showAt',
        'stopFlashing',
        'stopNavigation',
        'updateOptions',
    ];


    static wrap(appUuid:string, windowName:string){
        if (!windowRegistry[windowName]){
            windowRegistry[windowName] = new Window({name:windowName},()=>{})
        }
        return windowRegistry[windowName];
    }


    static getCurrent(){
        if (this._name){
            return windowRegistry[this._name];
        }else{
            Window._name='current-window-name';
            return new Window({name:Window._name},()=>{});
        }
    }


    constructor(data:WindowOptions, callback?:Function) {
        super();
        let opened;
        if (data && data.url){
            opened = window.open(data.url,'_blank');
        }
        this.contentWindow = opened || window;
        this.name = data.name;
        if (callback){
            setTimeout(callback,0);
        }
        windowRegistry[data.name] = this;
    }

    close(force?:boolean, callback?:Function,errorCallback?:Function){
        try{
            this.contentWindow.close();
            if(callback){
                callback();
            }
        }catch(error){
            if (errorCallback){
                errorCallback(error);
            }
        }
    }

    getParentWindow(){
        if (window.location.pathname==='/'){
            return this;
        }
        return null;
    }

    getBounds(success:(bounds:WindowBounds)=>void){

        let result:any = {};

        if (success){
            result.left = this.contentWindow.screenX;
            result.top = this.contentWindow.screenY;
            result.width = this.contentWindow.outerWidth;
            result.height = this.contentWindow.outerHeight;

            success(result);
        }
    }

}