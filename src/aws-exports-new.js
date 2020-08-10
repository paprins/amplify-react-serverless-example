import { Storage } from "aws-amplify";
import config from "./config";

const amplify = {
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
  Storage: {
      region: config.s3.REGION,
      bucket: config.s3.BUCKET,
      identityPoolId: config.cognito.IDENTITY_POOL_ID
  },
  API: {
      endpoints: [
          {
              name: config.apiGateway.NAME,
              endpoint: config.apiGateway.URL,
              region: config.apiGateway.REGION
          },
      ]
  }
};

export default amplify;

// Configure Storage with S3 bucket information
// See: https://docs.amplify.aws/lib/storage/configureaccess/q/platform/js
// TL;DR: Storage module can manage files with three different access levels: `public`, `protected` and `private`.
export function SetS3Config(level){
  Storage.configure({ 
      bucket: amplify.Storage.bucket,
      level: level,
      region: amplify.Storage.region,  
      identityPoolId: amplify.Auth.identityPoolId 
  });
}