import React from 'react';
import { ImageComponent, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Image, Tile } from 'react-native-elements';
import { Paragraph, Title } from 'react-native-paper';
const Homescreen = () => {

  return(
      <SafeAreaView>
      <ScrollView>
      <View>
        <Text style={styles.text}> GOOT</Text>
      </View> 
     
      <View style = {styles.underlappingCard}/> 
      <View style = {styles.overlappingCard}>
        <Title style = {{fontWeight:'bold',fontSize:34, color: 'white', paddingTop:30,paddingLeft:20}}>Community.</Title>
        <Paragraph style = {{fontWeight: 'bold', fontSize:24 , color: 'white', paddingTop: 34, paddingLeft:20 }}>Explore, Grow, Share</Paragraph>
        <Paragraph style = {{fontWeight: 'bold', fontSize:24 , color: 'white', paddingTop: 5, paddingLeft:22 }}>together.</Paragraph>
        <Paragraph style = {{fontWeight: 'bold', fontSize:20 , color: 'white', paddingTop: 43, paddingLeft:170 }}>coming soon...</Paragraph>
      </View>
      
      <View style = {styles.row1}>
      <TouchableOpacity style = {[styles.notesCard,styles.card]}>
        {/* <Title style = {{fontWeight: 'bold', fontSize: 24,padding: 15, paddingLeft: 35}}>Notes</Title> */}
      </TouchableOpacity>
      <TouchableOpacity style = {[styles.todolistCard, styles.card]}/> 
      </View>

      <View style = {styles.row2}>
      <TouchableOpacity style = {[styles.updatesCard,styles.card]}/> 
      <TouchableOpacity style = {[styles.snippetsCard,styles.card]}/> 
      </View>
      </ScrollView>
      <View style = {styles.navbar}/>

      </SafeAreaView>
    )
  };
const styles = StyleSheet.create({
    text: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'black',
    padding:10,
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
    row1:{
      flex: 1,
      flexDirection: 'row',
      marginTop:'70%',
      justifyContent:'center',
    },
    row2:{
      flex: 1,
      flexDirection:'row',
      justifyContent:'center',
      paddingBottom:70,
    },
     card:{
      alignContent:'center',
      margin:10,
      width: 160,
      height : 229,
      borderRadius:15,
      elevation:5,
    },
    notesCard:{
      backgroundColor: '#F1F58F',
    },  
    todolistCard:{
      backgroundColor: "#FFA930"
    },
    updatesCard:{
   
      backgroundColor: '#A9EDF1',
    },
  snippetsCard:{
      backgroundColor: '#99FF76'
    },
    navbar:{
      position: "absolute",
      marginTop: "186%",
      marginLeft: 12,
      width: 370,
      height: 45,
      borderRadius:15,
      borderWidth: 1,
      borderColor:'#BEB7B7',
      backgroundColor: 'white',
      elevation: 10,
    }

  })
export default Homescreen;