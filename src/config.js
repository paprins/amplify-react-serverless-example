  
export default {
  s3: {
      REGION: "eu-west-1",
      BUCKET: "ampl-sls-example-backend-dev-files"
  },
  apiGateway: {
      NAME: "mydoctransfer",
      REGION: "eu-west-1",
      URL: "https://8k8w2zyjs9.execute-api.eu-west-1.amazonaws.com/dev"
  },
  cognito: {
      REGION: "eu-west-1",
      USER_POOL_ID: "eu-west-1_d1w9LBq6I",
      APP_CLIENT_ID: "6lb788jj33enfojrslds17ga80",
      IDENTITY_POOL_ID: "eu-west-1:248ab6b1-7830-4eef-9c6b-8a8dcbccca2e"
  },
  app: {
      URL: "https://whatever.com"
  }
};