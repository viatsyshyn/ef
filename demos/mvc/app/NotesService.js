/**
 * Created by Volodymyr on 3/18/2015.
 */

import {Dictionary} from 'ef.core.Dictionary';
import {Array} from 'ef.core.Array';
import {Promise} from 'ef.core.Promise';
import {JsonTask} from 'ef.core.web.JsonTask';
import {SJX} from 'ef.core.SJX';

import {Note} from 'app.Note';

/** @class app.NotesService */
export default class NotesService {

    deserialize_(json: String, klass) {
        return new SJX<klass>().deserialize(json);
    }

    fetch_(url: String, klass, params_: Dictionary = new Dictionary()) {
        return new JsonTask(url)
                .params(params_)
                .then((json) => this.deserialize_(json, klass));
    }

    getNotes(): Promise {
        return this.fetch_('data/notes.json', Array<Note>);
    }
}