import React, {Fragment, useState} from 'react';
import {Image, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import AppBarMain from '../../components/AppBarMain';

const WriterScreen = ({navigation, route}) => {
  return (
    <Fragment>
      <AppBarMain whilePress={() => navigation.navigate('LoginScreen')} />
      <SafeAreaView
        style={{
          flex: 1,
          marginLeft: 20,
          marginRight: 20,
          marginTop: 10,
        }}>
        <Image
          source={require('../../assets/7f330f1.png')} //Change your icon image here
          style={{height: 150, width: 150}}
        />
        <TouchableOpacity
          style={{
            marginTop: 50,
            borderRadius: 10,
            width: '100%',
            padding: 5,
            borderColor: 'blue',
            borderWidth: 5,
          }}>
          <Text style={{fontWeight: '900'}}>Autor: Leanne Graham</Text>
          <Text style={{fontWeight: '900', marginTop: 20}}>
            {route.params.item.company}
          </Text>
          <Text style={{fontWeight: '900', marginTop: 20, marginBottom: 20}}>
            {route.params.item.title}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Fragment>
  );
};

export default WriterScreen;
