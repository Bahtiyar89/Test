import React, {Fragment} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import LogoSvg from '../../assets/LogoSvg';
import LogoutSvg from '../../assets/LogoutSvg';
import styles from './styles';

const AppBarMain = ({whilePress}) => {
  const press = () => {
    whilePress();
  };
  return (
    <View style={styles.container}>
      <LogoSvg />
      <TouchableOpacity onPress={press}>
        <LogoutSvg />
      </TouchableOpacity>
    </View>
  );
};

export default AppBarMain;
