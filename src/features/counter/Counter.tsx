import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import styles from './styles';
import {increment, decrement, selectCount} from './counterSlice';

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(increment());
  };

  const handleSubtract = () => {
    dispatch(decrement());
  };

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button title="Add" onPress={handleAdd} />
      <Button title="Subtract" onPress={handleSubtract} />
    </View>
  );
};

export default Counter;
