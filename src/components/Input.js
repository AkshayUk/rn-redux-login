import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Input = props => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{props.label}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={props.typing(props.name)}
        placeholder={props.placeholder}
        secureTextEntry={props.secure ? props.secure : false}
      />
      <View style={styles.textInputBorder}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
  },
  inputLabel: {
    fontSize: hp('2%'),
    opacity: 0.5,
  },
  textInput: {
    width: wp('90%'),
    backgroundColor: '#fff',
    alignItems: 'center',
    letterSpacing: 0,
  },
  textInputBorder: {
    height: 0.5,
    width: wp('90%'),
    backgroundColor: '#000',
  },
});

export default Input;
