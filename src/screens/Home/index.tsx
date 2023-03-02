import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigateProps } from 'src/routes/types';

export const Home = () => {
  const navigation = useNavigation<NavigateProps>();

  const handleNavigate = () => navigation.navigate('Login');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={handleNavigate}>
        <Text>Home 1</Text>
      </TouchableOpacity>
    </View>
  );
};
