import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import userPool from "@/components/hooks/usePool";
class newCognitoUser extends CognitoUser {
  public storage?: any;
}
function useCognitoUser() {
  const setCognitoUser = (email: string) => {
    const userData = {
      Username: email,
      Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);
    return cognitoUser;
  };

  const setAuthDetail = (email: string, password: string) => {
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });
    return authDetails;
  };

  const getCurrentUser = () => {
    const currentUser: newCognitoUser | null = userPool.getCurrentUser();
    return currentUser;
  };

  return { setCognitoUser, setAuthDetail, getCurrentUser };
}

export default useCognitoUser;
