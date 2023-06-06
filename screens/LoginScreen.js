import { useEffect, useState, useContext } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from 'react-native-vector-icons/FontAwesome';

import { userContext } from '../context/userContext';

WebBrowser.maybeCompleteAuthSession();
//web: 130862412940-fensis5t7bpu8mh577puuplpidd95cao.apps.googleusercontent.com

export function LoginScreen({ navigation }) {
  const [token, setToken] = useState("");
  const { userInfo, addUser } = useContext(userContext);

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "130862412940-fensis5t7bpu8mh577puuplpidd95cao.apps.googleusercontent.com",
  });

  useEffect(() => {
    handleEffect();
  }, [response, token]);

  async function handleEffect() {
    const user = await getLocalUser();
    console.log("user", user);
    if (!user) {
      if (response?.type === "success") {
        // setToken(response.authentication.accessToken);
        getUserInfo(response.authentication.accessToken);
      }
    } else {
      addUser(user);
      console.log("loaded locally");
      navigation.navigate('Contactanos');
    }
  }

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("@user");
    if (!data) return null;
    return JSON.parse(data);
  };

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      addUser(user);
      navigation.navigate('Contactanos');
    } catch (error) {
      // Add your own error handler here
    }
  };

  const handleGoogleLogin = () => {
    promptAsync();
  };

  const handleClearData = async () => {
    await AsyncStorage.removeItem("@user");
  };

  return (
    <View style={styles.view}>
      {!userInfo ? (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={require("../logoDossier.png")} style={styles.image} />
          </View>
          <TouchableOpacity
            style={styles.googleButton}
            disabled={!request}
            onPress={handleGoogleLogin}
          >
            <View style={styles.buttonContainer}>
              <Text style={styles.googleButtonText}>Ingresar con Google</Text>
              <Icon name="google" size={30} color="#FFFFFF"/>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.card}>
          {userInfo?.picture && (
            <Image source={{ uri: userInfo?.picture }} style={styles.image} />
          )}
          <Text style={styles.text}>Email: {userInfo.email}</Text>
          <Text style={styles.text}>
            Verified: {userInfo.verified_email ? "yes" : "no"}
          </Text>
          <Text style={styles.text}>Name: {userInfo.name}</Text>
          <Text style={styles.text}>{JSON.stringify(userInfo, null, 2)}</Text>
        </View>
      )}
      <TouchableOpacity style={styles.limpiarButton} onPress={handleClearData}>
        <Text style={styles.limpiarButtonText}>Limpiar datos (debes recargar la app)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 370,
    height: 160,
    resizeMode: "contain",
  },
  googleButton: {
    backgroundColor: "#771011",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  googleButtonText: {
    fontSize: 20,
    color: "#FFFFFF",
    textAlign: "center",
    marginRight:10
  },
  limpiarButton: {
    backgroundColor: "#C0BFB2",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  limpiarButtonText:{
    fontSize: 20,
    color: "#000000",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
