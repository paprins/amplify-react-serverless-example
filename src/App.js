import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react';


function App() {
  const get = async () => {
    console.log('calling GET');
    const response = await API.get(
      'ApiGatewayRestApi', // function defined in our serverless.yml
      '/test',            // the function's path
      { 'responseType': 'text' }
    );
    console.log(`got ${response}`);
    alert(response);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Internal Application behind Login</p>
        <button onClick={get}>GET</button>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
