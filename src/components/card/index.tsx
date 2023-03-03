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

export const Card = () => {
  const navigation = useNavigation<NavigateProps>();

  const [isFav, setIsFav] = useState<Boolean>(false);

  const handleSetFavorite = () => setIsFav((prev) => !prev);

  const heartImage = () =>
    isFav
      ? require('../../assets/heart-on.png')
      : require('../../assets/heart-off.png');

  const handleNavigate = () => navigation.navigate('CountryInfo');

  return (
    <Container>
      <ImageBackgoundContainer
        source={require('../../assets/exemplo.jpeg')}
        imageStyle={{ borderRadius: 30, opacity: 0.7 }}
      >
        <ContainerContent>
          <Flex1>
            <LineTopRow>
              <View>
                <Font20Bold>Moeda local</Font20Bold>
                <Font16>Baht tailandês</Font16>
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
              <Font40Bold>Tailandia</Font40Bold>
              <Font22>Bangkok</Font22>
            </View>
            <TouchableOpacity onPress={handleNavigate}>
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
