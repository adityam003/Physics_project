// LoginScreen.js
import React, { useState } from 'react';
import { ImageBackground, Pressable, SafeAreaView, View, TextInput, Text, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const loginpage = async () => {
    try {
      const isUserLogin = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      setMessage('');
      console.log(isUserLogin);

      navigation.navigate('Homescreen', {
        email: isUserLogin.user.email,
        uid: isUserLogin.user.uid,
      });
    } catch (err) {
      console.log(err);
      setMessage(err.message);
    }
  };

  return (
    <SafeAreaView>
      <ImageBackground
        style={{
          width: '100%',
          height: '100%'
        }}
        source={require("../assets/photos/fullscreenD.png")}
        resizeMode={'cover'}>
        <TextInput
          placeholder='Enter your Email'
          value={email}
          onChangeText={value => setEmail(value)}
          style={[styles.input, { marginTop: '88%', marginLeft: 38 }]}
        />
        <TextInput
          placeholder='Password'
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
          style={[styles.input, { marginTop: '7%', margin: 38 }]}
        />
        <Pressable
          style={styles.button}
          onPress={loginpage}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>

        <View style={styles.whiteBox}>
          <Text
            style={styles.whiteBoxText}>Don't have an account ?
            <Text
              style={{ fontWeight: 'bold' }}> Sign up
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
    padding: 10,
    width: 300,
    height: 46,
    backgroundColor: 'white',
    elevation: 7
  },
  button: {
    width: 300,
    height: 46,
    marginLeft: 38,
    borderRadius: 15,
    borderWidth: 3,
    backgroundColor: 'black',
    elevation: 7
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    color: 'white'
  },
  whiteBox: {
    width: 300,
    height: 30,
    backgroundColor: 'white',
    marginTop: '7%',
    borderRadius: 15,
    marginLeft: 38
  },
  whiteBoxText: {
    paddingLeft: 17,
    paddingTop: 2,
    fontSize: 17,
    color: 'black',
    fontWeight: '600'
  }
});

