import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  CountryInfo: undefined;
};

export type NavigateProps = StackNavigationProp<RootStackParamList>;
