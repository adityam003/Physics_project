import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { Image, View ,StyleSheet} from 'react-native';

const AppPro = () => {
    return (
        <Onboarding
        titleStyles={page.text}
         pages={[
           { 
            backgroundColor: '#f0ff',
            image:(
                <LottieView 
                source={require("./assets/photos/traingle.json")}
                style= {page.container}
                autoPlay
                loop
                /> 
            ),
        title: "Welcome to StudyNotes",
            subtitle: 'Your Path to Knowledge'
           },
           {
            backgroundColor: '#ff0000',
            image:(
                <LottieView
                source={require("./assets/photos/multi.json")}
                style={page.container}
                autoPlay
                loop
                />
            ),
            title:'Multiply Your Productivity',
            subtitle: 'More Done in Less Time'
           },
           {
            backgroundColor: '#00bfff',
            image: <LottieView source={require('./assets/photos/rocket.json')}
            style={page.container}
            autoPlay
            loop 
            />,
            title:'Skyrocket Your Career',
            subtitle: 'Faster Than You Think'
           },
           {
            backgroundColor: '#ff4500',
            image: <LottieView source={require('./assets/photos/hand.json')}
            style={page.container}
            autoPlay 
            loop 
            />,
            title:'Onboarding Done',
            subtitle: 'Thankyou for Joining'
           }
        ]}
        />
    )
}
const page = StyleSheet.create({
    container:{
        width:  '100%',
        height: '60%',
        fontFamily: 'Protest Riot'
    },
    text :{
        fontFamily: 'Protest Riot',
        justifyContent:'center',
        alignItems: 'center',
        paddingTop: 0
    }
})
export default AppPro;