import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const AppBarHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HEADER</Text>
    </View>
  );
};

export default AppBarHeader;
