import React, { Component } from 'react';
import { TextInput , Button  } from 'react-native-paper';
import { StyleSheet , View, Modal} from 'react-native'
import List from './List'


class Textinput extends Component{

    state = {
        Value : "",
        list : [],
        visible: false,
    }
    
    handlepress = () =>
    {
    if (this.state.Value !== '')
    {
        this.setState({list : [...this.state.list , {key : Math.random().toString() , value : this.state.Value}]});
    }
    this.setState({Value : ''});
    this.setState({visible : false})
    }

    handlevalue = (e) =>
    {
    this.setState({Value : e});
    }

    handlelistpress = (key) =>
    {
        let new_arr = this.state.list.filter((item) => item.key !== key)
        this.setState({list: new_arr})
    }

    handleaddpress = () =>
    {
        this.setState({visible : true});
    }

    removeduplicate = (arraylist) =>
    {
        for(let i=0;i<arraylist.length ; i++)
        {
            let obj = arraylist[i];
            for(let j = i+1; j<arraylist.length; j++)
            {
                if(arraylist[j].value.toLowerCase().trim() === obj.value.toLowerCase().trim())
                {
                    arraylist.splice(j,1)
                }
            }
        }

        return arraylist
    }

    render()
    {
        return(
            <React.Fragment>
            <Modal visible = {this.state.visible} animationType ='slide'>
                <View style = {styles.mainview}>
                    <TextInput
                    autoFocus           
                    label='Add Item'
                    style = {styles.textinput}
                    mode = 'outlined'
                    onChangeText ={this.handlevalue}
                    value={this.state.Value}
                    />
                    <View style ={styles.btnview}>
                        <Button mode="outlined" style = {styles.btn} onPress={this.handlepress}>
                            Add
                        </Button>
                        <Button mode="outlined" style = {styles.btn} onPress = {() => {this.setState({visible : false})}}>
                            Cancel
                        </Button>
                    </View>
                </View>
            </Modal>
            <List 
            visible = {this.state.visible} 
            list = {this.removeduplicate(this.state.list)}
            removeduplicate = {this.removeduplicate} 
            handlelistpress = {this.handlelistpress}
            handleaddpress = {this.handleaddpress}/>
            </React.Fragment>
        )
    }
}

export default Textinput

const styles = StyleSheet.create({
    mainview: {
        flex : 1,
        flexDirection : "column",
        justifyContent : "center",
        padding : 30
    },
    textinput: {
        marginBottom : 10,
    },
    btn : {
        flex : 1,
    },
    btnview : {
        flexDirection : "row",
        justifyContent : "space-evenly",
        alignItems : "center",
    }
  })
  
  