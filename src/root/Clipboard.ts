import {BaseApiClass} from './Base';

export class Clipboard extends BaseApiClass{

    static staticMethods:string[]=[
        'getAvailableFormats',
        'readHtml',
        'readRtf',
        'readText',
        'write',
        'writeHtml',
        'writeRtf',
        'writeText',
    ];

    static staticSyncMethods:string[]=[
    ];

    static instanceMethods:string[]=[
    ];

    static connection:any=null;


    constructor() {
        super();
    }

}