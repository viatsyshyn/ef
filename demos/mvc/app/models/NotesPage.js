/**
 * Created by Volodymyr on 3/19/2015.
 */

import Array from '../../../../src/framework/core/Array';
import SJX from '../../../../src/framework/core/SJX';

import Note from '../models/Note';

export const Note = Note;

export default class NotesPage {
    notes: Array<Note>;

    total: Number;
    start: Number;

    [SJX.deserialize](raw: SJX.Raw): void {
        this.notes = SJX.fromKlass(raw.notes, Array<Note>);
        this.total = SJX.fromValue(raw.total, Number);
        this.start = SJX.fromValue(raw.start, Number);
    }
}