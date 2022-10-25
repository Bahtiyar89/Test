import React, {Fragment, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AppBarLogin from '../../components/AppBarLogin';
import AppBarMain from '../../components/AppBarMain';

const MainScreen = ({navigation}) => {
  const first = {
    name: 'Autor: Leanne Graham',
    company: 'Company: Romaguera-Crona',
    title:
      'Title:sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  };
  const second = {
    name: 'Autor: Leanne Graham',
    company: 'Company: Romaguera-Crona',
    title:
      'Title:sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  };
  return (
    <Fragment>
      <AppBarMain />
      <SafeAreaView
        style={{
          flex: 1,
          marginLeft: 20,
          marginRight: 20,
          marginTop: 10,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('WriterScreen', {item: first})}
          style={{
            borderRadius: 10,
            width: '100%',
            padding: 5,
            borderColor: 'blue',
            borderWidth: 5,
          }}>
          <Text style={{fontWeight: '900'}}>{first.name}</Text>
          <Text style={{fontWeight: '900', marginTop: 20}}>
            {first.company}
          </Text>
          <Text style={{fontWeight: '900', marginTop: 20, marginBottom: 20}}>
            {first.title}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('WriterScreen', {item: second})}
          style={{
            marginTop: 10,
            borderRadius: 10,
            width: '100%',
            padding: 5,
            borderColor: 'blue',
            borderWidth: 5,
          }}>
          <Text style={{fontWeight: '900'}}>{second.name}</Text>
          <Text style={{fontWeight: '900', marginTop: 20}}>
            {second.company}
          </Text>
          <Text style={{fontWeight: '900', marginTop: 20, marginBottom: 20}}>
            {second.title}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Fragment>
  );
};

export default MainScreen;
