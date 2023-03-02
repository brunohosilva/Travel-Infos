import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


export const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', }}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Home </Text>
      </TouchableOpacity>
    </View>
  );
}
