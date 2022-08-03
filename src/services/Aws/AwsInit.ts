import AWS from 'aws-sdk';

const Init = () => {
  AWS.config.region = process.env.REACT_APP_REK_REGION;
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: process.env.REACT_APP_REK_CREDENTIAL as string
  });
}

export default Init;