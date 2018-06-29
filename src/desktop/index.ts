import {Application} from './Application'
import {InterApplicationBus} from './InterApplicationBus'
import {Notification} from './Notification'
import {System} from './System'
import {Window} from './Window'
import {BaseApiClass} from './Base'

export type BaseApiDict={[key:string]:BaseApiClass};

export const desktop:BaseApiDict={
    Application:Application,
    InterApplicationBus:InterApplicationBus,
    Notification:Notification,
    System:System,
    Window:Window,
};
