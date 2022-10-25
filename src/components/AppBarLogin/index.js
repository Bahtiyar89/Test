import React, {Fragment} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import LogoSvg from '../../assets/LogoSvg';
import styles from './styles';

const AppBarLogin = () => {
  return (
    <View style={styles.container}>
      <LogoSvg />
      <Text style={styles.text}>Каналсервис</Text>
    </View>
  );
};

export default AppBarLogin;
