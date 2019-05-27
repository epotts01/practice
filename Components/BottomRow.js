import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class BottomRow extends React.Component {
  render() {
    return (
     
      
        <View style={{flex:1, backgroundColor: '#005eff'}} >
        
        <Text style={styles.paragraph}>
          BOTTOM ROW TESTER
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  paragraph: {   
    fontSize: 40,
    fontWeight: 'bold',
    justifyContent:'center',
    textAlign: 'center',
    color: 'red',
  },
  //yeeyee: {},
});