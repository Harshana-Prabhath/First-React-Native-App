import React from 'react';
import { Alert, Text } from 'react-native';
import TextComponentStyleSheet from './Stylesheets/TextComponentStyles';

type Props = {
  TextName?: string;
};

const TextComponent = ({ TextName }: Props) => {
  return (
    <Text
      onPress={() => {
        Alert.alert('The text is clicked');
      }}
      style={TextComponentStyleSheet.nameText}>
      {TextName ? `${TextName}` : 'This is a custom text'}
    </Text>
  );
};

export default TextComponent;
