/**
 * Created by Volodymyr on 3/18/2015.
 */
"use strict";

import Controller, {ActionResult, Inject, SessionBind, Action, Context} from '../../../../src/framework/mvc/Controller';
import NotesService from '../services/NotesService';
import NotesActivity from '../activities/NotesActivity';
import Promise from '../../../../src/framework/core/Promise';

// all classes with Controller are controllers
//noinspection JSUnusedGlobalSymbols
export default class NotesController extends Controller {

    static onAppStart(): Promise {

    }

    //auto generated
    static onRegisterActions(register) {
        var proto = NotesController.prototype;
        register('index', proto.indexAction, {roles: ["admin", "user"]});
    }

    /*@Inject
    notesService: NotesService;
    */

    get notesService() : NotesService {
        return Context.getService(NotesService);
    }

    /*@SessionBind('user-name', {shared: true, readonly: false})
    userName: String;*/
    get userName(): String {
        return String(Context.readSession('user-name'));
    }

    set userName(v: String): void {
        Context.storeSession('user-name', v);
    }

    // considered protected
    /** @protected */
    handleError_(error) {
        return this.ShowMsgBox(error.message, 'whoa.')
            .thenBreak();
    }

    // all public method with Action are actions :)
    //noinspection JSUnusedGlobalSymbols
    @Action({roles: ["admin", "user"]})
    indexAction(): ActionResult {
        var result = this.notesService.getNotesFor(this.userName)
            .catchError(this.handleError_, this);

        return this.PushView(NotesActivity, result);
    }
}