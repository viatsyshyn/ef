/**
 * Created by Volodymyr on 3/18/2015.
 */

import {Dictionary} from 'ria.core.Dictionary';
import {Array} from 'ria.core.Array';
import {Promise} from 'ria.core.Promise';
import {JsonTask} from 'ria.core.web.JsonTask';
import {SJX} from 'ria.core.SJX';

import {Note} from 'app.Note';

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