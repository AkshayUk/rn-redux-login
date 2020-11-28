import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  View,
  ScrollView,
} from 'react-native';
import * as authAction from '../store/action/AuthAction';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button, Input} from '../components';
import Toast from 'react-native-toast-message';

const Login = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleInput = name => {
    return text => {
      setState({
        ...state,
        [name]: text,
      });
    };
  };

  const loginHandler = () => {
    let action;
    action = authAction.login(state.email, state.password, showMessage);
    dispatch(action);
  };

  const showMessage = (type, text) => {
    Toast.show({
      type: type,
      text1: text,
      visibilityTime: 4000,
      autoHide: true,
      bottomOffset: 40,
      position: 'bottom',
    });
  };

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <SafeAreaView style={styles.container}>
        <Image source={require('../assets/logo.jpg')} style={styles.logo} />
        <Text style={styles.signInText}>Sign In</Text>
        <Input
          name="email"
          label="Email"
          placeholder="example: john@mail.com"
          typing={handleInput}
        />
        <Input
          name="password"
          label="Password"
          placeholder="******"
          typing={handleInput}
          secure={true}
        />
        <Button text="Sign In" login={loginHandler} />
        <View style={{marginTop: 20}}>
          <Text>
            New User?
            <Text style={{color: '#466bcf'}}> Create an account.</Text>
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    height: hp('100%'),
  },
  signInText: {
    fontSize: hp('4%'),
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    margin: 20,
  },
  logo: {
    width: wp('100%'),
    height: hp('40%'),
  },
});

export default Login;
