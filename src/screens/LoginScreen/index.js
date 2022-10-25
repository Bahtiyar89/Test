import React, {Fragment, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AppBarLogin from '../../components/AppBarLogin';

const LoginScreen = ({navigation}) => {
  const [walletKeys, seTwalletKeys] = useState({
    sk: '',
    pk: '',
  });
  return (
    <Fragment>
      <AppBarLogin />
      <SafeAreaView
        style={{
          flex: 1,
          marginLeft: 20,
          marginRight: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            borderColor: 'blue',
            width: '95%',
            borderRadius: 5,
            borderWidth: 5,
          }}>
          <Text
            style={{
              marginTop: 40,
              paddingLeft: 50,
              fontSize: 24,
              fontWeight: '800',
            }}>
            Authorization
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 10,
              marginRight: 10,
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Login</Text>
            <TextInput
              style={[
                {
                  paddingLeft: 8,
                  fontSize: 13,
                  height: 45,

                  borderRadius: 10,
                  width: 230,
                  color: '#000',
                  backgroundColor: '#D9D9D9',
                },
              ]}
              onChangeText={val => seTwalletKeys({...walletKeys, sk: val})}
              value={walletKeys.sk}
              //secureTextEntry={passwordInputSecure}
              placeholderTextColor={'#000000'}
              placeholder={''}
            />
          </View>

          <View
            style={{
              marginTop: 20,
              marginBottom: 30,
              flexDirection: 'row',
              paddingLeft: 10,
              marginRight: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Password</Text>
            <TextInput
              style={[
                {
                  paddingLeft: 8,
                  fontSize: 13,
                  height: 45,

                  borderRadius: 10,
                  width: 230,
                  color: '#000',
                  backgroundColor: '#D9D9D9',
                },
              ]}
              onChangeText={val => seTwalletKeys({...walletKeys, sk: val})}
              value={walletKeys.sk}
              //secureTextEntry={passwordInputSecure}
              placeholderTextColor={'#000000'}
              placeholder={''}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
              marginBottom: 10,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('MainScreen')}
              style={{
                borderRadius: 10,
                width: '50%',
                padding: 5,
                backgroundColor: '#E4B062',
              }}>
              <Text style={{fontWeight: '900', textAlign: 'center'}}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default LoginScreen;
