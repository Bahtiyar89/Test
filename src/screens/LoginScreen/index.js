import React, {Fragment, useContext, useState} from 'react';
import {
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  View,
} from 'react-native';
import TextSvg from '../../assets/TextSvg';
import AuthContext from '../../context/auth/AuthContext';

const LoginScreen = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const authContext = useContext(AuthContext);
  const {signin} = authContext;
  return (
    <Fragment>
      <ImageBackground
        source={require('../../assets/blank.jpg')}
        resizeMode="cover"
        style={{
          width: windowWidth,
          height: windowHeight,
          position: 'absolute',
          flex: 1,
          justifyContent: 'center',
        }}
      />

      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextSvg style={{marginTop: 99}} />

        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <TouchableOpacity
            onPress={() => signin()}
            style={{
              marginTop: 50,
              borderRadius: 13,
              width: '100%',
              padding: 5,
              backgroundColor: '#32A7E2',
              width: 335,
              height: 55,
              marginLeft: 20,
              marginRight: 20,
            }}>
            <Text
              style={{
                fontWeight: '500',
                color: '#FFFFFF',
                padding: 10,
                justifyContent: 'center',
                fontSize: 18,
                textAlign: 'center',
              }}>
              Войти
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default LoginScreen;
