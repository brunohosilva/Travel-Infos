import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { NavigateProps } from 'src/routes/types';
import { Card } from '../../components/card';
import { SafeArea, Container } from './styles';
import { countryData, continentData } from '../../helper/data';

export const Home = () => {
  const [listCountries, setListCountries] = useState(countryData.data);

  const handleFilterContinent = (continent: string) => {
    const filter = countryData.data.filter(
      (country) => country.continent === continent,
    );

    setListCountries(filter);
  };

  const handleCleanFilter = () => setListCountries(countryData.data);

  return (
    <SafeArea>
      <Container>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ScrollView
              horizontal={true}
              contentContainerStyle={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {continentData.data.map((data) => (
                <TouchableOpacity
                  onPress={() => handleFilterContinent(data.continent)}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 15,
                    borderRadius: 20,
                    borderColor: 'black',
                    borderWidth: 1,
                    margin: 5,
                  }}
                >
                  <Text>{data.continent}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity onPress={handleCleanFilter}>
                <Image
                  source={require('../../assets/close.png')}
                  style={{ width: 25, height: 25 }}
                />
              </TouchableOpacity>
            </ScrollView>
          </View>
          <FlatList
            data={listCountries}
            renderItem={({ item }) => (
              <Card
                description={item.description}
                image={item.image}
                name={item.name}
                capital={item.capital}
                coin={item.coin}
              />
            )}
          />
        </View>
      </Container>
    </SafeArea>
  );
};
