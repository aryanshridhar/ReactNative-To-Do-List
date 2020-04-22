import React, { Component } from 'react';
import { TextInput , Button  } from 'react-native-paper';
import {StyleSheet , View , Text, FlatList} from 'react-native';
import Textinput from './Components/Textinput'

export default class App extends Component{

  render()
  {
    return(
      <View style = {{padding  :50}}>
        <Textinput/>
      </View>
    )
  }
}
