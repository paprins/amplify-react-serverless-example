# Getting Started

> Just a summary of [this](https://medium.com/@jrheling/using-serverless-framework-with-the-amplify-client-library-9f3a1e2ee24f) blog.

## Install `amplify`
```
$ npm install -g @aws-amplify/cli
```

## Create Amplify IAM User
> Note to self: why `AdministratorAccess` ??
> 
```
$ amplify configure

Sign in to your AWS administrator account:
https://console.aws.amazon.com/
Press Enter to continue
Specify the AWS Region
? region:  eu-west-1
Specify the username of the new IAM user:
? user name:  amplify-sls-example-user
Complete the user creation using the AWS console
https://console.aws.amazon.com/iam/home?region=undefined#/users$new?step=final&accessKey&userNames=amplify-sls-example-user&permissionType=policies&policies=arn:aws:iam::aws:policy%2FAdministratorAccess
Press Enter to continue
Enter the access key of the newly created user:
? accessKeyId:  **********
? secretAccessKey:  ********************
This would update/create the AWS Profile in your local machine
? Profile Name:  amplify-sls-example
Successfully set up the new user.
```

## Create Basic App

```
$ npx create-react-app amplify-react-serverless-example
```

## Initialize Amplify

```
$ amplify init

Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project amplslsexample
? Enter a name for the environment dev
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  npm run-script build
? Start Command: npm run-script start
Using default provider  awscloudformation

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html

? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use amplify-sls-example
Adding backend environment dev to AWS Amplify Console app: drlefrbt1hijn
⠇ Initializing project in the cloud...

CREATE_IN_PROGRESS AuthRole                          AWS::IAM::Role             Fri Aug 07 2020 11:59:19 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS UnauthRole                        AWS::IAM::Role             Fri Aug 07 2020 11:59:19 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS DeploymentBucket                  AWS::S3::Bucket            Fri Aug 07 2020 11:59:19 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS AuthRole                          AWS::IAM::Role             Fri Aug 07 2020 11:59:19 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS UnauthRole                        AWS::IAM::Role             Fri Aug 07 2020 11:59:19 GMT+0200 (Central European Summer Time)
CREATE_IN_PROGRESS amplify-amplslsexample-dev-115913 AWS::CloudFormation::Stack Fri Aug 07 2020 11:59:15 GMT+0200 (Central European Summer Time) User Initiated
⠋ Initializing project in the cloud...

CREATE_IN_PROGRESS DeploymentBucket AWS::S3::Bucket Fri Aug 07 2020 11:59:20 GMT+0200 (Central European Summer Time) Resource creation Initiated
⠏ Initializing project in the cloud...

CREATE_COMPLETE AuthRole   AWS::IAM::Role Fri Aug 07 2020 11:59:34 GMT+0200 (Central European Summer Time)
CREATE_COMPLETE UnauthRole AWS::IAM::Role Fri Aug 07 2020 11:59:34 GMT+0200 (Central European Summer Time)
⠏ Initializing project in the cloud...

CREATE_COMPLETE amplify-amplslsexample-dev-115913 AWS::CloudFormation::Stack Fri Aug 07 2020 11:59:43 GMT+0200 (Central European Summer Time)
CREATE_COMPLETE DeploymentBucket                  AWS::S3::Bucket            Fri Aug 07 2020 11:59:41 GMT+0200 (Central European Summer Time)
✔ Successfully created initial AWS cloud resources for deployments.
✔ Initialized provider successfully.
Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify console" to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything
```

## Add Hosting

```
$ amplify add hosting

? Select the plugin module to execute Amazon CloudFront and S3
? Select the environment setup: DEV (S3 only with HTTP)
? hosting bucket name amplslsexample-20200807120420-hostingbucket
? index doc for the website index.html
? error doc for the website index.html

You can now publish your app using the following command:
Command: amplify publish
```

## Publish!

```
$ amplify publish

✔ Successfully pulled backend environment dev from the cloud.

Current Environment: dev

| Category | Resource name   | Operation | Provider plugin   |
| -------- | --------------- | --------- | ----------------- |
| Hosting  | S3AndCloudFront | Create    | awscloudformation |
? Are you sure you want to continue? Yes
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS hostingS3AndCloudFront            AWS::CloudFormation::Stack Fri Aug 07 2020 12:05:21 GMT+0200 (Central European Summer Time)
UPDATE_IN_PROGRESS amplify-amplslsexample-dev-115913 AWS::CloudFormation::Stack Fri Aug 07 2020 12:05:16 GMT+0200 (Central European Summer Time) User Initiated
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS hostingS3AndCloudFront AWS::CloudFormation::Stack Fri Aug 07 2020 12:05:22 GMT+0200 (Central European Summer Time) Resource creation Initiated
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-amplslsexample-dev-115913-hostingS3AndCloudFront-XSYHTNEWB8FS AWS::CloudFormation::Stack Fri Aug 07 2020 12:05:22 GMT+0200 (Central European Summer Time) User Initiated
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS S3Bucket AWS::S3::Bucket Fri Aug 07 2020 12:05:29 GMT+0200 (Central European Summer Time) Resource creation Initiated
CREATE_IN_PROGRESS S3Bucket AWS::S3::Bucket Fri Aug 07 2020 12:05:27 GMT+0200 (Central European Summer Time)
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE S3Bucket AWS::S3::Bucket Fri Aug 07 2020 12:05:50 GMT+0200 (Central European Summer Time)
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-amplslsexample-dev-115913-hostingS3AndCloudFront-XSYHTNEWB8FS AWS::CloudFormation::Stack Fri Aug 07 2020 12:05:52 GMT+0200 (Central European Summer Time)
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE hostingS3AndCloudFront AWS::CloudFormation::Stack Fri Aug 07 2020 12:05:56 GMT+0200 (Central European Summer Time)
⠴ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE                     amplify-amplslsexample-dev-115913 AWS::CloudFormation::Stack Fri Aug 07 2020 12:05:59 GMT+0200 (Central European Summer Time)
UPDATE_COMPLETE_CLEANUP_IN_PROGRESS amplify-amplslsexample-dev-115913 AWS::CloudFormation::Stack Fri Aug 07 2020 12:05:58 GMT+0200 (Central European Summer Time)
✔ All resources are updated in the cloud

Hosting endpoint: http://amplslsexample-20200807120420-hostingbucket-dev.s3-website-eu-west-1.amazonaws.com


> amplify-react-serverless-example@0.1.0 build /Users/pprins/projects/foobar/amplify-react-serverless-example
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  39.4 KB  build/static/js/2.08b503a2.chunk.js
  791 B    build/static/js/runtime-main.4c83a964.js
  664 B    build/static/js/main.dbf16ed7.chunk.js
  547 B    build/static/css/main.5f361e03.chunk.css

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  yarn global add serve
  serve -s build

Find out more about deployment here:

  bit.ly/CRA-deploy

frontend build command exited with code 0
Publish started for S3AndCloudFront
✔ Uploaded files successfully.
Your app is published successfully.
http://amplslsexample-20200807120420-hostingbucket-dev.s3-website-eu-west-1.amazonaws.com
```
> After a successful `publish`, a browser will be opened using the displayed URL.

## Adding Serverless Framework

### Add Dependencies

```
$ npm i -D serverless-wsgi serverless-python-requirements aws-amplify-serverless-plugin
```

### Add Basic `serverless.yml`

```
TODO
```

### Deploy

```
$ sls deploy --aws-profile amplify-sls-example

Serverless: Packaging service...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
........
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Validating template...
Serverless: Updating Stack...
Service Information
service: ampl-sls-example-backend
stage: dev
region: eu-west-1
stack: ampl-sls-example-backend-dev
resources: 2
api keys:
  None
endpoints:
  None
functions:
  None
layers:
  None
```

### Adding Authentication

> Added `resources/cognito-*.yml` + updated `serverless.yml`

### Create Backend API

```
$ mkvenv --python=python3
...

$ pip install flask Flask-CORS
...
$ pip freeze > requirements.txt
```

> Update `serverless.yml`
```
TODO
```

### Add Amplify Auth to React

```
$ npm i aws-amplify aws-amplify-react
```

> Update `src/App.js`
> Breaking Change: As of aws-amplify-react@4.x.x, the Authenticator is not styled. 
> To include default styling in JavaScript, add this line before Amplify.configure:
> ```
> import '@aws-amplify/ui/dist/style.css';
> ```
> 
> See: https://github.com/aws-amplify/amplify-js/issues/5445

```
import '@aws-amplify/ui/dist/style.css';
import Amplify from 'aws-amplify';
// file generated by the sls plugin
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
```

and replace `export default App;` with `export default withAuthenticator(App, true);`

### Add Users

> Go to `Cognito`

* Create user (remember: `username` == `email`) -> email will be sent to you
* Login using browser, and modify password


### Call API

> Add to `src/App.js`
```
import Amplify, { API } from 'aws-amplify';
```

~ the end

# Further Reading

* [Customize Amplify Authentication UI](https://blog.kylegalbraith.com/2020/03/31/customizing-the-aws-amplify-authentication-ui-with-your-own-react-components/)
