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
        'create',
        // 'getCurrent',
        'wrap',
    ];

    static staticSyncMethods:string[]=[
        'getCurrentSync',
        'wrapSync'
    ];

    static instanceMethods:string[]=[

        // 'getParentApplication',

        'addListener',
        'animate',
        'authenticate',
        'blur',
        'bringToFront',
        // 'close',
        'disableUserMovement',
        'enableUserMovement',
        'executeJavaScript',
        'flash',
        'focus',
        'getAllFrames',
        // 'getBounds',
        'getGroup',
        'getInfo',
        'getNativeId',
        'getOptions',
        'getParentApplication',
        // 'getParentWindow',
        'getState',
        'getWebWindow',
        'getZoomLevel',
        'hide',
        'isMainWindow',
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
        'on',
        'once',
        'prependListener',
        'prependOnceListener',
        'reload',
        'removeAllListeners',
        'removeListener',
        'resizeBy',
        'resizeTo',
        'restore',
        'setAsForeground',
        'setBounds',
        'setZoomLevel',
        'show',
        'showAt',
        'showDeveloperTools',
        'stopFlashing',
        'stopNavigation',
        'updateOptions',
    ];


    static async getCurrent():Promise<Window>{
        if (this._name){
            return windowRegistry[this._name];
        }else{
            Window._name='current-window-name';
            return new Window({name:Window._name});
        }
    }


    static getCurrentSync(){
        if (this._name){
            return windowRegistry[this._name];
        }else{
            Window._name='current-window-name';
            return new Window({name:Window._name});
        }
    }


    constructor(data:WindowOptions) {
        super();
        let opened;
        if (data && data.url){
            opened = window.open(data.url,'_blank');
        }
        this.contentWindow = opened || window;
        this.name = data.name;
        windowRegistry[data.name] = this;
    }

    async close(force?:boolean):Promise<void>{
        this.contentWindow.close();
        return;
    }

    async getParentWindow():Promise<Window>{
        if (window.location.pathname==='/'){
            return this;
        }
    }

    async getBounds():Promise<WindowBounds>{

        let result:any = {};
        result.left = this.contentWindow.screenX;
        result.top = this.contentWindow.screenY;
        result.width = this.contentWindow.outerWidth;
        result.height = this.contentWindow.outerHeight;

        return result;
    }

}