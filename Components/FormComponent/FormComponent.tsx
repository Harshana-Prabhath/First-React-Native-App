import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Switch } from 'react-native';
import FormComponentStyles from './FormComponentStyles';

const FormComponent = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [keepMeLoggedIn, setKeepMeLoggedIn] = useState<boolean>(true);

  const EmailValid = (emailVal: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailVal);
  };
  const PasswordValid = (passwordVal: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=\S)(.{8,})$/;
    return passwordRegex.test(passwordVal);
  };

  return (
    <View style={FormComponentStyles.wrapperView}>
      <TextInput
        style={[
          FormComponentStyles.emailInput,
          isEmailValid ? FormComponentStyles.inputBoxValid : FormComponentStyles.inputBoxInvalid,
        ]}
        placeholder="Enter your email here!"
        enterKeyHint="next"
        inputMode="email"
        keyboardType="email-address"
        value={email}
        onChange={({ nativeEvent: { text } }) => {
          setEmail(text);
          EmailValid(email) ? setIsEmailValid(true) : setIsEmailValid(false);
        }}
      />
      <TextInput
        style={[
          FormComponentStyles.emailInput,
          isPasswordValid ? FormComponentStyles.inputBoxValid : FormComponentStyles.inputBoxInvalid,
        ]}
        placeholder="Enter your password here!"
        enterKeyHint="done"
        inputMode="text"
        secureTextEntry={true}
        value={password}
        onChange={({ nativeEvent: { text } }) => {
          setPassword(text);
          PasswordValid(password) ? setIsPasswordValid(true) : setIsPasswordValid(false);
        }}
      />
      <View style={FormComponentStyles.switchWrapper}>
        <Switch
          value={keepMeLoggedIn}
          onValueChange={() => setKeepMeLoggedIn(prevState => !prevState)}
        />
        <Text>Keep me Logged in </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log(email, password, keepMeLoggedIn);
          setEmail('');
          setPassword('');
        }}
        style={FormComponentStyles.submitButtonTouch}
        disabled={!EmailValid(email) || !PasswordValid(password)}>
        <Text style={FormComponentStyles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormComponent;
