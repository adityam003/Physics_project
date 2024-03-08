import React, { ImageBackground, Pressable, SafeAreaView, View } from 'react-native';
import { Text,TextInput, StyleSheet} from 'react-native';
import { ScreenHeight, ScreenWidth } from 'react-native-elements/dist/helpers';

const loginpage = () => {
    return(
        <SafeAreaView>

        <ImageBackground  style={{width:ScreenWidth,height:ScreenHeight}} source={require("../assets/photos/fullscreenD.png")} resizeMode={'cover'}>
            <TextInput placeholder='Username' style={[styles.input,{marginTop:'88%',marginLeft:38}]}/>
            <TextInput placeholder='Password' style={[styles.input,{marginTop:'7%', margin:38}]}/>
             <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
             </Pressable>
             <View style={styles.whiteBox}>
              <Text style={styles.whiteBoxText}>Don't have an account ?<Text style={{fontWeight:'bold'}}> Sign up</Text></Text>
             </View>
             {/* <View style={{width:312,height:3,backgroundColor:'black' , marginTop:'7%',marginLeft:34}} /> */}
        </ImageBackground>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
 input:{
    borderWidth: 2,
    borderColor: 'black',
    borderRadius:15,
    padding:10,
    width: 300,
    height:46,
    backgroundColor:'white',
    elevation:7
 },
 button:{
    width: 300,
    height:46,
    marginLeft:38,
    borderRadius:15,
    borderWidth:3,
    backgroundColor:'black',
    elevation:7
 },
 buttonText:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:5,
    color:'white'
 },
 whiteBox:{
    width:300,
    height:30,
    backgroundColor:'white', 
    marginTop:'7%',
    borderRadius:15,
    marginLeft:38
 },
 whiteBoxText:{
    paddingLeft:17,
    paddingTop:2,
    fontSize:17,
    color:'black',
    fontWeight:'600'
 }
})

export default loginpage;
