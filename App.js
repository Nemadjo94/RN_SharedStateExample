import React from 'react';
import { Button, View, Text } from 'react-native';
import GLOBAL from './GLOBAL';//step 2

export default class App extends React.Component {
  constructor(props) {
    super(props);
    //step 5
    this.state = {
      tempValue: '',
    }
  }
  //step 4
  handleGLOBAL = () => {
    GLOBAL.TempState.state = 'C';
    const temp = GLOBAL.TempState.state.toString();
    this.setState({
      tempValue: temp,
    });
    console.log(GLOBAL.TempState.state + " " + this.state.tempValue);
  }

  render() {
    //step 3
    GLOBAL.TempState = this;
    return (
      <View>
        <Text>{this.state.tempValue}</Text>
        <Button 
          title={'Click me'}
          onPress={this.handleGLOBAL}
          color={'royalblue'}
        />
      </View>
    );
  }
}
