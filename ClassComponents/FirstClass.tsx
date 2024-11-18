import React, { Component, ReactNode } from 'react';
import { Button, SafeAreaView, Text } from 'react-native';

type Props = {
  color: String;
};
type state = {
  color: String;
  prevPropsColor?: String;
};

class Car extends Component<Props, state> {
  constructor(props: Props) {
    super(props);
    this.state = { color: props.color };
  }
  componentDidMount(): void {
    setTimeout(() => {
      this.setState({ color: 'magenta' });
    }, 1000);
  }
  getSnapshotBeforeUpdate(prevProps: Readonly<Props>, prevState: Readonly<state>) {}

  changeColor = () => {
    this.setState({ color: 'orange' });
  };
  render(): ReactNode {
    return (
      <SafeAreaView>
        <Text>The color is {this.state.color}</Text>
        <Text id="div1" />
        <Text id="div2" />
        <Button title="change color to orange" onPress={this.changeColor} />
      </SafeAreaView>
    );
  }
}

export default Car;
