import React, { Component } from 'react';
import { TextInput , Button  } from 'react-native-paper';
import { StyleSheet , View, Modal} from 'react-native'



class ModifyItem extends Component{

    state = {
        new_value : '',
    }

    handlevalue =(e) =>
    {
        this.setState({new_value : e})
    }
    
    render()
    {
        return(
            <Modal visible = {this.props.visible} animationType = {'fade'}>
                <View style = {styles.mainview}>
                    <TextInput
                    autoFocus           
                    label='Modify'
                    style = {styles.textinput}
                    mode = 'outlined'
                    value = {this.state.new_value}
                    placeholder = {this.props.value}
                    onChangeText ={this.handlevalue}
                    />
                    <View style ={styles.btnview}>
                        <Button mode="outlined" style = {styles.btn} onPress={this.props.modifypress.bind(this , this.state.new_value)}>
                            Modify
                        </Button>
                        <Button mode="outlined" style = {styles.btn} onPress={this.props.cancelhandle}>
                            Cancel
                        </Button>
                    </View>
                </View>
            </Modal>
        )
    }
}

export default ModifyItem;

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
  
  