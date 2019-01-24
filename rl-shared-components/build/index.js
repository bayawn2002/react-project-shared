'use strict';

//module.exports.Ajax = require('./helpers/Ajax');
//module.exports.Auth = require('./helpers/Auth');
//module.exports.PrivateRoute = require('./helpers/PrivateRoute');

//export { TodaysDate } from './TodaysDate';

import _ajax from './helpers/Ajax';
export { _ajax as ajax };
import _auth from './helpers/Auth';
export { _auth as auth };