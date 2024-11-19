import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { textInputStyles } from './TextInputComponentStyles';

const UserInput = () => {
  const [userText, setUserText] = useState('');

  return (
    <View style={textInputStyles.viewStyles}>
      <TextInput
        value={userText}
        style={textInputStyles.inputStyles}
        onChangeText={setUserText}
        keyboardType="number-pad"
        placeholder="phone number here"
        secureTextEntry={true}
      />
    </View>
  );
};

export default UserInput;
