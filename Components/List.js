import React, { Component } from 'react';
import { StyleSheet , View , FlatList , Text , TouchableOpacity , Modal} from 'react-native'
import AddItem from './AddItem'


class List extends Component{

    render()
    {
        return(
            <React.Fragment>
            <AddItem handleaddpress = {this.props.handleaddpress}/>
            <View style = {styles.pending}>
                <Text>Pending Tasks : </Text>
            </View>
            <View>
                <FlatList data = {this.props.list} renderItem = {itemdata => (
                    <TouchableOpacity activeOpacity = {0.8} onPress = {this.props.handlelistpress.bind(this , itemdata.item.key)}>
                    <View style = {styles.listitem}>
                        <Text style = {{fontSize : 17}}>{itemdata.item.value}</Text>
                    </View>
                    </TouchableOpacity>
                )}/>
            </View>
            </React.Fragment>
        )
    }
}

export default List;

const styles = StyleSheet.create({

    listitem : {
      padding :10,
      marginVertical : 10,
      borderColor : "#6200EE",
      borderRadius : 10,
      borderWidth : 2
    },
    pending : {
        marginTop : 10,
        marginBottom : 5,
        flexDirection : "row",
        justifyContent : "flex-start"
    }
  })
  