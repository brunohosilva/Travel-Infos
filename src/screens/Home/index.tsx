import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigateProps } from 'src/routes/types';
import { Card } from '../../components/card';
import { Font30, SafeArea, Container } from './styles';

export const Home = () => {
  return (
    <SafeArea>
      <Container>
        <Font30>{`Procure seu\nlugar favorito`}</Font30>
        <Card />
      </Container>
    </SafeArea>
  );
};
