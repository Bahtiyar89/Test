import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = () => {
  return <TextInput style={styles.input} placeholder="TEXT FIELD FORM" />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#ffffff',
  },
});

export default Input;
