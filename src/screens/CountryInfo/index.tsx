import React from 'react';
import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';

export const CountryInfo = ({ route }: any) => {
  const { description, image, name } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Image
          source={image}
          style={{ width: '100%', height: undefined, aspectRatio: 1 }}
          resizeMode='contain'
        />
      </View>
      <Text
        style={{
          fontSize: 40,
          fontFamily: 'Kailasa',
          textAlign: 'center',
          marginBottom: 30,
          fontWeight: 'bold',
        }}
      >
        Informações
      </Text>
      <ScrollView>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 20, fontFamily: 'Kailasa' }}>
            {description}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
