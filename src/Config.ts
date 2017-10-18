'use strict';

import { workspace } from 'vscode';

export interface IProxy {
    enable: boolean;
    baseUri: string;
    proxyUri: string;
}

export interface IHttps {
    enable: boolean;
    cert: string;
    key: string;
    passphrase: string;
}

export class Config {

    public static get configuration() {
        return workspace.getConfiguration('liveServer.settings');
    }

    private static getSettings<T>(val: string): T {
        return Config.configuration.get(val) as T;
    }

    public static get getHost(): string {
        return Config.getSettings<string>('host');
    }

    public static get getPort(): number {
        return Config.getSettings<number>('port');
    }

    public static get getRoot(): string {
        return Config.getSettings<string>('root');
    }

    public static get getNoBrowser(): boolean {
        return Config.getSettings<boolean>('NoBrowser');
    }

    public static get getAdvancedBrowserCmdline(): string {
        return Config.getSettings<string>('AdvanceCustomBrowserCmdLine');
    }

    public static get getChromeDebuggingAttachment(): boolean {
        return Config.getSettings<boolean>('ChromeDebuggingAttachment');
    }

    public static get getCustomBrowser(): string {
        return Config.getSettings<string>('CustomBrowser');
    }

    public static get getIgnoreFiles(): string[] {
        return Config.getSettings<string[]>('ignoreFiles');
    }

    public static get getDonotShowInfoMsg(): boolean {
        return Config.getSettings<boolean>('donotShowInfoMsg');
    }

    public static setDonotShowInfoMsg(val: boolean, isGlobal: boolean = false) {
        Config.configuration.update('donotShowInfoMsg', val, isGlobal);
    }

    public static get getAdditionalTags(): string[] {
        return Config.getSettings<string[]>('additionalTagsForLiveReload');
    }

    public static get getDonotVerifyTags(): boolean {
        return Config.getSettings<boolean>('donotVerifyTags');
    }

    public static setDonotVerifyTags(val: boolean, isGlobal: boolean = false) {
        Config.configuration.update('donotVerifyTags', val, isGlobal);
    }

    public static get getUseWebExt(): boolean {
        return Config.getSettings<boolean>('useWebExt') || false;
    }

    public static get getProxy(): IProxy {
        return Config.getSettings<IProxy>('proxy');
    }

    public static get getHttps(): IHttps {
        return Config.getSettings<IHttps>('https') || {} as IHttps;
    }
}
