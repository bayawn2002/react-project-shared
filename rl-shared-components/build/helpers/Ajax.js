var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import auth from './Auth';

var Ajax = function () {
  function Ajax() {
    _classCallCheck(this, Ajax);

    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
  }

  _createClass(Ajax, [{
    key: 'get',
    value: function get(url, data) {
      var headers = {
        'Content-Type': 'application/json'
      };
      if (auth.getAuthToken()) headers.Authorization = auth.getAuthToken();

      return fetch(url, {
        method: 'GET',
        headers: headers
      }).then(function (result) {
        return result.json();
      }).catch(function (error) {
        return alert(error);
      });
    }
  }, {
    key: 'post',
    value: function post(url, data) {
      var headers = {
        'Content-Type': 'application/json'
      };
      if (auth.getAuthToken()) headers.Authorization = auth.getAuthToken();

      return fetch(url, {
        method: 'POST',
        //mode: 'cors',
        headers: headers,
        body: JSON.stringify(data)
      }).then(function (result) {
        return result.json();
      }).catch(function (error) {
        return alert(error);
      });
    }
  }]);

  return Ajax;
}();

var ajax = new Ajax();
export default ajax;