import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as authAction from '../store/action/AuthAction';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Toast from 'react-native-toast-message';

const Dashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.authReducer.users);

  useEffect(() => {
    loadDetails();
  }, []);

  const loadDetails = () => {
    dispatch(authAction.getDetails());
  };

  const logoutHandler = () => {
    dispatch(authAction.logout(showMessage));
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

  const RenderUser = ({item}) => {
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.cardMainText}>{item.name}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View>
            <Text>
              <Text style={{fontWeight: 'bold'}}>Email: </Text>
              {item.email}
            </Text>
            <Text>
              <Text style={{fontWeight: 'bold'}}>Phone: </Text>
              {item.phoneNo}
            </Text>
          </View>
          <View>
            <Text>
              <Text style={{fontWeight: 'bold'}}>Age: </Text>
              {item.age}
            </Text>
            <Text>
              <Text style={{fontWeight: 'bold'}}>Gender: </Text>
              {item.gender}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: wp('90%'),
          marginVertical: 15,
        }}>
        <Text style={styles.headingText}>All Users</Text>
        <TouchableOpacity onPress={logoutHandler}>
          <Image
            source={require('../assets/logout.png')}
            style={styles.logoutIcon}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={users}
        renderItem={RenderUser}
        keyExtractor={item => item.id}
        style={{marginBottom: 20}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headingText: {
    alignSelf: 'flex-start',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoutIcon: {
    transform: [{scale: 0.75}],
  },
  cardContainer: {
    width: wp('90%'),
    padding: 14,
    backgroundColor: '#f2f2f2',
    marginVertical: 10,
    borderRadius: 6,
  },
  cardMainText: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1b2f75',
    paddingLeft: 20,
  },
});

export default Dashboard;
