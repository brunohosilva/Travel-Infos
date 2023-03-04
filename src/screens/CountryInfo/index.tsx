import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export const CountryInfo = ({ route }: any) => {
  return (
    <SafeAreaView>
      <View>
        <Text>{route.params.description}</Text>
      </View>
    </SafeAreaView>
  );
};
