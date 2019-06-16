import {Application} from './Application'
import {ExternalApplication} from './ExternalApplication'
import {Frame} from './Frame'
import {Notification} from './Notification'
import {Window} from './Window'
import {Clipboard} from './Clipboard'
import {GlobalHotkey} from './GlobalHotkey'
import {InterApplicationBus} from './InterApplicationBus'
import {System} from './System'
import {BaseApiClass} from './Base'

export type BaseApiDict={[key:string]:BaseApiClass};

export const root:BaseApiDict={
    Application:Application,
    ExternalApplication:ExternalApplication,
    Frame:Frame,
    Notification:Notification,
    Window:Window,
    Clipboard:Clipboard,
    GlobalHotkey:GlobalHotkey,
    InterApplicationBus:InterApplicationBus,
    System:System,
};
