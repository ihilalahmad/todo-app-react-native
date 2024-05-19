import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { defaultStyles } from '@/constants/Styles';
import { MaterialIcons } from '@expo/vector-icons';
import { ITodoItemProps } from '@/constants/Types';
import { useAppDispatch } from '@/hooks/StoreHooks';
import { completeTodo, deleteTodo } from '@/store/slices/todoSlice';
import Colors from '@/constants/Colors';

const TodoItem = (props: ITodoItemProps) => {
  const { id, title, isCompleted } = props;

  const dispatchTodo = useAppDispatch();

  const onDeleteTodo = (id: string) => {
    dispatchTodo(deleteTodo(id));
  };

  const onCompeleteTodo = (id: string) => {
    dispatchTodo(completeTodo(id));
  };

  return (
    <View
      style={[
        defaultStyles.block,
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
      ]}
    >
      <Text
        style={
          isCompleted
            ? defaultStyles.lineThrough
            : defaultStyles.buttonTextSmall
        }
      >
        {title}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => onCompeleteTodo(id)}>
          <MaterialIcons name='check' size={24} color={Colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onDeleteTodo(id)}
          style={{ marginStart: 8 }}
        >
          <MaterialIcons name='delete' size={24} color='tomato' />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});
export default TodoItem;
