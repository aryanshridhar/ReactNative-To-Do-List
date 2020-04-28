import React, { Component } from 'react';
import { StyleSheet , View ,Text} from 'react-native'
import AddItem from './AddItem'
import { SwipeListView} from 'react-native-swipe-list-view';
import { Button  } from 'react-native-paper';
import ModifyItem from './ModifyItem'

class List extends Component{

    state = {
        visiblemodify : false,
        value : '',
    }

    cancelhandle = () =>
    {
        this.setState({visiblemodify : false});
    }

    modifypress = (new_value) =>
    {
        for(let i = 0;i<this.props.list.length ; i++)
        {
            if(this.props.list[i].value === this.state.value)
            {
                this.props.list[i].value = new_value;
            }
        }
        this.setState({visiblemodify : false});
    }


    render()
    {
        return(
            <React.Fragment>
            <AddItem handleaddpress = {this.props.handleaddpress}/>
            <View style = {styles.pending}>
                <Text>Pending {this.props.removeduplicate(this.props.list).length} Tasks : </Text>
            </View>
            <View>
                <SwipeListView
                    data={this.props.removeduplicate(this.props.list)}
                    renderItem={ (data) => (
                        <View style={styles.rowFront}>
                            <Text>{data.item.value}</Text>
                        </View>
                    )}
                    renderHiddenItem={ (data) => (
                        <View style={styles.rowBack}>
                            <Button mode="outlined" style = {styles.btn} onPress={this.props.handlelistpress.bind(this, data.item.key)}>
                                Delete
                            </Button>
                            <Button mode="outlined" style = {styles.btn} onPress={
                                () => {
                                this.state.value = data.item.value
                                this.setState({value : data.item.value})
                                this.setState({visiblemodify : true})
                            }}>
                                Modify
                            </Button>
                        </View>
                    )}
                    leftOpenValue={100}
                    rightOpenValue = {-100}
                    />
                <ModifyItem
                visible = {this.state.visiblemodify} 
                value = {this.state.value}
                cancelhandle = {this.cancelhandle}
                modifypress = {this.modifypress}
                />
            </View>
            </React.Fragment>
        )
    }
}

export default List;

const styles = StyleSheet.create({
    pending : {
        marginTop : 10,
        marginBottom : 5,
    },
    hidden : {
        flexDirection : "row",
        justifyContent : "flex-start",
        alignItems : "center"
    },
    rowBack: {
        padding : 10,
        marginVertical : 5,
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
        borderRadius : 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
    },
    rowFront: {
        marginVertical : 5,
        borderColor : "#6200EE",
        borderWidth : 2,
        borderRadius : 10,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        height: 50,
    },
    btn:{
        margin : -10,
    }
  })
  