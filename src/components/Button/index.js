import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const Button = ({backgr, text}) => {
  return (
    <TouchableOpacity style={styles.button(backgr)}>
      <Text style={{textAlign: 'center', color: '#FFFFFF'}}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: color => ({
    flex: 1,
    borderWidth: 1,
    borderStyle: 'solid',
    height: 30,
    width: '100%',
    backgroundColor: color,
  }),
});

export default Button;
