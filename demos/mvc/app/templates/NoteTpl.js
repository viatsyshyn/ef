/**
 * Created by Volodymyr on 3/19/2015.
 */

import Linkify from 'somelib.js';

import Array from '../../../src/framework/core/Array';
import Template, {Converter, Option} from '../../../src/framework/mvc/Template';

import NoteId from 'NoteId.js';
import UserId from 'UserId.js';
import Note from 'Note';

import tpl from 'NoteTpl.jade';

class NoteTpl extends Template<Node, tpl> {
    // all public properties are model binded
    id: NoteId;
    title: String;
    @Converter(Linkfy)
    description: String;
    authorId: UserId;
    authorName: String;

    @Option
    someOption: String;

    getFormatedDesc(): String {
        return this.renderText(this.description, this);
    }
}