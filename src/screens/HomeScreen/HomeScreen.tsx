/* eslint-disable react-hooks/exhaustive-deps */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import Counter from '../../features/counter/Counter';
import {getSlides} from '../../slices/productSlice';
// import useDelayedInput from '../../hooks';
import {useDelayedInput, useAppSelector} from '../../hooks';

const HomeScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const productReducer = useAppSelector(state => state.product);

  const [keyword, setKeyword] = useState('');
  const {delayKeyword} = useDelayedInput(keyword, 2000);

  useEffect(() => {
    console.log(keyword);
    // cityApi.getAll().then(res => {
    //   console.log('re1s', res);
    // });
  }, [delayKeyword]);
  useEffect(() => {
    dispatch(getSlides());
  }, []);
  console.log('xxx state1', productReducer.isLoading);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonNav}
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}>
        <Text>Go to Jane's profile</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="somethings"
        onChangeText={text => setKeyword(text)}
      />
      <Counter />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonNav: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: 'aqua',
  },
});
