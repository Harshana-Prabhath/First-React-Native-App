import React, { Component, ReactNode } from 'react';
import { Button, SafeAreaView, Text } from 'react-native';

type Props = {
  color: String;
};
type state = {
  color: String;
};

class Car extends Component<Props, state> {
  constructor(props: Props) {
    super(props);
    this.state = { color: props.color };
  }
  changeColor = () => {
    this.setState({ color: 'orange' });
  };
  render(): ReactNode {
    return (
      <SafeAreaView>
        <Text>The color is {this.state.color}</Text>
        <Button title="change color to orange" onPress={this.changeColor} />
      </SafeAreaView>
    );
  }
}

export default Car;
