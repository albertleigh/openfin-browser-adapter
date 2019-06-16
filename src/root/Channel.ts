import {BaseApiClass} from './Base';
import {ChannelProvider} from './ChannelProvider';
import {ChannelClient} from './ChannelClient';
import {OpenFinMockV2} from '../OpenFinMockV2'

const _ChannelProvider = OpenFinMockV2.generateMethods('InterApplicationBus.Channel#ChannelProvider',ChannelProvider);
const _ChannelClient = OpenFinMockV2.generateMethods('InterApplicationBus.Channel#ChannelClient',ChannelClient);

export class Channel extends BaseApiClass{

    static staticMethods:string[]=[
        'onChannelConnect',
        'onChannelDisconnect',
    ];

    static instanceMethods:string[]=[];

    static async create(){
        return new _ChannelProvider();
    }

    static async connect(){
        return new _ChannelClient();
    }

}