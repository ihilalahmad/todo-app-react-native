import { Alert, View } from 'react-native';
import React, { useState } from 'react';
import {
  Dialog,
  FAB,
  PaperProvider,
  Portal,
  Button,
  Text,
  TextInput,
} from 'react-native-paper';
import { IAddTodoDialogProps } from '@/constants/Types';
import Colors from '@/constants/Colors';
import uuid from 'react-native-uuid';
import { useAppDispatch } from '@/hooks/StoreHooks';
import { addTodo } from '@/store/slices/todoSlice';

const AddTodoDialog = (props: IAddTodoDialogProps) => {
  const { visible, hideDialog } = props;
  const [todo, setTodo] = useState<string>('');

  const dispatchTodo = useAppDispatch();

  const onAddTodo = () => {
    if (todo.trim() === '') {
      Alert.alert('Todo cannot be empty');
      return;
    } else {
      const newTodo = {
        id: uuid.v4(),
        title: todo.trim(),
        isCompleted: false,
      };

      dispatchTodo(addTodo(newTodo));
      setTodo('');
    }
  };

  return (
    <Portal>
      <Dialog visible={visible} dismissable={false}>
        <Dialog.Title>Add new todo</Dialog.Title>
        <Dialog.Content>
          <TextInput
            placeholder='Enter todo'
            label={'New Todo'}
            value={todo}
            onChangeText={(text) => setTodo(text)}
            placeholderTextColor={Colors.gray}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            onPress={() => {
              onAddTodo();
              hideDialog();
            }}
          >
            Add
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default AddTodoDialog;
