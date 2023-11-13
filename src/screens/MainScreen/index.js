import React, {Fragment} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import AppBarMain from '../../components/AppBarHeader';
import AppBarFooter from '../../components/AppBarFooter';
import Input from '../../components/Input';
import Button from '../../components/Button';

const MainScreen = ({navigation}) => {
  return (
    <Fragment>
      <AppBarMain />
      <SafeAreaView style={styles.container}>
        <Text style={{paddingBottom: 10, fontSize: 20}}>Body</Text>
        <View
          style={{
            width: '100%',
            height: 30,
          }}>
          <Button backgr={'#1255CC'} text={'TITLE'} />
        </View>
        <Input />
        <Input />
        <Input />
        <Input />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Button backgr={'#1255CC'} text={'RESET'} />
          <View style={{width: 20}} />
          <Button backgr={'#1255CC'} text={'SUBMIT'} />
        </View>
      </SafeAreaView>
      <AppBarFooter />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4CCCC',
  },
});

export default MainScreen;
