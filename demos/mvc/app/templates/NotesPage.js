/**
 * Created by Volodymyr on 3/19/2015.
 */
"use strict";

import Array from '../../../src/framework/core/Array';
import Template, {Converter} from '../../../src/framework/mvc/Template';

import NotesPage, {Note} from '../models/NotesPage';

import tpl from 'NotesPage.jade';

export default class NotesPage extends Template<NotesPage, tpl> {
    notes: Array<Note>
}