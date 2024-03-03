import React from 'react';
import { ImageComponent, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const Homescreen = () => {

  return(
      <SafeAreaView>
      <ScrollView >       
      <View>
        <Text style = {styles.text}> GOOT</Text>
      </View>
      <Button style = {{width: 10}}>
        <Image src={require('./assets/photos/drums.json')}></Image>
      </Button>

      <View style = {styles.underlappingCard}/> 
      <View style = {styles.overlappingCard}/>
    
      <View style = {styles.columnContainer}>
      <View style = {styles.container} >
      <TouchableOpacity style = {[styles.notesCard,styles.card]} />
      <TouchableOpacity style = {[styles.todolistCard,styles.card]}/> 
      </View>
      <View style = {styles.container}>
      <TouchableOpacity style = {[styles.updatesCard,styles.card]}/> 
      <TouchableOpacity style = {[styles.snippesCard,styles.card]}/> 
      </View>
      

 </View>
</ScrollView>
      </SafeAreaView>
    )
  };
const styles = StyleSheet.create({
    text: {
    width : '106%',
    height : '50%', 
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000000',
    paddingLeft: 10,
    paddingTop: 10
    },
  
    underlappingCard:{
      position: "absolute",
      marginTop: 96,
      marginLeft: 41,
      width: 330,
      height: 230,
      borderRadius: 15,
      elevation:2,
      backgroundColor: '#F9B8EE'
  },
    overlappingCard:{
      position: "absolute",
      borderRadius: 15,
      marginTop: 76,
      marginLeft: 22,
      width: 330,
      height: 230,
      backgroundColor: '#E960FF',
      elevation: 5,
  },
  
   columnContainer:{
    flex:1,
    flexDirection:'column',
    marginTop:30,
   },
    container:{
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent:'space-between',
      paddingTop: 20,
      paddingHorizontal: 24,
  
    },
     card:{
      width: 169,
      height: 234,
      borderRadius:15,
      elevation:5,
    },
    notesCard:{
      flex : 1,
      marginRight: 20,
      backgroundColor: '#F1F58F',
    },  
    todolistCard:{
      flex : 1,
      backgroundColor: "#FFA930"
    },
    updatesCard:{
      flex : 1,
//marginTop: 15,
      marginRight: 20,
      backgroundColor: '#A9EDF1',
    },
    snippesCard:{
      flex : 1,
     
    //  marginTop:150,
      backgroundColor: '#99FF76'
    }

  })
export default Homescreen;