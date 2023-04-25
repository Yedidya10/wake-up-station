import { makeRedirectUri } from "expo-auth-session";
import Constants from "expo-constants";
import { useState, useEffect } from "react";
import { Button, View, Text } from "react-native";
import * as Google from "expo-auth-session/providers/google";

interface GoogleUser {
  id: string;
  email: string;
  name: string;
  givenName: string;
  familyName: string;
  photoUrl: string;
  idToken: string;
  serverAuthCode: string;
}

const GoogleSign = ({ setToken, setUser }: any) => {
  const [googleUser, setGoogleUser] = useState<GoogleUser | null>(null);
  const [googleToken, setGoogleToken] = useState(null);
  const [googleId, setGoogleId] = useState(null);
  const [googleEmail, setGoogleEmail] = useState(null);
  const [googleName, setGoogleName] = useState(null);
  const [googleImage, setGoogleImage] = useState(null);
  const [googleError, setGoogleError] = useState(null);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [googleAuth, setGoogleAuth] = useState(null);
  const [googleProfile, setGoogleProfile] = useState(null);

  let GOOGLE_GUID;
  const expoConfig = Constants.expoConfig;
  if (expoConfig) {
    const extra = expoConfig.extra;
    if (extra) {
      GOOGLE_GUID = extra.clientId;
    }
  }

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: `862583247291-luafkjnaevn0ff6cfksv654i8vravs3q.apps.googleusercontent.com`,
    iosClientId: `862583247291-luafkjnaevn0ff6cfksv654i8vravs3q.apps.googleusercontent.com`,
    expoClientId: `862583247291-luafkjnaevn0ff6cfksv654i8vravs3q.apps.googleusercontent.com`,
    // scopes: [
    //   "https://www.googleapis.com/auth/maps-directions",
    //   "https://www.googleapis.com/userinfo/v2/me",
    // ],
    redirectUri: makeRedirectUri({
      scheme: "myapp",
    }),
  });

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${googleToken}` },
        }
      );

      const user = await response.json();
      setGoogleUser(user);
      setUser(googleUser);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    if (response?.type === "success") {
      if (response.authentication) {
        setGoogleToken(response.authentication.accessToken);
        setToken(googleToken);
        getUserInfo();
      }
    }
  }, [response, googleToken]);



  const responseGoogle = (response: any) => {
    setGoogleUser(response.profileObj);
    setGoogleToken(response.tokenId);
    setGoogleId(response.googleId);
    setGoogleEmail(response.profileObj.email);
    setGoogleName(response.profileObj.name);
    setGoogleImage(response.profileObj.imageUrl);
  };

  const responseGoogleError = (response: any) => {
    setGoogleError(response.error);
  };

  const responseGoogleSuccess = (response: any) => {
    setGoogleLoading(true);
    setGoogleAuth(response);
    setGoogleProfile(response.getBasicProfile());
  };

  const responseGoogleFailure = (response: any) => {
    setGoogleLoading(false);
  };

  

  return (
    <View>
      {googleUser === null ? (
        <Button
          title="Sign in with Google"
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
        />
      ) : (
        <Text>{googleUser.name}</Text>
      )}
    </View>

    // <GoogleLogin
    //     clientId="YOUR_CLIENT_ID"
    //     buttonText="Login"
    //     onSuccess={responseGoogle}
    //     onFailure={responseGoogle}
    //     cookiePolicy={'single_host_origin'}
    // />
  );
};

export default GoogleSign;