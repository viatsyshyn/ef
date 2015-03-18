/**
 * Created by Volodymyr on 3/18/2015.
 */
"use strict";

import {SJX} from 'ria.core.SJX';

import {NoteId} from 'app.NoteID';
import {UserId} from 'app.UserID';

export class Note {
    id: NoteId;
    title: string;
    description: string;
    authorName: string;
    authorId: UserId;

    [SJX.deserialize](raw: SJX.Raw): void {
        this.id = SJX.fromValue(raw.id, NoteId);
        this.title = SJX.fromValue(raw.title, String);
        this.description = SJX.fromValue(raw.description, String);
        this.authorName = SJX.fromValue(raw.author.name, String);
        this.authorId = SJX.fromValue(raw.author.id, UserId);
    }

    [SJX.serialize](): SJX.Raw {
        return SJX.Raw({
            "id": this.id,
            "title": this.title,
            "description": this.description,
            "author": SJX.Raw({
                "id": this.authorId,
                "name": this.authorName
            })
        })
    }
}