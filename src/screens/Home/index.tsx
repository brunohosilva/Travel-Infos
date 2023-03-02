import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigateProps } from 'src/routes/types';

export const Home = () => {
  const navigation = useNavigation<NavigateProps>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
