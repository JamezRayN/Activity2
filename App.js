import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { ImageBackground } from 'react-native-web';




const GClassroomApp = () => {
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Googles Classroom</Text>
          
        <ImageBackground source={{uri: 'https://www.gstatic.com/classroom/logo_square_rounded.svg'}}style={styles.logo}/>
      </View>

      <ScrollView style={styles.subs}>
        <TouchableOpacity style={styles.subj}>
          
          <ImageBackground source={{uri: 'https://www.gstatic.com/classroom/themes/Geometry.jpg'}}style={{width: '100%', height: '100%'}}/>
          
          <Text style={styles.postTitle}>IT 313</Text>
          <Text style={styles.postDescription}>BSIT 3B</Text>
          <Text style={styles.teachN}> Asuncion Pana</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.subj}>
          <ImageBackground source={{uri: 'https://www.gstatic.com/classroom/themes/img_reachout.jpg'}}style={{width: '100%', height: '100%'}}/>
          <Text numberOfLines={1}style={styles.postTitle}>Mobile Application using Google Android Platform</Text>
          <Text style={styles.postDescription}>3B - 1st Sem (2023-2024)</Text>
          <Text style={styles.teachN}> Jerry Ale</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.subj}>
        <ImageBackground source={{uri: 'https://www.gstatic.com/classroom/themes/img_graduation.jpg'}}style={{width: '100%', height: '100%'}}/>
          <Text numberOfLines={1}style={styles.postTitle}>Elec 2 Web Development/ Web Enterprise</Text>
          <Text style={styles.postDescription}>BSIT 3B AY:2023-2024</Text>
          <Text style={styles.teachN}> Catherine Leah Gabo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.subj}>
        <ImageBackground source={{uri: 'https://gstatic.com/classroom/themes/img_breakfast.jpg'}}style={{width: '100%', height: '100%'}}/>
          <Text style={styles.postTitle}>Methods Of Research</Text>
          <Text style={styles.postDescription}>BSIT 3B</Text>
          <Text style={styles.teachN}> Benjamin Omamalin</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.subj}>
        <ImageBackground source={{uri: 'https://www.gstatic.com/classroom/themes/Design.jpg'}}style={{width: '100%', height: '100%'}}/>
          <Text numberOfLines={1}style={styles.postTitle}>3B- Logic design and Digital Computer Circuits</Text>
          <Text style={styles.postDescription}>1st Semester, A.Y.2023-24</Text>
          <Text style={styles.teachN}> EDUARDO CARPIO</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.subj}>
        <ImageBackground source={{uri: 'https://www.gstatic.com/classroom/themes/img_code.jpg'}}style={{width: '100%', height: '100%'}}/>
          <Text style={styles.postTitle}>IT 311 Software Engineering</Text>
          <Text style={styles.postDescription}>BSIT 3B AY:2023-2024</Text>
          <Text style={styles.teachN}> Catherine Leah Gabo</Text>
        </TouchableOpacity>
        
      </ScrollView>
      
    <TouchableOpacity style={styles.button} >
        <Ionicons name='add-circle' size={80} color='white'/>
        </TouchableOpacity>

      
    </View>

);


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    

  },
  header: {
    borderBottomColor: '#BDC3C7',
    borderBottomWidth: 1, 
    padding: 15,
    alignItems: 'left',
  },
  headerText: {
    color: 'black',
    fontSize: 25,
    marginLeft: 30,
  },
  subs: {
    flex: 1,
    
    padding: 5,
  },
  subj: {
    backgroundColor: '#ECEFF1',
    padding: 5,
    marginBottom: 10,
    height: 140,
  
    
    borderRadius: 10,
  },
 
  postTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    margin: 10,
    
    
  },
  postDescription: {
    color: 'white',
    fontSize: 15,
    position: 'absolute',
    marginTop: 40,
    marginLeft:10,
    
  },
  teachN : {
    color: 'white',
    position: 'absolute',
    marginTop:100,
    marginLeft:5
    
   }, 
   button: {
    backgroundColor: '#05DAF9',
      position: 'absolute',
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      right:30,
      bottom:130,
    
  },
  logo: {
    width: 50, height: 50,
    position: 'absolute',
    marginLeft:300,
    top:5
  }
  
 
});

export default GClassroomApp;
