import React, {Fragment, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const SelectedIndexOne = () => {
  return (
    <Fragment>
      <TouchableOpacity
        onPress={() => navigation.navigate('WriterScreen', {item: 'second'})}
        style={{
          marginTop: 10,
          borderRadius: 10,
          width: '100%',
          padding: 5,
          borderColor: 'blue',
          borderWidth: 5,
        }}>
        <Text style={{fontWeight: '900'}}>{'second.name'}</Text>
        <Text style={{fontWeight: '900', marginTop: 20}}>
          {'second.company'}
        </Text>
        <Text style={{fontWeight: '900', marginTop: 20, marginBottom: 20}}>
          {'second.title'}
        </Text>
      </TouchableOpacity>
    </Fragment>
  );
};

export default SelectedIndexOne;
