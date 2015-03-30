/**
 * Created by Volodymyr on 3/18/2015.
 */

import Dictionary from '../../../../src/framework/core/Dictionary';
import Promise from '../../../../src/framework/core/Promise';
import JsonTask from '../../../../src/framework/core/web/JsonTask';
import SJX from '../../../../src/framework/core/SJX';

import NotesPage from '../models/NotesPage';

export default class NotesService {

    deserialize_(json: String, klass) {
        return new SJX<klass>().deserialize(json);
    }

    fetch_(url: String, klass, params_: Dictionary = new Dictionary()) {
        return new JsonTask(url)
                .params(params_)
                .then((json) => this.deserialize_(json, klass));
    }

    getNotesFor(userName: String): Promise<NotesPage> {
        return this.fetch_('data/notes.json', NotesPage, {
            "userName": userName
        });
    }
}