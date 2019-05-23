import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


export default class App extends React.Component {
  
  render() {
    return (
     
      <ScrollView>
        <View style={styles.container}>
          <Text ></Text>
          <Text></Text>
          <Text></Text>
          <Text>AP Chemistry</Text>
          <Text>Heat 'em up Speed 'em up!</Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          </View>
          </ScrollView>
      
       
      
    );
  }
 /* render() {
    return (
      <View style={styles.container}>
      <Text></Text>
      </View>
    );
  } */
}


const styles = StyleSheet.create({
  container: {
    
    
    backgroundColor: '#005eff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 200,
    
  },
});
