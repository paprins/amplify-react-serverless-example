import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './css/index.css';
import '@aws-amplify/ui/dist/style.css';
import App from './views/App';
import registerServiceWorker from './registerServiceWorker';
import Amplify, { Auth } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignUp, AmplifyConfirmSignUp } from '@aws-amplify/ui-react';

import amplify from "./aws-exports-new";

// Here we are configuring Aws Amplify with our custom config file: here we
// are using the export default const trick to use the file with the import call
Amplify.configure({
  ...amplify,
  Analytics: { 
      disabled: true
  }
});

// Finally we call the ReactDOM.render which is our "main"
ReactDOM.render(
  <Router>
      <AmplifyAuthenticator usernameAlias="email">
        {/* Note: when using `custom:` attributes, ... they should exist */}
        <AmplifySignUp
          slot="sign-up"
          usernameAlias="email"
          formFields={[
            {
              type: "email",
              label: "Email",
              placeholder: "Email",
              required: true,
            },
            {
              type: "password",
              label: "Password",
              placeholder: "Password",
              required: true,
            },
            {
              type: "custom:birthday",
              label: "Birthday",
              placeholder: "MM/DD/YYYY",
              required: true,
            },
            {
              type: "custom:passport_nationality",
              label: "Passport Nationality",
              placeholder: "Passport Nationality",
              required: true,
            },
          ]}
        />

        <AmplifyConfirmSignUp
          headerText="Please verify your email"
          slot="confirm-sign-in"
        />
        <AmplifySignIn 
          headerText="Login to Get Started!"
          usernameAlias="email"
          slot="sign-in" 
        />
        <App/>
      </AmplifyAuthenticator>
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();
