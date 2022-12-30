import React, {Fragment} from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';

const OtherScreen = ({navigation}) => {
  return (
    <Fragment>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 20,
          marginRight: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>Go back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Fragment>
  );
};

export default OtherScreen;
