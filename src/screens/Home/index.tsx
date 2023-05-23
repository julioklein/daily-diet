import * as S from './styles';
import { Airplane } from 'phosphor-react-native';


export const Home = () => {
  return (
    <S.Container>
      <S.ScreenTitle>Home</S.ScreenTitle>
      <Airplane color='green' size={48} />
    </S.Container>
  );
};