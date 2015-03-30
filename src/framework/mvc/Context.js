/**
 * Created by Volodymyr on 3/30/2015.
 */
"use strict";

var services = new WeakMap(),
    session = new Map();

/** @singleton */
export default class Context {
    static getService(klass) {
        var instance = services.get(klass);

        if (!instance) {
            instance = new klass();
            services.put(klass, instance);
        }

        return instance;
    }

    static readSession(key: String, def = null): Object {
        return session.get(key) || def;
    }

    static storeSession(key: String, value): void {
        session.set(key, value);
    }

    static readCookie(key: String, def = null): String {

    }

    static readLocalStorage(key: String, def = null): Object {
        return window.localStorage.getItem(key) || def;
    }

    static storeLocalStorage(key: String, value) {
        window.localStorage.setItem(key, value);
    }
}