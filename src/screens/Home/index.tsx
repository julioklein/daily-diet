import { Image } from 'react-native';
import * as S from './styles';
import { Airplane } from 'phosphor-react-native';

const Logo = require('assets/logo/Logo.png');

export const Home = () => {
  return (
    <S.Container>
      <Image source={Logo} />
      <S.ScreenTitle>Home</S.ScreenTitle>
      <Airplane color='green' size={48} />
    </S.Container>
  );
};