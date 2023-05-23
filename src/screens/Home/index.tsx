import { Image } from 'react-native';
import { Plus } from 'phosphor-react-native';

import { Button } from 'components/Button';
import * as S from './styles';

const Logo = require('assets/logo/Logo.png');

export const Home = () => {
  return (
    <S.Container>
      <Image source={Logo} />
      <S.ScreenTitle>Home</S.ScreenTitle>


      <Button
        text='Nova refeição'
        icon={() => <Plus color='white' size={18} />}
      />

      <Button
        text='Nova refeição'
        icon={() => <Plus color='black' size={18} />}
        variant='secondary'
      />
    </S.Container>
  );
};