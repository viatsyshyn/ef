/**
 * Created by Volodymyr on 3/18/2015.
 */
"use strict";

import Controller from 'ria.mvc.Controller';
import NotesService from 'app.NotesService';

class OtherModel {
    model: Array<Note>;

    static $fromModel(model: Array<Note>, value: Number) {
        var r = new OtherModel;
        r.model = model;
        return r;
    }
}

// all classes with Controller are controllers
export class NotesController extends Controller {

    // auto inject services
    notesService: NotesService;

    // considered protected
    handleError_(error) {
        return this.ShowMsgBox(error.message, 'whoa.')
            .thenBreak();
    }

    // all public method with Action are actions :)
    indexAction() {
        var result = this.notesService.getNotes()
            .catchError(this.handleError_, this)
            .transform(model => OtherModel.$fromModel(model, 5));

        return this.PushView(Notes, result);
    }
}