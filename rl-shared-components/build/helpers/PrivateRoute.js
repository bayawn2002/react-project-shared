var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import auth from './Auth';

export var PrivateRoute = function (_Route) {
  _inherits(PrivateRoute, _Route);

  function PrivateRoute() {
    _classCallCheck(this, PrivateRoute);

    return _possibleConstructorReturn(this, (PrivateRoute.__proto__ || Object.getPrototypeOf(PrivateRoute)).apply(this, arguments));
  }

  _createClass(PrivateRoute, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      //console.log(this.props)

      if (this.props.path !== '/login') {
        //console.log('isAuthenticated')

        var _props = this.props,
            Component = _props.component,
            rest = _objectWithoutProperties(_props, ['component']);

        var renderComponent = function renderComponent(props) {
          return auth.isAuthenticated() ? React.createElement(Component, props) : React.createElement(Redirect, { to: {
              pathname: '/login',
              state: { from: _this2.props.path }
            } });
        };

        return React.createElement(Route, _extends({}, rest, { render: renderComponent }));
      } else {
        //console.log('already on login page')
        return null;
      }
    }
  }]);

  return PrivateRoute;
}(Route);

// changed to code above
/*export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={ props => {
       if(props.location.pathname !== '/login'){
         console.log('isAuthenticated')
         //console.log(auth.isAuthenticated())

         return auth.isAuthenticated()
         ?  <Component />
         : ( <Redirect to={{
             pathname: '/login',
             state: { from: props.location }
           }} /> )
         }else{
           console.log('already on login page')
           return null;
         }
       }
     } />
)*/