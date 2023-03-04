import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  CountryInfo: { description: string; image: any; name: string };
};

export type NavigateProps = StackNavigationProp<RootStackParamList>;
