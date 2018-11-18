import {BaseApiClass} from './Base';
import {ChannelProvider} from './ChannelProvider';
import {ChannelClient} from './ChannelClient';
import {OpenFinMock} from '../OpenFinMock'

const _ChannelProvider = OpenFinMock.generateMethods('InterApplicationBus.Channel#ChannelProvider',ChannelProvider);
const _ChannelClient = OpenFinMock.generateMethods('InterApplicationBus.Channel#ChannelClient',ChannelClient);

export class Channel extends BaseApiClass{



    static staticMethods:string[]=[
        'onChannelConnect',
        'onChannelDisconnect',
    ];

    static instanceMethods:string[]=[];

    static create(){
        return new Promise((resolve,reject)=>{
            resolve(new _ChannelProvider())
        })
    }

    static connect(){
        return new Promise((resolve,reject)=>{
            resolve(new _ChannelClient())
        })
    }

}