import {VERSION} from '../constant';
import {BaseApiClass} from './Base';

export class System extends BaseApiClass{

    static staticMethods:string[]=[
        'addListener',
        'clearCache',
        'deleteCacheOnExit',
        'downloadAsset',
        'downloadPreloadScripts',
        'downloadRuntime',
        'exit',
        'flushCookieStore',
        'getAllApplications',
        'getAllExternalApplications',
        'getAllWindows',
        'getAppAssetInfo',
        'getCommandLineArguments',
        'getCookies',
        'getCrashReporterState',
        'getDeviceUserId',
        'getEntityInfo',
        'getEnvironmentVariable',
        'getFocusedWindow',
        // 'getHostSpecs',
        'getLog',
        'getLogList',
        'getMachineId',
        'getMinLogLevel',
        'getMonitorInfo',
        'getMousePosition',
        'getProcessList',
        'getProxySettings',
        'getRuntimeInfo',
        'getRvmInfo',
        // 'getVersion',
        'launchExternalProcess',
        'log',
        'monitorExternalProcess',
        'on',
        'once',
        'openUrlWithBrowser',
        'prependListener',
        'prependOnceListener',
        'readRegistryValue',
        'registerExternalConnection',
        'releaseExternalProcess',
        'removeAllListeners',
        'removeEventListener',
        'resolveUuid',
        'setMinLogLevel',
        'showDeveloperTools',
        'startCrashReporter',
        'terminateExternalProcess',
        'updateProxySettings',
    ];

    static instanceMethods:string[]=[];

    static async getVersion(){
        return VERSION;
    }

    static async getHostSpecs(){

        let OSName = "Unknown OS";
        let nVer = navigator.appVersion;
        let nAgt = navigator.userAgent;
        let browserName = navigator.appName;
        let fullVersion = ''+parseFloat(navigator.appVersion);
        let majorVersion = parseInt(navigator.appVersion,10);
        let nameOffset,verOffset,ix;

        if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
        if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
        if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
        if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

        if ((verOffset = nAgt.indexOf("Opera"))!=-1){
            browserName = "Opera";
            fullVersion = nAgt.substring(verOffset+6);
            if((verOffset=nAgt.indexOf("Version"))!=-1){
                fullVersion = nAgt.substring(verOffset+8);
            }
        }
        else if((verOffset=nAgt.indexOf("MSIE"))!=-1){
            browserName = "Microsoft Internet Explorer";
            fullVersion = nAgt.substring(verOffset+5);
        }
        else if((verOffset=nAgt.indexOf("Chrome"))!=-1){
            browserName = "Chrome";
            fullVersion = nAgt.substring(verOffset+7);
        }
        else if((verOffset=nAgt.indexOf("Safari"))!=-1){
            browserName = "Safari";
            fullVersion = nAgt.substring(verOffset+7);
            if ((verOffset=nAgt.indexOf("Version"))!=-1){
                fullVersion = nAgt.substring(verOffset+8);
            }
        }
        else if((verOffset=nAgt.indexOf("Firefox"))!=-1){
            browserName = "Firefox";
            fullVersion = nAgt.substring(verOffset+8);
        }

        return {OSName, browserName, fullVersion, appVersion:navigator.appVersion};

    }

    static async getMonitorInfo(){
        return {
            primaryMonitor:{
                monitorRect:{
                    bottom:screen.height,
                    left:0,
                    right:screen.width,
                    top:0,
                },
                availableRect:{
                    bottom:screen.height,
                    left:0,
                    right:screen.width,
                    top:0,
                }
            },
            nonPrimaryMonitors:[],
        } as any;
    }

    static async launchExternalProcess(options:any){
        return
    }
}