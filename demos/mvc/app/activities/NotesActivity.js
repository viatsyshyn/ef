/**
 * Created by Volodymyr on 3/19/2015.
 */
"use strict";

import WebActivity, {RenderRule} from '../../../../src/framework/mvc/WebActivity'

import NotesPage from '../templates/NotesPage';

@RenderRule(NotesPage, null, RenderRule.Replace)
export default class NotesActivity extends WebActivity {

}