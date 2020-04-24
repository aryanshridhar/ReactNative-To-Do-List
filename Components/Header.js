import React , {Component} from "react"
import { Appbar } from 'react-native-paper';
import { StyleSheet } from "react-native";

class Header extends Component {

  render() {
    return (
      <Appbar.Header>
        <Appbar.Content
          title="To-do-List"
        />
      </Appbar.Header>
    );
  }
}

export default Header;
