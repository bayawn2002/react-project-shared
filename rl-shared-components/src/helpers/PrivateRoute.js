import React from 'react';

import { Route, Redirect} from 'react-router-dom';

import auth from './Auth';

export class PrivateRoute extends Route {
  render() {
    //console.log(this.props)

    if(this.props.path !== '/login'){
      //console.log('isAuthenticated')

      const {component: Component, ...rest} = this.props;
      const renderComponent = (props) => (
        auth.isAuthenticated()
          ? <Component {...props} />
          : <Redirect to={{
            pathname: '/login',
            state: { from: this.props.path }
          }} />
      );

      return (
        <Route {...rest} render={renderComponent} />
      );
    }else{
      //console.log('already on login page')
      return null;
    }
  }
}

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
