import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Rkatime
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { Rkatime } from '@ionic-native/rkatime';
 *
 *
 * constructor(private rkatime: Rkatime) { }
 *
 * ...
 *
 *
 * this.rkatime.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class Rkatime extends IonicNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    getOtherInfo(): Promise<any>;
}
