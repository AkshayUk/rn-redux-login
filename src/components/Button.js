import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Button = props => {
  return (
    <TouchableOpacity style={styles.loginButton} onPress={() => props.login()}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    padding: 18,
    width: wp('90%'),
    backgroundColor: '#466bcf',
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 14,
  },
  buttonText: {
    fontSize: hp('2%'),
    color: '#fff',
  },
});

export default Button;
