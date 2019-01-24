import ajax from './Ajax';

class Auth {
  constructor(){
    this.isLoggedIn = false;
    this.authToken = '';

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAuthToken = this.getAuthToken.bind(this);
  }

  getAuthToken(){
    var authToken = localStorage.getItem('authToken');

    if(authToken)
      return authToken;
    else
      return false;
  }

  isAuthenticated(){
    return this.isLoggedIn;
  }

  authCheck(url){
    var self = this;
    return ajax.get({url: url})
    .then( data => {

      if(!data.authFailed)
        self.isLoggedIn = true;

      return data;
    });
  }

  //process.env.REACT_APP_API_HOST + ':' + process.env.REACT_APP_API_PORT + '/' + process.env.REACT_APP_API_PATH + 'login?u=' + username + '&p=' + password
  login(url){
    var self = this;

    return ajax.get()
    .then( data => {

      if(typeof data === "undefined" || data.loginFailed)
        return data;

      if(!data.loginFailed){
        localStorage.setItem('authToken', data.sessionId);
        self.isLoggedIn = true;
      }

      return data;
    });
  }

  logout(){
    localStorage.removeItem('authToken');
    this.isLoggedIn = false;
  }
}

const auth = new Auth();
export default auth;
