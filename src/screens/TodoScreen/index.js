import React, {Fragment, useContext, useState} from 'react';
import {
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import AuthContext from '../../context/auth/AuthContext';

const TodoScreen = ({navigation}) => {
  const authContext = useContext(AuthContext);
  const {signOut} = authContext;

  const [todoItem, setTodoItem] = useState({
    title: '',
    description: '',
    status: '',
    importance: '',
  });

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);

  const addTodo = () => {
    setLoading(true);
    if (
      todoItem.title.length != 0 &&
      todoItem.description.length != 0 &&
      todoItem.status.length != 0 &&
      todoItem.importance.length != 0 &&
      updateStatus
    ) {
      const newItems = [];
      console.log('ifffff');
      for (const key in tasks) {
        if (tasks[key].title === todoItem.title) {
          newItems[key] = todoItem;
        } else {
          newItems[key] = tasks[key];
        }
      }
      console.log('newItems: ', newItems);
      setTasks(newItems);
      setTodoItem({
        title: '',
        description: '',
        status: '',
        importance: '',
      });
    } else {
      console.log('elseee');
      const adding = tasks;
      adding.push(todoItem);
      setTasks(adding);
      setTodoItem({
        title: '',
        description: '',
        status: '',
        importance: '',
      });
    }
    setUpdateStatus(false);
    setLoading(false);
  };

  const deleteItem = item => {
    const updated = tasks.filter(t => t.title !== item.title);
    setTasks(updated);
  };

  const updateItem = item => {
    console.log('item:', item);
    tasks.map(t => {
      console.log('tt: ', t);
      if (t.title == item.title) {
        setUpdateStatus(true);
        setTodoItem(item);
      }
    });
  };

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
        {tasks.length != 0 && (
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 40,
            }}>
            Задачи:
          </Text>
        )}
        {tasks?.map((item, index) => (
          <View
            style={{
              marginBottom: 10,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                paddingLeft: 10,
                fontWeight: 'bold',
                color: 'white',
              }}
              key={index}>
              {item?.title}
            </Text>
            <Text
              style={{
                paddingLeft: 10,
                fontWeight: 'bold',
                color: 'white',
              }}
              key={index}>
              {item?.description}
            </Text>
            <Text
              style={{
                paddingLeft: 10,
                fontWeight: 'bold',
                color: 'white',
              }}
              key={index}>
              {item?.status}
            </Text>
            <Text
              style={{
                paddingLeft: 10,
                fontWeight: 'bold',
                color: 'white',
                paddingRight: 10,
              }}
              key={index}>
              {item?.importance}
            </Text>
            <TouchableOpacity
              onPress={() => deleteItem(item)}
              style={{
                flexDirection: 'row',
                borderColor: 'red',
                borderWidth: 1,
                borderRadius: 5,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Удалить</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => updateItem(item)}
              style={{
                marginLeft: 10,
                flexDirection: 'row',
                borderColor: 'orange',
                borderWidth: 1,
                borderRadius: 5,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                Редактировать
              </Text>
            </TouchableOpacity>
          </View>
        ))}

        <TextInput
          placeholderTextColor={'grey'}
          placeholder={'Заголовок'}
          mode="outlined"
          style={{
            color: 'white',
            fontSize: 16,
            height: 48,
            borderRadius: 8,
            width: '100%',
            paddingVertical: 12,
            paddingHorizontal: 16,
            borderColor: '#CED4D9',
            borderWidth: 2,
          }}
          onChangeText={val => setTodoItem({...todoItem, title: val})}
          value={todoItem.title}
        />
        <TextInput
          placeholderTextColor={'grey'}
          placeholder={'Описание'}
          mode="outlined"
          style={{
            fontSize: 16,
            height: 48,
            borderRadius: 8,
            width: '100%',
            paddingVertical: 12,
            paddingHorizontal: 16,
            borderColor: '#CED4D9',
            borderWidth: 2,
            color: 'white',
            marginTop: 10,
          }}
          onChangeText={val => setTodoItem({...todoItem, description: val})}
          value={todoItem.description}
        />
        <TextInput
          placeholderTextColor={'grey'}
          placeholder={'Cтатус'}
          mode="outlined"
          style={{
            fontSize: 16,
            height: 48,
            borderRadius: 8,
            width: '100%',
            paddingVertical: 12,
            paddingHorizontal: 16,
            borderColor: '#CED4D9',
            borderWidth: 2,
            color: 'white',
            marginTop: 10,
          }}
          onChangeText={val => setTodoItem({...todoItem, status: val})}
          value={todoItem.status}
        />
        <TextInput
          placeholderTextColor={'grey'}
          placeholder={'Приоритет'}
          mode="outlined"
          style={{
            fontSize: 16,
            height: 48,
            borderRadius: 8,
            width: '100%',
            paddingVertical: 12,
            paddingHorizontal: 16,
            borderColor: '#CED4D9',
            borderWidth: 2,
            color: 'white',
            marginTop: 10,
          }}
          onChangeText={val => setTodoItem({...todoItem, importance: val})}
          value={todoItem.importance}
        />
        <TouchableOpacity
          onPress={addTodo}
          style={{
            borderRadius: 10,
            height: 56,
            marginTop: 20,
            justifyContent: 'center',
            backgroundColor: 'black',
          }}>
          <Text style={{textAlign: 'center', padding: 16, color: 'white'}}>
            {'Добавить задание'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('OtherScreen')}
          style={{
            borderRadius: 10,
            height: 56,
            marginTop: 20,
            justifyContent: 'center',
            backgroundColor: 'black',
          }}>
          <Text style={{textAlign: 'center', padding: 16, color: 'white'}}>
            {'переход на другой экран'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={signOut}
          style={{
            borderRadius: 10,
            height: 56,
            marginTop: 20,
            justifyContent: 'center',
            backgroundColor: 'black',
          }}>
          <Text style={{textAlign: 'center', padding: 16, color: 'white'}}>
            {'Выйти'}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Fragment>
  );
};

export default TodoScreen;
