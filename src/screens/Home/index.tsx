import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { NavigateProps } from 'src/routes/types';
import { Card } from '../../components/card';
import { Font30, SafeArea, Container } from './styles';
import { countryData } from '../../helper/data';

export const Home = () => {
  return (
    <SafeArea>
      <Container>
        <View style={{ flex: 1 }}>
          <Font30>{`Procure seu\nlugar favorito`}</Font30>
          <FlatList
            data={countryData.data}
            renderItem={({ item }) => (
              <Card
                description={item.description}
                image={item.image}
                name={item.name}
                capital={item.capital}
                coin={item.coin}
              />
            )}
            // keyExtractor={(item) => item.id}
          />
        </View>
        {/* <Card /> */}
      </Container>
    </SafeArea>
  );
};
