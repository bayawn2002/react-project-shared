var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import ajax from './Ajax';

var Auth = function () {
  function Auth() {
    _classCallCheck(this, Auth);

    this.isLoggedIn = false;
    this.authToken = '';

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAuthToken = this.getAuthToken.bind(this);
  }

  _createClass(Auth, [{
    key: 'getAuthToken',
    value: function getAuthToken() {
      var authToken = localStorage.getItem('authToken');

      if (authToken) return authToken;else return false;
    }
  }, {
    key: 'isAuthenticated',
    value: function isAuthenticated() {
      return this.isLoggedIn;
    }
  }, {
    key: 'authCheck',
    value: function authCheck(url) {
      var self = this;
      return ajax.get({ url: url }).then(function (data) {

        if (!data.authFailed) self.isLoggedIn = true;

        return data;
      });
    }

    //process.env.REACT_APP_API_HOST + ':' + process.env.REACT_APP_API_PORT + '/' + process.env.REACT_APP_API_PATH + 'login?u=' + username + '&p=' + password

  }, {
    key: 'login',
    value: function login(url) {
      var self = this;

      return ajax.get().then(function (data) {

        if (typeof data === "undefined" || data.loginFailed) return data;

        if (!data.loginFailed) {
          localStorage.setItem('authToken', data.sessionId);
          self.isLoggedIn = true;
        }

        return data;
      });
    }
  }, {
    key: 'logout',
    value: function logout() {
      localStorage.removeItem('authToken');
      this.isLoggedIn = false;
    }
  }]);

  return Auth;
}();

var auth = new Auth();
export default auth;