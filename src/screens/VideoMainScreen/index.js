import React, {Fragment, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  FlatList,
} from 'react-native';
import axios from 'axios';

const VideoMainScreen = ({navigation}) => {
  const [users, setUsers] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(function (response) {
        setPhotos(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log('photos::: ', photos);

  const renderImage = id => {
    return (
      <Image
        style={{
          alignSelf: 'flex-end',
          alignContent: 'flex-end',
          alignItems: 'flex-end',
          width: 50,
          height: 50,
        }}
        source={{
          uri: `${photos[id]?.thumbnailUrl}`,
        }}
      />
    );
  };

  return (
    <Fragment>
      <ScrollView
        style={{marginLeft: 20, marginRight: 20}}
        contentInsetAdjustmentBehavior="automatic">
        {users.map(user => (
          <View
            style={{
              marginTop: 40,
              flexDirection: 'row',
            }}>
            <TouchableOpacity style={{width: '70%'}}>
              <Text
                style={{
                  marginTop: 20,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  color: 'white',
                }}
                key={user.id}>
                {user.name}
              </Text>
            </TouchableOpacity>

            {renderImage(user.id)}
          </View>
        ))}
      </ScrollView>
    </Fragment>
  );
};

export default VideoMainScreen;
