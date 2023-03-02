import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

export type NavigateProps = StackNavigationProp<RootStackParamList>;
