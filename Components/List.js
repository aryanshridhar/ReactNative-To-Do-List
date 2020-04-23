import React, { Component } from 'react';
import { StyleSheet , View ,Text} from 'react-native'
import AddItem from './AddItem'
import { SwipeListView} from 'react-native-swipe-list-view';
import { Button  } from 'react-native-paper';
import ModifyItem from './ModifyItem'

class List extends Component{

    state = {
        visiblemodify : false,
        value : ''
    }
    render()
    {
        return(
            <React.Fragment>
            <AddItem handleaddpress = {this.props.handleaddpress}/>
            <View style = {styles.pending}>
                <Text>Pending Tasks : </Text>
            </View>
            <View>
                <SwipeListView
                    data={this.props.list}
                    renderItem={ (data) => (
                        <View style={styles.rowFront}>
                            <Text>{data.item.value}</Text>
                        </View>
                    )}
                    renderHiddenItem={ (data, rowMap) => (
                        <View style={styles.rowBack}>
                            <Button mode="outlined" style = {styles.btn} onPress={this.props.handlelistpress.bind(this, data.item.key)}>
                                Delete
                            </Button>
                            <ModifyItem visible = {this.state.visiblemodify} value = {this.state.value}/>
                            <Button mode="outlined" style = {styles.btn} onPress={() => {
                                this.setState({visiblemodify : true})
                                this.setState({value : data.item.value})
                            }}>
                                Modify
                            </Button>
                        </View>
                    )}
                leftOpenValue={100}
                rightOpenValue = {-100}
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
  