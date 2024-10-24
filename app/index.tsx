import { View, StyleSheet, FlatList } from 'react-native';
import {
  Button,
  Dialog,
  FAB,
  PaperProvider,
  Portal,
  Text,
} from 'react-native-paper';
import TodoItem from '@/components/TodoItem';
import Colors from '@/constants/Colors';
import { useEffect, useState } from 'react';
import AddTodoDialog from '@/components/AddTodoDialog';
import { useAppDispatch, useAppSelector } from '@/hooks/StoreHooks';
import { useUserTodos } from '@/store/selectors/todos-selector';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Page = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const getAllTodos = useAppSelector(useUserTodos);

  useEffect(() => {
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (error, stores) => {
        stores?.map((result, i, store) => {
          console.log({ [store[i][0]]: store[i][1] });
          return true;
        });
      });
    });
  }, []);

  return (
    <>
      <View style={styles.container}>
        <AddTodoDialog visible={visible} hideDialog={hideDialog} />
        <FlatList
          style={{ marginTop: 24 }}
          data={getAllTodos}
          renderItem={({ item }) => {
            return (
              <TodoItem
                id={item.id}
                title={item.title}
                isCompleted={item.isCompleted}
              />
            );
          }}
        />
        <FAB
          icon='plus'
          color='white'
          style={styles.fab}
          onPress={() => showDialog()}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGray,
  },
  fab: {
    position: 'absolute',
    right: 30,
    bottom: 70,
    backgroundColor: Colors.primary,
  },
});
export default Page;
