/**
 * Created by Volodymyr on 3/18/2015.
 */
"use strict";

import Controller, {ActionResult} from '../../../../src/framework/mvc/Controller';
import NotesService from '../services/NotesService';
import NotesActivity from '../activities/NotesActivity';

class OtherModel {
    model: Array<Note>;

    static $fromModel(model: Array<Note>, value: Number) {
        var r = new OtherModel;
        r.model = model;
        return r;
    }
}

// all classes with Controller are controllers
//noinspection JSUnusedGlobalSymbols
export default class NotesController extends Controller {

    // auto inject services
    notesService: NotesService;

    // considered protected
    handleError_(error) {
        return this.ShowMsgBox(error.message, 'whoa.')
            .thenBreak();
    }

    // all public method with Action are actions :)
    //noinspection JSUnusedGlobalSymbols
    indexAction(): ActionResult {
        var result = this.notesService.getNotes()
            .catchError(this.handleError_, this)
            .transform(model => OtherModel.$fromModel(model, 5));

        return this.PushView(NotesActivity, result);
    }
}