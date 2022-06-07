import {Text} from 'react-native';
import React from 'react';

const ProfileScreen = ({route}: any) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default ProfileScreen;
