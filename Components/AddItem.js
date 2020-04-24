import React, { Component } from 'react';
import { Button  } from 'react-native-paper';


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