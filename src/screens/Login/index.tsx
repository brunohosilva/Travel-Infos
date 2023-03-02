import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const Login = () => {
  const navigation = useNavigation();

  const handleNavigate = () => navigation.navigate('Home');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={handleNavigate}>
        <Text>Login 1</Text>
      </TouchableOpacity>
    </View>
  );
};
