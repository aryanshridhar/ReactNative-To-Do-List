import React, { Component } from 'react';
import { Button  } from 'react-native-paper';
import { StyleSheet } from 'react-native'

class AddItem extends Component{
    render()
    {
        return(
            <Button mode="outlined" onPress = {this.props.handleaddpress}>
                Add New Task
            </Button>
        )
    }
}

export default AddItem