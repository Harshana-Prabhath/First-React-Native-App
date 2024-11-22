import { StyleSheet } from 'react-native';

const FormComponentStyles = StyleSheet.create({
  wrapperView: {
    backgroundColor: '#cfd3d6',
    padding: 10,
    gap: 15,
    alignItems: 'center',
  },
  emailInput: {
    borderWidth: 3,
    borderRadius: 10,
    fontSize: 17,
    width: '100%',
  },
  submitButtonTouch: {
    backgroundColor: 'green',
    width: 300,
    padding: 7,
  },
  submitText: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
  },
  inputBoxInvalid: { borderColor: 'red' },
  inputBoxValid: { borderColor: 'green' },
});
export default FormComponentStyles;
