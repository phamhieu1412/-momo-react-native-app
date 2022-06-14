import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import Counter from '../../features/counter/Counter';
import {getSlides} from '../../slices/productSlice';

const HomeScreen = ({navigation}: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSlides());
    // cityApi.getAll().then(res => {
    //   console.log('re1s', res);
    // });
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonNav}
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}>
        <Text>Go to Jane's profile</Text>
      </TouchableOpacity>
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
