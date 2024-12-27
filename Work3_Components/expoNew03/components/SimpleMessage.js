import React, { Component } from "react";
import { View, Text, Button } from "react-native";

import styles from "../styles/styles";

class SimpleMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "ยินดีต้อนรับ!",
    };
  }

  handlePress = () => {
    this.setState({ message: "ขอบคุณที่มาเยี่ยมชมแอปของเรา!" });
  };
  render() {
    return (
      <View style={styles.simpleMessageContainer}>
        <Text style={styles.simpleMessage}>{this.state.message}</Text>
        <Button title="เปลี่ยนข้อความ" onPress={this.handlePress} />
      </View>
    );
  }
}
export default SimpleMessage;
