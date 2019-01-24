import auth from './Auth';

class Ajax {
  constructor(){
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
  }

  get(options){
    var headers = {};

    if(options.json)
      headers['Content-Type'] = 'application/json';

    if(options.authToken)
      headers.Authorization = auth.getAuthToken();

    return fetch(options.url, {
      method: 'GET',
      headers: headers
    })
    .then( result => {
      return result.json();
    })
    .catch((error) => alert(error));
  }

  post(options){
    var headers = {
      'Content-Type': 'application/json'
    };
    if(auth.getAuthToken())
      headers.Authorization = auth.getAuthToken();

    return fetch(url, {
      method: 'POST',
      //mode: 'cors',
      headers: headers,
      body: JSON.stringify(data)
    })
    .then( result => {
      return result.json();
    })
    .catch((error) => alert(error));
  }
}

const ajax = new Ajax();
export default ajax;
