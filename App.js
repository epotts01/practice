import React from 'react';
import { Alert,StyleSheet, Text, View, ScrollView,Button, TextInput } from 'react-native';
import {Card} from 'react-native-paper';
import BottomRow from './Components/BottomRow';
import TopRow from './Components/TopRow';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  _onPressButton()
  {
    Alert.alert('Hit my Mountie Juul')
  }
  render() {
    return (
    <View style ={{flex:1,flexDirection:'column'}}>
      <Card style = {{flex:0}}>
          <TopRow />
        </Card>
      <View style = {{flex:10}} > 
      <ScrollView style ={styles.container}>
        
          
          <Text style = {styles.title}> AP Chemistry</Text>
          <Text style = {styles.container}>Heat 'em up Speed 'em up!</Text>
          
       </ScrollView>
       </View>
       <View style ={{flex:0,backgroundColor:'#005eff'}}>
            <Button
              color = 'white'
              onPress={this._onPressButton}
              title="Press Me"
              />
              </View>
        <Card style= {{flex:1}}>
          <BottomRow />
        </Card>
        </View>
       
      
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
    
    flex:5,
    backgroundColor: '#005eff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: 'white'
  },
  space: {
    flex:0,
    fontSize: 40,
    alignItems: 'center',
    backgroundColor: '#005eff',

  },
  title: {
    
    flex:0,
    backgroundColor: '#005eff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    
  },
});
