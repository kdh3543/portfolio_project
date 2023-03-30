import { CognitoUserPool } from "amazon-cognito-identity-js";

const userPoolData = {
  UserPoolId: "ap-northeast-2_drQ9qGTBc",
  ClientId: "svf6lqo3ekofuoercba2ftn86",
};

export default new CognitoUserPool(userPoolData);
