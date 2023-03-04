import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigateProps } from 'src/routes/types';

import {
  Container,
  ImageBackgoundContainer,
  ContainerContent,
  Flex1,
  LineTopRow,
  Font22,
  Font16,
  Font40Bold,
  Font20Bold,
  ContaineBottom,
  Row,
} from './styles';

type ICardProps = {
  image: any;
  name: string;
  description: string;
  capital: string;
  coin: string;
};

export const Card = ({
  description,
  image,
  name,
  capital,
  coin,
}: ICardProps) => {
  const navigation = useNavigation<NavigateProps>();

  const [isFav, setIsFav] = useState<Boolean>(false);

  const handleSetFavorite = () => setIsFav((prev) => !prev);

  const heartImage = () =>
    isFav
      ? require('../../assets/heart-on.png')
      : require('../../assets/heart-off.png');

  const handleNavigate = (data: string) =>
    navigation.navigate('CountryInfo', {
      description: data,
    });

  return (
    <Container>
      <ImageBackgoundContainer
        source={image}
        imageStyle={{ borderRadius: 30, opacity: 0.7 }}
      >
        <ContainerContent>
          <Flex1>
            <LineTopRow>
              <View>
                <Font20Bold>Moeda local</Font20Bold>
                <Font16>{coin}</Font16>
              </View>
              <TouchableOpacity onPress={handleSetFavorite}>
                <Image
                  source={heartImage()}
                  style={{ width: 25, height: 25 }}
                />
              </TouchableOpacity>
            </LineTopRow>
          </Flex1>
          <ContaineBottom>
            <View>
              <Font40Bold>{name}</Font40Bold>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={require('../../assets/location-pin.png')}
                  style={{ width: 20, height: 20 }}
                />
                <Font22>{capital}</Font22>
              </View>
            </View>
            <TouchableOpacity onPress={() => handleNavigate(description)}>
              <Image
                source={require('../../assets/arrow-right.png')}
                style={{ width: 50, height: 50 }}
              />
            </TouchableOpacity>
          </ContaineBottom>
        </ContainerContent>
      </ImageBackgoundContainer>
    </Container>
  );
};
