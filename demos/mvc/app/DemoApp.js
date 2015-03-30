/**
 * Created by Volodymyr on 3/18/2015.
 */
"use strict";

import DefaultApplication, {Use} from '../../../src/framework/mvc/DefaultApplication';

import NotesController from 'controllers/NotesController';

@Use(NotesController)
export class DemoApp extends DefaultApplication {

}